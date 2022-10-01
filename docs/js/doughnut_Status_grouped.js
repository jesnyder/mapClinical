

const config_Status_grouped = {
    "type": "doughnut",
    "data": {
        "labels": [
            "Completed",
            "Recruiting",
            "Not yet recruiting",
            "Active, not recruiting",
            "Enrolling by invitation"
        ],
        "datasets": [
            {
                "label": "allo_count",
                "data": [
                    144,
                    121,
                    39,
                    27,
                    4
                ],
                "backgroundColor": [
                    "rgb(153,102,255)",
                    "rgb(255,102,102)",
                    "rgb(102,255,230)",
                    "rgb(255,255,102)",
                    "rgb(255,179,102)"
                ]
            },
            {
                "label": "auto_count",
                "data": [
                    129,
                    39,
                    12,
                    10,
                    5
                ],
                "backgroundColor": [
                    "rgb(153,102,255)",
                    "rgb(255,102,102)",
                    "rgb(102,255,230)",
                    "rgb(255,255,102)",
                    "rgb(255,179,102)"
                ]
            },
            {
                "label": "both_count",
                "data": [
                    4,
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
                    "rgb(255,179,102)"
                ]
            },
            {
                "label": "undeclared_count",
                "data": [
                    157,
                    116,
                    43,
                    32,
                    10
                ],
                "backgroundColor": [
                    "rgb(153,102,255)",
                    "rgb(255,102,102)",
                    "rgb(102,255,230)",
                    "rgb(255,255,102)",
                    "rgb(255,179,102)"
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

const ctx_Status_grouped = document.getElementById("doughnut_Status_grouped").getContext('2d');

const myChart_Status_grouped = new Chart(ctx_Status_grouped , config_Status_grouped  );

