

const config_Status = {
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
                "label": "all",
                "data": [
                    17769,
                    19677,
                    4663,
                    2932,
                    657
                ],
                "backgroundColor": [
                    "rgb(212,178,212)",
                    "rgb(255,105,140)",
                    "rgb(92,141,255)",
                    "rgb(127,212,85)",
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

