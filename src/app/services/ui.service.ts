import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  public navigationOpen = true;
  constructor(private router: Router) {}

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
  }
}
