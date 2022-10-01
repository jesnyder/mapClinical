

const config_Funded_Bys_grouped = {
    "type": "doughnut",
    "data": {
        "labels": [
            "Other",
            "Industry",
            "Industry|Other",
            "Other|Industry",
            "Other|NIH",
            "Other|U.S. Fed",
            "U.S. Fed|Other",
            "Other|Industry|NIH",
            "NIH",
            "Other|NIH|Industry",
            "Other|U.S. Fed|NIH",
            "Industry|U.S. Fed",
            "NIH|Other|Industry"
        ],
        "datasets": [
            {
                "label": "allo_count",
                "data": [
                    168,
                    115,
                    25,
                    17,
                    6,
                    3,
                    0,
                    0,
                    0,
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
                    "rgb(255,102,255)",
                    "rgb(153,255,102)",
                    "rgb(102,153,255)",
                    "rgb(255,255,77)",
                    "rgb(153, 255, 204)",
                    "rgb(102, 140, 255)",
                    "rgb(255, 128, 255)",
                    "rgb(102, 255, 255)"
                ]
            },
            {
                "label": "auto_count",
                "data": [
                    134,
                    31,
                    18,
                    6,
                    3,
                    2,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
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
                    "rgb(102,153,255)",
                    "rgb(255,255,77)",
                    "rgb(153, 255, 204)",
                    "rgb(102, 140, 255)",
                    "rgb(255, 128, 255)",
                    "rgb(102, 255, 255)"
                ]
            },
            {
                "label": "both_count",
                "data": [
                    7,
                    0,
                    0,
                    2,
                    1,
                    0,
                    0,
                    0,
                    0,
                    0,
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
                    "rgb(255,102,255)",
                    "rgb(153,255,102)",
                    "rgb(102,153,255)",
                    "rgb(255,255,77)",
                    "rgb(153, 255, 204)",
                    "rgb(102, 140, 255)",
                    "rgb(255, 128, 255)",
                    "rgb(102, 255, 255)"
                ]
            },
            {
                "label": "undeclared_count",
                "data": [
                    243,
                    65,
                    15,
                    17,
                    11,
                    1,
                    2,
                    1,
                    1,
                    0,
                    0,
                    1,
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
                    "rgb(102,153,255)",
                    "rgb(255,255,77)",
                    "rgb(153, 255, 204)",
                    "rgb(102, 140, 255)",
                    "rgb(255, 128, 255)",
                    "rgb(102, 255, 255)"
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

