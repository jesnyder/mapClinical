

const config_Study_Type_grouped = {
    "type": "doughnut",
    "data": {
        "labels": [
            "Interventional",
            "Observational",
            "Expanded Access",
            "INDUSTRY",
            "OTHER",
            "NIH"
        ],
        "datasets": [
            {
                "label": "allo_count",
                "data": [
                    696,
                    20,
                    8,
                    1,
                    2,
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
                "label": "auto_count",
                "data": [
                    404,
                    10,
                    15,
                    4,
                    1,
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
                "label": "both_count",
                "data": [
                    56,
                    1,
                    1,
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
                    193,
                    25,
                    0,
                    9,
                    10,
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

