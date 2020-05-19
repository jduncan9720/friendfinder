// Create a set of routes for displaying the HTML pages

// Create a route for displaying the home page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

// Create a route to go to the survey page
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
});