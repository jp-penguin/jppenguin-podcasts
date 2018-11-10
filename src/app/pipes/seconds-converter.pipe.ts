import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secondsConverter'
})
export class SecondsConverterPipe implements PipeTransform {
  transform(value: number): any {
    console.log(value);

    if (!value) {
      value = 0;
    }
    const hours = Math.floor(value / 3600);
    const minutes = Math.floor((value - hours * 3600) / 60);
    const seconds = Math.round(value - hours * 3600 - minutes * 60);
    // let hoursS = ''; //
    // let minutesS = ''; // * 60;
    // let secondsS = ''; // * 60;

    // if (hours < 10) {
    //   hoursS = '0' + hours;
    // }
    // if (minutes < 10) {
    //   minutesS = '0' + minutes;
    // }
    // if (seconds < 10) {
    // }
    // console.log(hoursS + ':' + minutesS + ':' + secondsS);
    const hoursS = hours < 10 ? '0' + hours : hours.toString();
    const minutesS = minutes < 10 ? '0' + minutes : minutes.toString();
    const secondsS = seconds < 10 ? '0' + seconds : seconds.toString();

    return hoursS + ':' + minutesS + ':' + secondsS;
  }
}
