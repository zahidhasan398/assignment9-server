const express=require("express");
const chef=require("./chefRecepe.json");
const cors=require("cors");
const app=express();
app.use(cors());
app.get("/",(req,res)=>{
    res.send(chef);
})
app.get("/chef/:id",(req,res)=>{
    const id=req.params.id;
    console.log(id);
    const selectedChef=chef.find(cf=>cf.chefId===id);
    res.send(selectedChef);
})
app.listen(5000,()=>{
    console.log("server is running at 5000");
})
