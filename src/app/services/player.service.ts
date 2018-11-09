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
  public minMaxValue = [0, 100, 0];
  public podcastEpisode: PodcastEpisodeModel;
  public audioPlayer = new Audio();
  constructor(private saveState: SaveStateService) {
    // this.audioPlayer.addEventListener('loadstart', () => {
    //   this.timeUpdate();
    // });
    this.audioPlayer.addEventListener('timeupdate', () => {
      this.podcastEpisode.durationActual = this.audioPlayer.duration;
      this.timeUpdate();
    });
    // this.audioPlayer.addEventListener('timeupdate', this.timeUpdate);
  }

  play(podcastEpisode: PodcastEpisodeModel) {
    // podcastEpisode.playing = !podcastEpisode.playing;
    if (
      this.podcastEpisode !== undefined &&
      this.podcastEpisode.url === podcastEpisode.url
    ) {
      if (this.audioPlayer.paused) {
        this.audioPlayer.play();
        this.podcastEpisode.playing = true;
        console.log(podcastEpisode.currentTime);
      } else {
        this.audioPlayer.pause();
        this.podcastEpisode.playing = false;
      }
    } else {
      if (this.podcastEpisode) {
        this.podcastEpisode.playing = false;
      }
      this.podcastEpisode = podcastEpisode;
      this.audioPlayer.src = podcastEpisode.url;
      console.log('curretime' + this.podcastEpisode.currentTime);
      if (!this.podcastEpisode.currentTime) {
        this.podcastEpisode.currentTime = 0;
      }
      this.audioPlayer.currentTime = this.podcastEpisode.currentTime;
      // this.audioPlayer.removeEventListener('timeupdate', (event: Event) => {
      //   this.podcastEpisode.currentTime = (event as any).path[0].currentTime;
      // });
      // this.audioPlayer.addEventListener('timeupdate', (event: Event) => {
      //   this.podcastEpisode.currentTime = (event as any).path[0].currentTime;
      // });
      this.audioPlayer.play();
      this.podcastEpisode.playing = true;
    }
  }
  timeUpdate() {
    // console.log((event as any).path[0].currentTime);
    this.podcastEpisode.currentTime = this.audioPlayer.currentTime;
  }
}
