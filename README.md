# URL Shortener API

This is a RESTful API for shortening URLs. Whenever a user makes use of the short URL, it redirects the user to the original link, as well as tracking the number of clicks for that short URL.

It was created using Node.js and Express, while MongoDB was used as the database.

### Routes :
- `GET /:shortId` : Redirects the user to the original link of the short URL
- `GET /analytics/:shortId` : Gives the number of clicks for a particular short URL
- `POST /url` : Creates a unique short URL for a given link

### Usage :
1. Ensure that you have Node.js and MongoDB installed
2. Clone this repo in your terminal or Download as ZIP
3. Navigate to the folder of this repo on your terminal
4. Type `npm install` to install all dependencies
5. Type `npm start` to start the server (By default it starts at http://localhost:5000)
6. Use any API Tester like Postman or Insomnia to test it
