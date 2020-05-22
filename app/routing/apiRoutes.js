var friends = require("../data/friends");

module.exports = function (app) {
    //display all friends
    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });

    app.post("/api/friends", function (req, res) {

        console.log("posting...")
        var newFriend = req.body;

        var newScore = function(array){
            var newScore = [];
            for (var i = 0; i < array.length; i++){
                newScore.push(parseInt(array[i]));
            }
            return newScore
        }



        // Using a RegEx Pattern to remove spaces from newCharacter
        // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
        newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();

        console.log(newFriend);

        friends.push(newFriend);

        res.json(newFriend);
    });
}