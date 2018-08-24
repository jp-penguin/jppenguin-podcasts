import { PodcastEpisodeModel } from '~/models/podcastEpisode.model';

export class PodcastModel {
  public podcastEpisodes: Array<PodcastEpisodeModel>;
  public title: string;
  public url: string;
  public lastUpdated: Date;
  public description: string;
}
