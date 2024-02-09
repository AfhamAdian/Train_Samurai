const router = require ('express').Router();
const db = require ('../db');


router.get ('/', async(req,res)=>{
    try {
      //  const results= await db.query();
        
    } catch (error) {
        console.log(error);
        
    }
    

});




module.exports = router ;
