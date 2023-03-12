The instructions below require a Mac OS.

1. Download the code from Github here.
2. Download these two files: KRR-Recipe-Facts.krf and KRR-Recipe-Rules.krf
3. Navigate to Companions. Right click on “Instructor Manager” and select “Upload flat file”. Upload the two .krf files you just downloaded above.
4. Navigate back to the code. Make sure you have node.JS and react app installed on your device 
5. Navigate to react/virtual-fridge and type the following in your terminal: npm start
6. You now have access to the user interface.  Navigate to “Update Fridge” to start adding items from your fridge into your virtual fridge. Make sure to input the ingredients and unit of measures exactly as they are spelled and capitalized below.
7. Here is a list of ingredients our application currently supports: CannedTomato, Garlic, Basil, OliveOil, Onion-Foodstuff, Shallot-The-Word, Butter, Spaghetti, SpaghettiNoodle, Oregano, TableSalt, Pepper-TheSpice, Tomato-Foodstuff, Chicken-Meat, Tofu, Paneer, Yogurt, Turmeric, Cumin, ChiliPowder, Ghee, CorianderPowder, Cream-Dairy, Sugar-Table, FenugreekLeaves, Rice-Foodstuff, Noodle, GlutenFreePasta, BellPepper, Corn-SingleGrain, Broccoli-Foodstuff, EdibleMushroom, GroundBeef, HotSauce, SoySauce, WhiteWineVinegar, Water, Yeast, GlutenFreeFlour, Sugar-Table, FlourOrMeal, Parmesan-Generic-Cheese, Mozzarella-Cheese, LactoseFreeCheese, Pepperoni
8. Here is a list of units our application current supports: Ounce, Pound, Teaspoon, Tablespoon, Cup
9. Please enter any quantity of ingredients.
10. Please select a dietary preference or “None”.
11. Once you are finished adding the ingredients to your virtual fridge, click on “Update Fridge”. This will download a .krf file onto your computer, which contain the facts you need to upload into Companions.
12. Navigate to Companions. Double click on “Instructor Manager” and click on “Upload flat file” to upload the .krf file you just downloaded.
13. Navigate to “Query” and you are now ready to test the queries.
14. Here is a list of queries our application currently supports:
    - To display all the required and optional ingredients with their quantities and units needed for an inputted recipe, use this query:
          (getIngredients Recipe ?ingredient ?quantity ?unit)
    - To display all the recipes that the virtual fridge has the required ingredients for, use this query:
          (ingredientsPresent VirtualFridge ?recipe)
      Note: this query does not take quantity into account. However, it is useful because the user might have a negligible difference in the amount on           hand and the amount in the fridge.
    - To display all the recipes that the user can cook based on the ingredients and quantities on hand, use this query:
          (canCook VirtualFridge ?recipe)
      Note: this query does not take preferences into account, However, it is useful because the user might make substitutions to recipes that are not           supported in this prototype.
    - To display all recipes that the user should cook based on preferences and can cook based on the quantities of ingredients on hand, use this query: 
          (shouldCook ?recipe UserPreference VirtualFridge)
    - After receiving a recommended recipe using the shouldCook query, the user can now use shouldCooksubstitute to tell them which ingredients to               substitute to make the recipe appeal to their preferences:
          (shouldCooksubstitute Recipe UserPreference VirtualFridge ?ingredient ?substitute)
      Note: If the user does not have any dietary restrictions, this query should not be used. This query displays all ingredients needed to substitute,         and their corresponding substitutions based on what is on hand. 
    - This query delivers recommended ingredients to add based on what’s on hand. The user inputs a recipe and their virtual fridge, and this query will         display all potential additions they can make to make the recipe more tasty:
           (optionalRecommendations Recipe VirtualFridge ?recommendedingredient) 
