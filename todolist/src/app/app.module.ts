import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavabarComponent } from './componenti/navabar/navabar.component';
import { PagesComponent } from './pages/pages.component';
import { HomeComponent } from './pages/home/home.component';
import { CompletatiComponent } from './pages/completati/completati.component';
import { AutoriComponent } from './pages/autori/autori.component';
import { FormsModule } from '@angular/forms';
import { Error404Component } from './componenti/error404/error404.component';

@NgModule({
  declarations: [
    AppComponent,
    NavabarComponent,
    PagesComponent,
    HomeComponent,
    CompletatiComponent,
    AutoriComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
