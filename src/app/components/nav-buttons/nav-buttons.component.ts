import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-nav-buttons',
  templateUrl: './nav-buttons.component.html',
  styleUrls: ['./nav-buttons.component.scss']
})
export class NavButtonsComponent implements OnInit {
  constructor(public uiService: UiService) {}

  ngOnInit() {}

  navButtonClick() {
    this.uiService.navigationOpen = false;
  }
}
