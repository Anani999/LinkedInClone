const UserProfile = require('../models/Userprofile');

const createProfile = async({user,name,about,skills,contactInfo,socialLinks,experience, education, certifications}) => {
    // Assuming req.user contains the authenticated user's ID

    if (!user) {
        throw new Error('No user found');
    }

    try {
        const newUserProfile = new UserProfile({
            user,
            name,
            about,
            skills,
            contactInfo,
            socialLinks,
            experience,
            education,
            certifications
        });

        const savedProfile = await newUserProfile.save();
        return savedProfile;
    } catch (error) {
        throw new Error(error.message);
    }
};

exports.createProfile = createProfile;
// Create a new user profile
exports.createUserProfile = async (req, res) => {
    const { name, about, skills, contactInfo, socialLinks, experience, education, certifications } = req.body;
    const user = req.user; // Assuming req.user contains the authenticated user's ID

    if (!user) {
        return res.status(401).json({ message: 'No user found' });
    }

    try {
        const savedProfile = await createProfile({
            user,
            name,
            about,
            skills,
            contactInfo,
            socialLinks,
            experience,
            education,
            certifications
        });
        return res.status(201).json(savedProfile);
    } catch (error) {
        return res.status(500).json({ message: 'Error creating profile', error });
    }
};

// Get a user profile by ID
exports.getUserProfile = async (req, res) => {
    
    const user = req.user;

    try {
        const userProfile = await UserProfile.findOne({ user }).populate('user');
        if (!userProfile) {
            return res.status(404).json({ message: 'Profile not found' });
        }
        return res.status(200).json(userProfile);
    } catch (error) {
        return res.status(500).json({ message: 'Error fetching profile', error });
    }
};
const User = require('../models/User');
exports.getProfileByName = async(req,res) => {
    const name = req.params.name;
    try{
        const user = await User.findOne({name});
        const profile = await UserProfile.findOne({user});
        res.status(200).json({profile})
    }catch(err){
        res.status(500).json({error:err.message})
    }
}

// Update a user profile
exports.updateUserProfile = async (req, res) => {
    const { id } = req.params;
    const { name, about, skills, contactInfo, socialLinks, experience, education, certifications } = req.body;
    const user = req.user;

    if (!user) {
        return res.status(401).json({ message: 'No user found' });
    }

    try {
        const updatedProfile = await UserProfile.findOneAndUpdate(
            { user: id },
            { name, about, skills, contactInfo, socialLinks, experience, education, certifications },
            { new: true }
        );

        if (!updatedProfile) {
            return res.status(404).json({ message: 'Profile not found' });
        }

        return res.status(200).json(updatedProfile);
    } catch (error) {
        return res.status(500).json({ message: 'Error updating profile', error });
    }
};


// Delete a user profile
exports.deleteUserProfile = async (req, res) => {
    const { id } = req.params;
    const user = req.user;

    if (!user) {
        return res.status(401).json({ message: 'No user found' });
    }

    try {
        const deletedProfile = await UserProfile.findOneAndDelete({ user: id });

        if (!deletedProfile) {
            return res.status(404).json({ message: 'Profile not found' });
        }

        return res.status(200).json({ message: 'Profile deleted successfully' });
    } catch (error) {
        return res.status(500).json({ message: 'Error deleting profile', error });
    }
};
