

const config_Study_Type_grouped = {
    "type": "doughnut",
    "data": {
        "labels": [
            "OTHER",
            "INDUSTRY",
            "OTHER_GOV",
            "NETWORK",
            "NIH",
            "FED"
        ],
        "datasets": [
            {
                "label": "allo_count",
                "data": [
                    443,
                    233,
                    26,
                    4,
                    2,
                    1
                ],
                "backgroundColor": [
                    "rgb(153,102,255)",
                    "rgb(255,102,102)",
                    "rgb(102,255,230)",
                    "rgb(255,255,102)",
                    "rgb(255,179,102)",
                    "rgb(255,102,255)"
                ]
            },
            {
                "label": "auto_count",
                "data": [
                    270,
                    98,
                    38,
                    2,
                    1,
                    0
                ],
                "backgroundColor": [
                    "rgb(153,102,255)",
                    "rgb(255,102,102)",
                    "rgb(102,255,230)",
                    "rgb(255,255,102)",
                    "rgb(255,179,102)",
                    "rgb(255,102,255)"
                ]
            },
            {
                "label": "both_count",
                "data": [
                    47,
                    17,
                    6,
                    0,
                    0,
                    0
                ],
                "backgroundColor": [
                    "rgb(153,102,255)",
                    "rgb(255,102,102)",
                    "rgb(102,255,230)",
                    "rgb(255,255,102)",
                    "rgb(255,179,102)",
                    "rgb(255,102,255)"
                ]
            },
            {
                "label": "undeclared_count",
                "data": [
                    182,
                    22,
                    21,
                    2,
                    0,
                    2
                ],
                "backgroundColor": [
                    "rgb(153,102,255)",
                    "rgb(255,102,102)",
                    "rgb(102,255,230)",
                    "rgb(255,255,102)",
                    "rgb(255,179,102)",
                    "rgb(255,102,255)"
                ]
            }
        ]
    },
    "options": {
        "responsive": true,
        "legend": {
            "position": "right"
        },
        "plugins": {
            "title": {
                "display": true,
                "text": "Chart.js Doughnut Chart"
            }
        }
    }
};

const ctx_Study_Type_grouped = document.getElementById("doughnut_Study_Type_grouped").getContext('2d');

const myChart_Study_Type_grouped = new Chart(ctx_Study_Type_grouped , config_Study_Type_grouped  );

