

const config_Study Type_grouped = {
    "type": "doughnut",
    "data": {
        "labels": [
            "Interventional",
            "Observational"
        ],
        "datasets": [
            {
                "label": "allo_count",
                "data": [
                    331,
                    4
                ],
                "backgroundColor": [
                    "rgb(255,102,102)",
                    "rgb(153,102,255)"
                ]
            },
            {
                "label": "auto_count",
                "data": [
                    192,
                    3
                ],
                "backgroundColor": [
                    "rgb(255,102,102)",
                    "rgb(153,102,255)"
                ]
            },
            {
                "label": "both_count",
                "data": [
                    10,
                    0
                ],
                "backgroundColor": [
                    "rgb(255,102,102)",
                    "rgb(153,102,255)"
                ]
            },
            {
                "label": "undeclared_count",
                "data": [
                    322,
                    36
                ],
                "backgroundColor": [
                    "rgb(255,102,102)",
                    "rgb(153,102,255)"
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

const ctx_Study Type_grouped = document.getElementById("doughnut_Study Type_grouped").getContext('2d');

const myChart_Study Type_grouped = new Chart(ctx_Study Type_grouped , config_Study Type_grouped  );

