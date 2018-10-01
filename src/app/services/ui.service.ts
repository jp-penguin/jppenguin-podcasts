import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PodcastModel } from '../models/PodcastModel';
import { SaveStateService } from './save-state.service';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  public navigationOpen = true;
  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private saveState: SaveStateService
  ) {}

  public navigatoinButtonClick() {
    this.navigationOpen = !this.navigationOpen;
  }
  public searchButtonClick() {
    this.navigationOpen = true;

    // this.router.navigateByUrl('search');
  }
  public libraryButtonClick() {
    this.router.navigateByUrl('podcasts');
  }
  public playlistButtonClick() {
    this.router.navigateByUrl('playlist');
  }
  public unplayedButtonClick() {
    this.router.navigateByUrl('unplayed');
  }
  public downloadedButtonClick() {
    this.router.navigateByUrl('downloaded');
  }
  public settingsButtonClick() {
    this.router.navigateByUrl('settings');
  }

  public refreshButtonClick() {
    this.httpClient
      .get('assets/podcast.xml', {
        responseType: 'text',
        observe: 'body'
      })
      .subscribe(data => {
        // console.log(data);
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, 'text/xml');
        // console.log(doc.querySelector('channel'));

        const podcast = new PodcastModel(
          doc,
          'https://skeptoid.com/podcast.xml'
        );

        this.saveState.addPodcast(podcast);
        console.log(this.saveState.podcasts);

        // console.log(podcast);
      });
  }
  public storeButtonClick() {
    this.router.navigateByUrl('store');
  }
  public playerButtonClick() {
    this.router.navigateByUrl('player');
  }
}
