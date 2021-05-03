// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");

var tables = require("../data/tableData.js");
var waiting = require("../data/waitinglistData.js");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  app.get("/tables", function(req, res) {
    res.render('pages/tables', {tables, waiting});
  });

  app.get("/reserve", function(req, res) {
    res.render('pages/reserve');
  });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.render('pages/home');
  });
};
