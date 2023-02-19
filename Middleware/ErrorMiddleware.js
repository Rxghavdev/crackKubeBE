const errorHandeler=(err,req,res,next)=>{                       //err req are objects we are passing
    const statusCode=res.statusCode ? res.statusCode : 500 //setting error code : is else here and ? means it ll be used here
    res.status(statusCode)

    res.json({
        message: err.message,
        stack:process.env.NODE_ENV ==='production'? null : err.stack         //if we are in development mode it ll pass message
    })      
              //.json ll pass a message                     //? means it ll be do this fn or display this : or

}
module.exports={
    errorHandeler, 
}