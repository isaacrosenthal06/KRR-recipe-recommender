from owlready2 import *

onto = get_ontology("http://test.org/onto.owl")

with onto:
    #
    class Ingredient(Food): pass
    
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


    
    class Dark_Roast(Roast): pass
    class Blonde_Roast(Roast): pass
    class Medium_Roast(Roast): pass
    
    
    class Region(Thing): pass
    
    class Latin_America(Region): pass
    class Asia_Pacific(Region): pass
    class Multi(Region): pass
    
    
    #defining the relationship between coffee and roast
    class has_roast(ObjectProperty, FunctionalProperty):
        domain = [Coffee]
        region = [Roast]
    
    
    #FunctionalProperties mean it can only be related to one; these coffees can only be grown in one region
    class from_region(Coffee >> Region, FunctionalProperty):
        pass
    
    
    #defining the characteristics for a specific coffee type or line
    class Veranda(Coffee):
        equivalent_to = [Coffee & has_roast.value(Blonde_Roast) & from_region.some(Region) & 
                        from_region.only(Latin_America)]

    #.some means it must be related to a Region
    #.only means if it's related to a region it must be the one defined
    class Pike(Coffee):
        equivalent_to = [Coffee & has_roast.value(Medium_Roast) & from_region.some(Region) &
                        from_region.only(Latin_America)]

        

#telling the ontology these are all different things
AllDifferent([Dark_Roast, Blonde_Roast, Medium_Roast])
AllDifferent([Latin_America, Asia_Pacific, Multi])

#defining some unknown coffees and their characteristics
coffee1 = Coffee(has_roast = Blonde_Roast, from_region=Latin_America())
coffee2 = Coffee(has_roast = Medium_Roast, from_region=Latin_America())

print("Coffee 1 is: ", coffee1.is_a)
print("Coffee 2 is: ", coffee2.is_a)

#closing the world, by default we have an open world, anything not restricted is possible
close_world(Coffee)

sync_reasoner()

print(Pike.is_a)