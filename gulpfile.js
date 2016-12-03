var gulp = require("gulp");
var sass = require("gulp-sass");
var minify = require("gulp-minify-css");
var webserver = require("gulp-webserver");
var webpack = require("gulp-webpack");
var named = require("vinyl-named");
var uglify = require("gulp-uglify");


gulp.task("webserver",function()
{
	gulp.src("./")
		.pipe(webserver({
			port:80,
			livereload:true,
			directoryListing:{
				path:"./",
				enable:true
			}
		}))
})
//编译sass
var sassFile = "./app/src/styles/app.scss";
gulp.task("sass",function()
{
	gulp.src(sassFile)
		.pipe(sass())
		.pipe(minify())
		.pipe(gulp.dest("./app/prd/styles"));
})

//js模块化
var jsFile = ["./app/src/scripts/app.js"];
gulp.task("js",function()
{
	console.log("hello")
	gulp.src(jsFile)
		.pipe(named())
		.pipe(webpack(
		{
			output:{
				filename:"[name].js",
			},
			modules:{
				loaders:
				[{
					test:/\.js$/,
					loader:'imports?define => false'
				}]
			}
		}))
		.pipe(uglify().on("error",function(e)
		{
			console.log("\x07",e.lineNumber,e.message);
			return this.end();
		}))
		.pipe(gulp.dest("./app/prd/scripts"));
})
//检测文件
gulp.task("watch",function()
{
	gulp.watch(jsFile,["js"]);
	gulp.watch(sassFile,["sass"]);
})
gulp.task("default",["webserver","watch","js"])