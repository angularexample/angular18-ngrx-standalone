import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: "xxxSanitize"
})
export class XxxSanitizePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {
  }

  transform(value: unknown): SafeHtml {
    if (value) {
      return this.sanitizer.bypassSecurityTrustHtml(<string>value);
    } else {
      return '';
    }
  }
}
