import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LandpageComponent } from './landpage/landpage.component';
import { NewtrainingComponent } from './newtraining/newtraining.component';
import { SavetrainingComponent } from './savetraining/savetraining.component';
import { NewtrainingeditComponent } from './newtrainingedit/newtrainingedit.component';
import { NametrainingComponent } from './nametraining/nametraining.component';
import { WeekdaytrainingComponent } from './weekdaytraining/weekdaytraining.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [

    AppComponent,
    MenuComponent,
    FooterComponent,
    LandpageComponent,
    NewtrainingComponent,
    SavetrainingComponent,
    NewtrainingeditComponent,
    NametrainingComponent,
    WeekdaytrainingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
