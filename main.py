from owlready2 import *

onto = get_ontology("http://test.org/onto.owl")

with onto:
    class Food(Thing): pass
    class Ingredient(Food): pass
    class Recipe(Food): pass
    
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

    class Flour(Grain): pass
    class Oat(Grain): pass
    class Bread(Grain): pass
    class Pasta(Grain): pass
    class Rice(Grain): pass

<<<<<<< HEAD
    class Lactose(Dairy): pass
    class NonLactose(Dairy): pass
=======

    class Seafood(Meat): pass
    class RedMeat(Meat): pass
    class WhiteMeat(Meat): pass

    class Fish(Seafood): pass
    class Shellfish(Seafood): pass

    class Pork(RedMeat): pass
    class Lamb(RedMeat): pass
    class Beef(RedMeat): pass

    class Duck(WhiteMeat): pass
    class Chicken(WhiteMeat): pass
    class Turkey(WhiteMeat): pass

    
    class Region(Thing): pass
    
    class Latin_America(Region): pass
    class Asia_Pacific(Region): pass
    class Multi(Region): pass
>>>>>>> 7fce0ee6dd3895d91c422385edc804cf84d71222
    
    
    #defining the relationship between coffee and roast
    class hasIngredient(ObjectProperty, FunctionalProperty):
        domain = [Ingredient, Recipe]
        region = [Produce, Meat, Dairy, Grain, Condiment]
    
    
    #FunctionalProperties mean it can only be related to one; these coffees can only be grown in one region
    # class from_region(Coffee >> Region, FunctionalProperty):
    #     pass
    
    # class TomatoPasta(Recipe):
    #     equivalent_to = [Recipe & hasIngredient.value(Grain) & hasIngredient.value(Produce)]
    
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
# AllDifferent([Dark_Roast, Blonde_Roast, Medium_Roast])
# AllDifferent([Latin_America, Asia_Pacific, Multi])

#defining some unknown coffees and their characteristics
# coffee1 = Coffee(has_roast = Blonde_Roast, from_region=Latin_America())
# coffee2 = Coffee(has_roast = Medium_Roast, from_region=Latin_America())

# print("Coffee 1 is: ", coffee1.is_a)
# print("Coffee 2 is: ", coffee2.is_a)
tomato_pasta = Recipe(hasIngredient = Grain)
print("Tomato Pasta:", tomato_pasta.is_a)

#closing the world, by default we have an open world, anything not restricted is possible
close_world(Ingredient)

sync_reasoner()