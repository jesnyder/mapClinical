import numpy as np

from list_trials import list_trials
from list_trials import query_trials
from query_openmaps import query_openmaps
from assign_groups import assign_groups
from write_geojson import write_geojson
from year_counts import year_counts
from summarize_fields import summarize_fields


def main():
    """
    Objective
    Map clinical trials
    """

    tasks = []
    #tasks = np.arange(1,6,1)
    #tasks.append('openmaps')

    if 0 in tasks: query_trials()

    # list trials
    if 1 in tasks: list_trials()

    # assign groups
    if 2 in tasks: assign_groups()

    # geolocate locations
    if 'openmaps' in tasks: query_openmaps()

    # write geojson
    if 3 in tasks: write_geojson()

    # tally totals
    if 4 in tasks: year_counts()

    # summarize fields
    if 5 in tasks: summarize_fields()


if __name__ == "__main__":
    main()
