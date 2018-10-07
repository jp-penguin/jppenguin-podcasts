import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SaveStateService } from '../../services/save-state.service';
import * as _ from 'underscore';
import * as lodash from 'lodash';
import { PodcastModel } from '../../models/PodcastModel';
import { PodcastEpisodeModel } from '../../models/PodcastEpisodeModel';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.scss']
})
export class PodcastComponent implements OnInit {
  public podcast: PodcastModel;

  id: number;
  constructor(
    private activatedRouter: ActivatedRoute,
    private saveState: SaveStateService,
    private router: Router,
    private playerService: PlayerService
  ) {}

  ngOnInit() {
    console.log(this.router.routerState);

    this.activatedRouter.params.subscribe(params => {
      console.log(params);

      this.id = parseInt(params['id'], 10);
      this.podcast = this.saveState.podcasts[params['id']];
      // lodash.find(this.saveState.podcasts, podcast => {
      //   return podcast.id === params['id'];
      // });
      console.log(this.podcast);
    });
  }

  playEpisodeClick(id: number) {
    // this.podcast.podcastEpisodes[id].playing = !this.podcast.podcastEpisodes[id]
    //   .playing;
    // this.podcast.podcastEpisodes[id].title = 'hjufydtd';
    // this.saveState.saveState();
    // console.log(podcastEpisode.title);
    this.playerService.play(this.podcast.podcastEpisodes[id]);
  }
}
