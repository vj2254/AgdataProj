import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NameAddressComponent } from './name-address/name-address.component';

@NgModule({
  declarations: [
    AppComponent,
    NameAddressComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
