import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpCompComponent } from './components/http-comp/http-comp.component';
import { HttpCompSubComponent } from './components/http-comp-sub/http-comp-sub.component';
import { TerzoComponent } from './components/terzo/terzo.component';
import { InfoAjaxComponent } from './components/info-ajax/info-ajax.component';

@NgModule({
  declarations: [
    AppComponent,
    HttpCompComponent,
    HttpCompSubComponent,
    TerzoComponent,
    InfoAjaxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
