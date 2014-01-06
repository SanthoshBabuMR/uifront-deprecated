module.exports = function (grunt) {
  'use strict';
  var page = grunt.file.readJSON('config/page.json');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      server: {
        options: {
          port: 9234,
          hostname: 'localhost',
          base: '.',
          keepalive: true,
          livereload: true
        }
      }
    },
    cssmin: {
      add_banner: {
        options: {
          banner: '/*! <%= pkg.name %>:minified css file; <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },
        files: {
          'asset/build/css/global.css': ['asset/src/css/global.css'],
          // specify current document path for cssmin
          'tech-guru/brendan-eich/asset/build/css/page.css': ['tech-guru/brendan-eich/asset/src/css/page.css']
        }
      }
    },
    uglify: {
      minifySiteJs: {
        options: {
          beautify: false
        },
        files: [{
          expand: true,
          cwd: 'asset/src/script/',
          src: ['**/*.js'],
          dest: 'asset/build/script',
        }]
      },
      minifyDocJs: {
        options: {
          beautify: false
        },
        files: [{
          expand: true,
          cwd: page.currentDocument + '/asset/src/script/',
          src: ['**/*.js'],
          dest: page.currentDocument + '/asset/build/script',
        }]
      }
    },
    compass: {
      compileSite: {
        options: {
          sassDir: ['asset/src/sass/'],
          cssDir: ['asset/src/css/']
        }
      },
      compileDoc: {
        options: {
          sassDir: [page.currentDocument + '/asset/src/sass/'],
          cssDir: [page.currentDocument + '/asset/src/css/']
        }
      }
    },
    watch: {
      compileSass: {
        files: ['asset/src/sass/*.scss', page.currentDocument + '/asset/src/sass/*.scss'],
        tasks: ['compass'],
        options: {
          livereload: true,
        }
      }
    },
    responsive_images: {
      siteImage: {
        options: {
          sizes: [{
            name: "small",
            width: 320,
            quality: 1
          },{
            name: "medium",
            width: 640,
            quality: 1
          },{
            name: "large",
            width: 1024,
            quality: 1
          }]
        },
        files: [{
          expand: true,
          src: ['**.{jpg,gif,png}'],
          cwd: 'asset/src/hidef-image/',
          custom_dest: 'asset/src/image/{%= name %}/'
        }]
      },
      pageImage: {
        options: {
          sizes: [{
            name: "small",
            width: 320,
            quality: 1
          },{
            name: "medium",
            width: 640,
            quality: 1
          },{
            name: "large",
            width: 1024,
            quality: 1
          }]
        },
        files: [{
          expand: true,
          src: ['**.{jpg,gif,png}'],
          cwd: page.currentDocument + '/asset/src/hidef-image/',
          custom_dest: page.currentDocument + '/asset/src/image/{%= name %}/'
        }]
      }
    },
    copy: {
      pageImage: {
        files: [
          {expand: true, cwd: page.currentDocument + '/asset/src/image/', src: ['**'], dest: page.currentDocument + '/asset/build/image/' },
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('server', ['connect']);
  grunt.registerTask('runcssmin', ['cssmin']);      // minify css
  grunt.registerTask('runcompass', ['compass']);    // compile scss to css
  grunt.registerTask('runwatch', ['watch']);        // watch for scss file modification
  grunt.registerTask('runuglify', ['uglify']);      // minify js
  grunt.registerTask('runresimages', ['responsive_images']); 
  grunt.registerTask('runcopy', ['copy']); 
  grunt.registerTask('default', ['runcompass', 'runcssmin', 'runuglify']); // compile sass, minify css, minify js
  
  // running a sub task
  // eg: grunt uglify:minifyDocJs

};