const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sourcemap = require("gulp-sourcemaps");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const csso = require("gulp-csso");
const autoprefixer = require("autoprefixer");
const rename = require("gulp-rename");
const del = require("del");
const minifyJs = require("gulp-minify");
const minifyHtml = require("gulp-htmlmin");
const imagemin = require("gulp-imagemin");
const svgstore = require("gulp-svgstore");
const webp = require("gulp-webp");
const sync = require("browser-sync").create();


// makeWebp

const makeWebp = () => {
    return gulp.src(["source/img/**/*.png", "source/img/**/*.jpg" ])
        .pipe(webp())
        .pipe(gulp.dest("source/img"))
}

exports.makeWebp = makeWebp;


// Clean

const clean = () => {
  return del("build");
};

exports.clean = clean;


// Copy

const copy = () => {
  return gulp.src([
    "source/fonts/**/*.{woff, woff2}",
    "source/img/**",
    "source/js/**/*.js",
    "source/*.ico",
    "source/pixel-glass/**"
  ], {
    base: "source"
  })
  .pipe(gulp.dest("build"));
};

exports.copy = copy;


// Images

const images = () => {
  return gulp.src("source/img/**/*.{jpg, png, svg}")
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.mozjpeg({progressive: true}),
      imagemin.svgo()
    ])
    .pipe(gulp.dest("build/img"))
  )
}

exports.images = images;


// Minify Html

const htmlMini = () => {
  return gulp.src("source/*.html")
    .pipe(minifyHtml({ collapseWhitespace: true, removeComments: true }))
    .pipe(gulp.dest("build/"));
};

exports.htmlMini = htmlMini;


// Minify JS

const scriptMini = () => {
  return gulp.src("source/js/script.js")
    .pipe(minifyJs())
    .pipe(gulp.dest("build/js/"))
};

exports.scriptMini = scriptMini;


// Sprite

const sprite = () => {
  return gulp.src("source/img/**/icon-*.svg")
    .pipe(svgstore())
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("build/img"))
}

exports.sprite = sprite;


// Styles

const styles = () => {
  return gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest("build/css"))
    .pipe(csso())
    .pipe(rename("style.min.css"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("build/css"))
    .pipe(sync.stream());
}

exports.styles = styles;


// Server

const server = (done) => {
  sync.init({
    server: {
      baseDir: "build"
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

exports.server = server;


// Watcher

const watcher = () => {
  gulp.watch("source/sass/**/*.scss", gulp.series("styles"));
  gulp.watch("source/*.html", gulp.series("htmlMini")).on("change", sync.reload);
}


// Build

exports.build = gulp.series(
  clean,
  copy,
  scriptMini,
  htmlMini,
  styles,
  sprite,
);

exports.default = gulp.series(
  clean,
  copy,
  scriptMini,
  htmlMini,
  styles,
  sprite,
  server,
  watcher
);
