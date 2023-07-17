import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { VideoComponent } from './components/video/video.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgxLiteYoutubeModule } from 'ngx-lite-video';
import { AgendeComponent } from './components/buttons/agende/agende.component';
import { ManifestoComponent } from './components/buttons/manifesto/manifesto.component';
import { WhatsappComponent } from './components/buttons/whatsapp/whatsapp.component';
import { AudiodescricaoComponent } from './components/buttons/audiodescricao/audiodescricao.component';
import { SiteComponent } from './components/buttons/site/site.component';
import { TextoManifestoComponent } from './components/texto-manifesto/texto-manifesto.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    ToolbarComponent,
    VideoComponent,
    FooterComponent,
    AgendeComponent,
    ManifestoComponent,
    WhatsappComponent,
    AudiodescricaoComponent,
    SiteComponent,
    TextoManifestoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxLiteYoutubeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
