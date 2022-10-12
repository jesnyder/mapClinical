

const config_Phases_grouped = {
    "type": "doughnut",
    "data": {
        "labels": [
            "Phase 1|Phase 2",
            "Phase 1",
            "Phase 2",
            "Not Applicable",
            "Phase 3",
            "Early Phase 1",
            "Phase 2|Phase 3",
            "Phase 4"
        ],
        "datasets": [
            {
                "label": "allo_count",
                "data": [
                    249,
                    208,
                    141,
                    37,
                    26,
                    19,
                    17,
                    3
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
                    102,
                    76,
                    57,
                    24,
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
                    30,
                    9,
                    14,
                    11,
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
                    45,
                    65,
                    31,
                    41,
                    5,
                    8,
                    7,
                    3
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

