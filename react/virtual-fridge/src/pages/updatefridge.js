import React, { useState } from "react";
import "../style/signin.css";

function UpdateFridge() {
    const [ingredients, setIngredients] = useState([]);

    const handleAddIngredient = () => {
        setIngredients([...ingredients, { name: '', quantity: '', unit: '' }]);
    };

    const handleIngredientChange = (e, index) => {
        const { name, value } = e.target;
        const updatedIngredients = [...ingredients];
        updatedIngredients[index] = { ...updatedIngredients[index], [name]: value };
        setIngredients(updatedIngredients);
    };

    const [preferences, setPreferences] = useState({
      vegetarian: false,
      vegan: false,
      glutenFree: false,
      lactoseFree: false,
      pescatarian: false,
      none: false,
    });
  
    const handlePreferencesChange = (newPreferences) => {
      setPreferences(newPreferences);
    };

    // const handleSubmit = async () => {
    //     const response = await fetch('/updatefridge', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({
    //         ingredients: ingredients,
    //         preferences: preferences,
    //       }),
    //     });
    //     console.log(ingredients)
    //     console.log(preferences)
      
    //     if (response.ok) {
    //         //handle success
    //     } else {
    //         //handle error
            
    //     }
    //   };

    const handleSubmit = ({ingred, pref, fileName, fileType}) => {
        //console.log(ingred);
        //console.log(pref);
        var ingred_data = JSON.parse(ingred);
        // console.log(ingred_data.length);
        // console.log(typeof(ingred_data));
        // console.log(ingred_data)
        let text = "(in-microtheory KRR-Recipe-FactsMt)";
        for (var i=0; i<ingred_data.length; i++) {
            var name = ingred_data[i].name;
            var quantity = ingred_data[i].quantity;
            var unit = ingred_data[i].unit;
            // console.log(name);
            // console.log(quantity);
            // console.log(unit);
            text += "\n(isa ";
            text += name;
            text += " VirtualFridge)";
            text += "\n(quantityFridge VirtualFridge ";
            text += name;
            text += " ";
            text += quantity;
            text += " ";
            text += unit;
            if (unit === name || name === "Onion-Foodstuff") {
                text += "-UnitofMeasure)";
                text += "\n(isa ";
                text += unit;
                text += "-UnitofMeasure UnitofMeasure)";
            }
            if (["Ounce", "Cup", "Tablespoon", "Teaspoon"].includes(unit)) {
                text += "-UnitofVolume)";
            }
            if (unit === "Pound") {
                text += "-UnitofMass)"
            }
            
            
        }

        if (pref.vegetarian === true) {
            text += "\n(isa RecipeVegetarian UserPreference)";
        }
        if (pref.vegan === true) {
            text += "\n(isa RecipeVegan UserPreference)";
        }
        if (pref.glutenFree === true) {
            text += "\n(isa RecipeGlutenFree UserPreference)";
        }
        if (pref.lactoseFree === true) {
            text += "\n(isa RecipeLactoseFree UserPreference)";
        }


        const blob = new Blob([text], { type: fileType})
        const a = document.createElement('a')
        a.download = fileName
        a.href = window.URL.createObjectURL(blob)
        const clickEvt = new MouseEvent('click', {
            view: window,
            bubbles: true,
            cancelable: true,
        })
        a.dispatchEvent(clickEvt)
        a.remove()
    };
    const exportToKrf = e => {
        e.preventDefault()
        handleSubmit({
            ingred: JSON.stringify(ingredients),
            pref: JSON.stringify(preferences),
            fileName: 'yourfridge.krf',
            fileType: 'text/json',
        })
      };
      
    //   const exportToCsv = e => {
    //     e.preventDefault()
      
    //     // Headers for each column
    //     let headers = ['Id,Name,Surname,Age']
      
    //     // Convert users data to a csv
    //     let usersCsv = usersData.users.reduce((acc, user) => {
    //       const { id, name, surname, age } = user
    //       acc.push([id, name, surname, age].join(','))
    //       return acc
    //     }, [])
      
    //     downloadFile({
    //       data: [...headers, ...usersCsv].join('\n'),
    //       fileName: 'users.csv',
    //       fileType: 'text/csv',
    //     })
    //   };
  
    return (
      <div className="ingredient-container">
        <div className="addingredient">
            <h1 className="headers">Add Ingredients:</h1>
            {ingredients.map((ingredient, index) => (
                <div key={index}>
                <label className="ingredient-label">
                    Ingredient Name:
                    <input className="ingredient-form"
                    type="text"
                    name="name"
                    value={ingredient.name}
                    onChange={(e) => handleIngredientChange(e, index)}
                    />
                </label>
                <label className="ingredient-label">
                    Quantity:
                    <input className="ingredient-form"
                    type="number"
                    name="quantity"
                    value={ingredient.quantity}
                    onChange={(e) => handleIngredientChange(e, index)}
                    />
                </label>
                <label className="ingredient-label">
                    Unit:
                    <input className="ingredient-form"
                    type="text"
                    name="unit"
                    value={ingredient.unit}
                    onChange={(e) => handleIngredientChange(e, index)}
                    />
                </label>
            </div>
            ))}
            <button onClick={handleAddIngredient}>Add Ingredient</button>
        
          
            <div className="dietary-preferences">
                <h1 className="headers">Dietary Preferences:</h1>
                <div className="checkboxes">
                <label>
                    <input type="checkbox" name="vegetarian" checked={preferences.vegetarian} onChange={(event) => handlePreferencesChange({ ...preferences, vegetarian: event.target.checked })} />
                    Vegetarian
                </label>
                <label>
                    <input type="checkbox" name="vegan" checked={preferences.vegan} onChange={(event) => handlePreferencesChange({ ...preferences, vegan: event.target.checked })} />
                    Vegan
                </label>
                <label>
                    <input type="checkbox" name="glutenFree" checked={preferences.glutenFree} onChange={(event) => handlePreferencesChange({ ...preferences, glutenFree: event.target.checked })} />
                    Gluten Free
                </label>
                <label>
                    <input type="checkbox" name="lactoseFree" checked={preferences.lactoseFree} onChange={(event) => handlePreferencesChange({ ...preferences, lactoseFree: event.target.checked })} />
                    Lactose Free
                </label>
                <label>
                    <input type="checkbox" name="pescatarian" checked={preferences.pescatarian} onChange={(event) => handlePreferencesChange({ ...preferences, pescatarian: event.target.checked })} />
                    Pescatarian
                </label>
                <label>
                    <input type="checkbox" name="none" checked={preferences.none} onChange={(event) => handlePreferencesChange({ ...preferences, none: event.target.checked })} />
                    None
                </label>
                </div>
                <button onClick={exportToKrf}>Update Fridge!</button>
            </div>
        </div>
      </div>
    );
  }
  
  export default UpdateFridge;



