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

var Google = require("temboo/Library/Google/Gmail");

var sendEmailChoreo = new Google.SendEmail(session);

// Instantiate and populate the input set for the choreo
var sendEmailInputs = sendEmailChoreo.newInputSet();

// Set inputs
sendEmailInputs.set_MessageBody("Warning! Warning! We detect an alien!");
sendEmailInputs.set_ToAddress("designs.art@gmail.com");
sendEmailInputs.set_Subject("Alien Detector");
sendEmailInputs.set_Username("designs.art");
sendEmailInputs.set_Password("My Google email Password");
sendEmailInputs.set_FromAddress("designs.art@gmail.com");
sendEmailInputs.set_Attachment(data.toString("base64"));
sendEmailInputs.set_AttachmentName(filename);

// Run the choreo, specifying success and error callback handlers
sendEmailChoreo.execute(
    sendEmailInputs,
    function(results){console.log(results.get_Success());},
    function(error){console.log(error.type); console.log(error.message);}
);
