import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RouterLink],
    selector: 'xxx-header',
    standalone: true,
    styleUrl: './xxx-header.component.scss',
    templateUrl: './xxx-header.component.html',
})
export class XxxHeaderComponent {
}
