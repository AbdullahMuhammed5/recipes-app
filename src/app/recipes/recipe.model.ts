import { Ingredient } from '../shopping-list/ingredient.model';

export class Recipe{
	public name: string;
	public description: string;
	public imgPath: string;
	public ingredients: Ingredient[];

	constructor(name: string, desc: string, path: string, newIngredients: Ingredient[]){
		this.name = name;
		this.description = desc;
		this.imgPath = path;
		this.ingredients = newIngredients;
	}
}