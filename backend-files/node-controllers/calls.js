var Call = {
    getUsers: function(callback)
    {
        return users;
    },
    AddUser: function (req, callback) {
        const user = req.user;
        users.push(user);
        // res.json(user);
        return user;
    }
}

module.exports = Call;