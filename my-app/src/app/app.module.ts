import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { ventanasComponent } from './ventanas/ventanas.component';
import { NgxSlideshowModule } from 'ngx-slideshow';
import { PreparacionComponent } from './preparacion/preparacion.component';
import { CajaComponent } from './caja/caja.component';
import { LecheComponent } from './leche/leche.component';
import { ExtraComponent } from './extra/extra.component';
import { CremaBatidaComponent } from './crema-batida/crema-batida.component';
import { Extra2Component } from './extra2/extra2.component';
import { HttpClientModule } from '@angular/common/http';
import { MongoService } from './services/mongo.service';

@NgModule({
  declarations: [
    AppComponent,
    ventanasComponent,
    PreparacionComponent,
    CajaComponent,
    LecheComponent,
    ExtraComponent,
    CremaBatidaComponent,
    Extra2Component,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    NgbModule.forRoot(),
    NgxSlideshowModule
  ],
  providers: [MongoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
