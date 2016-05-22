<div id="table-of-contents">
<h2>Table of Contents</h2>
<div id="text-table-of-contents">
<ul>
<li><a href="#sec-1">1. Config</a></li>
<li><a href="#sec-2">2. App</a></li>
<li><a href="#sec-3">3. Template</a></li>
<li><a href="#sec-4">4. Styles</a></li>
<li><a href="#sec-5">5. Dev</a></li>
</ul>
</div>
</div>

**Prairie Hill Learning Center**

# Config<a id="sec-1" name="sec-1"></a>

5

    {
      "name": "phill-angular2",
      "version": "1.0.0",
      "scripts": {
        "start": "tsc && concurrently \"npm run tsc:w\" \"npm run lite\" ",
        "lite": "lite-server",
        "postinstall": "typings install",
        "tsc": "tsc",
        "tsc:w": "tsc -w",
        "typings": "typings"
      },
      "license": "ISC",
      "dependencies": {
        "@angular/common":  "2.0.0-rc.1",
        "@angular/compiler":  "2.0.0-rc.1",
        "@angular/core":  "2.0.0-rc.1",
        "@angular/http":  "2.0.0-rc.1",
        "@angular/platform-browser":  "2.0.0-rc.1",
        "@angular/platform-browser-dynamic":  "2.0.0-rc.1",
        "@angular/router":  "2.0.0-rc.1",
        "@angular/router-deprecated":  "2.0.0-rc.1",
        "@angular/upgrade":  "2.0.0-rc.1",
        "systemjs": "0.19.27",
        "core-js": "^2.4.0",
        "reflect-metadata": "^0.1.3",
        "rxjs": "5.0.0-beta.6",
        "zone.js": "^0.6.12",
        "angular2-in-memory-web-api": "0.0.9",
        "bootstrap": "^3.3.6"
      },
      "devDependencies": {
        "concurrently": "^2.0.0",
        "lite-server": "^2.2.0",
        "typescript": "^1.8.10",
        "typings":"^0.8.1"
      }
    }

    {
      "compilerOptions": {
        "target": "es5",
        "module": "commonjs",
        "moduleResolution": "node",
        "sourceMap": true,
        "emitDecoratorMetadata": true,
        "experimentalDecorators": true,
        "removeComments": false,
        "noImplicitAny": false
      },
      "exclude": [
        "node_modules",
        "typings/main",
        "typings/main.d.ts"
      ]
    }

    {
      "ambientDependencies": {
        "core-js": "registry:dt/core-js#0.0.0+20160317120654",
        "jasmine": "registry:dt/jasmine#2.2.0+20160412134438",
        "node": "registry:dt/node#4.0.0+20160509154515"
      }
    }

    /**
     * System configuration for Angular 2 samples
     * Adjust as necessary for your application needs.
     */
    (function(global) {
      // map tells the System loader where to look for things
      var map = {
        'app':                        'app', // 'dist',
        '@angular':                   'node_modules/@angular',
        'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
        'rxjs':                       'node_modules/rxjs'
      };
      // packages tells the System loader how to load when no filename and/or no extension
      var packages = {
        'app':                        { main: 'main.js',  defaultExtension: 'js' },
        'rxjs':                       { defaultExtension: 'js' },
        'angular2-in-memory-web-api': { defaultExtension: 'js' },
      };
      var ngPackageNames = [
        'common',
        'compiler',
        'core',
        'http',
        'platform-browser',
        'platform-browser-dynamic',
        'router',
        'router-deprecated',
        'upgrade',
      ];
      // Add package entries for angular packages
      ngPackageNames.forEach(function(pkgName) {
        packages['@angular/'+pkgName] = { main: pkgName + '.umd.js', defaultExtension: 'js' };
      });
      var config = {
        map: map,
        packages: packages
      }
      System.config(config);
    })(this);

# App<a id="sec-2" name="sec-2"></a>

5

    import { Component } from '@angular/core';
    
    @Component({
      selector: 'my-app',
      template: '<h1>My First Angular 2 App</h1>'
    })
    
    export class AppComponent { }

    import { bootstrap }    from '@angular/platform-browser-dynamic';
    
    import { AppComponent } from './app.component';
    
    bootstrap(AppComponent);

# Template<a id="sec-3" name="sec-3"></a>

    <html>
      <head>
        <title>Prairie Hill Learning Center</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="styles.css">
        <!-- 1. Load libraries -->
         <!-- Polyfill(s) for older browsers -->
        <script src="node_modules/core-js/client/shim.min.js"></script>
        <script src="node_modules/zone.js/dist/zone.js"></script>
        <script src="node_modules/reflect-metadata/Reflect.js"></script>
        <script src="node_modules/systemjs/dist/system.src.js"></script>
        <!-- 2. Configure SystemJS -->
        <script src="systemjs.config.js"></script>
        <script>
          System.import('app').catch(function(err){ console.error(err); });
        </script>
      </head>
      <!-- 3. Display the application -->
      <body>
        <my-app>Loading...</my-app>
      </body>
    </html>

# Styles<a id="sec-4" name="sec-4"></a>

    h1 {
      color: #369;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 250%;
    }
    body {
      margin: 2em;
    }

# Dev<a id="sec-5" name="sec-5"></a>

<https://angular.io/docs/js/latest/quickstart.html>

    Sat May 21 22:28:33 CDT 2016

Angular2 is written with TypeScript(ES6). This is the future.

<https://angular.io/docs/ts/latest/quickstart.html>

1.  Create the app's project folder and define package dependencies and special
    project setup
    1.  Create the project folder
        
        You are in [it](./).
    
    2.  Add package definitiion and configuration files
        
        1
        
        1
        2
        3
        4
    
    3.  Install packages
        
            npm install
        
        -   [-] npm WARN
            -   [X] optional
                
                    Skipping failed optional dependency /chokidar/fsevents:
                
                <https://github.com/paulmillr/chokidar/issues/425>
                
                "It's just a warning, not an error. You can safely ignore it. 
                Fsevents is an optional dependency and is used on only on OSX."
                &#x2013;nono
            
            -   [X] notsup
                
                    Not compatible with your operating system or architecture: fsevents@1.0.12
            
            -   [ ] phill-angular2@1.0.0 No repository field.

2.  Create the app's Angular root component
    
    ---
    
    1 / 2
    
    ---
    
    app/5
    
    Structure of every component:
    
    ---
    
    -   One or more statments to reference the things we need.
    -   A that tells Angular what template to use and how to
        create the component.
    -   A that controls the appearance and behavior of a view 
        through its template.

3.  Add 6, identifying the root component to Angular
    
    2
    
    app/6

4.  Add 7, the web page that hosts the application
    
    3

5.  Build and run the app
