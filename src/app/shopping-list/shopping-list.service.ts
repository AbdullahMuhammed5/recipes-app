import { Ingredient } from './ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
	changeIngredients = new Subject<Ingredient[]>();
	startEditing = new Subject<number>();
	constructor() { }

	private ingredients: Ingredient[] = [
		new Ingredient("Banana", 4),
		new Ingredient("Mango", 4)
	];

	getIngredients(){
		return this.ingredients.slice();
	}

	getIngredient(index: number){
		return this.ingredients[index];
	}

	updateIngredient(index: number, newIngredient: Ingredient){
		this.ingredients[index] = newIngredient;
		this.changeIngredients.next(this.ingredients.slice())
	}

	deleteIngredient(index: number){
		this.ingredients.splice(index, 1)
		this.changeIngredients.next(this.ingredients.slice())
	}

	addIngredient(ingredient: Ingredient){
		this.ingredients.push(ingredient)
		this.changeIngredients.next(this.ingredients.slice())
	}	

	addIngreds(ingredients: Ingredient[]){
		this.ingredients.push(...ingredients)
		this.changeIngredients.next(this.ingredients.slice())
	}
}
