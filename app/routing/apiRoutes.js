var friendsData = require("../data/friends.js");



module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });

    app.post("api/friends", function(req, res) {
        res.json(friendsData);
    });




    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
      });

};