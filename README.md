# Codepen
Workflow for building multiple pens on Codepen!

## Introduction
Welcome to my Codepen workflow. Its sole purpose is to enable building different pens to Codepen, while using the same modules on Grunt.
This way, you can start multiple mini-projects without having to install the modules again and again.

It works like my main workflow project, [Kickit](https://github.com/lucas-medina/kickit), in a very similar way.

### Specification
The workflow uses the following Grunt plugins within its settings:

- grunt-browser-sync
- grunt-contrib-concat
- grunt-contrib-copy
- grunt-contrib-uglify
- grunt-contrib-watch
- grunt-postcss (autoprefixer and css-mqpacker(this one is a *really* tricky one))
- grunt-processhtml
- grunt-sass
- node-sass

Be sure to have Node, NPM and preferably Ruby already installed.

You can download Node at https://nodejs.org/en/. It already comes with NPM, which is amazing.

Ruby already comes on OSX as far as I know. Either way, you can get to Ruby language's homepage for more info (https://www.ruby-lang.org/en/downloads/). For Windows users, the quick way to install Ruby is with Ruby Installer, which provides many different versions for Windows. (http://rubyinstaller.org/)

### How to use
It's actually pretty simple:
- Install all node modules through ```npm install```. After that...
- You need to specify a pen: ```grunt --pen=my-new-codepen-project``` does the magic for you.

If no pen is specified, Grunt workflow won't do anything.
I'm currently planning on having a different command that compiles all the projects (a future idea).

Current version is **0.1.0**. More information will be coming in time.
