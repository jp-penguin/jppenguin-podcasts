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

    this.addPodcastByUrl('http://twit.tv/ww.xml');
  }

  public updatePodcastForce() {
    this.updatePodcasts(true);
  }

  private addPodcastByUrl(url: string): void {
    alert(this.httpClient.get(url, { responseType: 'text' }));
    this.httpClient.get(url, { responseType: 'text' }).subscribe(s => {
      //   this.parsePodcastXml(s);
      alert(s);
    });
  }

  private parsePodcastXml(rss: string): void {
    // const parser = new DOMParser();
    // const doc = parser.parseFromString(rss, 'text/html');
  }
}
