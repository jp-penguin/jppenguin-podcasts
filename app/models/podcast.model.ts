import { PodcastEpisodeModel } from '~/models/podcastEpisode.model';

export class PodcastModel {
  public podcastEpisodes: Array<PodcastEpisodeModel>;
  public title: string;
  public url: string;
  public lastUpdated: Date;
  public description: string;
  public imageUrl: string;

  constructor(
    podcastEpisodes: Array<PodcastEpisodeModel>,
    title: string,
    url: string,
    lastUpdated: Date,
    description: string,
    imageUrl: string
  ) {
    this.podcastEpisodes = podcastEpisodes;
    this.title = title;
    this.url = url;
    this.lastUpdated = lastUpdated;
    this.description = description;
    this.imageUrl = imageUrl;
    console.log(imageUrl);
  }
}
