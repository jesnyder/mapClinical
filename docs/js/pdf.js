new Chart(document.getElementById("line-chart"), {
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
                    1,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    1,
                    3,
                    8,
                    5,
                    8,
                    18,
                    26,
                    32,
                    24,
                    37,
                    44,
                    53,
                    51,
                    47,
                    59,
                    55,
                    67,
                    124,
                    108,
                    109,
                    8
                ],
                "label": "all_count",
                "borderColor": "rgb(245, 247, 242)",
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
                    2,
                    2,
                    2,
                    4,
                    2,
                    6,
                    5,
                    4,
                    8,
                    18,
                    13,
                    7,
                    7,
                    13,
                    20,
                    29,
                    26,
                    18,
                    1
                ],
                "label": "allo_count",
                "borderColor": "rgb(244, 94, 26)",
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
                    1,
                    0,
                    1,
                    1,
                    5,
                    4,
                    9,
                    4,
                    10,
                    8,
                    10,
                    7,
                    8,
                    10,
                    8,
                    5,
                    11,
                    7,
                    6,
                    0
                ],
                "label": "auto_count",
                "borderColor": "rgb(60, 50, 115)",
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
                    1,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    1,
                    0,
                    0
                ],
                "label": "both_count",
                "borderColor": "rgb(23, 168, 236)",
                "fill": "false"
            },
            {
                "data": [
                    0,
                    1,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    1,
                    2,
                    6,
                    2,
                    5,
                    9,
                    20,
                    17,
                    14,
                    23,
                    28,
                    25,
                    31,
                    32,
                    42,
                    34,
                    42,
                    83,
                    74,
                    85,
                    7
                ],
                "label": "undeclared_count",
                "borderColor": "rgb(232, 224, 222)",
                "fill": "false"
            }
        ]
    },
    "options": {
        "title": {
            "display": "true",
            "test": "PDF"
        }
    }
});