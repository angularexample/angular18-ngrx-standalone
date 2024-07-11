import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {XxxHeaderComponent} from './xxx-header/xxx-header.component';
import {XxxLoadingComponent} from './xxx-common/xxx-loading/xxx-loading.component';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        RouterOutlet,
        XxxHeaderComponent,
        XxxLoadingComponent
    ],
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
})
export class AppComponent {
}
