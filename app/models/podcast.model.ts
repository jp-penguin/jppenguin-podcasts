import { PodcastEpisodeModel } from '~/models/podcastEpisode.model';

export class PodcastModel {
  podcastEpisodes: Array<PodcastEpisodeModel>;
  title: string;
  url: string;
  lastUpdated: Date;
  description: string;
}
