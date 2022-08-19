import express from "express";
import {router} from "./routers/testrouter.js"
import ejs from "ejs";
import { router2 } from "./routers/secondpage.js";
import {tablerouter} from "./routers/tablerouter.js"


const app = express()
const port = 3000
app.use(express.static('./dist/public'))
app.engine('html', ejs.renderFile)
app.set('views', './views')
app.set('view engine', 'html')
app.use('/test', router)
app.use('/tables', tablerouter)

app.use('/something', router2)

app.get('/random/:page', (req, res) => {

    let page = req.params.page
    if(!page) {
        // 404
    }  

    console.log('boop')
    res.render("form", {page: page})

})
app.listen(port, () => {
console.log("server is actually working")
})