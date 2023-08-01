const foodData = [
    {
        "name": "rice",
        "timeToPrepare": "10min",
        "ingredients": ["oil", "tomato", "salt"],
        "preperationSteps": ["boil", "wash", "stir"],
        "details": function(){
           return this
        }
    },
    {
        "name": "tea",
        "timeToPrepare": "3min",
        "ingredients": ["water", "suger", "milk"],
        "preperationSteps": ["boil water", "pour water into cup", "stir"],
        "details": function(){
            return this
         }

    },
    {
        "name": "pizza",
        "timeToPrepare": "5min",
        "ingredients": ["floor", "tomato", "water"],
        "preperationSteps": ["heat", "mix", "stir"],
        "details": function(){
            return this
         }

    },
    {
        "name": "beans",
        "timeToPrepare": "20min",
        "ingredients": ["red oil", "fish", "vegetable"],
        "preperationSteps": ["wash", "cook", "eat"],
        "details": function(){
            return this

         },


    }
    
]

export default foodData