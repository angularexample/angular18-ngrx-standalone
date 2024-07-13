import {ComponentFixture, TestBed} from '@angular/core/testing';
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {of} from "rxjs";
import {XxxLoadingComponent} from './xxx-loading.component';
import {XxxLoadingService} from "./xxx-loading.service";

describe('XxxLoadingComponent', () => {
    let component: XxxLoadingComponent;
    let fixture: ComponentFixture<XxxLoadingComponent>;
    let xxxLoadingService = {
        isLoading$: of(true)
    }

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                MatProgressSpinner,
                XxxLoadingComponent
            ],
            providers: [
                {provide: XxxLoadingService, useValue: xxxLoadingService}
            ]
        }).compileComponents();
        xxxLoadingService = TestBed.inject(XxxLoadingService);
    });

    function createComponentFixture() {
        fixture = TestBed.createComponent(XxxLoadingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }

    it('should create', () => {
        createComponentFixture();
        expect(component).toBeTruthy();
    });

    it('should handle loading service true', () => {
        createComponentFixture();
        expect(component).toBeTruthy();
    });

    it('should handle loading service false', () => {
        xxxLoadingService.isLoading$ = of(false);
        createComponentFixture();
        expect(component).toBeTruthy();
    });
});
