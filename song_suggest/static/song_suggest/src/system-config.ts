// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md

/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
  '@angular2-material': 'vendor/@angular2-material',
  'primeng': 'vendor/primeng',
  'fullcalendar': 'vendor/fullcalendar/dist/fullcalendar.js',
  'fullcalendar-css': 'vendor/fullcalendar/dist/fullcalendar.css',
  'moment': 'vendor/moment/moment.js',
  'jquery': 'vendor/jquery/dist/jquery.js',
};

/** User packages configuration. */
const packages: any = {
  '@angular2-material/core': {
    format: 'cjs',
    defaultExtension: 'js',
    main: 'core.js'
  },
  '@angular2-material/checkbox': {
    format: 'cjs',
    defaultExtension: 'js',
    main: 'checkbox.js'
  },
  'primeng': {
  defaultExtension: 'js'
  },
  'fullcalendar': {
  defaultExtension: 'js',
  format: 'cjs'
  },
  'moment': {
  format: 'cjs'
  },
  'jquery': {
  format: 'cjs'
  }
};

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/forms',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app',
  'app/suggestions',
  'app/shared',
  'app/shared/navbar',
  'app/event',
  'app/suggestions/',
  'app/suggestions/mock-suggestion',
  'app/suggestions/suggestion',
  'app/suggestions/suggestion-list',
  'app/suggestions/suggestion-box',
  'app/events',
  'app/events/event-list',
  'app/events/event-calendar',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js',
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
