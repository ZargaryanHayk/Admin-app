import User from '../models/Users.js';
import jwt from "jsonwebtoken"
import 'dotenv/config';

const allUsers = async (req, res, next) => {
    try {
        await User.find()
            .then(r => {
                res.json(r);
            })
    } catch (e) {
        console.log('error');
    }


};

const show = async (req, res, next) => {
    let userId = req.params.id;

    await User.findById(userId)
        .then(r => {
            res.json(r);
        })
        .catch(e => {
            console.log(e);
        });
};

const addUser = async (req, res, next) => {
    console.log(req.body)
    let user = new User({
        name: req.body.name,
        surname: req.body.surname,
        mail: req.body.mail,
        password: req.body.password,

    });
    await user.save()
        .then(r => {
            res.sendStatus(200);
        })
        .catch(e => {
            console.log(e);
        });
};

const updateUser = async (req, res, next) => {
    let updateUserData = req.body;
    await User.findByIdAndUpdate(req.params.id, { $set: updateUserData })
        .then(r => {

            res.sendStatus(200);
        })
        .catch(e => {
            console.log(e);
        });
};

const destroy = async (req, res, next) => {
    let userId = req.params.id;
    await User.findByIdAndDelete(userId)
        .then((r) => {
            res.status(200).end();
        })
        .catch(e => {
            console.log(e);
        });
};



const loginUserChak = async (req, res, next) => {
    let userEmail = req.body.email
    let userPassword = req.body.password
    const r = await User.findOne({ mail: userEmail })
    if(r){
            console.log(userPassword,'user')
            console.log(r)
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
    console.log(authHeader)
    const token = authHeader && authHeader.split(' ')[1]
    console.log(token,'---token---')
    if (token == null) return res.sendStatus(403)
    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,user)=>{

        if(err) return res.sendStatus(403)
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
