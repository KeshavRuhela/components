module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: [{
          expand: true,
          cwd: 'src/',
          src: ['**/*.scss'],
          dest: 'dist/',
          ext: '.min.css'
        }]
      }
    },
    watch: {
      options: {
        cwd: 'src/'
      },
      scripts: {
        files: ['**/*.scss'],
        tasks: ['sass'],
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['sass']);

};