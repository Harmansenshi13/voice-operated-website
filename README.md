React Js Voice Controlled Simple Website
This is voice controlled website

Preprerequisite
Enable Youtube Data API v3 on Google Cloud Console
Youtube API key from Google Cloud Console
Nodejs
Python (may or may not required)
Browser
Microphone
Installation
Clone this repo

git clone git@github.com:TusharG22/voice_controlled_web.git
download the dependencies

npm install
Edit a .env file in root directory and add the following

VITE_APP_YOUTUBE_API_KEY=YOUR_YOUTUBE_API
VIET_APP_YOUTUBE_API_URL=https://www.googleapis.com/youtube/v3
Run the project

npm run dev
Open the browser and go to http://localhost:5173

How to use
Open the website
Click on the close icon on top right corner to start voice commands
Say the commands
Stop the voice commands by saying Stop taking commands
You can also stop the voice commands by clicking on the mic icon on top bottom right corner
Follow the commands given below
Features in version 1.0
1. Voice controlled navigation with all validations
2. Voice controlled scrolling
3. Voice controlled video opening (videos fetching dynamically from youtube api)
4. Voice controlled application history
5. Voice controlled pagination with all validations
Added features in version 1.1
6. Voice controlled search
7. Voice controlled video controls
8. Voice controlled form filling

Not only this it is giving responses also
This is having more than 35+ commands
Commands:-
These are the following commands which will help you to run it with voice commands:-

Stop Taking Voice Commands

commands	use
Stop Recognition

Stop Taking Commands

to stop commands after starting with commands

Navigation Commands

commands	use
Navigate to <_page_name_> page/route

Navigate to <_page_name_>

Navigate to <_route_name_> page/route

Navigate to <_route_name_>

This will help you to navigate to pages
Example:- Navigate to Home/Index Page/route, Navigate to Home/Index, Navigate to video/videos page/route

Open Video Commands - Home Page

commands	use
open video number <_number_>

open video number <_number_> from uploads

open video number <_number_> from popular uploads

This will help you to select the particular video in home page
Example:- open video number 1, open video number 1 from uploads, open video number 1 from popular uploads

Open Video Commands - Home Page Dialog Box

commands	use
open video number <_number_>

In home page when you will select any video using

open video number <_number_>

command in home page a dialog box will appear
Example:-
step 1 :- say `open video number 1`
step 2 :- Dialog box will appear to select from two videos
step 3 :- now choose one of two videos from dialog box by command `open video number 1 or 2`
Open Video Commands - Videos Page

commands	use
open video number <_number_>

next page

This will help you to select any video showing per page from 12 videos.
You can select only one video from showing 12 videos.
Videos page will consist of 12 videos per page as it contains pagination.
pagination commands are given in next table.
Example:- open video number 10

Open Next/Prev page of pagination - videos page

commands	use
next page

next

prev page

prev

previous

previous page

This will help you to make next and previous page in videos page as it contains pagination.
Ther commands will work only in videos page.
Example:- next page, previous page, next, previous

Go Back/Next Route/History of the application commands

commands	use
go back

go to prev page

go to previous page

go backward

go forward

go next

go to next page

These commands will help you to move next/back of the page in browser history of the application

Scrolling commands

commands	use
go bottom

go to bottom

go top

go to top

go to half

go to half of the page

scroll to half

scroll to bottom/top

scroll/move by <_number_> px/pixel/percentage/percent/%

scroll/move to <_number_> px/pixel/percentage/percent/%

scroll up/down

move up/down

This will help you to scroll the page
Example:- go bottom, go to bottom, scroll to bottom, scroll to bottom, scroll to 10%, scroll by 10px

Search with voice commands

commands	use
open search page

open search

search for me

search

search video

This will help you to open search page
Example:- open search page, open search, search for me, search, search video

search for <_keyword_>

This will help you to search for any keyword using voice
Example:- search for web tutorials

Open Commands Table command

commands	use
open commands table

This will help you to open commands table

Next
More/Pending Features Coming in next Update!
