import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as XmlObjects from 'nativescript-xmlobjects';
import { catchError } from 'rxjs/operators';
import { knownFolders } from 'tns-core-modules/file-system';
import { PodcastModel } from '~/models/podcast.model';

// import { parseString } from 'xml2js';
@Injectable()
export class PodcastService {
  public podcasts: Array<PodcastModel>;
  constructor(private httpClient: HttpClient) {}
  public updatePodcasts(force: boolean): void {
    if (force) {
      for (const podcast of this.podcasts) {
        console.log('Updating: ' + podcast.title);
      }
    }
  }

  public btnLoadTempData() {
    // console.log('testasdhvdrt ffvbfasdfasdf');

    this.addPodcastByUrl('http://feeds.twit.tv/ww.xml');
  }

  public updatePodcastForce() {
    this.updatePodcasts(true);
  }

  private addPodcastByUrl(url: string): void {
    // const podcasdf = this.httpClient.get(url, { responseType: 'text' });
    // alert(podcasdf.subscribe(s => {}));
    // const fs = require('file-system');

    const documents = knownFolders.currentApp();

    const jsonFile = documents.getFile('Shared/Resources/skeptoid.xml');
    // console.log('jgfhgdhfdyfstrs');

    jsonFile.readText().then(data => {
      const doc = XmlObjects.parse(data);
      const rootElement = doc.root;
      // const allNodes = rootElement.nodes();
      const channelNode = rootElement.element('channel');
      const podcastTitle = this.parsePodcastTitle(channelNode, ['title']);
      const podcastDescription = this.parsePodcastTitle(channelNode, [
        'description'
      ]);
      const episodes = channelNode.elements('item');

      console.log(
        podcastTitle + 'ghy ' + podcastDescription + ' ' + episodes.length
      );
    });
    // this.httpClient.get(url, { responseType: 'text' }).subscribe(s => {
    //      this.parsePodcastXml(s);
    //   console.log('asdf ' + s);
    // });
  }

  private parsePodcastTitle(
    channelNode: XmlObjects.XElement,
    tags: Array<string>
  ): string {
    // const tags = ['title'];

    for (const tag of tags) {
      const node = channelNode.element(tag).value as string;

      if (node !== '') {
        return node;
      }
    }

    return '';
  }

  private parsePodcastXml(rss: string): void {
    // const parser = new DOMParser();
    // const doc = parser.parseFromString(rss, 'text/html');
  }
}
