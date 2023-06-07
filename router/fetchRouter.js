const express=require ("express");
const router=express.Router();
const {fetchAndStoreData}=require("../controller/fetchController");


router.get("/fetch",fetchAndStoreData);
// router.ge



module.exports=router;