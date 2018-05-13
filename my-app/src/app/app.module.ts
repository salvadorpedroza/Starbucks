import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { ventanasComponent } from './ventanas/ventanas.component';
import { NgxSlideshowModule } from 'ngx-slideshow';

@NgModule({
  declarations: [
    AppComponent,
    ventanasComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    NgxSlideshowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
