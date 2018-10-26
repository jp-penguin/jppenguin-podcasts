import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-nav-buttons',
  templateUrl: './nav-buttons.component.html',
  styleUrls: ['./nav-buttons.component.scss']
})
export class NavButtonsComponent implements OnInit {
  @ViewChild('searchBox')
  searchBox: ElementRef;
  private urlRegex = new RegExp(
    // tslint:disable-next-line:max-line-length
    /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,})/g
  );
  constructor(public uiService: UiService) {}

  ngOnInit() {}

  navButtonClick() {
    this.uiService.navigationOpen = false;
  }
  searchKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      if (this.urlRegex.exec(this.searchBox.nativeElement.value) !== null) {
        // console.log(this.searchBox.nativeElement.value);
        this.uiService.getPodcast(this.searchBox.nativeElement.value);
      }
    }
  }
}
