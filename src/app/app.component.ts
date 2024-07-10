import {ChangeDetectionStrategy, Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { XxxHeaderComponent } from './xxx-header/xxx-header.component';
import { XxxLoadingComponent } from './xxx-common/xxx-loading/xxx-loading.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [XxxHeaderComponent, RouterOutlet, XxxLoadingComponent]
})
export class AppComponent {
}
