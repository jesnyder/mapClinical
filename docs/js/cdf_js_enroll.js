new Chart(document.getElementById("line-chart-cdf_enroll"), {
    "type": "line",
    "data": {
        "labels": [
            1994,
            1995,
            1996,
            1997,
            1998,
            1999,
            2000,
            2001,
            2002,
            2003,
            2004,
            2005,
            2006,
            2007,
            2008,
            2009,
            2010,
            2011,
            2012,
            2013,
            2014,
            2015,
            2016,
            2017,
            2018,
            2019,
            2020,
            2021,
            2022,
            2023
        ],
        "datasets": [
            {
                "data": [
                    0,
                    9,
                    9,
                    9,
                    9,
                    17,
                    17,
                    17,
                    17,
                    69,
                    178,
                    575,
                    929,
                    1816,
                    2818,
                    4051,
                    4831,
                    5884,
                    7643,
                    9035,
                    10949,
                    12278,
                    14769,
                    16923,
                    19560,
                    23154,
                    34314,
                    40092,
                    44771,
                    45050
                ],
                "label": "all_enrolled",
                "borderColor": "rgb(238, 221, 226)",
                "fill": "false"
            },
            {
                "data": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    43,
                    313,
                    741,
                    1068,
                    1325,
                    1439,
                    1628,
                    1795,
                    2020,
                    3015,
                    3278,
                    3508,
                    3801,
                    4387,
                    6070,
                    7198,
                    8631,
                    9215,
                    9254
                ],
                "label": "allo_enrolled",
                "borderColor": "rgb(237, 90, 15)",
                "fill": "false"
            },
            {
                "data": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    50,
                    50,
                    74,
                    89,
                    231,
                    301,
                    468,
                    573,
                    809,
                    931,
                    1091,
                    1203,
                    1574,
                    1918,
                    2858,
                    3050,
                    3489,
                    4063,
                    4549,
                    4549
                ],
                "label": "auto_enrolled",
                "borderColor": "rgb(52, 35, 100)",
                "fill": "false"
            },
            {
                "data": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    37,
                    37,
                    37,
                    37,
                    37,
                    37,
                    37,
                    37,
                    37,
                    52,
                    172,
                    172,
                    172
                ],
                "label": "both_enrolled",
                "borderColor": "rgb(20, 165, 255)",
                "fill": "false"
            },
            {
                "data": [
                    0,
                    9,
                    9,
                    9,
                    9,
                    17,
                    17,
                    17,
                    17,
                    69,
                    128,
                    482,
                    542,
                    986,
                    1519,
                    2425,
                    2924,
                    3646,
                    5002,
                    6047,
                    6806,
                    7760,
                    9650,
                    11167,
                    12278,
                    13997,
                    23575,
                    27226,
                    30835,
                    31075
                ],
                "label": "undeclared_enrolled",
                "borderColor": "rgb(232, 224, 222)",
                "fill": "false"
            }
        ]
    },
    "options": {
        "title": {
            "display": "true",
            "text": "Enrolled CDF"
        }
    }
});