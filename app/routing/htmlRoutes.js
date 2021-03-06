// Create a set of routes for displaying the HTML pages
var path = require("path");

module.exports = function (app) {
    // Create a route for displaying the home page
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/assets/home.html"));
    });

    // Create a route to go to the survey page
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/assets/survey.html"));
    });
}