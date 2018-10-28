import {
  Component,
  OnInit,
  ViewChildren,
  QueryList,
  ElementRef
} from '@angular/core';
import { SaveStateService } from '../../services/save-state.service';
import { Router } from '@angular/router';
import { UiService } from '../../services/ui.service';
import * as lodash from 'lodash';

@Component({
  selector: 'app-podcasts',
  templateUrl: './podcasts.component.html',
  styleUrls: ['./podcasts.component.scss']
})
export class PodcastsComponent implements OnInit {
  @ViewChildren('dropdown')
  dropdowns!: QueryList<ElementRef>;
  constructor(
    public saveState: SaveStateService,
    private router: Router,
    private uiService: UiService
  ) {}

  ngOnInit() {}

  dropdownClick(x: string) {
    const dd = this.dropdowns.toArray();

    const temp = lodash.find(this.dropdowns.toArray(), a => {
      return (
        ((a as ElementRef).nativeElement as Element).getAttribute('d-m') === x
      );
    });
    console.log((temp.nativeElement as Element).classList.add('show'));
  }
  overlayClick(x: string, event: Event) {
    console.log();

    if ((event.target as Element).classList.contains('dropdown')) {
      const dd = this.dropdowns.toArray();

      const temp = lodash.find(this.dropdowns.toArray(), a => {
        return (
          ((a as ElementRef).nativeElement as Element).getAttribute('d-m') === x
        );
      });
      console.log((temp.nativeElement as Element).classList.remove('show'));
    }
  }

  podcastClick(id: string) {
    this.uiService.playerState = 'default';
    this.router.navigateByUrl('podcasts/' + id);
  }
}
