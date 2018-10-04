import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-unplayed',
  templateUrl: './unplayed.component.html',
  styleUrls: ['./unplayed.component.scss']
})
export class UnplayedComponent implements OnInit {
  constructor(private uiService: UiService) {}

  ngOnInit() {
    this.uiService.playerState = 'default';
  }
}
