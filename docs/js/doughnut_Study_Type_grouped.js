

const config_Study_Type_grouped = {
    "type": "doughnut",
    "data": {
        "labels": [
            "Interventional",
            "Observational",
            "Expanded Access",
            "OTHER",
            "INDUSTRY",
            "NIH"
        ],
        "datasets": [
            {
                "label": "allo_count",
                "data": [
                    697,
                    21,
                    8,
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
                "label": "auto_count",
                "data": [
                    397,
                    10,
                    15,
                    1,
                    4,
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
                    70,
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
                    187,
                    24,
                    0,
                    12,
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

