This is a simple todo app made in Ionic with unit testing by Jasmine. The app consists of a login page, a list of items unique to each user,the ability to add new tasks with the add button in the top right of the homepage and the ability to remove a task with a click/tap over the item. As this is a simple test app, there are only two accounts, "user1" and "user2", and their passwords are the same as their usernames. 
Instructions are for Windows.

Setup: 
1. Download the project, navigate to the download location folder, and open the console.
2. If Ionic is not installed, run this command in the console "npm install -g cordova ionic".
3. If Typescript is not installed, run this command "npm install -g typescript".
4. If Javascript MD5 is not installed, run "npm install js-md5".
5. (Optional) If you want to run the tests, type in "npm install --save-dev angular2-template-loader html-loader jasmine jasmine-spec-reporter karma karma-chrome-launcher karma-jasmine karma-jasmine-html-reporter karma-sourcemap-loader karma-webpack karma-coverage-istanbul-reporter istanbul-instrumenter-loader null-loader protractor ts-loader ts-node @types/jasmine @types/node".

Use (Browser Emulator):
1. Open the console and navigate to the folder the project was downloaded to.
2. Type "ionic serve", and after it loads a new webpage should appear with the login page

Use (Phone Emulators):
1. Open the console and navigate to the folder the project was downloaded to.
2. Type "ionic serve --lab", and after it loads a new webpage should appear, which contains a phone emulator to test the app on.
3. You can add and change phone emulators by clicking the "platforms" dropdown in the top right of the browser and clicking the checkboxs.

Use (Deployed):
1. Not implemented or tested yet
2. This link should explain how to "https://ionicframework.com/docs/intro/deploying/"

Using Application
1. Starting on the login screen, login with the credentials username:"user1" password:"user1" or username:"user2" password:"user2", which takes you to the homepage.
2. Tap the plus sign button in the top right of the app to open a new window, that allows you to enter text detailing the task you want to enter, and after you enter a task, if it isn't empty the task will appear on the homepage.
3. To remove a task, simply click/tap on it (future versions will include better controls such as swipes)
4. To logout, hit the back arrow in the top left of the app to return to the login screen.
