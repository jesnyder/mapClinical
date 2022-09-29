import datetime
import json
import math
import numpy as np
import os
import pandas as pd
import random
import re
import requests
import time

from pytrials.client import ClinicalTrials


from admin import reset_df
from admin import retrieve_df
from admin import retrieve_path
from admin import retrieve_json
from admin import save_json


def query_trials():
    """

    """

    time_begin = datetime.datetime.today()
    print('begin query_trials ' + str(time_begin))


    fields = ["NCTId", "Condition", "BriefTitle", "InterventionName"]

    for term in list(retrieve_df('search_terms')['terms']):

        print(term)


        ct = ClinicalTrials()

        search_expression = term.replace(' ', '+')


        # Get the NCTId, Condition and Brief title fields from 500 studies related to Coronavirus and Covid, in csv format.
        corona_fields = ct.get_study_fields(
            search_expr=search_expression,
            fields=fields,
            max_studies=1000,
            fmt="csv",
        )

        # Get 50 full studies related to Coronavirus and COVID in json format.
        corona_fields = ct.get_full_studies(search_expr=search_expression)


        # Get the count of studies related to Coronavirus and COVID.
        # ClinicalTrials limits API queries to 1000 records
        # Count of studies may be useful to build loops when you want to retrieve more than 1000 records

        #ct.get_study_count(search_expr="Coronavirus+COVID")

        # Read the csv data in Pandas

        print(corona_fields)




        #df = pd.DataFrame.from_records(corona_fields[1:], columns=corona_fields[0])
        file_dst = os.path.join(retrieve_path('trials_found'), term + '.json')
        save_json(corona_fields, file_dst)

        #df.to_csv(file_dst)
        #print(df)


def list_trials():
    """
    Objective
    Map clinical trials
    """


    time_begin = datetime.datetime.today()
    print('begin list_trials ' + str(time_begin))


    trials = []
    df_all = pd.DataFrame()

    src = retrieve_path('clinical_src')
    for file in os.listdir(src):

        df = retrieve_df(os.path.join(src, file))

        df_all = df_all.append(df)
        df_all = df_all.drop_duplicates(subset = "URL", keep='first')
        df_all = reset_df(df_all.sort_values(by='Enrollment', ascending=False))
        df_all.to_csv(retrieve_path('trials_all'))


    items = list(df_all['NCT Number'])
    for item in items:

        i = items.index(item)

        trial = {}

        for col in df_all.columns:

            if col == 'Rank': continue

            value = df_all.at[i, col]

            if 'Condition' in col:
                value = scrub_interventions(value)

            trial[col] = str(value)

            if trial in trials: continue
            trials.append(trial)

        trials_dict = {}
        trials_dict['item_count'] = len(trials)
        trials_dict['trials'] = trials
        save_json(trials_dict, 'trials')

    list_locations()

    time_end = datetime.datetime.today()
    print('completed list_trials ' + str(time_end))


def scrub_interventions(value):
    """
    return value
    """

    #print('value = ')
    #print(value)

    value = str(value)
    if value == 'nan': return(value)
    if pd.isna(value) == True: return(value)

    if 'Knee Osteoarthritis' == value:
        #print('value = ')
        #print(value)
        value = str('Osteoarthritis, Knee')

    if 'Covid19' == value:
        #print('value = ')
        #print(value)
        value = str('COVID-19')

    if 'Acute Myocardial Infarction' == value:
        #print('value = ')
        #print(value)
        value = str('Myocardial Infarction')

    return(value)




def list_locations():
    """
    create list of locations
    locations.csv
    """

    locations = []

    trials = retrieve_json('trials')['trials']

    for trial in trials:

        location = trial['Locations']

        location_list = list_location(location)

        for item in location_list:

            if item in locations: continue
            locations.append(item)

        df = pd.DataFrame()
        df['location'] = locations
        df = reset_df(df.sort_values(by='location'))
        df.to_csv(retrieve_path('location'))


def list_location(location):
    """
    return a list of locations
    """

    location_list = []

    if '|' in location:

        loc = location.split('|')

        for item in loc:
            if item in location_list: continue
            location_list.append(item)

    else:
        location_list = [location]

    return(location_list)
