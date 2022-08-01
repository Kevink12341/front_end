import mysql from "mysql"

// let data = new Promise((resolve, reject) => {

// })

let data = "O83878NED"


function write_table(data) {

const myTableDiv = document.getElementById("cbs_selected_table");
    
const table = document.createElement('TABLE');
table.border='1';

const tableBody = document.createElement('TBODY');
table.appendChild(tableBody);

// Loop voor de data in de tabel
    
for (var i=0; i < data.length; i++){
    var tr = document.createElement('TR');
    tableBody.appendChild(tr);
    
    for (var j=0; j< 1; j++){
        var td = document.createElement('TD');
        td.appendChild(document.createTextNode(data[i].Perioden.slice(0,4)));
        tr.appendChild(td);
        td = document.createElement('TD');
        td.appendChild(document.createTextNode(data[i].TotaleBevolking_1));
        tr.appendChild(td);
    }
}
myTableDiv.appendChild(table);
}