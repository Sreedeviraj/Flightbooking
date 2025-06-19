const mongoose=require('mongoose')

const Base_url=process.env.BASE_URL

mongoose.connect(Base_url).then((res)=>{
    
    console.log("mongodb connected succeffully")
}).catch((err)=>{
    console.log(err)
})