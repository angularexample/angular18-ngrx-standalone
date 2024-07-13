import {MatSnackBar} from "@angular/material/snack-bar";
import {TestBed} from '@angular/core/testing';
import {XxxAlertService} from "./xxx-alert.service";

describe('XxxAlertService', () => {
    let matSnackBar =
        {
            open: jest.fn()
        };
    let xxxAlertService: XxxAlertService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                {provide: MatSnackBar, useValue: matSnackBar},
                XxxAlertService
            ],
        });
        xxxAlertService = TestBed.inject(XxxAlertService);
    })

    afterEach(() => {
        matSnackBar.open.mockClear();
    })

    it('should be created', () => {
        expect(xxxAlertService).toBeDefined();
    })

    it('should run showError', () => {
        const message: string = 'test message';
        const action: string = 'X';
        const config = {
            panelClass: ['xxx-alert-error'],
            verticalPosition: 'top'
        }
        xxxAlertService.showError(message);
        expect(matSnackBar.open).toHaveBeenCalledWith(message, action, config);
    })

    it('should run showInfo', () => {
        const message: string = 'test message';
        const action: string = 'X';
        const config = {
            duration: 5000,
            panelClass: ['xxx-alert-info'],
            verticalPosition: 'top'
        }
        xxxAlertService.showInfo(message);
        expect(matSnackBar.open).toHaveBeenCalledWith(message, action, config);
    })

    it('should run showWarning', () => {
        const message: string = 'test message';
        const action: string = 'X';
        const config = {
            duration: 10000,
            panelClass: ['xxx-alert-warning'],
            verticalPosition: 'top'
        }
        xxxAlertService.showWarning(message);
        expect(matSnackBar.open).toHaveBeenCalledWith(message, action, config);
    })
});
