/* jshint node:true */
module.exports = function(grunt){

	'use strict';

	// Force use of Unix newlines
	grunt.util.linefeed = '\n';

	require( 'load-grunt-tasks' )( grunt );

	// Project configuration
	grunt.initConfig( {

		pkg: grunt.file.readJSON( 'package.json' ),

		watch: {
			files: 'pwa/assets/sass/**/*.scss',
			tasks: ['sass']
		},

		sass: {
			options: { sourceMap: false },
			dev: {
				files: {
					'pwa/assets/css/style.css': 'pwa/assets/sass/style.scss'
				}
			}
		},

		autoprefixer: {
			options: {
				browsers: [
					"Android 2.3",
					"Android >= 4",
					"Chrome >= 20",
					"Firefox >= 24",
					"Explorer >= 8",
					"iOS >= 6",
					"Opera >= 12",
					"Safari >= 6"
				]
			},
			style: {
				src: ['pwa/assets/css/style.css']
			}
		},

		cssmin: {
			main: {
				files: {
					'pwa/assets/css/style.css': ['pwa/assets/css/style.css']
				}
			}
		},

		browserSync: {
			dev: {
				bsFiles: {
					src : [
						'**/*.css',
						'**/*.html'
					]
				},
				options: {
					watchTask: true,
					proxy: '<%= pkg.config.url.dev %>',
					open: 'external',
					ui: false,
					ghostMode: false
				}
			}
		},
	} );

	// Register Tasks
	// --------------------------

	// Default Task
	grunt.registerTask( 'default', [ 'serve' ] );

	grunt.registerTask( 'serve', [ 'browserSync', 'watch' ] );

	// Style to production or stage
	grunt.registerTask('style', [ 'autoprefixer', 'cssmin' ] );

};

