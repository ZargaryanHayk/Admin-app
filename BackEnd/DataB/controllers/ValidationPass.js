import Users from '../models/Users.js';

const chacker = async (req, res, next) => {
    const data = req.params.name;
    const pass = req.body.Pass
    console.log(data,pass,'------------')
    try {
        console.log('okay')
        await Users.find()
        .then((d)=>{
            console.log(d,'test')
            res.status(200).send("Found");

            // console.log(d)
            // if(pass == d.Pass){
            //     res.status(200).send("Found");
            // }else{
            //     res.status(304).send("no")
            // }
           
        })
    } catch (error) {
        // console.log('yyy')
        res.status(304).send("Not Found");
    }
};


const destroy = async (req,res) =>{
    // console.log(req.params.id)
    await Users.deleteMany({})
        .then(r => {
           
            res.sendStatus(200);
        })
        .catch(e => {
            console.log(e);
        });


}

export  {
    chacker,
    destroy
}
