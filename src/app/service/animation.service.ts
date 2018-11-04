import { Injectable, ElementRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {
  constructor() {}

  private animateCSS: string[] = [
    'slow',
    'slower',
    'fast',
    'faster',
    'infinite',
    'bounce',
    'flash',
    'pulse',
    'rubberBand',
    'shake',
    'infinite',
    'headShake',
    'swing',
    'tada',
    'wobble',
    'jello',
    'bounceIn',
    'bounceInDown',
    'bounceInLeft',
    'bounceInRight',
    'bounceInUp',
    'bounceOut',
    'bounceOutDown',
    'bounceOutLeft',
    'bounceOutRight',
    'bounceOutUp',
    'fadeIn',
    'fadeInDown',
    'fadeInDownBig',
    'fadeInLeft',
    'fadeInLeftBig',
    'fadeInRight',
    'fadeInRightBig',
    'fadeInUp',
    'fadeInUpBig',
    'fadeOut',
    'fadeOutDown',
    'fadeOutDownBig',
    'fadeOutLeft',
    'fadeOutLeftBig',
    'fadeOutRight',
    'fadeOutRightBig',
    'fadeOutUp',
    'fadeOutUpBig',
    'flipInX',
    'flipInY',
    'flipOutX',
    'flipOutY',
    'lightSpeedIn',
    'lightSpeedOut',
    'rotateIn',
    'rotateInDownLeft',
    'rotateInDownRight',
    'rotateInUpLeft',
    'rotateInUpRight',
    'rotateOut',
    'rotateOutDownLeft',
    'rotateOutDownRight',
    'rotateOutUpLeft',
    'rotateOutUpRight',
    'hinge',
    'jackInTheBox',
    'rollIn',
    'rollOut',
    'zoomIn',
    'zoomInDown',
    'zoomInLeft',
    'zoomInRight',
    'zoomInUp',
    'zoomOut',
    'zoomOutDown',
    'zoomOutLeft',
    'zoomOutRight',
    'zoomOutUp',
    'slideInDown',
    'slideInLeft',
    'slideInRight',
    'slideInUp',
    'slideOutDown',
    'slideOutLeft',
    'slideOutRight',
    'slideOutUp',
    'heartBeat'
  ];

  public fadeIn(
    nativeElement: ElementRef,
    duration: AnimcationDuration = AnimcationDuration.default,
    delay: number = 0
  ): Promise<number> {
    return this.addClass(nativeElement, ['fadeIn'], duration, delay);
  }

  public bounce(
    nativeElement: ElementRef,
    duration: AnimcationDuration = AnimcationDuration.default,
    delay: number = 0
  ): Promise<number> {
    return this.addClass(nativeElement, ['bounce'], duration, delay);
  }
  public flash(
    nativeElement: ElementRef,
    duration: AnimcationDuration = AnimcationDuration.default,
    delay: number = 0
  ): Promise<number> {
    return this.addClass(nativeElement, ['flash'], duration, delay);
  }
  public pulse(
    nativeElement: ElementRef,
    duration: AnimcationDuration = AnimcationDuration.default,
    delay: number = 0
  ): Promise<number> {
    return this.addClass(nativeElement, ['pulse'], duration, delay);
  }
  public rubberBand(
    nativeElement: ElementRef,
    duration: AnimcationDuration = AnimcationDuration.default,
    delay: number = 0
  ): Promise<number> {
    return this.addClass(nativeElement, ['rubberBand'], duration, delay);
  }
  public shake(
    nativeElement: ElementRef,
    duration: AnimcationDuration = AnimcationDuration.default,
    delay: number = 0
  ): Promise<number> {
    return this.addClass(nativeElement, ['shake'], duration, delay);
  }
  public headShake(
    nativeElement: ElementRef,
    duration: AnimcationDuration = AnimcationDuration.default,
    delay: number = 0
  ): Promise<number> {
    return this.addClass(nativeElement, ['headShake'], duration, delay);
  }
  public swing(
    nativeElement: ElementRef,
    duration: AnimcationDuration = AnimcationDuration.default,
    delay: number = 0
  ): Promise<number> {
    return this.addClass(nativeElement, ['swing'], duration, delay);
  }
  public tada(
    nativeElement: ElementRef,
    duration: AnimcationDuration = AnimcationDuration.default,
    delay: number = 0
  ): Promise<number> {
    return this.addClass(nativeElement, ['tada'], duration, delay);
  }
  public wobble(
    nativeElement: ElementRef,
    duration: AnimcationDuration = AnimcationDuration.default,
    delay: number = 0
  ): Promise<number> {
    return this.addClass(nativeElement, ['wobble'], duration, delay);
  }
  public jello(
    nativeElement: ElementRef,
    duration: AnimcationDuration = AnimcationDuration.default,
    delay: number = 0
  ): Promise<number> {
    return this.addClass(nativeElement, ['jello'], duration, delay);
  }
  public bounceIn(
    nativeElement: ElementRef,
    duration: AnimcationDuration = AnimcationDuration.default,
    delay: number = 0
  ): Promise<number> {
    return this.addClass(nativeElement, ['bounceIn'], duration, delay);
  }
  public bounceInDown(
    nativeElement: ElementRef,
    duration: AnimcationDuration = AnimcationDuration.default,
    delay: number = 0
  ): Promise<number> {
    return this.addClass(nativeElement, ['bounceInDown'], duration, delay);
  }
  public bounceInLeft(
    nativeElement: ElementRef,
    duration: AnimcationDuration = AnimcationDuration.default,
    delay: number = 0
  ): Promise<number> {
    return this.addClass(nativeElement, ['bounceInLeft'], duration, delay);
  }
  public bounceInRight(
    nativeElement: ElementRef,
    duration: AnimcationDuration = AnimcationDuration.default,
    delay: number = 0
  ): Promise<number> {
    return this.addClass(nativeElement, ['bounceInRight'], duration, delay);
  }
  public bounceInUp(
    nativeElement: ElementRef,
    duration: AnimcationDuration = AnimcationDuration.default,
    delay: number = 0
  ): Promise<number> {
    return this.addClass(nativeElement, ['bounceInUp'], duration, delay);
  }
  public bounceOut(
    nativeElement: ElementRef,
    duration: AnimcationDuration = AnimcationDuration.default,
    delay: number = 0
  ): Promise<number> {
    return this.addClass(nativeElement, ['bounceOut'], duration, delay);
  }
  public bounceOutDown(
    nativeElement: ElementRef,
    duration: AnimcationDuration = AnimcationDuration.default,
    delay: number = 0
  ): Promise<number> {
    return this.addClass(nativeElement, ['bounceOutDown'], duration, delay);
  }
  public bounceOutLeft(
    nativeElement: ElementRef,
    duration: AnimcationDuration = AnimcationDuration.default,
    delay: number = 0
  ): Promise<number> {
    return this.addClass(nativeElement, ['bounceOutLeft'], duration, delay);
  }
  public bounceOutRight(
    nativeElement: ElementRef,
    duration: AnimcationDuration = AnimcationDuration.default,
    delay: number = 0
  ): Promise<number> {
    return this.addClass(nativeElement, ['bounceOutRight'], duration, delay);
  }
  public bounceOutUp(
    nativeElement: ElementRef,
    duration: AnimcationDuration = AnimcationDuration.default,
    delay: number = 0
  ): Promise<number> {
    return this.addClass(nativeElement, ['bounceOutUp'], duration, delay);
  }
  public fadeInDown(
    nativeElement: ElementRef,
    duration: AnimcationDuration = AnimcationDuration.default,
    delay: number = 0
  ): Promise<number> {
    return this.addClass(nativeElement, ['fadeInDown'], duration, delay);
  }
  public fadeInDownBig(
    nativeElement: ElementRef,
    duration: AnimcationDuration = AnimcationDuration.default,
    delay: number = 0
  ): Promise<number> {
    return this.addClass(nativeElement, ['fadeInDownBig'], duration, delay);
  }
  public fadeInLeft(
    nativeElement: ElementRef,
    duration: AnimcationDuration = AnimcationDuration.default,
    delay: number = 0
  ): Promise<number> {
    return this.addClass(nativeElement, ['fadeInLeft'], duration, delay);
  }
  public fadeInLeftBig(
    nativeElement: ElementRef,
    duration: AnimcationDuration = AnimcationDuration.default,
    delay: number = 0
  ): Promise<number> {
    return this.addClass(nativeElement, ['fadeInLeftBig'], duration, delay);
  }
  public fadeInRight(
    nativeElement: ElementRef,
    duration: AnimcationDuration = AnimcationDuration.default,
    delay: number = 0
  ): Promise<number> {
    return this.addClass(nativeElement, ['fadeInRight'], duration, delay);
  }
  public fadeInRightBig(
    nativeElement: ElementRef,
    duration: AnimcationDuration = AnimcationDuration.default,
    delay: number = 0
  ): Promise<number> {
    return this.addClass(nativeElement, ['fadeInRightBig'], duration, delay);
  }
  public fadeInUp(
    nativeElement: ElementRef,
    duration: AnimcationDuration = AnimcationDuration.default,
    delay: number = 0
  ): Promise<number> {
    return this.addClass(nativeElement, ['fadeInUp'], duration, delay);
  }
  public fadeInUpBig(
    nativeElement: ElementRef,
    duration: AnimcationDuration = AnimcationDuration.default,
    delay: number = 0
  ): Promise<number> {
    return this.addClass(nativeElement, ['fadeInUpBig'], duration, delay);
  }
  public fadeOut(
    nativeElement: ElementRef,
    duration: AnimcationDuration = AnimcationDuration.default,
    delay: number = 0
  ): Promise<number> {
    return this.addClass(nativeElement, ['fadeOut'], duration, delay);
  }
  public fadeOutDown(
    nativeElement: ElementRef,
    duration: AnimcationDuration = AnimcationDuration.default,
    delay: number = 0
  ): Promise<number> {
    return this.addClass(nativeElement, ['fadeOutDown'], duration, delay);
  }
  public fadeOutDownBig(
    nativeElement: ElementRef,
    duration: AnimcationDuration = AnimcationDuration.default,
    delay: number = 0
  ): Promise<number> {
    return this.addClass(nativeElement, ['fadeOutDownBig'], duration, delay);
  }
  public fadeOutLeft(
    nativeElement: ElementRef,
    duration: AnimcationDuration = AnimcationDuration.default,
    delay: number = 0
  ): Promise<number> {
    return this.addClass(nativeElement, ['fadeOutLeft'], duration, delay);
  }
  public fadeOutLeftBig(
    nativeElement: ElementRef,
    duration: AnimcationDuration = AnimcationDuration.default,
    delay: number = 0
  ): Promise<number> {
    return this.addClass(nativeElement, ['fadeOutLeftBig'], duration, delay);
  }
  public fadeOutRight(
    nativeElement: ElementRef,
    duration: AnimcationDuration = AnimcationDuration.default,
    delay: number = 0
  ): Promise<number> {
    return this.addClass(nativeElement, ['fadeOutRight'], duration, delay);
  }
  public fadeOutRightBig(
    nativeElement: ElementRef,
    duration: AnimcationDuration = AnimcationDuration.default,
    delay: number = 0
  ): Promise<number> {
    return this.addClass(nativeElement, ['fadeOutRightBig'], duration, delay);
  }
  public fadeOutUp(
    nativeElement: ElementRef,
    duration: AnimcationDuration = AnimcationDuration.default,
    delay: number = 0
  ): Promise<number> {
    return this.addClass(nativeElement, ['fadeOutUp'], duration, delay);
  }
  public fadeOutUpBig(
    nativeElement: ElementRef,
    duration: AnimcationDuration = AnimcationDuration.default,
    delay: number = 0
  ): Promise<number> {
    return this.addClass(nativeElement, ['fadeOutUpBig'], duration, delay);
  }
  public flipInX(
    nativeElement: ElementRef,
    duration: AnimcationDuration = AnimcationDuration.default,
    delay: number = 0
  ): Promise<number> {
    return this.addClass(nativeElement, ['flipInX'], duration, delay);
  }
  public flipInY(
    nativeElement: ElementRef,
    duration: AnimcationDuration = AnimcationDuration.default,
    delay: number = 0
  ): Promise<number> {
    return this.addClass(nativeElement, ['flipInY'], duration, delay);
  }
  public flipOutX(
    nativeElement: ElementRef,
    duration: AnimcationDuration = AnimcationDuration.default,
    delay: number = 0
  ): Promise<number> {
    return this.addClass(nativeElement, ['flipOutX'], duration, delay);
  }
  public flipOutY(
    nativeElement: ElementRef,
    duration: AnimcationDuration = AnimcationDuration.default,
    delay: number = 0
  ): Promise<number> {
    return this.addClass(nativeElement, ['flipOutY'], duration, delay);
  }
  public lightSpeedIn(
    nativeElement: ElementRef,
    duration: AnimcationDuration = AnimcationDuration.default,
    delay: number = 0
  ): Promise<number> {
    return this.addClass(nativeElement, ['lightSpeedIn'], duration, delay);
  }
  public lightSpeedOut(
    nativeElement: ElementRef,
    duration: AnimcationDuration = AnimcationDuration.default,
    delay: number = 0
  ): Promise<number> {
    return this.addClass(nativeElement, ['lightSpeedOut'], duration, delay);
  }
  public rotateIn(
    nativeElement: ElementRef,
    duration: AnimcationDuration = AnimcationDuration.default,
    delay: number = 0
  ): Promise<number> {
    return this.addClass(nativeElement, ['rotateIn'], duration, delay);
  }
  public rotateInDownLeft(
    nativeElement: ElementRef,
    duration: AnimcationDuration = AnimcationDuration.default,
    delay: number = 0
  ): Promise<number> {
    return this.addClass(nativeElement, ['rotateInDownLeft'], duration, delay);
  }
  public rotateInDownRight(
    nativeElement: ElementRef,
    duration: AnimcationDuration = AnimcationDuration.default,
    delay: number = 0
  ): Promise<number> {
    return this.addClass(nativeElement, ['rotateInDownRight'], duration, delay);
  }
  public rotateInUpLeft(
    nativeElement: ElementRef,
    duration: AnimcationDuration = AnimcationDuration.default,
    delay: number = 0
  ): Promise<number> {
    return this.addClass(nativeElement, ['rotateInUpLeft'], duration, delay);
  }
  public rotateInUpRight(
    nativeElement: ElementRef,
    duration: AnimcationDuration = AnimcationDuration.default,
    delay: number = 0
  ): Promise<number> {
    return this.addClass(nativeElement, ['rotateInUpRight'], duration, delay);
  }
  public rotateOut(
    nativeElement: ElementRef,
    duration: AnimcationDuration = AnimcationDuration.default,
    delay: number = 0
  ): Promise<number> {
    return this.addClass(nativeElement, ['rotateOut'], duration, delay);
  }
  public rotateOutDownLeft(
    nativeElement: ElementRef,
    duration: AnimcationDuration = AnimcationDuration.default,
    delay: number = 0
  ): Promise<number> {
    return this.addClass(nativeElement, ['rotateOutDownLeft'], duration, delay);
  }
  public rotateOutDownRight(
    nativeElement: ElementRef,
    duration: AnimcationDuration = AnimcationDuration.default,
    delay: number = 0
  ): Promise<number> {
    return this.addClass(
      nativeElement,
      ['rotateOutDownRight'],
      duration,
      delay
    );
  }
  public rotateOutUpLeft(
    nativeElement: ElementRef,
    duration: AnimcationDuration = AnimcationDuration.default,
    delay: number = 0
  ): Promise<number> {
    return this.addClass(nativeElement, ['rotateOutUpLeft'], duration, delay);
  }
  public rotateOutUpRight(
    nativeElement: ElementRef,
    duration: AnimcationDuration = AnimcationDuration.default,
    delay: number = 0
  ): Promise<number> {
    return this.addClass(nativeElement, ['rotateOutUpRight'], duration, delay);
  }
  public hinge(
    nativeElement: ElementRef,
    duration: AnimcationDuration = AnimcationDuration.default,
    delay: number = 0
  ): Promise<number> {
    return this.addClass(nativeElement, ['hinge'], duration, delay);
  }
  public jackInTheBox(
    nativeElement: ElementRef,
    duration: AnimcationDuration = AnimcationDuration.default,
    delay: number = 0
  ): Promise<number> {
    return this.addClass(nativeElement, ['jackInTheBox'], duration, delay);
  }
  public rollIn(
    nativeElement: ElementRef,
    duration: AnimcationDuration = AnimcationDuration.default,
    delay: number = 0
  ): Promise<number> {
    return this.addClass(nativeElement, ['rollIn'], duration, delay);
  }
  public rollOut(
    nativeElement: ElementRef,
    duration: AnimcationDuration = AnimcationDuration.default,
    delay: number = 0
  ): Promise<number> {
    return this.addClass(nativeElement, ['rollOut'], duration, delay);
  }
  public zoomIn(
    nativeElement: ElementRef,
    duration: AnimcationDuration = AnimcationDuration.default,
    delay: number = 0
  ): Promise<number> {
    return this.addClass(nativeElement, ['zoomIn'], duration, delay);
  }
  public zoomInDown(
    nativeElement: ElementRef,
    duration: AnimcationDuration = AnimcationDuration.default,
    delay: number = 0
  ): Promise<number> {
    return this.addClass(nativeElement, ['zoomInDown'], duration, delay);
  }
  public zoomInLeft(
    nativeElement: ElementRef,
    duration: AnimcationDuration = AnimcationDuration.default,
    delay: number = 0
  ): Promise<number> {
    return this.addClass(nativeElement, ['zoomInLeft'], duration, delay);
  }
  public zoomInRight(
    nativeElement: ElementRef,
    duration: AnimcationDuration = AnimcationDuration.default,
    delay: number = 0
  ): Promise<number> {
    return this.addClass(nativeElement, ['zoomInRight'], duration, delay);
  }
  public zoomInUp(
    nativeElement: ElementRef,
    duration: AnimcationDuration = AnimcationDuration.default,
    delay: number = 0
  ): Promise<number> {
    return this.addClass(nativeElement, ['zoomInUp'], duration, delay);
  }
  public zoomOut(
    nativeElement: ElementRef,
    duration: AnimcationDuration = AnimcationDuration.default,
    delay: number = 0
  ): Promise<number> {
    return this.addClass(nativeElement, ['zoomOut'], duration, delay);
  }
  public zoomOutDown(
    nativeElement: ElementRef,
    duration: AnimcationDuration = AnimcationDuration.default,
    delay: number = 0
  ): Promise<number> {
    return this.addClass(nativeElement, ['zoomOutDown'], duration, delay);
  }
  public zoomOutLeft(
    nativeElement: ElementRef,
    duration: AnimcationDuration = AnimcationDuration.default,
    delay: number = 0
  ): Promise<number> {
    return this.addClass(nativeElement, ['zoomOutLeft'], duration, delay);
  }
  public zoomOutRight(
    nativeElement: ElementRef,
    duration: AnimcationDuration = AnimcationDuration.default,
    delay: number = 0
  ): Promise<number> {
    return this.addClass(nativeElement, ['zoomOutRight'], duration, delay);
  }
  public zoomOutUp(
    nativeElement: ElementRef,
    duration: AnimcationDuration = AnimcationDuration.default,
    delay: number = 0
  ): Promise<number> {
    return this.addClass(nativeElement, ['zoomOutUp'], duration, delay);
  }
  public slideInDown(
    nativeElement: ElementRef,
    duration: AnimcationDuration = AnimcationDuration.default,
    delay: number = 0
  ): Promise<number> {
    return this.addClass(nativeElement, ['slideInDown'], duration, delay);
  }
  public slideInLeft(
    nativeElement: ElementRef,
    duration: AnimcationDuration = AnimcationDuration.default,
    delay: number = 0
  ): Promise<number> {
    return this.addClass(nativeElement, ['slideInLeft'], duration, delay);
  }
  public slideInRight(
    nativeElement: ElementRef,
    duration: AnimcationDuration = AnimcationDuration.default,
    delay: number = 0
  ): Promise<number> {
    return this.addClass(nativeElement, ['slideInRight'], duration, delay);
  }
  public slideInUp(
    nativeElement: ElementRef,
    duration: AnimcationDuration = AnimcationDuration.default,
    delay: number = 0
  ): Promise<number> {
    return this.addClass(nativeElement, ['slideInUp'], duration, delay);
  }

  public slideOutDown(
    nativeElement: ElementRef,
    duration: AnimcationDuration = AnimcationDuration.default,
    delay: number = 0
  ): Promise<number> {
    return this.addClass(nativeElement, ['slideOutDown'], duration, delay);
  }
  public slideOutLeft(
    nativeElement: ElementRef,
    duration: AnimcationDuration = AnimcationDuration.default,
    delay: number = 0
  ): Promise<number> {
    return this.addClass(nativeElement, ['slideOutLeft'], duration, delay);
  }
  public slideOutRight(
    nativeElement: ElementRef,
    duration: AnimcationDuration = AnimcationDuration.default,
    delay: number = 0
  ): Promise<number> {
    return this.addClass(nativeElement, ['slideOutRight'], duration, delay);
  }
  public slideOutUp(
    nativeElement: ElementRef,
    duration: AnimcationDuration = AnimcationDuration.default,
    delay: number = 0
  ): Promise<number> {
    return this.addClass(nativeElement, ['slideOutUp'], duration, delay);
  }
  public heartBeat(
    nativeElement: ElementRef,
    duration: AnimcationDuration = AnimcationDuration.default,
    delay: number = 0
  ): Promise<number> {
    return this.addClass(nativeElement, ['heartBeat'], duration, delay);
  }

  private addClass(
    elementRef: ElementRef,
    classList: string[],
    duration: AnimcationDuration,
    delay: number
  ): Promise<number> {
    return new Promise<number>(
      (resolve: (duration: number) => void, reject: () => void) => {
        const element = elementRef.nativeElement as Element;
        classList.push('animated');

        classList.push(this.dur(duration));
        if (delay > 0 && delay <= 5) {
          classList.push(delay + 's');
        }

        this.removeAnimateCss(element);

        classList.forEach(c => {
          element.classList.add(c);
        });

        resolve(AnimcationDuration.default);
      }
    );
  }

  private removeAnimateCss(element: Element): void {
    this.animateCSS.forEach(klass => {
      element.classList.remove(klass);
    });
  }

  private dur(duration: AnimcationDuration): string {
    switch (duration) {
      case AnimcationDuration.slow: {
        return 'slow';
      }
      case AnimcationDuration.slower: {
        return 'slower';
      }
      case AnimcationDuration.fast: {
        return 'fast';
      }
      case AnimcationDuration.faster: {
        return 'faster';
      }
      case AnimcationDuration.infinite: {
        return 'infinite';
      }
      default: {
        return 'animated';
      }
    }
  }
}

export enum AnimcationDuration {
  default = 1000,
  slow = 2000,
  slower = 3000,
  fast = 800,
  faster = 500,
  infinite = 86400000
}
