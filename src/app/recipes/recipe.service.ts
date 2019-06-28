import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shopping-list/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
	changeRecipes = new Subject<Recipe[]>();
	constructor(private shopLsService: ShoppingListService) { }

	private recipes: Recipe[] = [
		new Recipe("First recipe", "This is the describtion of the first recipe", "https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1506120378/MR_0917170472.jpg?itok=aWyDp3CA", [
			new Ingredient("Meet", 1),
			new Ingredient("French fries", 15)
		]),
		new Recipe("Second recipe", "This is the describtion of the first recipe", "https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1506120378/MR_0917170472.jpg?itok=aWyDp3CA", [
			new Ingredient("chichen", 1),
			new Ingredient("unoin", 2),
			new Ingredient("Katchep", 1)
		])
	];

	setRecipes(newRecipes: Recipe[]){
		this.recipes = newRecipes
		this.changeRecipes.next(this.recipes.slice())
	}
	getRecipes(){
		return this.recipes.slice();
	}
	getRecipe(id: number){
		return this.recipes[id];
	}
	ingredsToshoppingList(ingreds: Ingredient[]){
		this.shopLsService.addIngreds(ingreds)
	}
	addRecipe(recipe: Recipe){
		this.recipes.push(recipe)
		this.changeRecipes.next(this.recipes.slice())
	}
	updateRecipe(index: number, recipe: Recipe){
		this.recipes[index] = recipe;
		this.changeRecipes.next(this.recipes.slice())
	}
	deleteRecipe(index: number){
		this.recipes.splice(index, 1)
		this.changeRecipes.next(this.recipes.slice())
	}
}