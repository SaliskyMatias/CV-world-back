const getAllUsersControllerDashboard = require('../../controllers/userController/getAllUsersControllerDashboard');

const getAllUsersDashboard = async (req, res) => {
    try {
        const usersFound = await getAllUsersControllerDashboard();

        if(!usersFound || usersFound.length === 0) {
            return res.status(404).json({ error: "No User found." });
        }

        res.status(200).json(usersFound);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getAllUsersDashboard;
