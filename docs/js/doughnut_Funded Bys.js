

const config_Funded Bys = {
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
                "label": "all",
                "data": [
                    23161,
                    12443,
                    6761,
                    1895,
                    791,
                    353,
                    54,
                    98,
                    65,
                    31,
                    30,
                    10,
                    6
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

const ctx_Funded Bys = document.getElementById("doughnut_Funded Bys").getContext('2d');

const myChart_Funded Bys = new Chart(ctx_Funded Bys , config_Funded Bys  );

