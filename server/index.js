const express=require('express');
const app=express();
const cors=require("cors")
const mongoose=require("mongoose")
const User=require("./modules/user")

const jwt=require("jsonwebtoken")

app.use(cors());
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/projectAccount', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
var db=mongoose.connection; 
db.on('error',()=>console.log("Error in connection"));
db.once('open',()=>console.log("connected to database"));

app.post('/api/register',async (req,res)=>{
    const { name,userName,email, password,con_password} = req.body
    if(password!==con_password){
        return res.json({status:"error",error:"confirm password is not match"})
    }
    try {
		const response = await User.create({
			name,
            userName,
            email,
			password,
            con_password
		})
		console.log('User created successfully: ', response)
        res.json({ status: 'ok' })
	} catch (error) {
        console.log(error)
        res.json({ status: 'error',error:"Error Occured" })
	}

})

app.post('/api/login',async (req,res)=>{
    const { userName, password} = req.body
    if(userName=="foo" && password=="bar"){
        return res.json({status:"error"});
    }
		const response = await User.findOne({
            userName,
            password
		})
        if(!response){
          return  res.json({status:'error'})
        }
        else{
            const token=jwt.sign({
                name:response.name,
                email:response.email
            },
            'secret123',
            { expiresIn: '120s' })
           return res.json({status:"ok",user:token})
        }

})
app.post('/api/quote',async (req,res)=>{
    const token = req.headers['x-access-token']
    try{
        const decode=jwt.verify(token,'secret123')
        const email=decode.email
        const response = await User.findOne({
            email
		})
        return {status:"ok"}
    }catch(error){
            console.log(error)
            res.json({status:"error",error:'invalid token'})
    }

})



app.listen(9989,()=>{
    console.log("hellow how are you");
})