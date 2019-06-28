import { Component, OnInit, ViewChild} from '@angular/core';
import { Ingredient } from "../ingredient.model";
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shoppping-edit',
  templateUrl: './shoppping-edit.component.html',
  styleUrls: ['./shoppping-edit.component.scss']
})
export class ShopppingEditComponent implements OnInit {
  private subscribtion: Subscription;
  @ViewChild('addItemForm') addItemForm: NgForm; 
  editMode = false;
  editItemIndex: number;
  itemToEdit: Ingredient;

  constructor(private ingredientService: ShoppingListService) { }

  ngOnInit() {
    this.subscribtion = this.ingredientService.startEditing.subscribe(
      (id: number) => {
        this.editItemIndex = id;
        this.editMode = true;
        this.itemToEdit = this.ingredientService.getIngredient(id);
        this.addItemForm.setValue({
          ingName: this.itemToEdit.name,
          ingAmount: this.itemToEdit.amount
        })
      }
    )
  }

  onAddItem(form: NgForm){
    const newIngredient = new Ingredient(form.value.ingName, form.value.ingAmount);
    if(this.editMode){
      this.ingredientService.updateIngredient(this.editItemIndex, newIngredient)
    } else{
      this.ingredientService.addIngredient(newIngredient);
    }
    this.editMode = false;
    form.reset();
  }

  resetForm(){
    this.editMode = false;
    this.addItemForm.reset();
  }

  onDelete(){
    this.ingredientService.deleteIngredient(this.editItemIndex)
    this.resetForm();
  }

  ngOnDestroy(){
    this.subscribtion.unsubscribe();
  }

}
