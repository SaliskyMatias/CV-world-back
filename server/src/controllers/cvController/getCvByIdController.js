const { Cv, Comment, User } = require('../../db');

const getCvByIdController = async (cvId) => {
    try {
        console.log("CV ID: ", cvId);
        
        const cvFound = await Cv.findOne({
            where: { id: cvId, deleted: false },
            include: [
                {
                    model: Comment,
                    include: [{ model: User, attributes: ['name', 'photo'] }] // Include user data with comments
                },
                {
                    model: User,
                    attributes: ['name', 'photo'] // Include user's name and image
                }
            ]
        });

        console.log(cvFound);

        
        const cvFormat = {
            image: cvFound.image,
            id: cvFound.id,
            header: cvFound.header,
            description: cvFound.description,
            contact: cvFound.contact,
            experience: cvFound.experience,
            education: cvFound.education,
            skills: cvFound.skills,
            speakingLanguages: cvFound.speakingLanguages,
            otherInterests: cvFound.otherInterests,
            category: cvFound.category,
            language: cvFound.language,
            userName: cvFound.User.name, // Access the user's username
            userImage: cvFound.User.photo ? cvFound.User.photo : null, // Access the user's photo
            Comments: cvFound.Comments.map((comment) => ({
                comment: comment.comment,
                photo: comment.User.photo ? comment.User.photo : null, // Access the user's photo
                username: comment.User.name // Access the user's username
            }))
        };

        return cvFormat;
    } catch (error) {
        console.error('Error searching for CV by ID:', error);
        throw error;
    }
};

module.exports = getCvByIdController;