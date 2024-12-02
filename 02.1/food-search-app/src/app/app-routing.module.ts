import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { ItemComponent } from './item/item.component';

const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'item/:id', component: ItemComponent }  // Parametro 'id' per il prodotto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
