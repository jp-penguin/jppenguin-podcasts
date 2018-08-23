import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { PodcastModel } from '~/models/podcast.model';

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
    console.log('test');

    this.addPodcastByUrl('http://feeds.twit.tv/ww.xml');
  }

  public updatePodcastForce() {
    this.updatePodcasts(true);
  }

  private addPodcastByUrl(url: string): void {
    const podcasdf = this.httpClient.get(url, { responseType: 'text' });
    // alert(podcasdf.subscribe(s => {}));
    this.httpClient.get(url, { responseType: 'text' }).subscribe(s => {
      //   this.parsePodcastXml(s);
      console.log('asdf ' + s);
    });
  }

  private parsePodcastXml(rss: string): void {
    // const parser = new DOMParser();
    // const doc = parser.parseFromString(rss, 'text/html');
  }
}
