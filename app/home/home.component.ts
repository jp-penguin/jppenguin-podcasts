import { Component, OnInit } from '@angular/core';
import * as app from 'application';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { PodcastService } from '~/services/podcast.service';
import { PodcastDataService } from '~/services/PodcastDataService';

@Component({
  selector: 'Home',
  moduleId: module.id,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [PodcastService]
})
export class HomeComponent implements OnInit {
  constructor(
    private podcastService: PodcastService,
    public podcastDataService: PodcastDataService
  ) {
    // Use the component constructor to inject providers.
  }

  public ngOnInit(): void {
    // Init your component properties here.
  }

  public onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
  }

  public btnTestClick() {
    this.podcastService.btnLoadTempData();
    console.log(this.podcastDataService.podcastsSubscribed.length);
  }
}
