# Todo App

This is a project building a fully functional Todo App. I used JavaScript, Node.js, Express.js, and MongoDB.

## Description

Items added in the To Do list have the option to be in a completed / uncompleted state. User also has the option to delete items, which will be moved to a seperate page (trash.html). In the trash page, user has option to permanently delete or recover items on this page. All items saved will be pushed to MongoDB.

---

## Future Steps / Improvements

The main issue encountered was moving items to the trash page, the function works however due to the live server reload, items moved to the trash page are deleted when clicking on the trash page since the page is reloaded and items do not appear there. 

Second issue is saving / pushing items to Mongo DB. Trouble taking the items from main page, along with their state, and pushing to MongoDB. Mongo DB is setup and connected to webpage using express.js, however building the connectivity from individual items on list and MongoDB was the issue. 

Improving this would be working on the issues encountered, additionally with export function from MongoDB. 

---

## Contributers

- Miguel Lopez <ekimmai@outlook.com>
