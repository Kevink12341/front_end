import express  from "express";
import mysql from "mysql";
import ejs, { promiseImpl } from "ejs";

type response = Array<tablenameObj>

interface tablenameObj  {
    tableName : string
}


const router2 = express.Router()

const dbinfo = {
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'cbsdata',
}
const connection = mysql.createConnection(dbinfo)

connection.connect(function(err){
    if (err) console.error(err);
    console.log("Connected to DB")
})

let sqlStr = `SELECT tableName FROM cbs_tables`
let cbs_tables_promise = new Promise((resolve,reject)=> {
    connection.query(sqlStr, function(err,res:response, fields){
        if (err) console.error(err);
        let resultArr = []
        for (let i=0;i<res.length;i++){
            resultArr.push(res[i].tableName)
        }
        resolve(resultArr)
})
})

let testvar = () => {
    console.log("testing whether this works")
}

let provide_values = await cbs_tables_promise

router2.get('/', (req,res)=>{
    console.log("ok for now")
    let list_options = " abcd"
    res.render('../views/dropdown.ejs', {list_options: testvar, existing_tables: provide_values })
})

export {router2}