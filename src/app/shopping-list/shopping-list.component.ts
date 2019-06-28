import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from './ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private subscribtion: Subscription;

  constructor(private ingredientService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.ingredientService.getIngredients();
    this.subscribtion = this.ingredientService.changeIngredients.subscribe(
      (newIngredients: Ingredient[]) => this.ingredients = newIngredients
    )
  }
  editItem(id: number){
    this.ingredientService.startEditing.next(id);
  }
  ngOnDestroy(){
    this.subscribtion.unsubscribe();
  }

}
