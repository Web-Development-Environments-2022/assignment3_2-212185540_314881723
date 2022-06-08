const DButils = require("./DButils");

async function markAsFavorite(user_id, recipe_id){
    await DButils.execQuery(`insert into favoriterecipes values ('${user_id}',${recipe_id})`);
}

async function getFavoriteRecipes(user_id){
    const recipes_id = await DButils.execQuery(`select recipe_id from favoriterecipes where user_id='${user_id}'`);
    return recipes_id;
}

async function getRecipes(user_id){
    const recipes_id = await DButils.execQuery(`select recipe_id from user_created_recipes where user_id='${user_id}'`);
    return recipes_id;
}

async function addNewRecipe(user_id,recipe_id,title,readyInMinutes,image,popularity,vegan,vegetarian,glutenFree,ingredients,instructions,numOfDishes){
    await DButils.execQuery(`insert into recipes (recipe_id,title,readyInMinutes,image,popularity,vegan,vegetarian,glutenFree,ingredients,instructions,numOfDishes) VALUES ('${recipe_id}', '${title}', '${readyInMinutes}',
    '${image}', '${popularity}', '${vegan}', '${vegetarian}', '${glutenFree}', '${ingredients}', '${instructions}', '${numOfDishes}')`);
    await DButils.execQuery(`insert into user_created_recipes (user_id,recipe_id) VALUES ('${user_id}',${recipe_id})`);
}


exports.markAsFavorite = markAsFavorite;
exports.getFavoriteRecipes = getFavoriteRecipes;
exports.addNewRecipe = addNewRecipe
exports.getRecipes = getRecipes
