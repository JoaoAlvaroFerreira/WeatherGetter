Published front-end: https://getterweather.netlify.app/
Published back-end: https://weathergetter.onrender.com/

Note: Dates that aren't available on the Meteos Weather API will not return a valid value, and I was unable to finish the validation component of the project. Please do not select dates later than March 15th. Also, the back-end is hosted on a free instance of the onrender website, so it might not be available instantly on request.

To run this project, open two terminals. In the first terminal, open the back-end by going to the 'data-back-end' folder.

* For a first time, run ``npm install``
* To run the back-end, run ``npx ts-node src/index.ts`` on the terminal.

In the first terminal, open the front-end by going to the 'data-display' folder.
* For a first time, run ``npm install`` like on the back-end
* To run the front-end, run ``npm run dev`` on the terminal.

The API endpoints available in the back-end are ``/api/weather`` which can be accessed with POST, and ``/`` which is a basic Hello World get.

To test the connection between components (and the back-end fully), you will have to change the value on line 46 of the file "data-display/src/App.vue" from ``prod_api_url`` to ``dev_api_url``.

To run the unit testing suite on the back-end, open two terminals, one with the back-end running in the method explained before. In the other, go to the back-end folder and run ''npm test''.

The unit testing validation isn't very comprehensive as I was short on time and was not very familiar with the tech stack. Future improvements would include adding more and better unit tests, and creating a unit testing suite for the front-end.
