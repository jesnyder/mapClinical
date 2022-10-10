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
from admin import save_value


def build_dataset():
    """
    list clinical trials using an MSC intervention
    """

    tasks = [0,1,2,3]

    # scrape clinicalTrials.gov database
    if 0 in tasks: query_trials()

    # list unique NCTIDs
    if 1 in tasks: list_NCTId()

    # compiles into a single json file
    if 2 in tasks: coregister_fields()

    # format_search fields
    if 3 in tasks: format_data()


def query_trials():
    """
    use pytrials to retrieve all trial metadata from clinicaltrials.gov
    use search terms saved in user_provided>admin folder
    use field term also saved in user_provided>admin folder
    """

    time_begin = datetime.datetime.today()
    print('begin query_trials ' + str(time_begin))


    field_terms = list(retrieve_json('search_fields')['StudyFields']['Fields'])
    fields =  field_terms

    for term in list(retrieve_df('search_terms')['terms']):

        print('term = ' + term)

        max_len = 15
        i = max_len
        while i < len(fields):


            filename =  term  + ' ' + str(i).zfill(3) + '.json'
            fol_dst = os.path.join(retrieve_path('trials_found'), term)
            # create the folder, if it doesnt exist
            if os.path.exists(fol_dst) == False: os.mkdir(fol_dst)
            if filename in os.listdir(fol_dst):
                i = i + max_len
                continue

            field_trun = fields[i-max_len:i]

            if 'NCTId' not in field_trun:
                field_trun.append('NCTId')

            ct = ClinicalTrials()

            search_expression = term.replace(' ', '+')

            #results = ct.get_full_studies(search_expr=search_expression)

            # Get the NCTId, Condition and Brief title fields from 500 studies related to Coronavirus and Covid, in csv format.
            results = ct.get_study_fields(
                search_expr=search_expression,
                fields=field_trun,
                max_studies=1000,
                fmt="json",
            )

            count = results['StudyFieldsResponse']['NStudiesReturned']
            print('count = ' + str(count))

            filename =  term  + ' ' + str(i).zfill(3) + '.json'
            fol_dst = os.path.join(retrieve_path('trials_found'), term)
            # create the folder, if it doesnt exist
            if os.path.exists(fol_dst) == False: os.mkdir(fol_dst)
            fil_dst = os.path.join(fol_dst, filename)
            save_json(results, fil_dst )

            i = i + max_len


def list_NCTId():
    """
    list all unique nctids across all search queries
    """

    nctids = []
    src = retrieve_path('trials_found')
    for fol in os.listdir(src):

        fol_src = os.path.join(src, fol)
        #print('fol_src =' + str(fol_src))

        for fil in os.listdir(fol_src):
            fil_src = os.path.join(fol_src, fil)
            #print('fil_src =' + str(fil_src))

            results = retrieve_json(fil_src)

            if 'StudyFieldsResponse' not in results.keys():
                continue
            if 'StudyFields' not in results['StudyFieldsResponse'].keys():
                continue

            for record in results['StudyFieldsResponse']['StudyFields']:

                #print('record.keys()')
                #print(record.keys())

                num = str(record['NCTId'][0])

                if num in nctids: continue

                nctids.append(num)

                df = pd.DataFrame()
                df['nctids'] = nctids
                df = reset_df(df.sort_values(by='nctids'))
                df.to_csv(retrieve_path('nctids'))

                #print('len(nctids) = ' + str(len(nctids)))
                save_value('NCTIds found in scraped', len(nctids))


def coregister_fields():
    """

    """

    trials = []

    nctids = list(retrieve_df('nctids')['nctids'])

    for nctid in nctids:

        trial_dict = {}
        trial_dict['nctid'] = nctid
        print(nctid)

        src = retrieve_path('trials_found')
        for fol in os.listdir(src):

            fol_src = os.path.join(src, fol)
            #print(fol_src)

            for fil in os.listdir(fol_src):
                fil_src = os.path.join(fol_src, fil)
                #print(fil_src)

                results = retrieve_json(fil_src)

                if 'StudyFieldsResponse' not in results.keys():
                    continue

                if 'StudyFields' not in results['StudyFieldsResponse'].keys():
                    continue

                for record in results['StudyFieldsResponse']['StudyFields']:

                    num = str(record['NCTId'][0])

                    if num != nctid: continue

                    for key in record.keys():

                        if key in trial_dict.keys(): continue

                        trial_dict[key] = record[key]

        trials.append(trial_dict)
        trials_dict = {}
        trials_dict['count'] = len(trials)
        trials_dict['trials'] = trials
        save_json(trials_dict, 'scraped_trials')


