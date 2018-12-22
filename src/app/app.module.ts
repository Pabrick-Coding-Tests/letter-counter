import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterFormModule } from './components/counter-form/counter-form.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CounterFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
