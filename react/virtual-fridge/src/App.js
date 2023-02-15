import logo from './virtualfridgelogo.png';
import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <nav class="navbar background">
        <u1 class="nav-list">
          <div class="logo">
            <img src={logo} alt="logo"></img>
          </div>
          <li><a href="#about">About</a></li>
          <li><a href="#favrecipes">Our Favorite Recipes</a></li>
          <li><a href="#signup">Sign Up</a></li>
          <li><a href='#signin'>Sign In</a></li>
        </u1>
      </nav>
      <section class="section">
        <div class="box-main">
          <div class="firstHalf">
              <h1 class="text-big">
                  Welcome to Virtual Fridge!
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
            </div>
        </div>
      </section>
      <section class="section">
        <div class="box-main">
          <div class="secondHalf">
            <h1 class="text-big" id="program">
                    Mission Statement
            </h1>
            <p class="text-small">
                The vision of Virtual Fridge is to revolutionize
                the world of sustainable cooking with a long-term
                goal of reducing food waste.
            </p>
          </div>
        </div>
     </section>
     <section class="section">
        <div class="box-main">
          <div class="secondHalf">
            <h1 class="text-big" id="program">
                    Meet the Team
            </h1>
            <p class="text-small">
                We are a group of five ambitious Northwestern seniors, 
                and our favorite class is Knowledge Representation and 
                Reasoning. 
            </p>
          </div>
        </div>
     </section>
    </div>
  );
}

export default App;
