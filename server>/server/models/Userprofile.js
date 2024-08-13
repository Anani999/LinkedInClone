const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserProfileSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model
        required: true
    },
    name: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true
    },
    skills: {
        type: [String], // Array of strings
        required: true
    },
    followers: {
        type: Number,
        default: 0
    },
    connections: {
        type: Number,
        default: 0
    },
    profileImageUrl: {
        type: String,
        default: `${process.env.baseURL}/defaults/profile.png` // Placeholder for a default image
    },
    contactInfo: {
        email: {
            type: String,
        },
        phone: {
            type: String,
        },
        address: {
            type: String,
        }
    },
    socialLinks: {
        linkedin: {
            type: String,
            default: ''
        },
        twitter: {
            type: String,
            default: ''
        },
        github: {
            type: String,
            default: ''
        },
        website: {
            type: String,
            default: ''
        }
    },
    experience: [
        {
            company: {
                type: String,
                required: true
            },
            position: {
                type: String,
                required: true
            },
            startDate: {
                type: Date,
                required: true
            },
            endDate: {
                type: Date,
                required: true
            },
            description: {
                type: String,
                required: true
            }
        }
    ],
    education: [
        {
            institution: {
                type: String,
                required: true
            },
            degree: {
                type: String,
                required: true
            },
            fieldOfStudy: {
                type: String,
                required: true
            },
            startDate: {
                type: Date,
                required: true
            },
            endDate: {
                type: Date,
                required: true
            }
        }
    ],
    certifications: [
        {
            name: {
                type: String,
                required: true
            },
            issuingOrganization: {
                type: String,
                required: true
            },
            issueDate: {
                type: Date,
                required: true
            },
            expirationDate: {
                type: Date,
                required: true
            },
            credentialId: {
                type: String,
                required: true
            },
            credentialUrl: {
                type: String,
                required: true
            }
        }
    ]     
}, { timestamps: true }); // Adds createdAt and updatedAt timestamps automatically

const UserProfile = mongoose.model('UserProfile', UserProfileSchema);

module.exports = UserProfile;
