import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { inject, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: "xxxSanitize"
})
export class XxxSanitizePipe implements PipeTransform {
  private sanitizer: DomSanitizer = inject(DomSanitizer);

  transform(value: unknown): SafeHtml {
    if (value) {
      return this.sanitizer.bypassSecurityTrustHtml(<string>value);
    } else {
      return '';
    }
  }
}
