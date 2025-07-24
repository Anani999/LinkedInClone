const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { createProfile } = require('../controllers/userProfileController');

exports.registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (user) {
            return res.status(401).json({ msg: "Email already taken!" });
        }
        
        const newUser = await User.create({ name, email, password });
        
        // Assuming you want to create a profile with at least the user ID
        const newProfile = await createProfile({ user: newUser._id, name, about: 'testing', skills: [], contactInfo: {}, socialLinks: {}, experience: [], education: [], certifications: [] });

        res.status(200).json({ message: 'User created successfully!', profile: newProfile });
    } catch (err) {
        return res.status(500).json({ message: 'Failed to Register user', error: err.message });
    }
}

exports.loginUser = async(req,res) => {
    const {email,password} = req.body;
    try{
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({message:"Invalid Mail"});
        }
        if(user.password !== password){
            return res.status(400).json({message:'Invalid Password'});
        }
        const payload = {
            user:user
        };
        const token = jwt.sign(payload,process.env.JWT_USER_KEY, {expiresIn:'1h'});

        res.cookie('token',token, {
            httpOnly:true,
            secure:process.env.NODE_ENV === 'production',
            sameSite:'Strict'
        });

        return res.status(200).json({message:'Logic Successfull !'})
    }catch(err){
        return res.status(500).json({message:'Failed while Logging in user', err})
    }
}

exports.logoutUser = async(req,res) => {
    res.clearCookie('token', {
        httpOnly:true,
        secure:process.env.NODE_ENV === 'production',
        sameSite: 'Strick'
    });
    return res.status(200).json({mes:'Logout successfull !'});
};

exports.getUser = async(req,res) => {
    try{
        res.status(200).json(req.user);
    }
    catch(err){
        res.status(500).json({errro:err.message});
    }
}