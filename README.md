# KRR-recipe-recommender

Virtual Fridge 

Our app allows users to input their grocery items into a "virtual fridge" that curates personalized recipes according to what you have in stock. Once you are done making the meal, the virtual fridge will automatically update your fridge with the reduced quantities. 

Our app is implemented with ReactJS, Flask, and Python. The core of the app accesses the FoodKG knowledge base to keep track of grocery items and their inter-relationships. We also call on the Spoonacular APIs to find recipes that match the food quantities in the virtual fridge. 

To run the app, you must be have installed Node.JS:
https://nodejs.org/en/download/

In the terminal, type and run:
npm install
npm run build
npm start 

