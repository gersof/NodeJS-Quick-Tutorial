const { Router } = require('express');
const router = new Router();

router.get('/mascota',(req, res)=>{
    const data=[{name:"Michi", edad:2}, {name:"Canchas", edad:3}];
    res.json(data);
})

module.exports = router;