import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstcomComponent } from './firstcom/firstcom.component';
import { SecondcomComponent } from './secondcom/secondcom.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstcomComponent,
    SecondcomComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
