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
    this.podcasts = _.compact(this.podcasts);
  }

  addPodcast(newPodcast: PodcastModel) {
    // console.log(this.podcasts);

    const tempPodcast = _.find(this.podcasts, pod2 => {
      return pod2.url === newPodcast.url;
    });
    // this.podcasts.push(podcast);
    if (!tempPodcast) {
      this.podcasts.push(newPodcast);
    } else {
      _.each(newPodcast.podcastEpisodes, podcastEpisode => {
        if (_.include(tempPodcast.podcastEpisodes, podcastEpisode)) {
          // console.log(
          //   _.include(tempPodcast.podcastEpisodes, podcastEpisode).valueOf() +
          //     ' asdfasdfasdf ' +
          //     podcastEpisode
          // );
          tempPodcast.podcastEpisodes.push(podcastEpisode);
        }
      });
    }

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
