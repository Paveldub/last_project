'use strict';

module.exports = function() {
  $.gulp.task('copy:webGl', function() {
    return $.gulp.src('./source/img/**/*.*', { since: $.gulp.lastRun('copy:webGl') })
      .pipe($.gulp.dest($.config.root + '/img'));
  });
};