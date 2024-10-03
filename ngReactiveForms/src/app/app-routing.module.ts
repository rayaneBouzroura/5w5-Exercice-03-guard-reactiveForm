import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DaddyComponent } from './components/daddy/daddy.component';

const routes: Routes = [

    {path : '' , component : DaddyComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
