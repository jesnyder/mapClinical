

const config_Study_Results_grouped = {
    "type": "doughnut",
    "data": {
        "labels": [
            "No Results Available",
            "Has Results"
        ],
        "datasets": [
            {
                "label": "allo_count",
                "data": [
                    317,
                    18
                ],
                "backgroundColor": [
                    "rgb(153,102,255)",
                    "rgb(255,102,102)"
                ]
            },
            {
                "label": "auto_count",
                "data": [
                    187,
                    8
                ],
                "backgroundColor": [
                    "rgb(153,102,255)",
                    "rgb(255,102,102)"
                ]
            },
            {
                "label": "both_count",
                "data": [
                    9,
                    1
                ],
                "backgroundColor": [
                    "rgb(153,102,255)",
                    "rgb(255,102,102)"
                ]
            },
            {
                "label": "undeclared_count",
                "data": [
                    346,
                    12
                ],
                "backgroundColor": [
                    "rgb(153,102,255)",
                    "rgb(255,102,102)"
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

const ctx_Study_Results_grouped = document.getElementById("doughnut_Study_Results_grouped").getContext('2d');

const myChart_Study_Results_grouped = new Chart(ctx_Study_Results_grouped , config_Study_Results_grouped  );

