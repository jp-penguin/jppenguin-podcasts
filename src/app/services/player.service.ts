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
        this.podcastEpisode.playing = true;
      } else {
        this.audioPlayer.pause();
        this.podcastEpisode.playing = false;
      }
    } else {
      this.podcastEpisode = podcastEpisode;
      this.audioPlayer.src = this.podcastEpisode.url;
      this.audioPlayer.play();
      this.podcastEpisode.playing = true;
    }
  }
  timeUpdate() {
    console.log(this.audioPlayer.currentTime);
    this.podcastEpisode.currentTime = this.audioPlayer.currentTime;
  }
}
