import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PodcastModel } from '../models/PodcastModel';
import { SaveStateService } from './save-state.service';
import * as _ from 'underscore';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  public navigationOpen = true;
  public playerState = 'default';
  private urls = [
    'http://feeds.twit.tv/brickhouse.xml',
    'http://feeds.twit.tv/brickhouse_video_small.xml',
    'http://feeds.twit.tv/brickhouse_video_large.xml',
    'http://feeds.twit.tv/brickhouse_video_hd.xml',
    'http://feeds.twit.tv/aaa.xml',
    'http://feeds.twit.tv/aaa_video_small.xml',
    'http://feeds.twit.tv/aaa_video_large.xml',
    'http://feeds.twit.tv/aaa_video_hd.xml',
    'http://feeds.twit.tv/floss.xml',
    'http://feeds.twit.tv/floss_video_small.xml',
    'http://feeds.twit.tv/floss_video_large.xml',
    'http://feeds.twit.tv/floss_video_hd.xml',
    'http://feeds.twit.tv/hn.xml',
    'http://feeds.twit.tv/hn_video_small.xml',
    'http://feeds.twit.tv/hn_video_large.xml',
    'http://feeds.twit.tv/hn_video_hd.xml',
    'http://feeds.twit.tv/ipad.xml',
    'http://feeds.twit.tv/ipad_video_small.xml',
    'http://feeds.twit.tv/ipad_video_large.xml',
    'http://feeds.twit.tv/ipad_video_hd.xml',
    'http://feeds.twit.tv/kh.xml',
    'http://feeds.twit.tv/kh_video_small.xml',
    'http://feeds.twit.tv/kh_video_large.xml',
    'http://feeds.twit.tv/kh_video_hd.xml',
    'http://feeds.twit.tv/mbw.xml',
    'http://feeds.twit.tv/mbw_video_small.xml',
    'http://feeds.twit.tv/mbw_video_large.xml',
    'http://feeds.twit.tv/mbw_video_hd.xml',
    'http://feeds.twit.tv/tnss.xml',
    'http://feeds.twit.tv/tnss_video_small.xml',
    'http://feeds.twit.tv/tnss_video_large.xml',
    'http://feeds.twit.tv/tnss_video_hd.xml',
    'http://feeds.twit.tv/sn.xml',
    'http://feeds.twit.tv/sn_video_small.xml',
    'http://feeds.twit.tv/sn_video_large.xml',
    'http://feeds.twit.tv/sn_video_hd.xml',
    'http://feeds.twit.tv/kfi.xml',
    'http://feeds.twit.tv/ttg_video_small.xml',
    'http://feeds.twit.tv/ttg_video_large.xml',
    'http://feeds.twit.tv/ttg_video_hd.xml',
    'http://feeds.twit.tv/tnw.xml',
    'http://feeds.twit.tv/tnw_video_small.xml',
    'http://feeds.twit.tv/tnw_video_large.xml',
    'http://feeds.twit.tv/tnw_video_hd.xml',
    'http://feeds.twit.tv/twich.xml',
    'http://feeds.twit.tv/twich_video_small.xml',
    'http://feeds.twit.tv/twich_video_large.xml',
    'http://feeds.twit.tv/twich_video_hd.xml',
    'http://feeds.twit.tv/twiet.xml',
    'http://feeds.twit.tv/twiet_video_small.xml',
    'http://feeds.twit.tv/twiet_video_large.xml',
    'http://feeds.twit.tv/twiet_video_hd.xml',
    'http://feeds.twit.tv/twig.xml',
    'http://feeds.twit.tv/twig_video_small.xml',
    'http://feeds.twit.tv/twig_video_large.xml',
    'http://feeds.twit.tv/twig_video_hd.xml',
    'http://feeds.twit.tv/twil.xml',
    'http://feeds.twit.tv/twil_video_small.xml',
    'http://feeds.twit.tv/twil_video_large.xml',
    'http://feeds.twit.tv/twil_video_hd.xml',
    'http://feeds.twit.tv/twit.xml',
    'http://feeds.twit.tv/twit_video_small.xml',
    'http://feeds.twit.tv/twit_video_large.xml',
    'http://feeds.twit.tv/twit_video_hd.xml',
    'http://feeds.twit.tv/tri.xml',
    'http://feeds.twit.tv/tri_video_small.xml',
    'http://feeds.twit.tv/tri_video_large.xml',
    'http://feeds.twit.tv/tri_video_hd.xml',
    'http://feeds.twit.tv/ces.xml',
    'http://feeds.twit.tv/specials_video_small.xml',
    'http://feeds.twit.tv/specials_video_large.xml',
    'http://feeds.twit.tv/specials_video_hd.xml',
    'http://feeds.twit.tv/vog.xml',
    'http://feeds.twit.tv/ww.xml',
    'http://feeds.twit.tv/ww_video_small.xml',
    'http://feeds.twit.tv/ww_video_large.xml',
    'http://feeds.twit.tv/ww_video_hd.xml',
    'http://feeds.twit.tv/bits.xml',
    'http://feeds.twit.tv/bits_video_small.xml',
    'http://feeds.twit.tv/bits_video_large.xml',
    'http://feeds.twit.tv/bits_video_hd.xml',
    'http://feeds.twit.tv/leo.xml',
    'http://feeds.twit.tv/leo_video_small.xml',
    'http://feeds.twit.tv/leo_video_large.xml',
    'http://feeds.twit.tv/leo_video_hd.xml'
  ];
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
    _.each(this.urls, url => {
      this.httpClient
        .get('https://cors.parkinson.im/' + url, {
          responseType: 'text',
          observe: 'body'
        })
        .subscribe(data => {
          // console.log(data);
          const parser = new DOMParser();
          const doc = parser.parseFromString(data, 'text/xml');
          // console.log(doc.querySelector('channel'));

          const podcast = new PodcastModel(doc, url);

          this.saveState.addPodcast(podcast);
          // console.log(this.saveState.podcasts);

          // console.log(podcast);
        });
      setTimeout(() => {}, 10000);
    });
  }
  public storeButtonClick() {
    this.router.navigateByUrl('store');
  }
  public playerButtonClick() {
    this.router.navigateByUrl('player');
  }
}
