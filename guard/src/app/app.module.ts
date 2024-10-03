import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { BonbonComponent } from './bonbon/bonbon.component';
import { SelComponent } from './sel/sel.component';
import { CaramelComponent } from './caramel/caramel.component';
import { FormsModule } from '@angular/forms';
import { EauComponent } from './eau/eau.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    BonbonComponent,
    SelComponent,
    CaramelComponent,
    EauComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
