new Chart(document.getElementById("line-chart-enroll"), {
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
                    0,
                    0,
                    0,
                    8,
                    0,
                    0,
                    0,
                    52,
                    109,
                    397,
                    354,
                    887,
                    1002,
                    1233,
                    780,
                    1053,
                    1759,
                    1392,
                    1914,
                    1329,
                    2491,
                    2154,
                    2637,
                    3594,
                    11160,
                    5778,
                    4679,
                    279
                ],
                "label": "all_enrolled",
                "borderColor": "rgb(207, 240, 199)",
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
                    270,
                    428,
                    327,
                    257,
                    114,
                    189,
                    167,
                    225,
                    995,
                    263,
                    230,
                    293,
                    586,
                    1683,
                    6168,
                    1433,
                    584,
                    39
                ],
                "label": "allo_enrolled",
                "borderColor": "rgb(242, 100, 30)",
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
                    0,
                    24,
                    15,
                    142,
                    70,
                    167,
                    105,
                    236,
                    122,
                    160,
                    112,
                    371,
                    344,
                    940,
                    192,
                    439,
                    574,
                    486,
                    0
                ],
                "label": "auto_enrolled",
                "borderColor": "rgb(42, 43, 90)",
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
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    15,
                    120,
                    0,
                    0
                ],
                "label": "both_enrolled",
                "borderColor": "rgb(0, 196, 248)",
                "fill": "false"
            },
            {
                "data": [
                    0,
                    9,
                    0,
                    0,
                    0,
                    8,
                    0,
                    0,
                    0,
                    52,
                    59,
                    354,
                    60,
                    444,
                    533,
                    906,
                    499,
                    722,
                    1356,
                    1045,
                    759,
                    954,
                    1890,
                    1517,
                    1111,
                    1719,
                    4538,
                    3651,
                    3609,
                    240
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
            "test": "Enrolled PDF"
        }
    }
});