const mongo=require("mongoose");
const url="mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";
const data=async ()=>
{
    console.log("Connection Successful!!!");
}
const connectToMongo=async ()=>{(mongo.connect(url,data))};
module.exports=connectToMongo;