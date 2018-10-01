export class PodcastEpisodeModel {
  public title: string;
  public author: string;
  public subtitle: string;
  public summary: string;
  // public episode: string;
  public episodeType: string;
  public description: string;
  public url: string;
  // public enclosure: Enclosure;
  public guid: string;
  public pubDate: Date;
  public keywords: Keyword[] = [];
  public played = false;

  constructor(item: Element) {
    this.author = item.querySelector('author').innerHTML;
    this.title = item.querySelector('title').innerHTML;
    this.subtitle = item.querySelector('subtitle').innerHTML;
    this.summary = item.querySelector('summary').innerHTML;

    // this.episode = item.querySelector('episode').innerHTML;

    // console.log('Title episode ' + item.querySelector('episode'));

    this.episodeType = item.querySelector('episodeType').innerHTML;
    this.url = item
      .querySelector('enclosure')
      .attributes.getNamedItem('url').textContent;

    this.description = item.querySelector('description').innerHTML;
    this.guid = item.querySelector('guid').innerHTML;
  }
}

export class Enclosure {
  public type: string;
  public url: string;

  constructor(type: string, url: string) {
    this.type = type;
    this.url = url;
  }
}

export class Keyword {
  public keyword: string;
  constructor(keyword: string) {
    this.keyword = keyword;
  }
}
