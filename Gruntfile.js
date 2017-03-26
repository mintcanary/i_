module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'scss',
          src: ['*.scss'],
          dest: 'css',
          ext: '.css'
        }]
      }
    },

    cssmin: {
      options: {
        sourceMap: true
      },
      target: {
        files: {
          'css/style.css': ['css/normalize.css', 'css/main.css']
        }
      }
    },

		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			},
      cssmin: {
				files: '**/*.css',
				tasks: ['cssmin']
			}
		}
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default',['watch']);

};
