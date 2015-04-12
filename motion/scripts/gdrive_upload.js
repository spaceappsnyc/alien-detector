var fs = require("fs");

//Command-line arguments
var args = process.argv.slice(2);

fs.readFile(args[0], function(err,data) {
  if (err) throw err;

  var path = require("path");
  var filename = path.basename(args[0]);

  // You'll need a single TembooSession object in your code, eg:
  var tsession = require("temboo/core/temboosession");
  var session = new tsession.TembooSession("designsart", "AlienDetector", "53c840364dbe47d0b01e63acb08673b7");

  var Google = require("temboo/Library/Google/Drive/Files");

  var insertChoreo = new Google.Insert(session);

  // Instantiate and populate the input set for the choreo
  var insertInputs = insertChoreo.newInputSet();

  // Set inputs
  insertInputs.set_ClientID("694034704739-5l1nrrm4mtt0jqda70dat57oo8oropfg.apps.googleusercontent.com");
  insertInputs.set_ClientSecret("PlrvEEO1mwtAEBssILgT2ud6");
  insertInputs.set_RefreshToken("1/82sfJhqVsCe4s2E0MAXhmDhL8AIVhLGsQ_UziT8BKrgMEudVrK5jSpoR30zcRFq6");
  insertInputs.set_RequestBody('{"title": "' + filename + '"}');
  insertInputs.set_FileContent(data.toString("base64"));
  insertInputs.set_ContentType("image/jpg");
	
  insertInputs.addOutputFilter("view_link", "/alternateLink", "Response")

  // Run the choreo, specifying success and error callback handlers
  insertChoreo.execute(
    insertInputs,
    function(results){console.log("Posted file to Google Drive, view link is: " + results.getResult("view_link"));},
    function(error){console.log(error.type); console.log(error.message);}
  );
});
