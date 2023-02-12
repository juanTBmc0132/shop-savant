import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComparisonComponent } from './comparison/comparison.component';
import { PopupComponent } from './popup/popup.component';

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "popup"},
  {path: "popup", component: PopupComponent},
  {path: "comparison", component: ComparisonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
