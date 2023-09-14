import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'visaFormat'
})
export class VisaFormatPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
