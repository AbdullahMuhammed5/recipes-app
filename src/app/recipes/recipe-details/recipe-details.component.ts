import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
  item: Recipe;
  id: number;

  constructor(private recipeService: RecipeService, 
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (res: Params) => {
        this.id = +res['id']
        this.item = this.recipeService.getRecipe(this.id)
      }
    )
  }

  addToShoppingList(){
    this.recipeService.ingredsToshoppingList(this.item.ingredients)
  }

  editRecipe(){
    this.router.navigate(['edit'], {relativeTo: this.route})
  }

  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.id)
    this.router.navigate(['../'])
  }
}
