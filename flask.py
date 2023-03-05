from flask import Flask, request

app = Flask(__name__)

@app.route('/updatefridge', methods=['POST'])
def updatefridge():

    #get user data from react
    ingredients = request.json.get['ingredients']
    preferences = request.json.get['preferences']

    #parse ingredients and preferences 

    #create krf file
    with open('yourfridge.krf', 'w') as file:
        data = [ingredients, preferences]
        file.writelines(data)

    return (ingredients, preferences)