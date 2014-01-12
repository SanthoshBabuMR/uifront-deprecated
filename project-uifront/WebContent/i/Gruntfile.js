module.exports = function (grunt) {
  'use strict';
  var page = grunt.file.readJSON('config/page.json');

  var pageDir = page.srcPath;
	var pageName = page.srcDocument;
  var pageFullPath = pageDir + '/' + pageName;

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
		  //'env-name/document-name/asset/build/css/page.css': ['env-name/document-name/asset/src/css/page.css']
		  'env-name/document-name/asset/build/css/page.css': ['env-name/document-name/asset/src/css/page.css']
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
          cwd: pageFullPath + '/asset/src/script/',
          src: ['**/*.js'],
          dest: pageFullPath + '/asset/build/script',
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
          sassDir: [pageFullPath + '/asset/src/sass/'],
          cssDir: [pageFullPath + '/asset/src/css/']
        }
      }
    },
    watch: {
      site: {
        files: ['asset/src/sass/*.scss'],
        tasks: ['compass:compileSite'],
        options: {
          livereload: true,
        }
      },
			doc: {
        files: [pageFullPath + '/asset/src/sass/*.scss'],
        tasks: ['compass:compileDoc'],
        options: {
          livereload: true,
        }
      },
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
          cwd: pageFullPath + '/asset/src/hidef-image/',
          custom_dest: pageFullPath + '/asset/src/image/{%= name %}/'
        }]
      }
    },
    copy: {
      pageImage: {
        files: [
          {expand: true, cwd: pageFullPath + '/asset/src/image/', src: ['**'], dest: pageFullPath + '/asset/build/image/' }
        ]
      },
      template: {
    	dot: true,
    	files: [
	      {expand: true, cwd: 'template/html-template/', src: ['**','**/.dir'], dest: pageFullPath + '/' }
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