import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  public navigationOpen = true;
  constructor(private router: Router, private httpClient: HttpClient) {}

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
  public playerButtonClick() {
    this.router.navigateByUrl('player');
    this.httpClient
      .get('https://skeptoid.com/podcast.xml', {
        responseType: 'text',
        observe: 'body'
      })
      .subscribe(data => {
        console.log(data);
      });
  }
}
