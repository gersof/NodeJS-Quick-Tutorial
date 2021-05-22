const { Router } = require('express');
const router = new Router();

router.get('/cliente',(req, res)=>{
    const data=[{name:"Juan", edad:21}, {name:"Maria", edad:31}];
    res.json(data);

})

module.exports = router;
