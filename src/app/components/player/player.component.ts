import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  constructor(
    private uiService: UiService,
    public playerService: PlayerService
  ) {}

  ngOnInit() {}
  audioChange(e: Event) {
    const range = e.srcElement;
    console.log(range);
  }
}
