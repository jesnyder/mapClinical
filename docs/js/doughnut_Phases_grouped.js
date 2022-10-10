

const config_Phases_grouped = {
    "type": "doughnut",
    "data": {
        "labels": [
            "Phase 1 Phase 2",
            "Phase 1",
            "Phase 2",
            "Not Applicable",
            "Phase 3",
            "Early Phase 1",
            "Phase 2 Phase 3",
            "Phase 4"
        ],
        "datasets": [
            {
                "label": "allo_count",
                "data": [
                    242,
                    201,
                    139,
                    36,
                    26,
                    19,
                    17,
                    1
                ],
                "backgroundColor": [
                    "rgb(153,102,255)",
                    "rgb(255,102,102)",
                    "rgb(102,255,230)",
                    "rgb(255,255,102)",
                    "rgb(255,179,102)",
                    "rgb(255,102,255)",
                    "rgb(153,255,102)",
                    "rgb(102,153,255)"
                ]
            },
            {
                "label": "auto_count",
                "data": [
                    123,
                    97,
                    74,
                    50,
                    21,
                    9,
                    8,
                    2
                ],
                "backgroundColor": [
                    "rgb(153,102,255)",
                    "rgb(255,102,102)",
                    "rgb(102,255,230)",
                    "rgb(255,255,102)",
                    "rgb(255,179,102)",
                    "rgb(255,102,255)",
                    "rgb(153,255,102)",
                    "rgb(102,153,255)"
                ]
            },
            {
                "label": "both_count",
                "data": [
                    29,
                    9,
                    14,
                    10,
                    4,
                    1,
                    1,
                    0
                ],
                "backgroundColor": [
                    "rgb(153,102,255)",
                    "rgb(255,102,102)",
                    "rgb(102,255,230)",
                    "rgb(255,255,102)",
                    "rgb(255,179,102)",
                    "rgb(255,102,255)",
                    "rgb(153,255,102)",
                    "rgb(102,153,255)"
                ]
            },
            {
                "label": "undeclared_count",
                "data": [
                    48,
                    63,
                    30,
                    43,
                    6,
                    6,
                    6,
                    2
                ],
                "backgroundColor": [
                    "rgb(153,102,255)",
                    "rgb(255,102,102)",
                    "rgb(102,255,230)",
                    "rgb(255,255,102)",
                    "rgb(255,179,102)",
                    "rgb(255,102,255)",
                    "rgb(153,255,102)",
                    "rgb(102,153,255)"
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

const ctx_Phases_grouped = document.getElementById("doughnut_Phases_grouped").getContext('2d');

const myChart_Phases_grouped = new Chart(ctx_Phases_grouped , config_Phases_grouped  );

