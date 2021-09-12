const gulp = require("gulp")
const jsValidate = require("gulp-jsvalidate")
const rename = require("gulp-rename")
const jsmin = require('gulp-jsmin');
const size = require("gulp-size")

const files = ["src/asmcss-mixin-w.js"]

const buildTask = () =>
	gulp
		.src(files)
		.pipe(jsmin())
		.pipe(rename("asmcss-mixin-w.min.js"))
		.pipe(gulp.dest("dist/js"))
		.pipe(size({ showFiles: true }))

const lintTask = () => gulp
	.src(files)
	.pipe(jsValidate())

// Build
gulp.task("build", gulp.series(buildTask));

// Test
gulp.task("test", gulp.series(lintTask));