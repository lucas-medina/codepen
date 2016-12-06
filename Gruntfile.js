module.exports = function(grunt) {


	// Penmaker needs pens! If no pen is specified, it just doesn't work... Not yet.
	var project = grunt.option('pen') || null;
	if (!project){
		console.log('Alert: pen not specified.');
		return false;
	}
	var folder = 'pens/' + project + '/';

	grunt.initConfig({

		sass : {
			options : {
				outputStyle : 'expanded',
				precision: 4
			},
			dist : {
				expand: true,
				cwd : folder + 'src/scss',
				src : ['**/*.scss'],
				dest : folder + 'dev/css',
				ext: '.css'
			}
		},

		postcss : {
			options : {
				processors : [
					require('autoprefixer')({browsers: 'last 5 versions'})
				]
			},
			src : folder + 'dev/css/*.css'
		},

		copy : {
			template : {
				expand: true,
				cwd : './template',
				src : '**',
				dest : folder,
				filter : function(path){
					try {
						if (grunt.file.exists(folder)) {
							console.log("=> The path '" + folder + "' already exists. Aborted copy.");
							return;
						}
						console.log("=> Copying '" + path + "'");
						return path;
					} catch (error) {
						console.log("=> Error processing the copy.");
						return true;
					}
				}
			},
			images : {
				expand: true,
				cwd : folder + 'src/images',
				src : '**/*',
				dest : folder + '/dev/images'
			},
			html : {
				expand : true,
				cwd : folder + 'src',
				src : '**/*.html',
				dest : folder + 'dev'
			}
		},

		uglify : {
			options : {
				beautify : true,
				mangle: false,
				compress : {
					sequences : false
				}
			},
			files : {
				expand : true,
				cwd : folder + 'src/js',
				src : '**/*.js',
				dest : folder + 'dev/js'
			}
		},

		concat : {
			js : {
				src : [folder + 'src/vendor/js/*.js'],
				dest : folder + 'dev/js/vendor.js'
			},
			css : {
				src : [folder + 'src/vendor/css/*.css'],
				dest : folder + 'dev/css/vendor.css'
			}
		},

		browserSync : {
			dist : {
				bsFiles : {
					src : ['**/dev/**/*.css', '**/dev/**/*.js', '**/dev/*.html']
				},
				options : {
					watchTask: true,
					server : {
						baseDir : project ? folder + "/dev" : "./dev/",
						index: 'index.html'
					}
				}
			}
		},

		watch : {
			index : {
				files : [folder + 'src/**/*.html'],
				tasks : ['copy:html']
			},
			images : {
				files : [folder + 'src/images/**'],
				tasks : ['copy:images']
			},
			scss : {
				files : [folder + 'src/scss/**/*.scss'],
				tasks : ['sass:dist', 'postcss']
			},
			js : {
				files : [folder + 'src/js/**/*.js'],
				tasks : ['uglify:dist']
			},
			vendor : {
				files : [folder + 'src/vendor/css/**', 'src/vendor/js/**'],
				tasks : ['concat']
			}
		}

	});

	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-postcss');


	var taskOrder = [
		'copy:template',
		'sass:dist', 'postcss', 'copy:html', 'copy:images', 'uglify', 'concat', 'browserSync', 'watch'
	];
	grunt.registerTask('default', taskOrder);
	// grunt.registerTask('goal', ['browserSync:build', 'watch']);
}
