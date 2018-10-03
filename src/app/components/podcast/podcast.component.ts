import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SaveStateService } from '../../services/save-state.service';
import * as _ from 'underscore';
import { PodcastModel } from '../../models/PodcastModel';

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.scss']
})
export class PodcastComponent implements OnInit {
  public podcast: PodcastModel;
  constructor(
    private activatedRouter: ActivatedRoute,
    private saveState: SaveStateService
  ) {}

  ngOnInit() {
    this.activatedRouter.params.subscribe(params => {
      console.log(params);

      this.podcast = _.find(this.saveState.podcasts, podcast => {
        return podcast.id === params['id'];
      });
      console.log(this.podcast);
    });
  }
}
