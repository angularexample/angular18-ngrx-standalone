import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class XxxAlertService {
  private snackBar: MatSnackBar = inject(MatSnackBar);

  showError(message: string): void {
    this.snackBar.open(message, 'X', {panelClass: ['xxx-alert-error'], verticalPosition: 'top'});
  }

  showInfo(message: string): void {
    this.snackBar.open(message, 'X', {duration: 5000, panelClass: ['xxx-alert-info'], verticalPosition: 'top'});
  }

  showWarning(message: string): void {
    this.snackBar.open(message, 'X', {duration: 10000, panelClass: ['xxx-alert-warning'], verticalPosition: 'top'});
  }
}
