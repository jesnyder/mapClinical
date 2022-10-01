

const config_Gender_grouped = {
    "type": "doughnut",
    "data": {
        "labels": [
            "All",
            "Female",
            "Male"
        ],
        "datasets": [
            {
                "label": "allo_count",
                "data": [
                    315,
                    12,
                    8
                ],
                "backgroundColor": [
                    "rgb(153,102,255)",
                    "rgb(255,102,102)",
                    "rgb(102,255,230)"
                ]
            },
            {
                "label": "auto_count",
                "data": [
                    181,
                    8,
                    6
                ],
                "backgroundColor": [
                    "rgb(153,102,255)",
                    "rgb(255,102,102)",
                    "rgb(102,255,230)"
                ]
            },
            {
                "label": "both_count",
                "data": [
                    10,
                    0,
                    0
                ],
                "backgroundColor": [
                    "rgb(153,102,255)",
                    "rgb(255,102,102)",
                    "rgb(102,255,230)"
                ]
            },
            {
                "label": "undeclared_count",
                "data": [
                    336,
                    15,
                    7
                ],
                "backgroundColor": [
                    "rgb(153,102,255)",
                    "rgb(255,102,102)",
                    "rgb(102,255,230)"
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

const ctx_Gender_grouped = document.getElementById("doughnut_Gender_grouped").getContext('2d');

const myChart_Gender_grouped = new Chart(ctx_Gender_grouped , config_Gender_grouped  );

