import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PodcastsComponent } from './components/podcasts/podcasts.component';
import { PodcastComponent } from './components/podcast/podcast.component';
import { SettingsComponent } from './components/settings/settings.component';
import { StoreComponent } from './components/store/store.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { UnplayedComponent } from './components/unplayed/unplayed.component';
import { DownloadedComponent } from './components/downloaded/downloaded.component';
import { PlayerComponent } from './components/player/player.component';

const routes: Routes = [
  {
    path: 'podcasts/:id',
    component: PodcastComponent
  },
  {
    path: 'podcasts',
    component: PodcastsComponent
  },
  {
    path: 'playlist',
    component: PlaylistComponent
  },
  {
    path: 'unplayed',
    component: UnplayedComponent
  },
  {
    path: 'downloaded',
    component: DownloadedComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: 'store',
    component: StoreComponent
  },
  {
    path: 'player',
    component: PlayerComponent
  },
  {
    path: '',
    component: PodcastsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
