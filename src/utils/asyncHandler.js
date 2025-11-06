//const asyncHandler =()=> {} promises ke format me same chiz try catch wala you can do








export {asyncHandler}


//const asyncHandler =()=>{}
//const asyncHandler =(func)=> ()=>{}
//const asyncHandler = (func)=> async()=>{}
//niche jo kiya uska descriptive version hai upar


//Try catch way
const asyncHandler = (fn)=>async(req, res, next)=>{
    try{

    }catch(error){
        res.status(error.code||500).json({
            sucess:false,
            message:error.message
        })
    }

}
