import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {XxxHeaderComponent} from "./xxx-header/xxx-header.component";
import {XxxLoadingComponent} from "./xxx-common/xxx-loading/xxx-loading.component";

describe('AppComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                AppComponent,
                RouterTestingModule,
                XxxHeaderComponent,
                XxxLoadingComponent
            ],
        }).compileComponents();
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });
});
