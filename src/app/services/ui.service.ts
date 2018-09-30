import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  public navigationOpen = true;
  constructor() {}

  public navigatoinOpenClick() {
    this.navigationOpen = !this.navigationOpen;
  }
  public searchOpenClick() {
    this.navigationOpen = true;
  }
  public libraryOpenClick() {
    this.navigationOpen = true;
  }
  public playlistOpenClick() {
    this.navigationOpen = true;
  }
  public unplayedOpenClick() {
    this.navigationOpen = true;
  }
  public downloadedOpenClick() {
    this.navigationOpen = true;
  }
  public nowPlayingOpenClick() {
    this.navigationOpen = true;
  }
}
