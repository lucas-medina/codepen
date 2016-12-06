# Codepen
Workflow for building multiple pens on Codepen!

## Introduction
Welcome to my Codepen workflow. It doesn't 

### Specification
'Kick It' uses the following Grunt plugins within its settings:

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
Simple thing:
- Install all node modules through ```npm install```. After that...
- ```grunt kick``` does the magic for you. Also, if you just try ```grunt```, it'll most certainly ask you to perform a ```grunt kick```. Don't blame me, kicks are important for blood circulation, it seems.

### Also...
Unfortunately, 'Kick it' is not yet ready for build samples. Eg.: Minifying files, setting inline code, among many other build tasks. Version 0.1.0 is focused on creating development environments.

Current version is **0.1.0**. More information will be coming in time.
