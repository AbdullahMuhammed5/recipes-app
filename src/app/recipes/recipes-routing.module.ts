import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { NoRecipeSelectedComponent } from './no-recipe-selected/no-recipe-selected.component';
import { AuthGaurd } from '../auth/authGaurd.service';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';

const routes:Routes = [
    {
        path: '', component: RecipesComponent, 
        children: [
          { path: '', component: NoRecipeSelectedComponent },
          { path: 'new', component: RecipeEditComponent, canActivate: [AuthGaurd] },
          { path: ':id', component: RecipeDetailsComponent },
          { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGaurd] }
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})

export class RecipesRoutingModule{

}