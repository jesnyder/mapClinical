

const config_Funded_Bys_grouped = {
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
                    459,
                    238,
                    25,
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
                    298,
                    88,
                    38,
                    2,
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
                "label": "both_count",
                "data": [
                    51,
                    15,
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
                    177,
                    29,
                    21,
                    2,
                    0,
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

const ctx_Funded_Bys_grouped = document.getElementById("doughnut_Funded_Bys_grouped").getContext('2d');

const myChart_Funded_Bys_grouped = new Chart(ctx_Funded_Bys_grouped , config_Funded_Bys_grouped  );

