# User testing

## User stories - manual testing, confirm the following steps work
### 1) As a quizzer I want to choose from a range of answers.
Four buttons are displayed
<br> Upon clicking on a button - that choice is selected
<br> The quiz continues

### 2) When I answer a question, I want to see if I answered correctly or not.
Four buttons are displayed
<br> Upon clicking on a button - that choice is selected
<br> The four option buttons are hidden
<br> correct or incorrect message is displayed for set time (2 seconds) before next question displayed.

### 3) At the end I want to see my final score.
<br> Upon clicking on a button in last question
<br> The four option buttons are hidden
<br> correct or incorrect message is displayed
<br> After time of 2 seconds final score is displayed as X out of 10
<br> score message is also displayed depending on score out of ten eg. "You did well" or "You need practice"

### 4) I want to be able to re-try the quiz
On final score page a rest button is also displayed with text 'try again'
<br> on clicking that button, user is taken back to start page
<br> score values and question index are reset to intial value (0)
<br> clicking on start button restarts quiz

## Real user testing - feedback and fixes
1) On mobile / i-pad random answers are highlighted yellow after the first question
<br> REASON: sticky hover being implemented on touch devices (i.e usually those with smaller screen sizes).
<br>CURRENT FIX: removed button:hover style from main css and added to media query for devices min width 1024.<br>
This is a quick fix but won't work on devices that are both touch and mouse enabled (i.e when you use the mouse it wont hover), 
or devices that are touch screen larger than 1024 pixels wide. 
<br> This is a temporary solution, working on a better one currently.

2) Numbers on questions would be easier to keep track of quiz
<br> FIX: getQuestion function updated to include questionIndex + 1 at beginning of question paragraph.

3) Pressing 'try again' button to reset quiz takes you to the start page, but when you press 'begin quiz' it only 
shows you the last question.
<br> FIX: Reset score and questionIndex values to 0 in resetQuiz function.

4) Question typo and capitalisation - "Which bird is a Ruru?" instead of "Which bird is this?"
<br> FIX : typo fixed, english names of bird properly capitalised

5) Kakapo picture not displaying
<br> FIX: typo in file path fixed, img now displays.

6) Wider images don't fit into container on smaller screen sizes (i.e mobile)
<br> FIX: overlap hidden for quiz container - images will now always remain within light green section.