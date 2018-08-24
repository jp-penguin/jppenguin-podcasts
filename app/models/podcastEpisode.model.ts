export class PodcastEpisodeModel {
  public title: string;
  public url: string;
  public played = false;

  constructor(title: string, url: string) {
    this.title = title;
    this.url = url;
  }
}
