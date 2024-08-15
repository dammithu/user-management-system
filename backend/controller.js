const User = require('./model');

const getUser = (req, res) => {
    User.find()
        .then(response => {
            res.json(response);  
        })
        .catch(error => {
            res.json({ error: error.message }); 
        });
};

const addUser = (req, res) => {
    const user = new User({
        id: req.body.id,
        name: req.body.name
    });
    user.save()
        .then(response => {
            res.json(response);  
        })
        .catch(error => {
            res.json({ error: error.message }); 
        });
};

const updateUser = (req, res) => {
    const { id, name } = req.body;
    User.updateOne({ id: id }, { $set: { name: name } })
        .then(response => {
            res.json(response);  
        })
        .catch(error => {
            res.json({ error: error.message }); 
        });
};

const deleteUser = (req, res) => {
    const id = req.body.id;
    User.deleteOne({ id: id })
        .then(response => {
            res.json(response);  
        })
        .catch(error => {
            res.json({ error: error.message }); 
        });
};

exports.getUser = getUser;
exports.addUser = addUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
