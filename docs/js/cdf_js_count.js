new Chart(document.getElementById("line-chart-cdf_count"), {
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
                    1,
                    1,
                    1,
                    2,
                    2,
                    2,
                    2,
                    3,
                    6,
                    14,
                    19,
                    27,
                    45,
                    71,
                    103,
                    127,
                    165,
                    209,
                    262,
                    315,
                    362,
                    421,
                    476,
                    544,
                    669,
                    775,
                    888,
                    898
                ],
                "label": "all_count",
                "borderColor": "rgb(227, 234, 228)",
                "fill": "false"
            },
            {
                "data": [
                    1,
                    1,
                    1,
                    1,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    4,
                    6,
                    9,
                    14,
                    21,
                    30,
                    36,
                    45,
                    57,
                    80,
                    98,
                    108,
                    124,
                    143,
                    176,
                    219,
                    269,
                    333,
                    335
                ],
                "label": "allo_count",
                "borderColor": "rgb(229, 91, 36)",
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
                    2,
                    4,
                    6,
                    13,
                    19,
                    33,
                    41,
                    55,
                    69,
                    81,
                    101,
                    114,
                    131,
                    142,
                    154,
                    169,
                    182,
                    194,
                    195
                ],
                "label": "auto_count",
                "borderColor": "rgb(34, 33, 84)",
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
                    2,
                    2,
                    3,
                    3,
                    3,
                    3,
                    3,
                    3,
                    3,
                    4,
                    4,
                    6,
                    8,
                    10,
                    10
                ],
                "label": "both_count",
                "borderColor": "rgb(0, 182, 232)",
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
                    3,
                    8,
                    9,
                    12,
                    17,
                    29,
                    38,
                    47,
                    62,
                    80,
                    98,
                    113,
                    137,
                    163,
                    187,
                    210,
                    275,
                    316,
                    351,
                    358
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
            "text": "Trial Count CDF"
        }
    }
});