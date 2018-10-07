import { Injectable } from '@angular/core';
import { PodcastModel } from '../models/PodcastModel';
import * as _ from 'underscore';
import * as lodash from 'lodash';
import { PodcastEpisodeModel } from '../models/PodcastEpisodeModel';

@Injectable({
  providedIn: 'root'
})
export class SaveStateService {
  public podcasts: PodcastModel[] = [];
  constructor() {
    this.loadState();
    this.podcasts = lodash.compact(this.podcasts);
  }

  addPodcast(newPodcast: PodcastModel) {
    // console.log(this.podcasts);

    const tempPodcast = lodash.find(this.podcasts, pod2 => {
      return pod2.url === newPodcast.url;
    });
    // this.podcasts.push(podcast);
    if (!tempPodcast) {
      this.podcasts.push(newPodcast);
    } else {
      lodash.each(newPodcast.podcastEpisodes, podcastEpisode => {
        if (lodash.includes(tempPodcast.podcastEpisodes, podcastEpisode)) {
          // console.log(
          //   lodash.include(tempPodcast.podcastEpisodes, podcastEpisode).valueOf() +
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
    // console.log('Saving');
    if (this.podcasts) {
      const temp = lodash.slice(this.podcasts);
      localStorage.setItem(
        'podcasts',
        JSON.stringify(
          lodash.each(temp, p => {
            lodash.each(p.podcastEpisodes, pe => {
              pe.playing = false;
            });
          })
        )
      );
    }

    // console.log('Saved');
  }

  loadState() {
    lodash.each(
      JSON.parse(localStorage.getItem('podcasts')) as PodcastModel[],
      p => {
        // console.log(p);
        this.podcasts.push(p);
      }
    );
    console.log(this.podcasts);
  }

  trackById(index: number, podcast: PodcastModel): string {
    return podcast.id;
  }
  trackById2(index: number, podcast: PodcastEpisodeModel): string {
    return podcast.url;
  }
}
