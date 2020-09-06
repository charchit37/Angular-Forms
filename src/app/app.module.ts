import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { CustomDirectiveDirective } from './custom-directive.directive';
import { Routes, RouterModule } from '@angular/router';

const app : Routes = [{path:'',component:FormsComponent}] 


@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    CustomDirectiveDirective,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(app)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
