import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-downloaded',
  templateUrl: './downloaded.component.html',
  styleUrls: ['./downloaded.component.scss']
})
export class DownloadedComponent implements OnInit {
  constructor(private uiService: UiService) {}

  ngOnInit() {
    this.uiService.playerState = 'default';
  }
}
