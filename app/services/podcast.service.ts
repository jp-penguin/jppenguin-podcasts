import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as XmlObjects from 'nativescript-xmlobjects';
import { catchError } from 'rxjs/operators';
import { knownFolders } from 'tns-core-modules/file-system';
import { PodcastModel } from '~/models/podcast.model';
import { PodcastEpisodeModel } from '~/models/podcastEpisode.model';
import { PodcastDataService } from '~/services/PodcastDataService';

// import { parseString } from 'xml2js';
@Injectable()
export class PodcastService {
  public podcasts: Array<PodcastModel>;
  constructor(
    private httpClient: HttpClient,
    private podcastDataService: PodcastDataService
  ) {}
  public updatePodcasts(force: boolean): void {
    if (force) {
      for (const podcast of this.podcasts) {
        console.log('Updating: ' + podcast.title);
      }
    }
  }

  public btnLoadTempData() {
    // this.addPodcastByUrl('http://feeds.twit.tv/ww.xml');
    const documents = knownFolders.currentApp();

    const jsonFile = documents.getFile('Shared/Resources/skeptoid.xml');
    // console.log('jgfhgdhfdyfstrs');

    jsonFile.readText().then(data => {
      this.parsePodcastXml(data);
    });
  }

  public updatePodcastForce() {
    this.updatePodcasts(true);
  }

  private addPodcastByUrl(url: string): void {
    this.httpClient.get(url, { responseType: 'text' }).subscribe(xml => {
      this.parsePodcastXml(xml);
    });
  }

  private parsePodcastXml(xml: string): void {
    const doc = XmlObjects.parse(xml);
    const rootElement = doc.root;
    // const allNodes = rootElement.nodes();
    const channelNode = rootElement.element('channel');
    const podcastTitle = this.parseXmlElementValue(channelNode, ['title']);
    const podcastDescription = this.parseXmlElementValue(channelNode, [
      'description'
    ]);
    const imageUrl = channelNode.element('image').element('url')
      .value as string;
    const episodes = channelNode.elements('item');

    const podcastEpisodes = this.parsePodcastEpisodes(episodes);
    const podcast = new PodcastModel(
      podcastEpisodes,
      podcastTitle,
      '',
      null,
      podcastDescription,
      imageUrl
    );
    this.podcastDataService.podcastsSubscribed.push(podcast);
  }

  private parsePodcastEpisodes(
    podcastsEpisodesXml: Array<XmlObjects.XElement>
  ): Array<PodcastEpisodeModel> {
    const podcastEpisodes: Array<PodcastEpisodeModel> = [];

    for (const podcastsEpisodeXml of podcastsEpisodesXml) {
      const title = this.parseXmlElementValue(podcastsEpisodeXml, ['title']);
      const url = this.parseXmlAttribute(
        podcastsEpisodeXml,
        ['enclosure'],
        ['url']
      );
      podcastEpisodes.push(new PodcastEpisodeModel(title, url));
      console.log(title + ' ' + url);
    }

    return podcastEpisodes;
  }

  private parseXmlAttribute(
    channelNode: XmlObjects.XElement,
    tags: Array<string>,
    attributes: Array<string>
  ): string {
    for (const tag of tags) {
      const node = channelNode.element(tag);

      if ((node.value as string) !== '') {
        for (const attribute of attributes) {
          const attr = node.attribute(attribute).value as string;

          if (attr.trim() !== '') {
            return attr;
          }
        }
      }
    }

    return '';
  }

  private parseXmlElementValue(
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
}
