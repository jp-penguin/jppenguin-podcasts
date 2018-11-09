import * as dateFormat from 'dateformat';

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
  public pubDate: string;
  public keywords: Keyword[] = [];
  public played = false;
  public playing = false;
  public currentTime: number;
  public duration: string;
  public durationActual = 0;

  constructor(item: Element) {
    this.author = (item.querySelector('author') as HTMLElement).innerHTML;
    this.title = (item.querySelector('title') as HTMLElement).innerHTML;
    this.subtitle = (item.querySelector('subtitle') as HTMLElement).innerHTML;
    this.summary = (item.querySelector('summary') as HTMLElement).innerHTML;

    this.pubDate = dateFormat(
      (item.querySelector('pubDate') as HTMLElement).innerHTML,
      'mm-dd-yyyy',
      false,
      false
    );

    const duraction = item.getElementsByTagNameNS(
      'http://www.itunes.com/dtds/podcast-1.0.dtd',
      'duration'
    )[0];

    console.log(duraction);

    if (duraction) {
      this.duration = duraction.innerHTML;
    } else {
      this.duration = '';
    }

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
