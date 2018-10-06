import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  private searchBox: HTMLInputElement;

  private urlRegex = new RegExp(
    // tslint:disable-next-line:max-line-length
    /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,})/g
  );
  constructor(public uiService: UiService) {}

  ngOnInit() {
    this.searchBox = document.querySelector('#searchBox') as HTMLInputElement;
  }

  searchKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      if (this.urlRegex.exec(this.searchBox.value) !== null) {
        this.uiService.getPodcast(this.searchBox.value);
      }
    }
  }
}
