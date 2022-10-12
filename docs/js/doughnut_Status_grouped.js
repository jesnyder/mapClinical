

const config_Status_grouped = {
    "type": "doughnut",
    "data": {
        "labels": [
            "Completed",
            "Unknown status",
            "Recruiting",
            "Not yet recruiting",
            "Active, not recruiting",
            "Terminated",
            "Withdrawn",
            "Suspended",
            "Enrolling by invitation",
            "No longer available",
            "Available",
            "Temporarily not available"
        ],
        "datasets": [
            {
                "label": "allo_count",
                "data": [
                    182,
                    195,
                    185,
                    53,
                    41,
                    21,
                    27,
                    10,
                    7,
                    4,
                    3,
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
                    "rgb(255, 128, 255)"
                ]
            },
            {
                "label": "auto_count",
                "data": [
                    174,
                    115,
                    48,
                    14,
                    16,
                    20,
                    14,
                    8,
                    4,
                    12,
                    1,
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
                    "rgb(102,153,255)",
                    "rgb(255,255,77)",
                    "rgb(153, 255, 204)",
                    "rgb(102, 140, 255)",
                    "rgb(255, 128, 255)"
                ]
            },
            {
                "label": "both_count",
                "data": [
                    26,
                    21,
                    12,
                    7,
                    0,
                    3,
                    0,
                    1,
                    1,
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
                    "rgb(255, 128, 255)"
                ]
            },
            {
                "label": "undeclared_count",
                "data": [
                    67,
                    80,
                    33,
                    19,
                    13,
                    7,
                    9,
                    0,
                    5,
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
                    "rgb(255, 128, 255)"
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

