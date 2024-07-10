# angular18-ngrx-standalone


## How to run

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.


Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Angular Best Practices - Demo App

This app demonstrates cosing techniques and best practices for large scale web apps.

### Versions used for this app

* Angular 18
* NgRx 18
* RxJS 7

##### Get Users and Posts from JSONPlaceholder

Use the mock API here:

https://jsonplaceholder.typicode.com/

Users data source:

https://jsonplaceholder.typicode.com/users

Posts data source:

https://jsonplaceholder.typicode.com/posts


##### Initial view - Users

Show a table of all users. User name is enough.

When the user clicks a row, navigate to the next view,

where you will see the posts for the selected user.

##### Posts view

Show a table of all posts by a given user. Post Title is enough.

When the user clicks on a row, show a form to edit the selected post.

###### Post Form

Form fields:

title

body

Save button

When the user clicks the save button,
the form data will be used to update the back end, using the API.

https://jsonplaceholder.typicode.com/guide/

See the HTTP PUT example in the guide.

## Convert Modules App to Standalone

Use the Angular migration script to convert the existing module based app to standalone.

https://angular.dev/reference/migrations/standalone

Move redux registration from modules to route providers.

Lazy load routes instead of modules.