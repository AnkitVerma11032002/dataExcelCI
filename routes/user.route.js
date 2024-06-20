const express = require('express');
const userCont = require('../controller/userCont.js');

const router = express.Router();

// login 
router.post('/login', userCont.loginUser);

// crud operations
router.get('/getallusers',userCont.getAllUsers);
router.get('/getusers/:id',userCont.getUserById);
router.post('/createusers', userCont.createUser);
router.put('/updateusers/:id', userCont.updateUser);
router.delete('/deleteusers/:id',userCont.deleteUser);

module.exports = router;
