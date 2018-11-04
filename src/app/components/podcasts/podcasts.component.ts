import {
  Component,
  OnInit,
  ViewChildren,
  QueryList,
  ElementRef,
  ViewChild
} from '@angular/core';
import { SaveStateService } from '../../services/save-state.service';
import { Router } from '@angular/router';
import { UiService } from '../../services/ui.service';
import * as lodash from 'lodash';
import {
  AnimationService,
  AnimcationDuration
} from '../../service/animation.service';

@Component({
  selector: 'app-podcasts',
  templateUrl: './podcasts.component.html',
  styleUrls: ['./podcasts.component.scss']
})
export class PodcastsComponent implements OnInit {
  @ViewChildren('dropdown')
  dropdowns!: QueryList<ElementRef>;
  overlayDisabled = false;
  @ViewChild('overlay')
  overlay!: ElementRef;
  constructor(
    public saveState: SaveStateService,
    private router: Router,
    private uiService: UiService,
    private animationService: AnimationService
  ) {}

  ngOnInit() {}

  dropdownClick(x: string) {
    const dd = this.dropdowns.toArray();

    const temp = lodash.find(this.dropdowns.toArray(), a => {
      return (
        ((a as ElementRef).nativeElement as Element).getAttribute('d-m') === x
      );
    });
    console.log(temp);

    console.log((temp.nativeElement as Element).classList.add('show'));
    // (this.overlay.nativeElement as Element).classList.add('animated', 'fadeIn');
    this.animationService.fadeIn(this.overlay, AnimcationDuration.faster);
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

      this.animationService
        .fadeOut(this.overlay, AnimcationDuration.faster)
        .then((duration: AnimcationDuration) => {
          console.log(duration);

          setTimeout(() => {
            console.log(
              (temp.nativeElement as Element).classList.remove('show')
            );
          }, duration);
        });
    }
  }

  podcastClick(id: string) {
    this.uiService.playerState = 'default';
    this.router.navigateByUrl('podcasts/' + id);
  }
}
