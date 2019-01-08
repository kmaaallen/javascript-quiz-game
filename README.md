# JavaScript Quiz Game - New Zealand Native Birds
This is a simple javaScript multiple choice quiz on identifying birds native to New Zealand.
It is designed for users to test their knowledge but choosing from four options and then to
receive a score at the end of the game.

It was built based on the tutorial provided by Code Explained and modified to fit my design.
<br> The repository for code can be found at : https://github.com/CodeExplainedRepo/Multiple-Choice-Quiz-JavaScript
<br> Their youTube tutorial  for this project can be found at: https://www.youtube.com/watch?v=49pYIMygIcU

This game was created to practice using javascript. 
<br> It can be viewed at : https://kmaaallen.github.io/javascript-quiz-game/


## UX
This game is for anybody who wants to test their knowledge of New Zealand native birds.
It aims to provide a picture of a bird and four options for users to choose from.

1) As a quizzer I want to choose from a range of answers and get a score at the end.
2) When I answer a question, I want to see if I answered correctly or not.
3) At the end I want to see my final score.

During project development I created some basic wireframes for my project. 
<br> These can be viewed under: https://github.com/kmaaallen/javascript-quiz-game/tree/master/wireframes

## Features
### Existing Features
#### Feature 1 - Start button
The start button allows users to start the quiz from the home page by clicking on it.

#### Feature 2 - Question and answer set up
Once the quiz has been started, each question/answers screen has the same format.
A question at the top, an immage underneath, and four buttons below labelled with different answers for the user to choose from.
Once a user makes a button choice and clicks on it, the option buttons disappear and a message is displayed, either "correct!" 
or "incorrect!" depending on whether the user got the question right or not. This will display automatically for 2 seconds then
the next question/answers set is displayed.
HOWEVER, if it is the last question in the quiz the score page is displayed instead of next question set.

#### Feature 3 - Score page
The user's score is displayed.
A different score message is displayed depending on the score out of ten.
A 'try again' button is displayed which will take users back to the start page of the quiz.

### Features Left to Implement
#### Feature 1 - Hint button for extra clues.
Users recieve an alert with an extra hint before they make their choice.
If the hint button is activated, users recieve only half a point if then answered correctly.

#### Feature 2 - Extra Challenge - Do the quiz in Te Reo (Māori)
Button option at start of quiz takes users to another page to take the quiz in Te Reo.
Te Reo options could then be removed from the current version so one quiz in English and one in Te Reo as an extra challenge.

## Technologies Used
### HTML, CSS and JavaScript
Used as base languages to write and style game.
<br> HTML: https://www.w3.org/TR/html/
<br> CSS: https://www.w3.org/Style/CSS/Overview.en.html
<br> JavaScript: https://www.w3schools.com/js/default.asp

### Cloud9
This project was written on Cloud9.
<br>https://c9.io/login

### JQuery
This project uses JQuery to assist in execution of javaScript.
<br>https://jquery.com/

### Google Fonts
Main theme font "Roboto" was imported from Google fonts.
<br>https://fonts.google.com/

### Git
Local git repository was pushed to remote repository on GitHub and site was published using GitHub pages.
<br> https://git-scm.com/
<br>https://github.com/

### W3C HTML and CSS and JS online validators
Online validators were used to check code was valid for HTML and CSS and online JS tool was used to check for errors.
<br>HTML validator: https://validator.w3.org
<br>CSS Validator: http://jigsaw.w3.org/css-validator/
<br> JS checker: https://jshint.com/


## Testing
### Testing my user stories 
Testing documentation regarding user stories and cross-browser testing can be viewed at:
<br> https://github.com/kmaaallen/javascript-quiz-game/tree/master/documentation


## Deployment
This page has been deployed using GitHub Pages and can be viewed at : https://kmaaallen.github.io/javascript-quiz-game/

## Credits
### Content
All content regarding New Zealand native birds (particularly bird names) was taken from New Zealand Department of Conservation Webiste, available at : https://www.doc.govt.nz/nature/native-animals/birds/birds-a-z/

### Media
Images of birds were sourced from google images and filtered by the advanced search. Only images "free to use, share or modify, even commercially"
were selected.
Links to the origin of these images are below:
<br>https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwj59rWahd7fAhVEThoKHS_2DeoQjRx6BAgBEAU&url=https%3A%2F%2Fwww.flickr.com%2Fphotos%2Fsidm%2F6637811451&psig=AOvVaw1La-VuonD8N1Ss3sqnO7Jq&ust=1547031908695429
<br>https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwid2Lrchd7fAhWS4YUKHYj5CzgQjRx6BAgBEAU&url=https%3A%2F%2Fwww.flickr.com%2Fphotos%2Fsidm%2F3711449177&psig=AOvVaw0ZnBS6jEzbz4Ih_HaJnTUJ&ust=1547032062993533
<br>https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjm5974hd7fAhWC4IUKHXPQDpAQjRx6BAgBEAU&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ANz_boobook.JPG&psig=AOvVaw3MzURV2F8RpT6HOOLbrp9N&ust=1547032133335112
<br>https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiK5eeIht7fAhUvyYUKHamKCT4QjRx6BAgBEAU&url=https%3A%2F%2Fwww.flickr.com%2Fphotos%2Fsidm%2F6557924841&psig=AOvVaw0CSRtyzr69PPJL4cbTMeig&ust=1547032162330132
<br>https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjyufyyht7fAhVQzhoKHcXABJ8QjRx6BAgBEAU&url=https%3A%2F%2Fwww.flickr.com%2Fphotos%2Fvolvob12b%2F20151613595&psig=AOvVaw2Q4qOru5-JXd_Ok5gXnDrg&ust=1547032251975036
<br>https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiNz4fHht7fAhVGxYUKHaLdDwMQjRx6BAgBEAU&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AKakapo_Sirocco_1.jpg&psig=AOvVaw1T7ip3_JiEeF5mhdJj-Vul&ust=1547032288609608
<br>https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjb27_0ht7fAhVLUhoKHRgWDaQQjRx6BAgBEAU&url=https%3A%2F%2Fwww.flickr.com%2Fphotos%2Fvolvob12b%2F33049220145&psig=AOvVaw1RHKHPYZ4kNXBCxHu-qqqj&ust=1547032337165234
<br>https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjzgciBh97fAhXoxoUKHbmGDXMQjRx6BAgBEAU&url=https%3A%2F%2Fwww.flickr.com%2Fphotos%2Fvolvob12b%2F9119203963&psig=AOvVaw12DuiE66dqJNup5s3dsmmV&ust=1547032419629999
<br>https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwi1zsCZh97fAhWMyYUKHdxHCXsQjRx6BAgBEAU&url=https%3A%2F%2Fwww.flickr.com%2Fphotos%2Ftomas_sobek%2F12246604575&psig=AOvVaw10g_guaDg4SFbrkv3v9yXC&ust=1547032459330828
<br>https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwi8q4ath97fAhUlgM4BHUtAClkQjRx6BAgBEAU&url=https%3A%2F%2Fwww.flickr.com%2Fphotos%2Frlwilsonphotography%2F30716305552&psig=AOvVaw2k1TJjsNrtFhoMphGxyGbS&ust=1547032502213603

### Acknowledgements

This game was built based on the tutorial provided by Code Explained and modified to fit my design.
<br> The repository for code can be found at : https://github.com/CodeExplainedRepo/Multiple-Choice-Quiz-JavaScript
<br> Their youTube tutorial  for this project can be found at: https://www.youtube.com/watch?v=49pYIMygIcU