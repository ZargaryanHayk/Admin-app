import Users from '../models/Users.js';

import jwt from "jsonwebtoken"
import 'dotenv/config';

const allUsers = async (req, res, next) => {
    try {
        await Users.find()
            .then(r => {
                res.json(r);
            })
    } catch (e) {
        console.log('error');
    }


};

const show = async (req, res, next) => {
    let userId = req.params.id;
   
    try {
        const user = await Users.findById(userId);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while retrieving the user" });
    }
};

const addUser = async (req, res, next) => {
    console.log(req.body,'addddd')
    let user = new Users({
        name: req.body.name,
        surname: req.body.surname,
        mail: req.body.mail,
        password: req.body.password,

    });
    try{
        const userSave = await user.save()
        res.sendStatus(200);
    }catch(e){
            console.log(e);
        };
};

const updateUser = async (req, res, next) => {
    let updateUserData = req.body;
    try{

        const userUpdate =  await Users.findByIdAndUpdate(req.params.id, { $set: updateUserData })   
        res.sendStatus(200);
    }catch(e){
            console.log(e);
            res.status(404).json({ message: 'User not found' })
        };
};

const destroy = async (req, res, next) => {
    let userId = req.params.id;
    try{
        const userDestroy = await Users.findByIdAndDelete(userId)
        console.log('deltxxxxe')
        res.status(200).json({messagr:'ok'})

    }catch(e){
            console.log(e);
            res.status(404).json({message: 'User not found'})
        };
};



const loginUserChak = async (req, res, next) => {
    let userEmail = req.body.email
    let userPassword = req.body.password
    console.log(req.body,'xxxxxxxxxxx')
    try{
        const r = await Users.findOne({ mail: userEmail })
        console.log(r,'rrrrr')
        if(r){
                console.log(userPassword,'user')
                if (r.password == userPassword) {
                console.log('if mta')
                 req.email = userEmail
                    next()
            }
            else {
                console.log('err')
                res.status(404).json({ message: 'User not found' })
    
            }
        }

    }catch(e){
        console.log(e)
        res.status(404).json({ message: 'User not found' })
    }
}

const tokenBulder = (req,res,next)=>{
    console.log('tokennn')
    let tokenName = req.email
    const accesToken = jwt.sign(tokenName,process.env.ACCESS_TOKEN_SECRET)
    console.log(accesToken,'token')
    res.json({Token :accesToken })
    
}

function authenticateToken(req,res,next){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)
    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,user)=>{

        if(err) return res.sendStatus(401)
        next()
})

}


export default {
    allUsers,
    show,
    addUser,
    updateUser,
    destroy,
    loginUserChak,
    tokenBulder,
    authenticateToken
};
