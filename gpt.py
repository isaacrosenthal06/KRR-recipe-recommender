from owlready2 import *

# create a new ontology
onto = Ontology("http://test.org/onto.owl")
# define classes
class Recipe(Thing):
    pass

class Ingredient(Thing):
    pass

class Step(Thing):
    pass

class Tool(Thing):
    pass

# define object properties
class requires(Ingredient >> Recipe):
    pass

class has_step(Recipe >> Step):
    pass

class requires_tool(Step >> Tool):
    pass

# add labels to classes and properties
Recipe.label = "Recipe"
Ingredient.label = "Ingredient"
Step.label = "Step"
Tool.label = "Tool"
requires.label = "requires"
has_step.label = "has_step"
requires_tool.label = "requires_tool"

# save the ontology to a file
onto.save(file="recipe_ontology.owl", format="rdfxml")


# create instances of classes
chicken_parmesan = Recipe("chicken_parmesan")
chicken_breasts = Ingredient("chicken_breasts")
bread_crumbs = Ingredient("bread_crumbs")
egg = Ingredient("egg")
flour = Ingredient("flour")
marinara_sauce = Ingredient("marinara_sauce")
mozzarella_cheese = Ingredient("mozzarella_cheese")
oil = Ingredient("oil")
salt = Ingredient("salt")
spaghetti = Ingredient("spaghetti")
water = Ingredient("water")
frying_pan = Tool("frying_pan")
mixing_bowl = Tool("mixing_bowl")
pot = Tool("pot")

# add properties to instances
chicken_parmesan.requires.append(chicken_breasts)
chicken_parmesan.requires.append(bread_crumbs)
chicken_parmesan.requires.append(egg)
chicken_parmesan.requires.append(flour)
chicken_parmesan.requires.append(marinara_sauce)
chicken_parmesan.requires.append(mozzarella_cheese)
chicken_parmesan.requires.append(oil)
chicken_parmesan.requires.append(salt)
chicken_parmesan.requires_tool.append(frying_pan)

step1 = Step("step1")
step1.requires_tool.append(mixing_bowl)
step1.requires.append(bread_crumbs)
step1.requires.append(salt)

step2 = Step("step2")
step2.requires_tool.append(mixing_bowl)
step2.requires.append(egg)

step3 = Step("step3")
step3.requires_tool.append(mixing_bowl)
step3.requires.append(flour)

step4 = Step("step4")
step4.requires_tool.append(frying_pan)
step4.requires.append(chicken_breasts)
step4.requires.append(oil)

step5 = Step("step5")
step5.requires_tool.append(pot)
step5.requires.append(water)
step5.requires.append(salt)
step5.requires.append(spaghetti)

step6 = Step("step6")
step6.requires_tool.append(frying_pan)
step6.requires.append(marinara_sauce)
step6.requires.append(mozzarella_cheese)

# continue adding steps to the recipe
step7 = Step("step7")
step7.requires.append(spaghetti)

step8 = Step("step8")
step8.requires_tool.append(frying_pan)
step8.requires.append(marinara_sauce)

step9 = Step("step9")
step9.requires_tool.append(frying_pan)
step9.requires.append(mozzarella_cheese)


chicken_parmesan.has_step.append(step1)
chicken_parmesan.has_step.append(step2)
chicken_parmesan.has_step.append(step3)
chicken_parmesan.has_step.append(step4)
chicken_parmesan.has_step.append(step5)
chicken_parmesan.has_step.append(step6)
chicken_parmesan.has_step.append(step7)
chicken_parmesan.has_step.append(step8)
chicken_parmesan.has_step.append(step9)

# save the ontology to a file
onto.save(file="recipe_ontology.owl", format="rdfxml")
