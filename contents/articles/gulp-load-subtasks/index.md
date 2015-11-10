---
title: 'Gulp load subtasks'
date: '2015-10-09'
author: ramon
template: article.jade
---

gulp-load-subtasks (GitHub: [skorlir/gulp-load-subtasks](https://github.com/skorlir/gulp-load-subtasks), License: ISC, npm: gulp-load-subtasks)

gulp-load-subtasks is a gulp "extention" which was long overdue in my opinion. The problem that it solves is that it is reducing the amount of clutter the forms inside a Gulpfile when working on big projects.

This does require a bit of a shift in contrast of how we are used to writing our Gulpfile.
Normally you would do something like this:

```javascript
// gulpfile.js
var gulp = require('gulp');

gulp.task('some-task', function(){
    // Your stuff here
});
```
After a while you would get stuck with one big spaggetti of tasks.
Now you can split that up into different files with their own dependencies.

The file structure would look something like this:
```
+ gulpfile.js
|
+ tasks/
  + a.tasks.js
  + b.tasks.js
```

Task A would look like this:
```javascript
module.exports = function (gulp) {
  gulp.task('subtaskA1', function () {
    // do things... A1
  })
  gulp.task('subtaskA2', function () {
    // do things... A2
  })
}
```
And task B like this:
```javascript
module.exports = function (gulp, plugins) {
  gulp.task('subtaskB', function () {
    // do things... B
    // You can use plugins!
  })
}
```

Then when we get back to the Gulpfile we can do this:
```javascript
var gulp    = require('gulp'),
    plugins = require('gulp-load-plugins')()

$.loadSubtasks('tasks/**/*.js', gulp, plugins);

// refer tasks in a.tasks.js and b.tasks.js
gulp.task('default', [ 'subtaskA', 'subtaskB' ])
```
