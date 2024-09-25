import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { BonbonComponent } from './bonbon/bonbon.component';
import { SelComponent } from './sel/sel.component';
import { CaramelComponent } from './caramel/caramel.component';

const routes: Routes = [
  {
    path: '', component: ParentComponent, children: [
      { path: 'bonbon', component: BonbonComponent },
      { path: 'sel', component: SelComponent },
      { path: 'caramelAuSel', component: CaramelComponent },


    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
