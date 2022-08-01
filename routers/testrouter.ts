import express from "express";


const router = express.Router()



router.get('/', (req,res)=> {
    console.log("this also works")
    res.render('random_form')
})

router.get("/tester", (req, res)=>{
    console.log("second layer")
    res.render("random_form", {id: 1})
})

export {router}

