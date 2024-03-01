Published front-end: https://getterweather.netlify.app/
Published back-end: https://weathergetter.onrender.com/

Note: the back-end is hosted on a free instance of the onrender website, so it might not be available instantly on request. Please either wait for the request to complete, or open the back-end website a minute before trying to make API calls on the front-end.

To run this project, open two terminals. In the first terminal, open the back-end by going to the 'data-back-end' folder.

* For a first time, run ``npm install``
* To run the back-end, run ``npx ts-node src/index.ts`` on the terminal.

In the first terminal, open the front-end by going to the 'data-display' folder.
* For a first time, run ``npm install`` like on the back-end
* To run the front-end, run ``npm run dev`` on the terminal.

To test the connection between components (and the back-end fully), you will have to change the value on line 46 of the file "data-display/src/App.vue" from ``prod_api_url`` to ``dev_api_url``.
