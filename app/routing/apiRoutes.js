const FRIENDS = require("../data/friends.js");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        return res.json(FRIENDS);
    });

    app.post("/api/friends", function (req, res) {
        var userData = req.body;
        var userScores = userData.scores
        var newFriendName = "";
        var newFriendImage = "";
        var totalDiff = 51;

        for (i in FRIENDS) {
            var diff = 0;
            for (j in userScores) {
                diff += Math.abs(FRIENDS[i].scores[j] - userScores[j]);
            }
            if (diff < totalDiff) {
                totalDiff = diff;
                newFriendName = FRIENDS[i].name;
                newFriendImage = FRIENDS[i].photo;
            }
        }

        FRIENDS.push(req.body);
        res.json({status: 'OK', newFriendName: newFriendName, newFriendImage: newFriendImage});
        
    });
}