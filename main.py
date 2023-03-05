from owlready2 import *



def isa(instance, collection):
    if instance in collection:
        return True
    else:
        return False
    
def genls(collection1, collection2):
    if collection1.issubset(collection2) and collection1 != collection2:
        return True
    else:
        return False

def specs(collection1, collection2):
    if collection2.issubset(collection1) and collection1 != collection2:
        return True
    else:
        return False




    




onto = get_ontology("http://test.org/onto.owl")

with onto:
    class User(Thing): pass
    class Food(Thing): pass
    class Recipe(Thing): pass
    class Ingredient(Thing): pass
    class Step(Thing): pass
    class Quantity(Thing): pass
    class DietaryRestrictions(Thing): pass

    #class Vegetarian(DietaryRestrictions): pass

    #class Ingredient(Food): pass
    #class Recipe(Food): pass
    
    #related information can also be captured as classes
    class Produce(Food): pass
    class Meat(Food): pass
    class Dairy(Food): pass
    class Grain(Food): pass
    class Condiment(Food): pass
    
    #subclassing Roast to break down additional details
    class Fruit(Produce): pass
    class Vegetable(Produce): pass
    class Herb(Produce): pass
    class Tomato(Fruit): pass

    class Flour(Grain): pass
    class Oat(Grain): pass
    class Bread(Grain): pass
    class Pasta(Grain): pass
    class Rice(Grain): pass

    class Lactose(Dairy): pass
    class Cheese(Lactose): pass
    class NonLactose(Dairy): pass

    class Seafood(Meat): pass
    class RedMeat(Meat): pass
    class WhiteMeat(Meat): pass

    class Fish(Seafood): pass
    class Shellfish(Seafood): pass
    #subclassing condiments
    class Oil(Condiment): pass
    class Sauce(Condiment): pass
    class Spice(Condiment): pass

    #subclassing oil
    class OliveOil(Oil): pass
    class CanolaOil(Oil): pass
    class Lard(Oil): pass

    #subclassing 
    class Salt(Spices): pass
    class Pepper(Spices): pass


    class Pork(RedMeat): pass
    class Lamb(RedMeat): pass
    class Beef(RedMeat): pass

    class Duck(WhiteMeat): pass
    class Chicken(WhiteMeat): pass
    class Turkey(WhiteMeat): pass

<<<<<<< HEAD
    class requires(Ingredient >> Recipe): pass
=======
    
    

>>>>>>> 7fce0ee6dd3895d91c422385edc804cf84d71222
>>>>>>> e5f11578a96160a0d26de5aa76a1ff73bb221589
    
    
    #defining the relationship between coffee and roast
    # class hasIngredient(ObjectProperty, FunctionalProperty):
    #     domain = [Recipe]
    #     region = [Food]
    
    
    #FunctionalProperties mean it can only be related to one; these coffees can only be grown in one region
    # class from_region(Coffee >> Region, FunctionalProperty):
    #     pass
    
    # class Vegetarian(DietaryRestrictions):
    #     equivalent_to = [DietaryRestrictions & hasIngredient.value(Meat)]

    class hasIngredient(User >> Ingredient): pass
    class hasQuantity(User >> Quantity): pass
    
    #defining the characteristics for a specific coffee type or line
    # class Veranda(Coffee):
    #     equivalent_to = [Coffee & has_roast.value(Blonde_Roast) & from_region.some(Region) & 
    #                     from_region.only(Latin_America)]

    #.some means it must be related to a Region
    #.only means if it's related to a region it must be the one defined
    # class Pike(Coffee):
    #     equivalent_to = [Coffee & has_roast.value(Medium_Roast) & from_region.some(Region) &
    #                     from_region.only(Latin_America)]

        

#telling the ontology these are all different things
#AllDifferent([Produce, Grain, Meat, Dairy, Condiment])
# AllDifferent([Latin_America, Asia_Pacific, Multi])

#defining some unknown coffees and their characteristics
# coffee1 = Coffee(has_roast = Blonde_Roast, from_region=Latin_America())
# coffee2 = Coffee(has_roast = Medium_Roast, from_region=Latin_America())

# print("Coffee 1 is: ", coffee1.is_a)
# print("Coffee 2 is: ", coffee2.is_a)
#tomato_pasta = Recipe(hasIngredient = Grain)
#print("Tomato Pasta:", TomatoPasta.is_a)

#closing the world, by default we have an open world, anything not restricted is possible
# close_world(Food)

# sync_reasoner()

user = User("kat")

while True:
    ingredient = input("Enter an ingredient in your fridge or done if finished: ")
    if ingredient.lower() == "done":
        break
    quantity = input(f"How much {ingredient} do you have?")

i = Ingredient(ingredient)
q = Quantity(quantity)

user.hasIngredient.append(i)
user.hasQuantity.append(q)

query = """
SELECT ?recipe
WHERE {
    ?recipe a :Recipe .
    ?recipe :has_step ?step .
    ?step :requires ?ingredient .
    FILTER NOT EXISTS {
        ?user :has_ingredient ?ingredient .
        ?user :has_quantity ?quantity .
        ?ingredient :requires ?recipe .
        ?ingredient :requires_quantity ?qty .
        FILTER(?qty > ?quantity)
    }
}
"""

# execute the query on the ontology and print the resulting recipes
results = onto.query(query, initBindings={"user": user})
for result in results:
    print(result)
