

const config_Status = {
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
            "No longer available",
            "Enrolling by invitation",
            "Available",
            "Temporarily not available"
        ],
        "datasets": [
            {
                "label": "all",
                "data": [
                    17191,
                    19936,
                    19185,
                    4606,
                    2792,
                    993,
                    0,
                    749,
                    0,
                    537,
                    0,
                    0
                ],
                "backgroundColor": [
                    "rgb(212,178,212)",
                    "rgb(255,105,140)",
                    "rgb(92,141,255)",
                    "rgb(127,212,85)",
                    "rgb(89,212,126)",
                    "rgb(85,212,212)",
                    "rgb(89,212,126)",
                    "rgb(212,81,177)",
                    "rgb(89,212,126)"
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

const ctx_Status = document.getElementById("doughnut_Status").getContext('2d');

const myChart_Status = new Chart(ctx_Status , config_Status  );

