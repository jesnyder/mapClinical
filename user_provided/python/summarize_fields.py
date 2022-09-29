from bs4 import BeautifulSoup
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
import urllib.request

from admin import print_progress
from admin import reset_df
from admin import retrieve_df
from admin import retrieve_json
from admin import retrieve_path
from admin import  retrieve_ref
from admin import save_json

from list_trials import list_location
from write_geojson import calculate_color
from write_geojson import find_date


def summarize_fields():
    """

    """

    # retrieve json
    trials = retrieve_json('trials')['trials']
    keys = trials[0].keys()

    for key in keys:

        values = []
        enrolled = []
        for trial in trials:

            value = trial[key]
            values.append(value)
            enrolled.append(int(trial['Enrollment']))

        df_temp = pd.DataFrame()
        df_temp['term'] = values
        df_temp['enrollment'] = enrolled


        terms, counts, enrolled = [], [], []
        for value in list(df_temp['term']):

            if value in terms: continue

            df_value = df_temp[df_temp['term'] == value]

            terms.append(value)

            count = list(df_temp['term']).count(value)
            counts.append(count)

            enroll = sum(list(df_value['enrollment']))
            enrolled.append(enroll)


        df = pd.DataFrame()
        df[key] = terms
        df['count'] = counts
        df['enrolled'] = enrolled
        key_name = key.replace('/','_')
        print('key_name = ' + str(key_name))
        file_dst = os.path.join(retrieve_path('summary'), key_name + '.csv')
        df = reset_df(df.sort_values(by='count', ascending=False))
        df.to_csv(file_dst)

    write_table_data()


def write_table_data():
    """
    create .js
    """

    fol_src = retrieve_path('summary')
    for file in os.listdir(fol_src):

        filename = file.split('.')[0]

        print('filename = ' + filename)

        fil_src = os.path.join(fol_src, file)
        df = retrieve_df(fil_src)

        df = df.dropna()

        df = df[df['count'] > 0]
        if len(list(df['count'])) < 0: continue
        df = reset_df(df)

        print('df = ')
        print(df)

        lines = []
        for i in range(len(list(df['count']))):

            line = {}
            for col in df.columns:

                #print('col = ' + col)
                #print('i = ' + str(i))
                value = df.at[i, col]
                #print('value = ' + str(value))
                line[col] = value

            #print('line = ')
            #print(line)
            lines.append(line)

        #print('lines = ')
        #print(lines)

        # save the group as js
        descriptor_line = 'var table' + str(filename) + ' = '
        dst_json = os.path.join(retrieve_path('tableData'), filename + '.js')
        print('dst_json = ' + str(dst_json))
        with open(dst_json, "w") as f:
            f.write(descriptor_line + '\n' + '[' + '\n')

            for line in lines:
                print(line)
                f.write(str(line) + ' , ' + '\n')
            #json.dump(lines, f, indent = 4)
            #f.write(');')
            f.write( ']' + '\n')
        f.close()
