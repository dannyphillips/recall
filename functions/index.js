const functions = require("firebase-functions");
const request = require("request");

const slackWebhook =
  "https://hooks.slack.com/services/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";

// Prints Hello World in Browser
exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});

// Posts Hello World to Slack
exports.helloSlack = functions.https.onRequest((r, response) => {
  response.send("Successfully posted message to slack!");
  return request.post(slackWebhook, {
    json: {
      text: `Hello Slack, this is Recall!`
    }
  });
});

// Posts Daily TIL Form
exports.recallDaily = functions.https.onRequest((r, response) => {
  response.send("Successfully posted message to slack!");
  return request.post(slackWebhook, {
    json: {
      text: `What did you learn today? https://goo.gl/forms/nLCmgTCFPoVNe0CF2!`
    }
  });
});

// Posts Weekly Digest Poll
exports.recallWeekly = functions.https.onRequest((r, response) => {
  response.send("Successfully posted message to slack!");
  const blocks = [
    {
      type: "section",
      text: {
        type: "plain_text",
        emoji: true,
        text: "Vote for your top TIL from the past week:"
      }
    },
    {
      type: "divider"
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "*Today - 4:30-5pm*\nEveryone is available: @iris, @zelda"
      },
      accessory: {
        type: "button",
        text: {
          type: "plain_text",
          emoji: true,
          text: "Choose"
        },
        value: "click_me_123"
      }
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "*Tomorrow - 4-4:30pm*\nEveryone is available: @iris, @zelda"
      },
      accessory: {
        type: "button",
        text: {
          type: "plain_text",
          emoji: true,
          text: "Choose"
        },
        value: "click_me_123"
      }
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text:
          "*Tomorrow - 6-6:30pm*\nSome people aren't available: @iris, ~@zelda~"
      },
      accessory: {
        type: "button",
        text: {
          type: "plain_text",
          emoji: true,
          text: "Choose"
        },
        value: "click_me_123"
      }
    }
  ];
  return request.post(slackWebhook, {
    json: {
      text: `Vote for the top TIL this week!`,
      blocks: blocks
    }
  });
});

// Posts Monthly Digest Poll
exports.recallMonthly = functions.https.onRequest((r, response) => {
  response.send("Successfully posted message to slack!");
  return request.post(slackWebhook, {
    json: {
      text: `Vote for the top TIL this month!`
    }
  });
});

// Posts Random Digest Poll
exports.recallRandom = functions.https.onRequest((r, response) => {
  response.send("Successfully posted message to slack!");
  return request.post(slackWebhook, {
    json: {
      text: `Vote for the top TIL from this random selection!`
    }
  });
});