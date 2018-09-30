import 'zone.js/dist/zone-mix';
import 'reflect-metadata';
import '../polyfills';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

// NG Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { ElectronService } from './providers/electron.service';

import { WebviewDirective } from './directives/webview.directive';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavButtonsComponent } from './components/nav-buttons/nav-buttons.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PodcastsComponent } from './components/podcasts/podcasts.component';
import { StoreComponent } from './components/store/store.component';
import { PodcastComponent } from './components/podcast/podcast.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { UiService } from './services/ui.service';
import { UnplayedComponent } from './components/unplayed/unplayed.component';
import { DownloadedComponent } from './components/downloaded/downloaded.component';
import { PlayerComponent } from './components/player/player.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WebviewDirective,
    NavButtonsComponent,
    NavigationComponent,
    PodcastsComponent,
    StoreComponent,
    PodcastComponent,
    SettingsComponent,
    PlaylistComponent,
    UnplayedComponent,
    DownloadedComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [UiService, ElectronService],
  bootstrap: [AppComponent]
})
export class AppModule {}
