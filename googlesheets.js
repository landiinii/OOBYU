google.charts.load('current', {packages: ['table']});
var visualization;

function drawVisualization() {
    var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1NOy_h4USk9r2cMUiOQe6TXdgMzhHoSDNOYDr5x7PgsE/edit#gid=0');
    query.setQuery('SELECT A, B, C, D, E, F, G label A "Date", B "New Contacts", C "New Cases", D "Total Cases", E "Total Deaths", F "Total Recovered", G "Vaccinations"');
    query.send(handleQueryResponse);
}

function handleQueryResponse(response) {
    if (response.isError()) {
        alert('There was a problem with your query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }
    var data = response.getDataTable();
    visualization = new google.visualization.Table(document.getElementById('table'));
    visualization.draw(data, {
        allowHtml: true,
        legend: 'bottom'
    });
}
google.setOnLoadCallback(drawVisualization);