def format_data():
    """
    format to fit with downloaded data
    """


    df_all = pd.DataFrame()


    trials = retrieve_json('scraped_trials')
    for trial in trials['trials']:


        df = pd.DataFrame()
        df['NCT Number'] = [str(trial['nctid'])]

        if 'NCT03339973' in str(trial['nctid']): continue
        if 'NCT05165628' in str(trial['nctid']): continue

        url = str('https://ClinicalTrials.gov/show/') + str(trial['nctid'])
        #print(url)

        try:
            try:
                df['Title'] = [str(trial['BriefTitle'][0])]
            except:
                df['Title'] = [str(trial['OfficialTitle'][0])]
        except:

            if 'NCT03339973' in str(trial['nctid']):
                df['Title'] = ['Allogeneic ABCB5-positive Stem Cells for Treatment of PAOD']


        df['Status'] = [' '.join(trial['OverallStatus'])]
        #print('Status = ')
        #print(df['Status'] )
        #if df['Status'] == []: df['Status'] = [' '.join(trial['LastKnownStatus'])]

        df['Conditions'] = [' '.join(trial['Condition'])]

        df['Interventions'] = [ list_intervention(trial) ]

        df['Sponsor/Collaborators'] = [' '.join(trial['LeadSponsorName'])]

        df['Locations'] = [build_address(trial)]

        df['Outcome Measures'] = [build_outcome(trial)]

        df['Gender'] =  [' '.join(trial['Gender'])]

        df['Age'] = [build_age(trial)]

        df['Phases'] = [' '.join(trial['Phase'])]

        df['Enrollment'] = [' '.join(trial['EnrollmentCount'])]

        df['Funded Bys'] = [str(trial['LeadSponsorClass'][0])]

        try:
            df['Study Type'] = [str(trial['StudyType'][0])]
        except:
            df['Study Type'] = [str(trial['OrgClass'][0])]

        df['Study Designs'] =  [' '] #str(trial['StudyDesigns'][0])

        df['Other IDs'] = [' '] #str(trial['OtherIDs'][0])

        df['Start Date'] = [' '.join(trial['StartDate'])]

        df['Primary Completion Date'] = [' '.join(trial['PrimaryCompletionDate'])]

        df['Completion Date'] = [' '.join(trial['CompletionDate'])]

        df['First Posted'] = [str(trial['StudyFirstSubmitDate'][0])]

        df['Results First Posted'] = [' '.join(trial['ResultsFirstPostDate'])]

        df['Last Update Posted'] = [' '.join(trial['LastUpdatePostDate'])]

        df['Study Documents'] = [str(trial['OrgClass'][0])]

        df['URL'] = [str('https://ClinicalTrials.gov/show/') + str(trial['nctid'])]

        df['desc'] = [ build_desc(trial)]

        df['Brief Summary'] = [str(' '.join(trial['BriefSummary']))]

        df['Brief Title'] = [' '.join(trial['BriefTitle'])]

        df['Official Title'] = [' '.join(trial['OfficialTitle'])]

        print(url)
        #assert 'mesenchymal' in list_intervention(trial).lower() or 'mesenchymal' in desc.lower()

        #print('df = ')
        #print(df)

        df_all = df_all.append(df)

        df_all = reset_df(df_all.sort_values(by='NCT Number'))
        #print('df_all = ')
        #print(df_all)
        df_all.to_csv(retrieve_path('scraped_trials_df'))


def list_intervention(trial):
    """

    """

    inter = ''
    for key in trial.keys():

        if 'Intervention' not in str(key): continue

        term = ' '.join(trial[key])

        if inter == '': inter = str(term)
        else: inter = str(inter + ' ' + term)

    inter = ' '.join(inter.splitlines())
    return(inter)


def build_desc(trial):
    """
    return description
    """

    desc = ''
    desc = desc + ' ' + ' '.join(trial['BriefTitle'])
    desc = desc + ' ' +  ' '.join(trial['OfficialTitle'])
    #desc = desc + str(' '.join(trial['BriefSummary']))
    desc = desc + ' ' +   list_intervention(trial)
    #desc = str(desc + ' ' +  build_outcome(trial))
    desc = desc.lower()
    desc = ' '.join(desc.splitlines())

    return(desc)


def build_outcome(trial):
    """
    return all outcome fields compiled in a string with
    json keys included
    """


    outcome = ''
    for key in trial.keys():

        if 'Outcome' not in str(key): continue


        if outcome == '': outcome = key + ': '
        else: outcome = outcome + ' ' + key + ': '

        term = ' '.join(trial[key])
        outcome = str(outcome + ' ' + term + ' | ')

    outcome = ' '.join(outcome.splitlines())
    return(outcome)


def build_address(trial):
    """
    return list of locations
    """

    facilities = trial['LocationFacility']
    cities = trial['LocationCity']
    states = trial['LocationState']
    zips = trial['LocationZip']
    countries = trial['LocationCountry']

    #print(facilities)
    #print(cities)
    #print(states)

    assert len(cities) == len(countries)

    locations = ''
    for i in range(len(cities)):

        if locations != '': locations = locations + ' | '

        try:
            locations = locations + str(facilities[i]) + ', '
        except:
            locations = locations

        locations = locations + str(cities[i]) + ', '

        try:
            locations = locations + str(states[i]) + ', '
        except:
            locations = locations

        locations = locations + str(countries[i])

    return(locations)


def build_age(trial):
    """
    return age
    """

    minAge = trial['MinimumAge']
    maxAge = trial['MaximumAge']

    if 'Years' in minAge and 'Years' in maxAge:
        minAge = minAge.replace('Years', '')

    if trial['MaximumAge'] == [] and len(minAge) > 0:
        age = 'Over ' + str(minAge[0])

    elif len(minAge) > 0 and len(maxAge) > 0:
        age = str(minAge[0]) + ' - ' + str(maxAge[0])

    else:
        age = str(' '.join(minAge) + ' - ' + ' '.join(maxAge))
    return(age)
