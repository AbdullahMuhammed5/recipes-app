import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { NoRecipeSelectedComponent } from './recipes/no-recipe-selected/no-recipe-selected.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthGaurd } from './auth/authGaurd.service';

const routes: Routes = [
  {
    path: '', redirectTo: 'recipes', pathMatch: 'full'
  },
  {
    path: 'recipes', component: RecipesComponent, 
    children: [
      { path: '', component: NoRecipeSelectedComponent },
      { path: 'new', component: RecipeEditComponent, canActivate: [AuthGaurd] },
      { path: ':id', component: RecipeDetailsComponent },
      { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGaurd] }
    ]
  },
  {
    path: 'shop', component: ShoppingListComponent
  },
  {
    path: 'signup', component: SignupComponent
  },
  {
    path: 'signin', component: SigninComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
