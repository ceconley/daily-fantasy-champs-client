Daily Fantasy Champs

Daily Fantasy Champs is a weekly Fantasy Football game.  Every week, users can choose between predetermined lineups and enter them in different contests.  Each lineup consists of a different combination of players.  Points are assigned based on the individual statistic of the players.  Lineups will be scored on the aggregate of the individual player points.  The Lineup with the highest score wins the contest.  Every week there will be different combinations of players to make up the lineups.  

Backend Repo
https://github.com/ceconley/daily-fantasy-champs-rails-api

Deployed Sites
Client: https://ceconley.github.io/daily-fantasy-champs-client/
API: https://daily-fantasy-champs-rails-api.herokuapp.com/

Technologies Used
•	HTML
•	CSS
•	JavaScript
•	jQuery
•	AJAX
•	Handlebars
•	Bootstrap

Planning
I started by writing out user stories.  Once I had these, I drew up some wireframes of the different views I wanted to display.  After that I drew and ERD of what the relationships on the backend would look like. I then broke everything into small tasks and put them into a trello board.  Once all my planning docs were in place, I started building the backend.

User Stories 
“A user should be able to”

	Authentication

◦	Sign up for an account using email, username and password when signed out
◦	Sign in using username and password when signed out
◦	Change password when signed in
◦	Sign out when signed when signed in 

	Once Authenticated

◦	View all contests
◦	View All of their contests
◦	View a specific contest with more details
◦	Create lineups by entering them in contests
◦	Update their entries
◦	Delete their entries
◦	View their Lineups 

Wireframes
public/wireframes.jpg

![Pic of App](./public/app-screen-shot.jpg "App")

Installation Instructions
•	Fork
•	Clone
•	Checkout to Dev branch
•	Run ```npm install```

Future Version Features
-Customizable lineups based on a Salary Cap system.
-Connection to 3rd party api for real time stats and scoring
-Storing Money in account and paid contests
