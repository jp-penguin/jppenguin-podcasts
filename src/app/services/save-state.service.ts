import { Injectable } from '@angular/core';
import { PodcastModel } from '../models/PodcastModel';
import * as _ from 'underscore';

@Injectable({
  providedIn: 'root'
})
export class SaveStateService {
  public podcasts: PodcastModel[] = [];
  constructor() {
    this.loadState();
  }

  addPodcast(podcast: PodcastModel) {
    this.podcasts.push(podcast);
    this.saveState();
  }

  saveState() {
    localStorage.setItem('podcasts', JSON.stringify(this.podcasts));
  }

  loadState() {
    _.each(
      JSON.parse(localStorage.getItem('podcasts')) as PodcastModel[],
      p => {
        // console.log(p);
        this.podcasts.push(p);
      }
    );
    console.log(this.podcasts);
  }
}
