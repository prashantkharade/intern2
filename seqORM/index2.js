const express = require('express');
const app = express();
const body = require('body-parser');
const seq = require('sequelize');

const port = 5000;

// app.get("/", (req,res) =>{
//     res.send("this is working fine");
// })

// app.listen(port,()=>{
//     console.log(`server run on ${port}`);
// });
app.use(body.json())
app.use(body.urlencoded({extended:false}))
const sequelize=new seq("prashantdb","prashant","prashant@3721",{
    dialect:"mysql",
});


const blog_table1=sequelize.define("blog_table1",{
    title:seq.STRING,
    desc:seq.STRING,
},{tableName:"blog_table1"});
blog_table1.sync();//({force:true});

//

sequelize.authenticate().then(()=>{
    console.log("connection made successfull");
})
.catch((err)=>
    console.log(err,"this is a error")
);


app.post("/", async(req,res)=>{
    const title=req.body.title;
    const desc=req.body.desc;
    const saveBlog=blog_table1.build({
        title,//:"tushar",
        desc,//:"kulange",
    });
    await saveBlog.save();
    res.send("data posted successfully");
})

app.get("/",async (req,res)=>{
const alldata= await blog_table1.findAll({"id":2});
res.json(alldata);
})


app.put("/:id",(req,res)=>{
    const data=req.body.data;
    blog_table1.update(
        {
            title:data,
        },
        {
            where:{
                id:req.params.id,
            },
        }
    );
    res.redirect("/");
})

app.delete("/:id",(req,res)=>{
   
    blog_table1.destroy(
        {
            where:{
                id:req.params.id,
            },
        }
    );
    res.redirect("/");
})
app.listen(port,()=> {
    console.log(`server starts at http://localhost:${port}`);
})
