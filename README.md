<img align="center" height="260" src="http://gruntjs.com/img/grunt-logo-no-wordmark.svg">

# grunt-github-pages-foldering

> This plugin is create folders recursively for Github Pages URL paths.

## Getting Started
This plugin requires Grunt `>=0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-github-pages-foldering --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-github-pages-foldering');
```

## The "github_pages_foldering" task

### Overview
In your project's Gruntfile, add a section named `github_pages_foldering` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  github_pages_foldering: {
    default: {
      // Your settings is here.
    },
  },
});
```

### Settings

#### urls
Type: `String|Array`

Your Github Pages URLs are here.

#### index
Type: `String`

Your Single Page Application HTML file path is here.

#### cwd
Type: `String`

Your root path is here, Not required (cwd = Change Working Directory).

### Example Usage

```js
grunt.initConfig({
  github_pages_foldering: {
    default: {
      urls: [
        'contact',
        'about',
        'blog',
        'blog/grunt-is-really-good',
        'blog/angular-is-so-sexy'
      ],
      index: 'index.html',
      cwd: 'build'
    }
  }
});
```

**Project structure (Before):**

```
└── app
    ├── js
    │   ├── angular.js
    │   └── main.js
    └── views
        ├── common
        └── homepage
    ...
    ..
    .
├── Gruntfile.js
└── index.html
...
..
.
```

**Project structure (After):**

```
└── app
    ├── js
    │   ├── angular.js
    │   └── main.js
    └── views
        ├── common
        └── homepage
    ...
    ..
    .
├── Gruntfile.js
└── index.html
...
..
.

└── build
    ├── contact
    │   └── index.html
    ├── about
    │   └── index.html
    └── blog
        ├── index.html
        ├── grunt-is-really-good
        │   └── index.html
        └── angular-is-so-sexy
            └── index.html
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## License
MIT License.

## Author
Copyright © 2014 Sercan Eraslan
