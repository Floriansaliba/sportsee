# sportsee

## Description : 

SportSee is a web app that will permit its users to follow-up their sport activity details (like sessions duration or number of calories burned). Follows these instructions to access home page. 

## Prerequisites :

•	NodeJS v14.16.0 

•	Yarn

•	A laptop with 1024 by 780 pixels minimum resolution

## Installation

###Clone the following repository on your computer
git clone https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard

2.	Launching the back-end
•	The yarn command will allow you to install the dependencies.
•	The yarn start command will allow you to run the micro API on port 3000

3.	Clone this repository on your computer :

git clone https://github.com/Floriansaliba/sportsee

4. The yarn command will allow you to install the dependencies.

5. yarn start (choose port 3001) will allow you to launch the app on your browser


## End-points

There are 2 users with id 12 and 18, available for the time being, their URL are

•	http://localhost:3001/user/12

•	http://localhost:3001/user/18

As a developer, you can access user information separately,  as follows :

•Retrieves a user daily activity by accessing the weight and calories follow-up : 
http://localhost:3001/user/{userId}/activity

•Retrieves a user sessions duration : 
http://localhost:3001/user/{userId}/average-sessions

•Retrieves a user objective completion of the day : 
http://localhost:3001/user/{userId}/today-score

•Retrieves a user activities information : 
http://localhost:3001/user/{userId}/activities

•Retrieves a user consumption of the day (calories, proteins, carbohydrates and fats :
http://localhost:3001/user/{userId}/key-data




