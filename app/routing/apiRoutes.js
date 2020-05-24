var friends = require("../data/friends");

module.exports = function (app) {
    //display all friends
    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });

    app.post("/api/friends", function (req, res) {

        console.log("posting...")
        var newFriend = req.body;

        var getTotalDifferencesForAllFriends = function () {
            var totalDifferences = [];
            var newfriendscores = newFriend.scores;
            for (var i = 0; i < friends.length; i++) {
                var currenttotaldifference = 0;
                var currentFriend = friends[i];
                for (var j = 0; j < currentFriend.scores.length; j++) {
                    //All friends have scores array length 10
                    var newFriendCurrentScore = newfriendscores[j];
                    var currentFriendsCurrentScore = currentFriend.scores[j];
                    currenttotaldifference += Math.abs(newFriendCurrentScore - currentFriendsCurrentScore);
                }
                totalDifferences.push(currenttotaldifference);
            }
            return totalDifferences;
        }

        var friendsVsNewScore = getTotalDifferencesForAllFriends();
        var currentLow = 100;
        var personNumber = -1;
        for (var i = 0; i < friendsVsNewScore.length; i++) {
            if (friendsVsNewScore[i] < currentLow) {
                currentLow = friendsVsNewScore[i];
                personNumber = i;
            }
        }
        //display person with id equal to personNumber+1
        console.log(friends[personNumber].name);
        
        console.log(newFriend);

        friends.push(newFriend);

        res.json(newFriend);
    });
}