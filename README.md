# Recall [![StackShare](https://img.shields.io/badge/tech-stack-0690fa.svg?style=flat)](https://stackshare.io/dannyphillips/til)

A bot for capturing things I learn everyday &amp; voting on the best learnings

# Product Requirements

### TIL Creation
Daily Zapier Job sends a slack link to fillout a google form

```
Zapier (Schedule + Slack + Link to Google Form)
```

### TIL Voting
Tier of Zapier schedules send the top picks for the period and vote for best
- Best of week (last 7 days)
- Best of month (last 4 weeks)

```
- Zapier (Schedule + Slack + Link to Web App voting page)
- Web App (Reads Google Sheet & Display items to vote)
- Web App (Write votes to Google Sheet via API)
```

### TIL Summary
- Rolling weekly digest
