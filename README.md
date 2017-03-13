##Javascript Project Setup

* Create initial scripts pages and html, separate interface and business logic.
* Link interface and business logic with module and require statements.
* Create .gitignore file for node_modules and DS_Store
* Set up and initialize npm: `npm init`
* Enter title to set up gulpfile and hit enter.
* Install gulp with command `npm install gulp --save-dev`
* Install Browserify with command `npm install browserify --save-dev`
* Set up gulpfile.js to require gulp
* Install vinyl-source stream with command `npm install vinyl-source-stream --save-dev`
* Require browserify and vinyl-source-stream on gulpfile and write tasks
* Update html to link to build app.js file
* Install gulp-concat to link interfaces with command `npm install gulp-concat --save-dev`
* Update jsBrowserify to concat files and add concat task
* Install uglify to minify files with command `npm install gulp-uglify --save-dev`
* Write gulp tasks to minify and concat
* Set up environment variables by installing gulp-util with command `npm install gulp-util --save-dev`
* Set up variables for utilities and buildProduction, create task to build production or development environment
* Install del-package to clean environment by using command `npm install del --save-dev`
* Create task to clean by deleting build and tmp files, add to build task
* Set up JSHint to lint by using command `npm install jshint --save-dev` and `npm install gulp-jshint --save-dev`
* Create task to lint js files with jshint
* Run `gulp jshint` to check for errors/problems in js code
