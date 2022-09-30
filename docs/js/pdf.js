new Chart(document.getElementById("line-chart"), {
    "type": "line",
    "data": {
        "labels": [
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
                    38,
                    44,
                    53,
                    53,
                    47,
                    59,
                    55,
                    68,
                    125,
                    106,
                    113,
                    10
                ],
                "label": "all_count",
                "borderColor": "rgb(247, 216, 210)",
                "fill": "false"
            },
            {
                "data": [
                    1,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    0,
                    2,
                    2,
                    3,
                    5,
                    7,
                    9,
                    6,
                    9,
                    12,
                    23,
                    18,
                    10,
                    16,
                    19,
                    33,
                    43,
                    50,
                    64,
                    2
                ],
                "label": "allo_count",
                "borderColor": "rgb(231, 79, 46)",
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
                    1,
                    1,
                    2,
                    2,
                    7,
                    6,
                    14,
                    8,
                    14,
                    14,
                    12,
                    20,
                    13,
                    17,
                    11,
                    12,
                    15,
                    13,
                    12,
                    1
                ],
                "label": "auto_count",
                "borderColor": "rgb(42, 23, 114)",
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
                    1,
                    1,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    2,
                    2,
                    2,
                    0
                ],
                "label": "both_count",
                "borderColor": "rgb(0, 206, 223)",
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
                    1,
                    2,
                    5,
                    1,
                    3,
                    5,
                    12,
                    9,
                    9,
                    15,
                    18,
                    18,
                    15,
                    24,
                    26,
                    24,
                    23,
                    65,
                    41,
                    35,
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