//Command-line arguments
// After that args[0] is a timestamp passed from Motion
var fs = require("fs");


//Command-line arguments
var args = process.argv.slice(2);

fs.readFile(args[0], function(err,data) {
  if (err) throw err;

  var path = require("path");
  var filename = path.basename(args[0]);

//Command-line arguments
var args = process.argv.slice(2);



// You'll need a single TembooSession object in your code, eg:
var tsession = require("temboo/core/temboosession");
var session = new tsession.TembooSession("<YOUR_TEMBOO_USERNAME>", "<YOUR_TEMBOO_APPNAME>", "<YOUR_TEMBOO_KEY>");

var Twitter = require("temboo/Library/Twitter/Tweets");

var updateWithMediaChoreo = new Twitter.UpdateWithMedia(session);


// Instantiate and populate the input set for the choreo
var statusesUpdateInputs = statusesUpdateChoreo.newInputSet();

// Set inputs
updateWithMediaInputs.set_AccessToken("<YOUR_	TWITTER_ACCESS_TOKEN>");
updateWithMediaInputs.set_AccessTokenSecret("<YOUR_TWITTER_ACCESS_TOKEN_SECRET>");
updateWithMediaInputs.set_ConsumerSecret("<YOUR_TWITTER_CONSUMER_SECRET>");
updateWithMediaInputs.set_ConsumerKey("<YOUR_TWITTER_CONSUMER_KEY>");
updateWithMediaInputs.set_StatusUpdate("Motion detected in DOORBELL");
updateWithMediaInputs.set_MediaContent(data.toString("base64"));

updateWithMediaInputs.addOutputFilter("tweet_id", "/id_str", "Response")

// Run the choreo, specifying success and error callback handlers
updateWithMediaChoreo.execute(
    statusesUpdateInputs,
    function(results){console.log("Posted note to Twitter, message ID is: " + results.getResult("tweet_id"));},
    function(error){console.log(error.type); console.log(error.message);}
);

