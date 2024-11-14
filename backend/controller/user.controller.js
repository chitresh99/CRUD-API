import User from "../model/user.model.js"

export const create = async (req,res) =>{
    try {
       const userData = new User(req.body);
       const {email} = userData;

       const userexist = await User.findOne({email})
       if(userexist){
           return res.status(400).json({message : "User already exists"})
       }
       const saveduser = await userData.save();
       res.status(200).json(saveduser);
    }
    catch(error){
        res.status(500).json({error:"Internal server error"});
    }
}

export const fetch = async (req,res) => {
try {
     const users = await User.find();
     if(users.length === 0){
        return res.status(404).json({
            message: "User not found"
        })
     }
     res.status(200).json(users);
}
catch(error){
res.status(500).json({error:"Internal server error"});
}
};

export const update = async(req,res)=>{
    try{
    const id = req.params.id;
    const userExist = await User.findOne({_id:id})
    if(!userExist){
        return res.status(404).json({
            message:"user not found"
        })
    }
    const updateuser = await User.findByIdAndUpdate(id, req.body, {new:true})
    res.status(201).json(updateuser);
    }
    catch(error){
        res.status(500).json({error:"Internal server error"});
    }
}

export const deleteuser = async (req,res) => {
    try {
        const id = req.params.id;
        const userExist = await User.findOne({_id:id})
        if(!userExist){
            return res.status(404).json({
                message:"user not found"
            })
        } 
        await User.findByIdAndDelete(id);
        res.status(201).json({message:"User deleted successfully"});
    }
    catch(error){
        res.status(500).json({error:"Internal server error"});
    }
}

