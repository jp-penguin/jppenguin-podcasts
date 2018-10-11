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
  public playing = false;
  public currentTime: number;
  public duration: number;

  constructor(item: Element) {
    this.author = (item.querySelector('author') as HTMLElement).innerHTML;
    this.title = (item.querySelector('title') as HTMLElement).innerHTML;
    this.subtitle = (item.querySelector('subtitle') as HTMLElement).innerHTML;
    this.summary = (item.querySelector('summary') as HTMLElement).innerHTML;
    this.pubDate = new Date(
      (item.querySelector('pubDate') as HTMLElement).innerHTML
    );
    // console.log(this.pubDate);

    // this.episode = (item.querySelector('episode') as HTMLElement).innerText;

    // console.log('Title episode ' + item.querySelector('episode'));

    this.episodeType = (item.querySelector(
      'episodeType'
    ) as HTMLElement).innerText;
    this.url = item
      .querySelector('enclosure')
      .attributes.getNamedItem('url').textContent;

    this.description = (item.querySelector(
      'description'
    ) as HTMLElement).innerText;
    this.guid = (item.querySelector('guid') as HTMLElement).innerText;
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
