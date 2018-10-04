import { Component, OnInit } from '@angular/core';
import { SaveStateService } from '../../services/save-state.service';
import { Router } from '@angular/router';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-podcasts',
  templateUrl: './podcasts.component.html',
  styleUrls: ['./podcasts.component.scss']
})
export class PodcastsComponent implements OnInit {
  constructor(
    public saveState: SaveStateService,
    private router: Router,
    private uiService: UiService
  ) {}

  ngOnInit() {}

  podcastClick(id: string) {
    this.uiService.playerState = 'default';
    this.router.navigateByUrl('podcasts/' + id);
  }
}
