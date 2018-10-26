import { PodcastEpisodeModel, Keyword } from './PodcastEpisodeModel';
import { HttpClient } from '@angular/common/http';
import * as _ from 'underscore';
import { element } from '@angular/core/src/render3/instructions';
import * as lodash from 'lodash';

export class PodcastModel {
  public title: string;
  public url: string;
  // public lastUpdated: Date;
  public description: string;
  public imageUrl: string;
  // public image: Image;
  public subtitle: string;
  public author: string;
  public summary: string;
  public explicit: string;
  public type: string;
  public category: string;
  public keywords: string[] = [];
  public podcastEpisodes: PodcastEpisodeModel[] = [];
  public id: string;
  // constructor(
  //   podcastEpisodes: PodcastEpisodeModel[],
  //   title: string,
  //   url: string,
  //   lastUpdated: Date,
  //   description: string,
  //   imageUrl: string
  // ) {
  //   this.podcastEpisodes = podcastEpisodes;
  //   this.title = title;
  //   this.url = url;
  //   this.lastUpdated = lastUpdated;
  //   this.description = description;
  //   this.imageUrl = imageUrl;
  //   console.log(imageUrl);
  // }

  constructor(doc: Document, url: string) {
    this.title = doc.querySelector('channel title').innerHTML;
    this.description = doc.querySelector('channel description').innerHTML;

    const iTunesImage = doc.getElementsByTagNameNS(
      'http://www.itunes.com/dtds/podcast-1.0.dtd',
      'image'
    )[0];

    if (iTunesImage) {
      this.imageUrl = doc
        .getElementsByTagNameNS(
          'http://www.itunes.com/dtds/podcast-1.0.dtd',
          'image'
        )[0]
        .getAttribute('href');
    } else {
      this.imageUrl = doc.querySelector('channel image url').innerHTML;
    }

    this.subtitle = doc.querySelector('channel subtitle').innerHTML;
    this.author = doc.querySelector('channel author').innerHTML;
    this.summary = doc.querySelector('channel summary').innerHTML;
    this.explicit = doc.querySelector('channel explicit').innerHTML;
    this.type = doc.querySelector('channel type').innerHTML;
    // this.printClass();
    doc
      .querySelector('channel > keywords')
      .innerHTML.split(',')
      .forEach(k => {
        this.keywords.push(k.trim());
      });

    // console.log(this.keywords);

    lodash.each(doc.querySelectorAll('item'), item => {
      this.podcastEpisodes.push(new PodcastEpisodeModel(item));
    });

    // console.log(doc.querySelectorAll('channel > category > category'));

    // this.image = doc.querySelector('channel image').innerHTML;
    // this.category = doc.querySelector('channel category').innerHTML;
    // this.keywords = doc.querySelector('channel keywords').innerHTML;
    // console.log(this.title);
    this.url = url;
    this.id = this.CreateGuid();

    // console.log(this.CreateGuid());
  }
  CreateGuid() {
    return this._p8(true) + this._p8(true) + this._p8(true) + this._p8(false);
  }
  _p8(s: boolean): string {
    const p = (Math.random().toString(16) + '000000000').substr(2, 8);
    return s ? p.substr(0, 4) + p.substr(4, 4) : p;
  }
  private printClass() {
    console.log('this.description ' + this.description);
    console.log('this.imageUrl ' + this.imageUrl);
    console.log('this.subtitle ' + this.subtitle);
    console.log('this.author ' + this.author);
    console.log('this.summary ' + this.summary);
    console.log('this.explicit ' + this.explicit);
    console.log('this.type ' + this.type);
  }
}

export class Image {
  public url: string;
  public title: string;
  public link: string;

  constructor(url: string, title: string, link: string) {
    this.url = url;
    this.title = title;
    this.link = link;
  }
}
