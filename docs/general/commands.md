# Command Line Commands

## Initialization

```Shell
$ npm run setup
```

Initializes a new project with this boilerplate. Deletes the `react-boilerplate` git history, installs the dependencies and initializes a new repository.

> Note: This command is self-destructive, once you've run it the init script is gone forever. This is for your own safety, so you can't delete your projects history irreversibly on accident.

## Development

```Shell
$ npm start
```

Starts the development server and makes your application accessible at `localhost:3000`. Changes in the application code will be hot-reloaded.

### Port

To change the port the app is accessible at pass the `-p` option to the command with `--`. E.g. to make the app visible at `localhost:5000`, run the following: `$ npm start -- -p 5000`

## Building

```Shell
$ npm run build
```

Gets your application ready for deployment. Optimizes and minifies all files, and generates a folder called `build`. `build` includes all files you need for your application. Upload the contents of `build` to your web server to see it live!

## Generator

```Shell
$ npm run generate
```

Allows you to auto-generate boilerplate code for common parts of your application, specifically `components`, `containers`, `selectors`, `sagas` and `routes`.

## Testing

See the [testing documentation](../testing/README.md) for detailed information about our testing setup!

## Unit testing

```Shell
$ npm run test
```

Tests your application with the unit tests specified in the `*test.js` files throughout the application.

### Browsers

To choose the browser to run your unit tests in (Chrome by default), run one of the following commands:

#### Firefox

```Shell
$ npm run test:firefox
```

#### Safari

```Shell
$ npm run test:safari
```

#### Internet Explorer

*Windows only!*

```Shell
$ npm run test:ie
```

### Watching

```Shell
$ npm run test:watch
```

Watches changes to your application and reruns tests whenever a file changes.

### Remote testing

```Shell
$ npm run serve
```

Runs a server that's accessible on the entire world and shows the version of the app that's in the `build` folder. Useful for testing on different devices in different locations!

> Note: This assumes you have done a build with `npm run build` before. The changes you make in your application won't be reflected in the application unless you run `npm run build` again.

### Performance testing

```Shell
$ npm run pagespeed
```

With the remote server running (i.e. while `$ npm run serve` is running in another terminal session), enter this command to run Google PageSpeed Insights and get a performance check right in your terminal!

## Linting

```Shell
$ npm run lint
```

Lints your JavaScript and CSS.

### JavaScript

```Shell
$ npm run lint:js
```

Only lints your JavaScript.

### CSS

```Shell
$ npm run lint:css
```

Only lints your CSS.
