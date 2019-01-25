This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## About this test

To see this test working, clone the repository and type `npm install` from the root folder.

To start the back-end, `cd` into the api folder and run `npm install` again.

Start the database typing `mongo` in a terminal window and start the server by typing `nodemon server.js` in the terminal inside the api folder.

In the root folder type `npm start`.

### Technologies used

For this test I chose to use [React](https://reactjs.org/) because it is the library that is being used at Breezy for newer development. Additionally, it is the JavaScript tool in sick I have more knowledge and experience.

For the backend I used a simple server in [express](https://expressjs.com/) and a database using [MongoDB](https://www.mongodb.com/) and [Mongoose](https://mongoosejs.com/), so I could have persistent data that I could use to see the components behavior and test their functionality when many books where present, without having to create new books every time.

### The test

The book catalog fetches the book list from the DB, handles all the information in the client and pushes the changes to the DB for them to get stored.

The search bar filters by name and author while the user is typing and the genres dropdown is created by taking a all the genes from the existing books, organizing them and filtering duplicates.

### Success

All the functionalities that were added to the app are working as expected.

Hands on coding gives you the best practice and learning. I was able to remember and strengthen some concepts that I had not practiced for a while such as the use of the react lifecycle methods.

### Challenges
Lack of knowledge about backend technologies. The server and DB do the minimum to get the app up and running displaying some basic data.

I was not able to create many tests. I have not practiced that in a while and I was unsuccessfull in my research trying to remember how to test in React, so there are only a couple tests that the main components render.

### What to improve
There is always things that you want to improve when developing something but I didn't want to take more than two weeks on the test. So there are a few things that were left out.

I want to add more tests, not only for learning purposes but to reduce the time spent checking the existing functionalities while making changes in the app.

Since the test was about front end development, I didn’t consider the styling to be a priority so I didn't spend much time in the CSS and the appearance of the app could be improved.

I also wanted to make the adding and updating of the genres separately, but I didn’t foresaw this issue on time and due to the lack of knowledge of databases, I would have had to spend a lot of time researching or refactoring the structure of the whole app.

I would have liked to include either Redux or React Context but I did not feel confident enough about getting it to work on the time I had estimated.

### Additional notes

The test I am presenting is in the master branch. I will continue working on the developer branch on what is there to imporoove for learning purposes, but I will not merge to master after I send this.
