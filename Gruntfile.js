module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      js: {
        src: [
          './js/libs/*.js',
          './js/dev/*.js'
        ],
        dest: './js/all.js'
      }
    },
    uglify: {
      // js: {
      //   src: './js/all.js',
      //   dest: './js/all-min.js'
      // }
    },
    compass: {
      css: {
        options: {
          sassDir: './css/scss',
          cssDir: './css',
          // outputStyle: 'compressed'
        }
      }
    },

    manifest: {
        generate: {
          options: {
            basePath: '../',
            cache: ['js/all.js', 'css/all.css'],
            network: ['*'],
            // fallback: [''],
            // preferOnline: true,
            verbose: true,
            timestamp: true,
            hash: true,
            master: ['index.php']
          },
          src: [
            'some_files/*.html',
              'js/*.min.js',
              'css/*.css'
          ],
          dest: 'manifest.appcache'
        }
    },

    watch: {
      css: {
        files: ['./css/scss/**/*.scss'],
        tasks: ['compass:css', 'manifest', 'exec:rsync']
      },
      js: {
        files: ['./js/dev/**/*.js'],
        tasks: ['concat:js', 'manifest', 'exec:rsync']
      },
      forManifest: {
        files: [
          './Gruntfile.js',
          './*.php',
          './html/*'
        ],
        tasks: ['manifest', 'exec:rsync']        
      }
    },


    exec: {
      rsync: {
        command: 'rsync -r -p -v ./ ../yoheim_net/app/ewords/'
      }
    }

    // jshint: {
    //   options: {
    //     curly: true,
    //     eqeqeq: true,
    //     immed: true,
    //     latedef: true,
    //     newcap: true,
    //     noarg: true,
    //     sub: true,
    //     undef: true,
    //     unused: true,
    //     boss: true,
    //     eqnull: true,
    //     browser: true,
    //     globals: {
    //       jQuery: true
    //     }
    //   },
    //   gruntfile: {
    //     src: 'Gruntfile.js'
    //   },
    //   lib_test: {
    //     src: ['lib/**/*.js', 'test/**/*.js']
    //   }
    // },
    // qunit: {
    //   files: ['test/**/*.html']
    // },
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // grunt.loadNpmTasks('grunt-contrib-qunit');
  // grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-manifest');
  grunt.loadNpmTasks('grunt-exec');

  // Default task.
  grunt.registerTask('default', ['watch']);

};
