import { Injectable } from '@angular/core';
import { PodcastEpisodeModel } from '../models/PodcastEpisodeModel';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  public podcastEpisode: PodcastEpisodeModel;
  public audioPlayer = new Audio();
  constructor() {
    this.audioPlayer.addEventListener('timeupdate', this.timeUpdate);
    // this.audioPlayer.addEventListener('loadstart', this.timeUpdate);
    // this.audioPlayer.addEventListener('timeupdate', this.timeUpdate);
    // this.audioPlayer.addEventListener('timeupdate', this.timeUpdate);
  }

  play(podcastEpisode: PodcastEpisodeModel) {
    if (this.podcastEpisode === podcastEpisode) {
      if (this.audioPlayer.paused) {
        this.audioPlayer.play();
      } else {
        this.audioPlayer.pause();
      }
    } else {
      this.podcastEpisode = podcastEpisode;
      this.audioPlayer.src = this.podcastEpisode.url;
      this.audioPlayer.play();
    }
  }
  timeUpdate() {
    this.podcastEpisode.currentTime = this.audioPlayer.currentTime;
  }
}
