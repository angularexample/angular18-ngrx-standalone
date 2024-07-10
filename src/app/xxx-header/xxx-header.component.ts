import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'xxx-header',
  templateUrl: './xxx-header.component.html',
  styleUrl: './xxx-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class XxxHeaderComponent {
}
