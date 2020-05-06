# Budget Tracker

IndexedDB is used so that the budget tracker persists data even when the device is not online. When the device finally reconnects, any pending transactions will be synced with the backend api. Write all of your IndexedDB code in `public/db.js`.

## Instructions

Review the contents of this directory 


Server Side
* server.js
* routes/api.js
* models/transaction.js

Client Side
* public/index.html
* public/index.js
* public/db.js
* public/