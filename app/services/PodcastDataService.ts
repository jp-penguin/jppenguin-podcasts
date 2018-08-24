import { Injectable } from '@angular/core';
import { PodcastModel } from '~/models/podcast.model';
import { PodcastEpisodeModel } from '~/models/podcastEpisode.model';

@Injectable()
export class PodcastDataService {
  public podcastsSubscribed: Array<PodcastModel> = [];
  public podcastSelected: PodcastModel;
  public podcastsEpisodePlaying: PodcastEpisodeModel;
}
