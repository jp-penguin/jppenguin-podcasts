import { Injectable } from '@angular/core';
import { PodcastEpisodeModel } from '../models/PodcastEpisodeModel';
import { UiService } from './ui.service';
import { SaveStateService } from './save-state.service';
import { PodcastModel } from '../models/PodcastModel';
import * as lodash from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  public podcastEpisode: PodcastEpisodeModel;
  public audioPlayer = new Audio();
  constructor(private saveState: SaveStateService) {
    // this.audioPlayer.addEventListener('loadstart', this.timeUpdate);
    // this.audioPlayer.addEventListener('timeupdate', this.timeUpdate);
    // this.audioPlayer.addEventListener('timeupdate', this.timeUpdate);
  }

  play(podcastEpisode: PodcastEpisodeModel) {
    podcastEpisode.playing = !podcastEpisode.playing;
    // if (
    //   this.podcastEpisode !== undefined &&
    //   this.podcastEpisode.url === podcastEpisode.url
    // ) {
    //   if (this.audioPlayer.paused) {
    //     this.audioPlayer.play();
    //     this.podcastEpisode.playing = true;
    //     console.log(podcastEpisode.currentTime);
    //   } else {
    //     this.audioPlayer.pause();
    //     this.podcastEpisode.playing = false;
    //   }
    // } else {
    //   // this.podcastEpisode = podcastEpisode;
    //   // this.saveState.podcasts.
    //   const tempPodcast = lodash.find<PodcastModel>(
    //     this.saveState.podcasts,
    //     pod => {
    //       return pod.id === podcast.id;
    //     }
    //   );
    //   this.podcastEpisode = lodash.find<PodcastEpisodeModel>(
    //     tempPodcast.podcastEpisodes,
    //     pE => {
    //       return pE.url === podcastEpisode.url;
    //     }
    //   );
    //   this.audioPlayer.src = podcastEpisode.url;
    //   this.audioPlayer.currentTime = this.podcastEpisode.currentTime;
    //   this.audioPlayer.removeEventListener('timeupdate', (event: Event) => {
    //     this.podcastEpisode.currentTime = (event as any).path[0].currentTime;
    //   });
    //   this.audioPlayer.addEventListener('timeupdate', (event: Event) => {
    //     this.podcastEpisode.currentTime = (event as any).path[0].currentTime;
    //   });
    //   console.log('curretime' + this.podcastEpisode.currentTime);
    //   this.audioPlayer.play();
    //   this.podcastEpisode.playing = true;
    // }
  }
  timeUpdate(event: Event) {
    console.log((event as any).path[0].currentTime);
    this.podcastEpisode.currentTime = (event as any).path[0].currentTime;
  }
}
