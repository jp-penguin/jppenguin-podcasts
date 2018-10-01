import { PodcastEpisodeModel, Keyword } from './PodcastEpisodeModel';
import { HttpClient } from '@angular/common/http';
import * as _ from 'underscore';
import { element } from '@angular/core/src/render3/instructions';

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
    this.imageUrl = doc.querySelector('channel image url').innerHTML;
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

    _.each(doc.querySelectorAll('item'), item => {
      this.podcastEpisodes.push(new PodcastEpisodeModel(item));
    });

    // console.log(doc.querySelectorAll('channel > category > category'));

    // this.image = doc.querySelector('channel image').innerHTML;
    // this.category = doc.querySelector('channel category').innerHTML;
    // this.keywords = doc.querySelector('channel keywords').innerHTML;
    // console.log(this.title);
    this.url = url;
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

  // constructor(channel: any) {
  //   this.imageUrl = channel.IMAGE[0].URL[0];
  //   this.image = new Image(
  //     channel.IMAGE[0].URL,
  //     channel.IMAGE[0].TITLE,
  //     channel.IMAGE[0].LINK
  //   );
  //   this.title = channel.TITLE[0];

  //   this.description = channel.DESCRIPTION[0];
  //   this.url = this.setFeedUrl(channel);

  //   // console.log(channel['ATOM:LINK'][0].$.HREF);

  //   // this.lastUpdated = new Date(channel.PUBDATE[0]);
  //   // const items = channel.ITEM;

  //   this.subtitle = this.setType(channel, ['ITUNES:SUBTITLE']); // channel['ITUNES:SUBTITLE'][0];
  //   this.author = this.setType(channel, ['ITUNES:AUTHOR']); // channel['ITUNES:AUTHOR'][0];

  //   this.summary = this.setType(channel, ['ITUNES:SUMMARY']); // channel['ITUNES:SUMMARY'][0];
  //   this.explicit = this.setType(channel, ['ITUNES:EXPLICIT']); // channel['ITUNES:EXPLICIT'];

  //   this.type = this.setType(channel, ['ITUNES:TYPE']); // channel['ITUNES:TYPE'][0];

  //   this.setType(channel, ['ITUNES:KEYWORDS'])
  //     .split(',')
  //     .forEach(keyword => {
  //       this.keywords.push(new Keyword(keyword));
  //     });
  //   this.category = this.setType(channel, ['ITUNES:CATEGORY']); // channel['ITUNES:CATEGORY'][0];
  //   // for (let x = 0; x < channel.ITEM.length; x++) {
  //   //   const element = channel.ITEM[x];
  //   //   console.log(element);
  //   // }
  //   for (const item of channel.ITEM) {
  //     // console.log('item ' + item);

  //     this.podcastEpisodes.push(new PodcastEpisodeModel(item));
  //   }
  //   this.failingTest();
  // }

  // private failingTest() {
  //   if (this.title.indexOf('San Francisco Chronicle Food') !== -1) {
  //     console.log(this.title);
  //   }
  // }

  // private setFeedUrl(channel: any): string {
  //   if (channel['ATOM:LINK'] !== undefined) {
  //     return channel['ATOM:LINK'][0].$.HREF;
  //   }
  //   return '';
  // }

  // private setType(channel: any, tags: string[]): string {
  //   return this.setBasicTag(channel, tags);
  // }
  // private setBasicTag(channel: any, tags: string[]): string {
  //   tags.forEach(tag => {
  //     if (channel[tag] !== undefined) {
  //       return channel[tag][0];
  //     }
  //   });
  //   return '';
  // }
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
