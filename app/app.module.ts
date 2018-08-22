import {
  NgModule,
  NgModuleFactoryLoader,
  NO_ERRORS_SCHEMA
} from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular';

import { HttpClientModule } from '@angular/common/http';
import { PodcastService } from '~/services/podcast.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    NativeScriptModule,
    NativeScriptUISideDrawerModule
  ],
  declarations: [AppComponent],
  providers: [PodcastService],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
