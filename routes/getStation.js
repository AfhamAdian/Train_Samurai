const router = require ('express').Router();

const db = require ('../db');

router.get('/', async (req,res)=> {
    try {
        const results = await db.query("SELECT * FROM station ;");
        console.log(results);
        res.status (200).json ({
            results : results.rows 

        })
        
    } catch (error) {
        console.log (error);
        
    }
});





module.exports = router ;