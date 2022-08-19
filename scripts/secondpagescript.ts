import mysql from "mysql"
import { createTextChangeRange } from "typescript";

type datatypes = Array<within_data>
interface within_data {
    Id: number,
    [x:string]: number | string | undefined,
}

let mysqlCredentials = {
    host: "localhost",
    user: "root",
    password: "",
    database: "cbsdata",
    port: 3306,
}

let myconnection = mysql.createConnection(mysqlCredentials)


let tablename = 'O83878NED';
let limit_sql = 50
let sqlstr = `Select * from ${tablename} limit ${limit_sql}`

let data = new Promise((resolve, reject)  => {
    myconnection.query(sqlstr, (err,res)=> {
        if (err) console.error(err)
        resolve(res as datatypes)
    })
})

function fetchData (query: string) : Promise<datatypes> {
    return new Promise((resolve, reject)  => {
        myconnection.query(sqlstr, (err,res)=> {
            if (err) console.error(err)
            resolve(res)
        })
    })
}


let all_data: datatypes = await fetchData(sqlstr)
console.log(all_data)

function write_table(all_data:any) {

const myTableDiv = document.getElementById("cbs_selected_table");
    
const table = document.createElement('TABLE');
// table.border='1';

const tableBody = document.createElement('TBODY');
table.appendChild(tableBody);

// Loop voor de data in de tabel
    
for (var i=0; i < all_data.length; i++){
    var tr = document.createElement('TR');
    tableBody.appendChild(tr);
    
    for (let j=0; j<all_data[i].length; i++) {
        var td = document.createElement("TD")
        td.appendChild(document.createTextNode(all_data[i][j]))
        td.appendChild(tr)
    }

}
myTableDiv.appendChild(table);
}

write_table(all_data)
