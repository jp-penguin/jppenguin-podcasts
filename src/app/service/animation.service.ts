import { Injectable, ElementRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {
  constructor() {}

  private animateCSS: string[] = [
    'bounce',
    'flash',
    'pulse',
    'rubberBand',
    'shake',
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
    infinite: boolean = false,
    delay: number = 0
  ): Promise<number> {
    return new Promise<number>((resolve: (duration: number) => void, reject: () => void) => {
      this.addClass(nativeElement, ['fadeIn'], infinite, delay);
      resolve(1);
    });
  }

  public bounce(
    nativeElement: ElementRef,
    infinite: boolean = false,
    delay: number = 0
  ): Promise<number> {
    return new Promise<number>((resolve: (duration: number) => void, reject: () => void) => {
      this.addClass(nativeElement, ['bounce'], infinite, delay);
      resolve(1);
    });
  }
  public flash(
    nativeElement: ElementRef,
    infinite: boolean = false,
    delay: number = 0
  ): Promise<number> {
    return new Promise<number>((resolve: (duration: number) => void, reject: () => void) => {
      this.addClass(nativeElement, ['flash'], infinite, delay);
      resolve(1);
    });
  }
  public pulse(
    nativeElement: ElementRef,
    infinite: boolean = false,
    delay: number = 0
  ): Promise<number> {
    return new Promise<number>((resolve: (duration: number) => void, reject: () => void) => {
      this.addClass(nativeElement, ['pulse'], infinite, delay);
      resolve(1);
    });
  }
  public rubberBand(
    nativeElement: ElementRef,
    infinite: boolean = false,
    delay: number = 0
  ): Promise<number> {
    return new Promise<number>((resolve: (duration: number) => void, reject: () => void) => {
      this.addClass(nativeElement, ['rubberBand'], infinite, delay);
      resolve(1);
    });
  }
  public shake(
    nativeElement: ElementRef,
    infinite: boolean = false,
    delay: number = 0
  ): Promise<number> {
    return new Promise<number>((resolve: (duration: number) => void, reject: () => void) => {
      this.addClass(nativeElement, ['shake'], infinite, delay);
      resolve(1);
    });
  }
  public headShake(
    nativeElement: ElementRef,
    infinite: boolean = false,
    delay: number = 0
  ): Promise<number> {
    return new Promise<number>((resolve: (duration: number) => void, reject: () => void) => {
      this.addClass(nativeElement, ['headShake'], infinite, delay);
      resolve(1);
    });
  }
  public swing(
    nativeElement: ElementRef,
    infinite: boolean = false,
    delay: number = 0
  ): Promise<number> {
    return new Promise<number>((resolve: (duration: number) => void, reject: () => void) => {
      this.addClass(nativeElement, ['swing'], infinite, delay);
      resolve(1);
    });
  }
  public tada(
    nativeElement: ElementRef,
    infinite: boolean = false,
    delay: number = 0
  ): Promise<number> {
    return new Promise<number>((resolve: (duration: number) => void, reject: () => void) => {
      this.addClass(nativeElement, ['tada'], infinite, delay);
      resolve(1);
    });
  }
  public wobble(
    nativeElement: ElementRef,
    infinite: boolean = false,
    delay: number = 0
  ): Promise<number> {
    return new Promise<number>((resolve: (duration: number) => void, reject: () => void) => {
      this.addClass(nativeElement, ['wobble'], infinite, delay);
      resolve(1);
    });
  }
  public jello(
    nativeElement: ElementRef,
    infinite: boolean = false,
    delay: number = 0
  ): Promise<number> {
    return new Promise<number>((resolve: (duration: number) => void, reject: () => void) => {
      this.addClass(nativeElement, ['jello'], infinite, delay);
      resolve(1);
    });
  }
  public bounceIn(
    nativeElement: ElementRef,
    infinite: boolean = false,
    delay: number = 0
  ): Promise<number> {
    return new Promise<number>((resolve: (duration: number) => void, reject: () => void) => {
      this.addClass(nativeElement, ['bounceIn'], infinite, delay);
      resolve(1);
    });
  }
  public bounceInDown(
    nativeElement: ElementRef,
    infinite: boolean = false,
    delay: number = 0
  ): Promise<number> {
    return new Promise<number>((resolve: (duration: number) => void, reject: () => void) => {
      this.addClass(nativeElement, ['bounceInDown'], infinite, delay);
      resolve(1);
    });
  }
  public bounceInLeft(
    nativeElement: ElementRef,
    infinite: boolean = false,
    delay: number = 0
  ): Promise<number> {
    return new Promise<number>((resolve: (duration: number) => void, reject: () => void) => {
      this.addClass(nativeElement, ['bounceInLeft'], infinite, delay);
      resolve(1);
    });
  }
  public bounceInRight(
    nativeElement: ElementRef,
    infinite: boolean = false,
    delay: number = 0
  ): Promise<number> {
    return new Promise<number>((resolve: (duration: number) => void, reject: () => void) => {
      this.addClass(nativeElement, ['bounceInRight'], infinite, delay);
      resolve(1);
    });
  }
  public bounceInUp(
    nativeElement: ElementRef,
    infinite: boolean = false,
    delay: number = 0
  ): Promise<number> {
    return new Promise<number>((resolve: (duration: number) => void, reject: () => void) => {
      this.addClass(nativeElement, ['bounceInUp'], infinite, delay);
      resolve(1);
    });
  }
  public bounceOut(
    nativeElement: ElementRef,
    infinite: boolean = false,
    delay: number = 0
  ): Promise<number> {
    return new Promise<number>((resolve: (duration: number) => void, reject: () => void) => {
      this.addClass(nativeElement, ['bounceOut'], infinite, delay);
      resolve(1);
    });
  }
  public bounceOutDown(
    nativeElement: ElementRef,
    infinite: boolean = false,
    delay: number = 0
  ): Promise<number> {
    return new Promise<number>((resolve: (duration: number) => void, reject: () => void) => {
      this.addClass(nativeElement, ['bounceOutDown'], infinite, delay);
      resolve(1);
    });
  }
  public bounceOutLeft(
    nativeElement: ElementRef,
    infinite: boolean = false,
    delay: number = 0
  ): Promise<number> {
    return new Promise<number>((resolve: (duration: number) => void, reject: () => void) => {
      this.addClass(nativeElement, ['bounceOutLeft'], infinite, delay);
      resolve(1);
    });
  }
  public bounceOutRight(
    nativeElement: ElementRef,
    infinite: boolean = false,
    delay: number = 0
  ): Promise<number> {
    return new Promise<number>((resolve: (duration: number) => void, reject: () => void) => {
      this.addClass(nativeElement, ['bounceOutRight'], infinite, delay);
      resolve(1);
    });
  }
  public bounceOutUp(
    nativeElement: ElementRef,
    infinite: boolean = false,
    delay: number = 0
  ): Promise<number> {
    return new Promise<number>((resolve: (duration: number) => void, reject: () => void) => {
      this.addClass(nativeElement, ['bounceOutUp'], infinite, delay);
      resolve(1);
    });
  }
  public fadeInDown(
    nativeElement: ElementRef,
    infinite: boolean = false,
    delay: number = 0
  ): Promise<number> {
    return new Promise<number>((resolve: (duration: number) => void, reject: () => void) => {
      this.addClass(nativeElement, ['fadeInDown'], infinite, delay);
      resolve(1);
    });
  }
  public fadeInDownBig(
    nativeElement: ElementRef,
    infinite: boolean = false,
    delay: number = 0
  ): Promise<number> {
    return new Promise<number>((resolve: (duration: number) => void, reject: () => void) => {
      this.addClass(nativeElement, ['fadeInDownBig'], infinite, delay);
      resolve(1);
    });
  }
  public fadeInLeft(
    nativeElement: ElementRef,
    infinite: boolean = false,
    delay: number = 0
  ): Promise<number> {
    return new Promise<number>((resolve: (duration: number) => void, reject: () => void) => {
      this.addClass(nativeElement, ['fadeInLeft'], infinite, delay);
      resolve(1);
    });
  }
  public fadeInLeftBig(
    nativeElement: ElementRef,
    infinite: boolean = false,
    delay: number = 0
  ): Promise<number> {
    return new Promise<number>((resolve: (duration: number) => void, reject: () => void) => {
      this.addClass(nativeElement, ['fadeInLeftBig'], infinite, delay);
      resolve(1);
    });
  }
  public fadeInRight(
    nativeElement: ElementRef,
    infinite: boolean = false,
    delay: number = 0
  ): Promise<number> {
    return new Promise<number>((resolve: (duration: number) => void, reject: () => void) => {
      this.addClass(nativeElement, ['fadeInRight'], infinite, delay);
      resolve(1);
    });
  }
  public fadeInRightBig(
    nativeElement: ElementRef,
    infinite: boolean = false,
    delay: number = 0
  ): Promise<number> {
    return new Promise<number>((resolve: (duration: number) => void, reject: () => void) => {
      this.addClass(nativeElement, ['fadeInRightBig'], infinite, delay);
      resolve(1);
    });
  }
  public fadeInUp(
    nativeElement: ElementRef,
    infinite: boolean = false,
    delay: number = 0
  ): Promise<number> {
    return new Promise<number>((resolve: (duration: number) => void, reject: () => void) => {
      this.addClass(nativeElement, ['fadeInUp'], infinite, delay);
      resolve(1);
    });
  }
  public fadeInUpBig(
    nativeElement: ElementRef,
    infinite: boolean = false,
    delay: number = 0
  ): Promise<number> {
    return new Promise<number>((resolve: (duration: number) => void, reject: () => void) => {
      this.addClass(nativeElement, ['fadeInUpBig'], infinite, delay);
      resolve(1);
    });
  }
  public fadeOut(
    nativeElement: ElementRef,
    infinite: boolean = false,
    delay: number = 0
  ): Promise<number> {
    return new Promise<number>((resolve: (duration: number) => void, reject: () => void) => {
      this.addClass(nativeElement, ['fadeOut'], infinite, delay);
      resolve(1);
    });
  }
  public fadeOutDown(
    nativeElement: ElementRef,
    infinite: boolean = false,
    delay: number = 0
  ): Promise<number> {
    return new Promise<number>((resolve: (duration: number) => void, reject: () => void) => {
      this.addClass(nativeElement, ['fadeOutDown'], infinite, delay);
      resolve(1);
    });
  }
  public fadeOutDownBig(
    nativeElement: ElementRef,
    infinite: boolean = false,
    delay: number = 0
  ): Promise<number> {
    return new Promise<number>((resolve: (duration: number) => void, reject: () => void) => {
      this.addClass(nativeElement, ['fadeOutDownBig'], infinite, delay);
      resolve(1);
    });
  }
  public fadeOutLeft(
    nativeElement: ElementRef,
    infinite: boolean = false,
    delay: number = 0
  ): Promise<number> {
    return new Promise<number>((resolve: (duration: number) => void, reject: () => void) => {
      this.addClass(nativeElement, ['fadeOutLeft'], infinite, delay);
      resolve(1);
    });
  }
  public fadeOutLeftBig(
    nativeElement: ElementRef,
    infinite: boolean = false,
    delay: number = 0
  ): Promise<number> {
    return new Promise<number>((resolve: (duration: number) => void, reject: () => void) => {
      this.addClass(nativeElement, ['fadeOutLeftBig'], infinite, delay);
      resolve(1);
    });
  }
  public fadeOutRight(
    nativeElement: ElementRef,
    infinite: boolean = false,
    delay: number = 0
  ): Promise<number> {
    return new Promise<number>((resolve: (duration: number) => void, reject: () => void) => {
      this.addClass(nativeElement, ['fadeOutRight'], infinite, delay);
      resolve(1);
    });
  }
  public fadeOutRightBig(
    nativeElement: ElementRef,
    infinite: boolean = false,
    delay: number = 0
  ): Promise<number> {
    return new Promise<number>((resolve: (duration: number) => void, reject: () => void) => {
      this.addClass(nativeElement, ['fadeOutRightBig'], infinite, delay);
      resolve(1);
    });
  }
  public fadeOutUp(
    nativeElement: ElementRef,
    infinite: boolean = false,
    delay: number = 0
  ): Promise<number> {
    return new Promise<number>((resolve: (duration: number) => void, reject: () => void) => {
      this.addClass(nativeElement, ['fadeOutUp'], infinite, delay);
      resolve(1);
    });
  }
  public fadeOutUpBig(
    nativeElement: ElementRef,
    infinite: boolean = false,
    delay: number = 0
  ): Promise<number> {
    return new Promise<number>((resolve: (duration: number) => void, reject: () => void) => {
      this.addClass(nativeElement, ['fadeOutUpBig'], infinite, delay);
      resolve(1);
    });
  }
  public flipInX(
    nativeElement: ElementRef,
    infinite: boolean = false,
    delay: number = 0
  ): Promise<number> {
    return new Promise<number>((resolve: (duration: number) => void, reject: () => void) => {
      this.addClass(nativeElement, ['flipInX'], infinite, delay);
      resolve(1);
    });
  }
  public flipInY(
    nativeElement: ElementRef,
    infinite: boolean = false,
    delay: number = 0
  ): Promise<number> {
    return new Promise<number>((resolve: (duration: number) => void, reject: () => void) => {
      this.addClass(nativeElement, ['flipInY'], infinite, delay);
      resolve(1);
    });
  }
  public flipOutX(
    nativeElement: ElementRef,
    infinite: boolean = false,
    delay: number = 0
  ): Promise<number> {
    return new Promise<number>((resolve: (duration: number) => void, reject: () => void) => {
      this.addClass(nativeElement, ['flipOutX'], infinite, delay);
      resolve(1);
    });
  }
  public flipOutY(
    nativeElement: ElementRef,
    infinite: boolean = false,
    delay: number = 0
  ): Promise<number> {
    return new Promise<number>((resolve: (duration: number) => void, reject: () => void) => {
      this.addClass(nativeElement, ['flipOutY'], infinite, delay);
      resolve(1);
    });
  }
  public lightSpeedIn(
    nativeElement: ElementRef,
    infinite: boolean = false,
    delay: number = 0
  ): Promise<number> {
    return new Promise<number>((resolve: (duration: number) => void, reject: () => void) => {
      this.addClass(nativeElement, ['lightSpeedIn'], infinite, delay);
      resolve(1);
    });
  }
  public lightSpeedOut(
    nativeElement: ElementRef,
    infinite: boolean = false,
    delay: number = 0
  ): Promise<number> {
    return new Promise<number>((resolve: (duration: number) => void, reject: () => void) => {
      this.addClass(nativeElement, ['lightSpeedOut'], infinite, delay);
      resolve(1);
    });
  }
  public rotateIn(
    nativeElement: ElementRef,
    infinite: boolean = false,
    delay: number = 0
  ): Promise<number> {
    return new Promise<number>((resolve: (duration: number) => void, reject: () => void) => {
      this.addClass(nativeElement, ['rotateIn'], infinite, delay);
      resolve(1);
    });
  }
  public rotateInDownLeft(
    nativeElement: ElementRef,
    infinite: boolean = false,
    delay: number = 0
  ): Promise<number> {
    return new Promise<number>((resolve: (duration: number) => void, reject: () => void) => {
      this.addClass(nativeElement, ['rotateInDownLeft'], infinite, delay);
      resolve(1);
    });
  }
  public rotateInDownRight(
    nativeElement: ElementRef,
    infinite: boolean = false,
    delay: number = 0
  ): Promise<number> {
    return new Promise<number>((resolve: (duration: number) => void, reject: () => void) => {
      this.addClass(nativeElement, ['rotateInDownRight'], infinite, delay);
      resolve(1);
    });
  }
  public rotateInUpLeft(
    nativeElement: ElementRef,
    infinite: boolean = false,
    delay: number = 0
  ): Promise<number> {
    return new Promise<number>((resolve: (duration: number) => void, reject: () => void) => {
      this.addClass(nativeElement, ['rotateInUpLeft'], infinite, delay);
      resolve(1);
    });
  }
  public rotateInUpRight(
    nativeElement: ElementRef,
    infinite: boolean = false,
    delay: number = 0
  ): Promise<number> {
    return new Promise<number>((resolve: (duration: number) => void, reject: () => void) => {
      this.addClass(nativeElement, ['rotateInUpRight'], infinite, delay);
      resolve(1);
    });
  }
  public rotateOut(
    nativeElement: ElementRef,
    infinite: boolean = false,
    delay: number = 0
  ): Promise<number> {
    return new Promise<number>((resolve: (duration: number) => void, reject: () => void) => {
      this.addClass(nativeElement, ['rotateOut'], infinite, delay);
      resolve(1);
    });
  }
  public rotateOutDownLeft(
    nativeElement: ElementRef,
    infinite: boolean = false,
    delay: number = 0
  ): Promise<number> {
    return new Promise<number>((resolve: (duration: number) => void, reject: () => void) => {
      this.addClass(nativeElement, ['rotateOutDownLeft'], infinite, delay);
      resolve(1);
    });
  }
  public rotateOutDownRight(
    nativeElement: ElementRef,
    infinite: boolean = false,
    delay: number = 0
  ): Promise<number> {
    return new Promise<number>((resolve: (duration: number) => void, reject: () => void) => {
      this.addClass(nativeElement, ['rotateOutDownRight'], infinite, delay);
      resolve(1);
    });
  }
  public rotateOutUpLeft(
    nativeElement: ElementRef,
    infinite: boolean = false,
    delay: number = 0
  ): Promise<number> {
    return new Promise<number>((resolve: (duration: number) => void, reject: () => void) => {
      this.addClass(nativeElement, ['rotateOutUpLeft'], infinite, delay);
      resolve(1);
    });
  }
  public rotateOutUpRight(
    nativeElement: ElementRef,
    infinite: boolean = false,
    delay: number = 0
  ): Promise<number> {
    return new Promise<number>((resolve: (duration: number) => void, reject: () => void) => {
      this.addClass(nativeElement, ['rotateOutUpRight'], infinite, delay);
      resolve(1);
    });
  }
  public hinge(
    nativeElement: ElementRef,
    infinite: boolean = false,
    delay: number = 0
  ): Promise<number> {
    return new Promise<number>((resolve: (duration: number) => void, reject: () => void) => {
      this.addClass(nativeElement, ['hinge'], infinite, delay);
      resolve(1);
    });
  }
  public jackInTheBox(
    nativeElement: ElementRef,
    infinite: boolean = false,
    delay: number = 0
  ): Promise<number> {
    return new Promise<number>((resolve: (duration: number) => void, reject: () => void) => {
      this.addClass(nativeElement, ['jackInTheBox'], infinite, delay);
      resolve(1);
    });
  }
  public rollIn(
    nativeElement: ElementRef,
    infinite: boolean = false,
    delay: number = 0
  ): Promise<number> {
    return new Promise<number>((resolve: (duration: number) => void, reject: () => void) => {
      this.addClass(nativeElement, ['rollIn'], infinite, delay);
      resolve(1);
    });
  }
  public rollOut(
    nativeElement: ElementRef,
    infinite: boolean = false,
    delay: number = 0
  ): Promise<number> {
    return new Promise<number>((resolve: (duration: number) => void, reject: () => void) => {
      this.addClass(nativeElement, ['rollOut'], infinite, delay);
      resolve(1);
    });
  }
  public zoomIn(
    nativeElement: ElementRef,
    infinite: boolean = false,
    delay: number = 0
  ): Promise<number> {
    return new Promise<number>((resolve: (duration: number) => void, reject: () => void) => {
      this.addClass(nativeElement, ['zoomIn'], infinite, delay);
      resolve(1);
    });
  }
  public zoomInDown(
    nativeElement: ElementRef,
    infinite: boolean = false,
    delay: number = 0
  ): Promise<number> {
    return new Promise<number>((resolve: (duration: number) => void, reject: () => void) => {
      this.addClass(nativeElement, ['zoomInDown'], infinite, delay);
      resolve(1);
    });
  }
  public zoomInLeft(
    nativeElement: ElementRef,
    infinite: boolean = false,
    delay: number = 0
  ): Promise<number> {
    return new Promise<number>((resolve: (duration: number) => void, reject: () => void) => {
      this.addClass(nativeElement, ['zoomInLeft'], infinite, delay);
      resolve(1);
    });
  }
  public zoomInRight(
    nativeElement: ElementRef,
    infinite: boolean = false,
    delay: number = 0
  ): Promise<number> {
    return new Promise<number>((resolve: (duration: number) => void, reject: () => void) => {
      this.addClass(nativeElement, ['zoomInRight'], infinite, delay);
      resolve(1);
    });
  }
  public zoomInUp(
    nativeElement: ElementRef,
    infinite: boolean = false,
    delay: number = 0
  ): Promise<number> {
    return new Promise<number>((resolve: (duration: number) => void, reject: () => void) => {
      this.addClass(nativeElement, ['zoomInUp'], infinite, delay);
      resolve(1);
    });
  }
  public zoomOut(
    nativeElement: ElementRef,
    infinite: boolean = false,
    delay: number = 0
  ): Promise<number> {
    return new Promise<number>((resolve: (duration: number) => void, reject: () => void) => {
      this.addClass(nativeElement, ['zoomOut'], infinite, delay);
      resolve(1);
    });
  }
  public zoomOutDown(
    nativeElement: ElementRef,
    infinite: boolean = false,
    delay: number = 0
  ): Promise<number> {
    return new Promise<number>((resolve: (duration: number) => void, reject: () => void) => {
      this.addClass(nativeElement, ['zoomOutDown'], infinite, delay);
      resolve(1);
    });
  }
  public zoomOutLeft(
    nativeElement: ElementRef,
    infinite: boolean = false,
    delay: number = 0
  ): Promise<number> {
    return new Promise<number>((resolve: (duration: number) => void, reject: () => void) => {
      this.addClass(nativeElement, ['zoomOutLeft'], infinite, delay);
      resolve(1);
    });
  }
  public zoomOutRight(
    nativeElement: ElementRef,
    infinite: boolean = false,
    delay: number = 0
  ): Promise<number> {
    return new Promise<number>((resolve: (duration: number) => void, reject: () => void) => {
      this.addClass(nativeElement, ['zoomOutRight'], infinite, delay);
      resolve(1);
    });
  }
  public zoomOutUp(
    nativeElement: ElementRef,
    infinite: boolean = false,
    delay: number = 0
  ): Promise<number> {
    return new Promise<number>((resolve: (duration: number) => void, reject: () => void) => {
      this.addClass(nativeElement, ['zoomOutUp'], infinite, delay);
      resolve(1);
    });
  }
  public slideInDown(
    nativeElement: ElementRef,
    infinite: boolean = false,
    delay: number = 0
  ): Promise<number> {
    return new Promise<number>((resolve: (duration: number) => void, reject: () => void) => {
      this.addClass(nativeElement, ['slideInDown'], infinite, delay);
      resolve(1);
    });
  }
  public slideInLeft(
    nativeElement: ElementRef,
    infinite: boolean = false,
    delay: number = 0
  ): Promise<number> {
    return new Promise<number>((resolve: (duration: number) => void, reject: () => void) => {
      this.addClass(nativeElement, ['slideInLeft'], infinite, delay);
      resolve(1);
    });
  }
  public slideInRight(
    nativeElement: ElementRef,
    infinite: boolean = false,
    delay: number = 0
  ): Promise<number> {
    return new Promise<number>((resolve: (duration: number) => void, reject: () => void) => {
      this.addClass(nativeElement, ['slideInRight'], infinite, delay);
      resolve(1);
    });
  }
  public slideInUp(
    nativeElement: ElementRef,
    infinite: boolean = false,
    delay: number = 0
  ): Promise<number> {
    return new Promise<number>((resolve: (duration: number) => void, reject: () => void) => {
      this.addClass(nativeElement, ['slideInUp'], infinite, delay);
      resolve(1);
    });
  }
  public slideOutDown(
    nativeElement: ElementRef,
    infinite: boolean = false,
    delay: number = 0
  ): Promise<number> {
    return new Promise<number>((resolve: (duration: number) => void, reject: () => void) => {
      this.addClass(nativeElement, ['slideOutDown'], infinite, delay);
      resolve(1);
    });
  }
  public slideOutLeft(
    nativeElement: ElementRef,
    infinite: boolean = false,
    delay: number = 0
  ): Promise<number> {
    return new Promise<number>((resolve: (duration: number) => void, reject: () => void) => {
      this.addClass(nativeElement, ['slideOutLeft'], infinite, delay);
      resolve(1);
    });
  }
  public slideOutRight(
    nativeElement: ElementRef,
    infinite: boolean = false,
    delay: number = 0
  ): Promise<number> {
    return new Promise<number>((resolve: (duration: number) => void, reject: () => void) => {
      this.addClass(nativeElement, ['slideOutRight'], infinite, delay);
      resolve(1);
    });
  }
  public slideOutUp(
    nativeElement: ElementRef,
    infinite: boolean = false,
    delay: number = 0
  ): Promise<number> {
    return new Promise<number>((resolve: (duration: number) => void, reject: () => void) => {
      this.addClass(nativeElement, ['slideOutUp'], infinite, delay);
      resolve(1);
    });
  }
  public heartBeat(
    nativeElement: ElementRef,
    infinite: boolean = false,
    delay: number = 0
  ): Promise<number> {
    return new Promise<number>((resolve: (duration: number) => void, reject: () => void) => {
      this.addClass(nativeElement, ['heartBeat'], infinite, delay);
      resolve(1);
    });
  }

  private addClass(
    elementRef: ElementRef,
    classList: string[],
    infinite: boolean,
    delay: number
  ): Promise<number> {
    return new Promise<number>((resolve: (duration: number) => void, reject: () => void) => {
      const element = elementRef.nativeElement as Element;
      classList.push('animated');
      if (infinite) {
        classList.push('infinite');
      }

      if (delay > 0 && delay <= 5) {
        classList.push(delay + 's');
      }

      this.removeAnimateCss(element);

      classList.forEach(c => {
        element.classList.add(c);
      });
      resolve(1);
    });
  }

  private removeAnimateCss(element: Element): void {
    this.animateCSS.forEach(klass => {
      element.classList.remove(klass);
    });
  }
}
