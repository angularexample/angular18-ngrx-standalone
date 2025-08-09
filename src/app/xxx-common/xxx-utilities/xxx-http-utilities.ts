import { HttpErrorResponse } from "@angular/common/http";

/**
 * Reusable utilities related to Http requests
 */
export class XxxHttpUtilities {

  /**
   * Takes the HttpErrorResponse object and parses it to create an error message string
   * @param err The error object returned
   */
  static setErrorMessage(err: HttpErrorResponse): string {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Error Status: ${err.status}, Message: ${err.message}`;
    }
    console.error(err);
    return errorMessage;
  }
}
