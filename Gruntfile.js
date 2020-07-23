module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      src: {
        files: [{
          expand: true,
          cwd: 'src/',
          src: ['**/*.scss'],
          dest: 'src/',
          ext: '.css'
        }]
      },
      applied: {
        files: [{
          expand: true,
          cwd: 'applied/',
          src: ['**/*.scss'],
          dest: 'applied/',
          ext: '.css'
        }]
      }
    },
    cssmin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'src/',
          src: ['**/*.css', '!*.min.css'],
          dest: 'dist/',
          ext: '.min.css'
        }]
      }
    },
    watch: {
      options: {
        cwd: 'src/'
      },
      sass: {
        files: ['**/*.scss'],
        tasks: ['sass'],
      },
      cssmin: {
        files: ['**/*.css', '!*.min.css'],
        tasks: ['cssmin'],
      }
    }
  });

  // Plugins
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Tasks
  grunt.registerTask('build', ['sass:src', 'cssmin']);
  grunt.registerTask('build-all', ['sass', 'cssmin']);

};