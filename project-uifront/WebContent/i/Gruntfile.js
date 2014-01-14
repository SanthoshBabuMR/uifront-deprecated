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
          // global site css
          'asset/build/css/global.css': ['asset/src/css/global.css'],
          // global modules
		  'asset/build/css/modules/videos.css': ['asset/src/css/modules/videos.css'],
          // specify current document path for cssmin
		  //'env-name/document-name/asset/build/css/page.css': ['env-name/document-name/asset/src/css/page.css']
        }
      }
    },
    uglify: {
      site: {
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
      doc: {
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
      site: {
        options: {
          sassDir: ['asset/src/sass/'],
          cssDir: ['asset/src/css/']
        }
      },
      doc: {
        options: {
          sassDir: [pageFullPath + '/asset/src/sass/'],
          cssDir: [pageFullPath + '/asset/src/css/']
        }
      }
    },
    watch: {
      site: {
        files: ['asset/src/sass/*.scss'],
        tasks: ['compass:site'],
        options: {
          livereload: true,
        }
      },
			doc: {
        files: [pageFullPath + '/asset/src/sass/*.scss'],
        tasks: ['compass:doc'],
        options: {
          livereload: true,
        }
      },
    },
    responsive_images: {
      site: {
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
      doc: {
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
      docImage: {
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

  // server
  grunt.registerTask('server', ['connect']);
  // minify css
  grunt.registerTask('runcssmin', ['cssmin']);
  // compile scss to css
  grunt.registerTask('runcompass', ['compass']);   
  // watch for scss file modification
  grunt.registerTask('runwatch', ['watch']);       
  // minify js
  grunt.registerTask('runuglify', ['uglify']);     
  // make responsive images
  grunt.registerTask('runresimages', ['responsive_images']);
  // copy docImage(s) / template
  grunt.registerTask('runcopy', ['copy']);         
  grunt.registerTask('default', ['compass:doc', 'compass:site', 'cssmin', 'uglify:doc', 'uglify:site']);
  
  // run a sub task
  // eg: grunt uglify:minifyDocJs

};