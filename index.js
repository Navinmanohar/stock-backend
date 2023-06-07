const mongoose=require("mongoose");
const express=require("express");
const app=express();
const cors=require("cors");

const mongoURI = 'mongodb://0.0.0.0:27017/internship';

const connectOptions = {
  useNewUrlParser: true,
};

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.get('/',(req,res)=>{
  res.send("hello")
})
app.get("/find",(req,res)=>{
   
})
const userController=require("./router/fetchRouter");

app.use("/main",userController);

 


mongoose.connect(mongoURI, connectOptions).then(() => {
  console.log('MongoDB connected!');
  app.listen(3000, () => {
    console.log('Server has started!');
  });
}).catch(err => {
  console.error('Failed to connect to MongoDB:', err);
});