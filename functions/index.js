const functions = require("firebase-functions");
  const IncomingWebhook = require("@slack/webhook");

const SLACK_WEBHOOK_URL =
  " https://hooks.slack.com/services/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";
// const slack = require("slack-notify")(MY_SLACK_WEBHOOK_URL);


// Prints Hello World in Browser
exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});

// Posts Hello World to Slack
// exports.helloSlack = functions.https.onRequest((r, response) => {
//   response.send("Successfully posted message to slack!");
//   slack.send({
//     channel: "#general",
//     icon_url: "http://example.com/my-icon.png",
//     text: `Hello Slack, this is Recall!`,
//     unfurl_links: 1,
//     username: "Jimmy"
//   });
// });

exports.helloSlack = functions.https.onRequest((r, response) => {
  response.send("Successfully posted message to slack!");
  const webhook = new IncomingWebhook(SLACK_WEBHOOK_URL);

  // Send the notification
  (async () => {
    await webhook.send({
      text: "I've got news for you..."
    });
  })();
});

// Posts Daily TIL Form
// exports.recallDaily = functions.https.onRequest((r, response) => {
//   response.send("Successfully posted message to slack!");
//   return request.post(slackWebhook, {
//     json: {
//       text: `Hello Slack, this is Recall!`
//     }
//   });
// });

// // Posts Weekly Digest Poll
// exports.recallWeekly = functions.https.onRequest((r, response) => {
//   response.send("Successfully posted message to slack!");
//   return request.post(slackWebhook, {
//     json: {
//       text: `Hello Slack, this is Recall!`
//     }
//   });
// });

// // Posts Monthly Digest Poll
// exports.recallMonthly = functions.https.onRequest((r, response) => {
//   response.send("Successfully posted message to slack!");
//   return request.post(slackWebhook, {
//     json: {
//       text: `Hello Slack, this is Recall!`
//     }
//   });
// });

// // Posts Random Digest Poll
// exports.recallRandom = functions.https.onRequest((r, response) => {
//   response.send("Successfully posted message to slack!");
//   return request.post(slackWebhook, {
//     json: {
//       text: `Hello Slack, this is Recall!`
//     }
//   });
// });