import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ShoppingListComponent } from './shopping-list.component';
import { ShopppingEditComponent } from './shoppping-edit/shoppping-edit.component';

@NgModule({
    declarations:[
        ShoppingListComponent,
        ShopppingEditComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: []
})

export class ShoppingListModule{

}