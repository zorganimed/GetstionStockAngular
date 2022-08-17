import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProviderAddComponent } from './provider-add/provider-add.component';
import { ProviderListComponent } from './provider-list/provider-list.component';
import { ProviderUpdateComponent } from './provider-update/provider-update.component';

const routes: Routes = [
  {path:"", pathMatch : "full",redirectTo : "app-navbar"},
  {path:"contact",component:ContactComponent},
  {path:"addProvider",component:ProviderAddComponent},
  {path:"listProvider",component:ProviderListComponent},
  {path:"updateProvider/:id",component:ProviderUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
