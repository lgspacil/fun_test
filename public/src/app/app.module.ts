import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CookieService } from 'ngx-cookie-service';
import { HttpService } from './http.service';import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MatInputModule, MatStepperModule, MatDialogModule, MatSliderModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule, MatGridListModule } from '@angular/material';
import { OnChanges } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { GameSetupComponent } from './game-setup/game-setup.component';
import { GamePlayComponent } from './game-setup/game-play/game-play.component';
import { PopUpComponent } from './pop-up/pop-up.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    GameSetupComponent,
    GamePlayComponent,
    PopUpComponent
  ],
  imports: [
    FormsModule,
    HttpModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatInputModule,
    MatStepperModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MatGridListModule,
    MatSliderModule,
    ReactiveFormsModule
  ],
  entryComponents:[
    PopUpComponent
  ],
  providers: [CookieService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
