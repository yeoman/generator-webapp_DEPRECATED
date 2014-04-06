# Web app generator [![Build Status](https://secure.travis-ci.org/yeoman/generator-webapp.svg?branch=master)](http://travis-ci.org/yeoman/generator-webapp)

[Yeoman](http://yeoman.io) generator that scaffolds out a front-end web app.

![](http://i.imgur.com/uKTT2Hj.png)

## Features

* CSS Autoprefixing *(new)*
* Built-in preview server with LiveReload
* Automagically compile CoffeeScript & Sass
* Automagically lint your scripts
* Automagically wire up your Bower components with [bower-install](#third-party-dependencies).
* Awesome Image Optimization (via OptiPNG, pngquant, jpegtran and gifsicle)
* Mocha Unit Testing with PhantomJS
* Optional - Bootstrap for Sass
* Optional - Leaner Modernizr builds *(new)*
* Optional - Split your Grunt task configuration into several files *(new)*

For more information on what `generator-webapp` can do for you, take a look at the [Grunt tasks](https://github.com/yeoman/generator-webapp/blob/master/app/templates/_package.json) used in our `package.json`.


## Getting Started

- Install: `npm install -g generator-webapp`
- Run: `yo webapp`
- Run `grunt` for building and `grunt serve` for preview [*](#serve-note)


#### Third-Party Dependencies

*(HTML/CSS/JS/Images/etc)*

Third-party dependencies are managed with [bower-install](https://github.com/stephenplusplus/grunt-bower-install). Add new dependencies using **Bower** and then run the **Grunt** task to load them:

```bash
  bower install --save jquery
  grunt bowerInstall
```

This works if the package author has followed the [Bower spec](https://github.com/bower/bower.json-spec). If the files are not automatically added to your index.html, check with the package's repo for support and/or file an issue with them to have it updated.

To manually add dependencies, `bower install depName --save` to get the files, then add a `script` or `style` tag to your `index.html` or an other appropriate place.

The components are installed in the root of the project at `/bower_components`. To reference them from the `grunt serve` web app `index.html` file, use `src="bower_components"` or `src="/bower_components"`. Treat the references as if they were a sibling to `index.html`.

*Testing Note*: a project checked into source control and later checked out, needs to have `bower install` run from the `test` folder as well as from project root.


#### Grunt Serve Note

Note: `grunt server` was previously used for previewing in earlier versions of the project and is being deprecated in favor of `grunt serve`.


## Options

* `--skip-install`

  Skips the automatic execution of `bower` and `npm` after scaffolding has finished.

* `--test-framework=<framework>`

  Defaults to `mocha`. Can be switched for another supported testing framework like `jasmine`.

* `--coffee`

  Add support for [CoffeeScript](http://coffeescript.org/).

* `--split-configs`

  Splits your Grunt task configuration into several files.


## Contribute

See the [contributing docs](https://github.com/yeoman/yeoman/blob/master/contributing.md)

Note: We are regularly asked whether we can add or take away features. If a change is good enough to have a positive impact on all users, we are happy to consider it.

If not, `generator-webapp` is fork-friendly and you can always maintain a custom version which you `npm install && npm link` to continue using via `yo webapp` or a name of your choosing.


## License

[BSD license](http://opensource.org/licenses/bsd-license.php)
