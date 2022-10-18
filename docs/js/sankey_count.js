anychart.onDocumentReady(function(){
 //creating the data




var sankey_chart = anychart.sankey(sankey_data_count);//customizing the width of the nodes
sankey_chart.nodeWidth("50%");//setting the chart title
sankey_chart.title("Donor Tissue to Clinical Trial Phase using an MSC: Count");//customizing the vertical padding of the nodes
sankey_chart.nodePadding(20);//setting the container id
sankey_chart.container("container_count");//initiating drawing the Sankey diagram



// configure a custom color palette
sankey_chart.palette([
  '#bada55',
  '#e6bf98',
  '#ff8cae',
  '#ff9f22',
  "#F44336",
  "#E91E63",
  "#9C27B0",
  "#673AB7",
  "#3F51B5",
  "#6e5a7d",
  "#2196F3",
  "#03A9F4",
  "#00BCD4",
  "#009688",
  "#FFEB3B",
  "#FFC107",
  "#00BCD4",
  "#FF9800",
  "#FF5722",
]);

sankey_chart.draw();});
