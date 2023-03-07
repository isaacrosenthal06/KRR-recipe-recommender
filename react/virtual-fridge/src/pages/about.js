import React from "react";
import logo from "../style/virtualfridgelogo.png";
//import App from "../App";


const About = () => {
    return ( 
        <div class="box-main">
            <h1 class="text-title">
                Welcome to Virtual Fridge!
            </h1>
           <div class="logo">
                <img src={logo} alt="logo"></img>
            </div>
            <section class="section">
                <h1 class="text-big">
                    About Us
                </h1>
                <p class="text-small">
                    Have you ever had a date you want to impress 
                    with a delicious home-cooked meal, but no time 
                    to get new groceries? Are you tired of the same 
                    old meals you eat everyday? What about an absurd
                    amount of moldy rotting groceries in the back of
                    your fridge? Virtual Fridge makes home cooking
                    easy and fun! At the tap of your finger, Virtual
                    Fridge can curate personalized yummy recipes just 
                    for you with the ingredients in your fridge! 
                    We want to help you reduce food waste while also 
                    saving money on unnecessary grocery costs! To get
                    started, all you need to do is simply add your 
                    grocery items and their quantities, any allergies 
                    or food aversions you may have, and we'll help you 
                    find the perfect meal for your needs. And better yet, 
                    once you are done making your meal, we'll update your 
                    virtual fridge for you!  
                </p>
            </section>

            <section class="section">

                <h1 class="text-big">
                    Mission Statement
                </h1>

                <p class="text-small">

                    At Virtual Fridge, our mission is to make cooking and meal 
                    planning effortless and enjoyable by helping people keep track 
                    of what's in their fridge and suggesting personalized recipe ideas. 
                    We believe that technology can simplify our daily lives and bring 
                    us closer to the food we eat. By leveraging data and AI, we strive 
                    to empower our users to make informed food choices, reduce food 
                    waste, and foster healthier eating habits. Our goal is to create a 
                    seamless, user-friendly platform that integrates with your busy 
                    lifestyle and enhances your relationship with food.
                    
                </p>
            </section>

            <section class="section">

                <h1 class="text-big">
                    Knowledge Base and Reasoning
                </h1>

                <p class="text-small">

                    We represented your fridge, ingredients, recipies, dietary preferences, and 
                    everything else needed to create relevant recipies in a knowledge base. 
                </p>
                <p class="text-small">
                    
                    Our ingredients consist of many ingredients ingredients  already defined in NextKB, 
                    but also several including garam masala, canned tomatoes, etc. that were not. All 
                    ingredients contain predicates which report which dietary preferences each 
                    ingredient violates (eg. Chicken is not dairy, but it is meat: (not 
                    (dairyIngredient Chicken-Meat)) (meatIngredient Chicken-Meat)). Each ingredient also 
                    includes potential substitute ingredients to recommend if the primary ingredient is 
                    not in the virtual fridge.
                </p>
                <p class="text-small">
                    Your fridge is represented by collection called VirtualFridge with instances of 
                    ingredients. The quantity and unit of each ingredient in the fridge is stored in 
                    a relation called quantityFridge. 
                </p>
                <p class="text-small">

                    Recipies are represented as two collections of ingredients—one of required ingredients 
                    and one of optional ingredients. The ingredients in each collection are included in the 
                    relation quantityRequired which includes recipie, ingredient, amount, and unit necessary 
                    for the recipie. 
                </p>
                <p class="text-small">

                    When the user inputs their ingredients in their fridge and their dietary preferences, 
                    the ontology is built and the users can query using horn cluses like should cook, which 
                    finds and confirms recipies that match the users ingredients and shouldCook, which finds and confirms recipies that 
                    match the users preferences. These horn clauses serve as proof of concept for a larger 
                    ontology which could utilize knowledge and reasoning to recommend recipies. 

                </p>
            </section>

            <section class="section">

                <h1 class="text-big">
                    Opportunity
                </h1>

                <p class="text-small">

                    At Virtual Fridge, our mission is to make cooking and meal 
                    planning effortless and enjoyable by helping people keep track 
                    of what's in their fridge and suggesting personalized recipe ideas. 
                    We believe that technology can simplify our daily lives and bring 
                    us closer to the food we eat. By leveraging data and AI, we strive 
                    to empower our users to make informed food choices, reduce food 
                    waste, and foster healthier eating habits. Our goal is to create a 
                    seamless, user-friendly platform that integrates with your busy 
                    lifestyle and enhances your relationship with food.
                </p>
            </section>

            <section class="section">
                <h1 class="text-big">
                    Meet the Team
                </h1>
                <p class="text-small">
                    Virtual Fridge was founded by five ambitious Northwestern 
                    students: Katherine Feng, Isaac Rosenthal, Arman Popli, Karthik
                    Vempati, and Jack Sauser. Our application was inspired by our
                    favorite class at Northwestern- Knowledge, Representation, and
                    Reasoning. 
                    
                </p>
            </section>
        </div>
    );
};
export default About;