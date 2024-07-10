import {ChangeDetectionStrategy, Component} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'xxx-header',
    templateUrl: './xxx-header.component.html',
    styleUrl: './xxx-header.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [RouterLink]
})
export class XxxHeaderComponent {
}
