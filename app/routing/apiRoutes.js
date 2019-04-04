var friendsData = require("../data/friends.js");



module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
        console.log(app);
    });

    app.post("api/friends", function(req, res) {
        res.json(friendsData);
        var userInput = req.body;
        var totalDifference = 999;
        var match;

        for(i = 0; i < friendsData.length; i++) {
            var differenceOfDataTaken = 0;

            for(x = 0; x < friendsData[i].scores.length; x++) {
                differenceOfDataTaken += Math.abs(userInput.scores[x]-friendsData[i].scores[x]);
            }
            if (differenceOfDataTaken < totalDifference) {
                match = friendsData[i];
                totalDifference = differenceOfDataTaken;
            }
        }

    friendsData.push(userInput);
    res.json(match);

});

    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
      });

};