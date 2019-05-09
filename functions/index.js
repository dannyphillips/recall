const functions = require("firebase-functions");
const request = require("request");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});

exports.helloSlack = functions.https.onRequest((r, response) => {
  request.post(
    "https://hooks.slack.com/services/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",
    {
      json: {
        text: `Hello Slack, this is Recall!`
      }
    }
  );
  response.send("Successfully posted message to slack!");
});
