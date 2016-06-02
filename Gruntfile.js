module.exports = function(grunt){

  require('load-grunt-tasks')(grunt);//加载所有的任务
  grunt.initConfig({
    connect: {
      options: {
        port:9999,
        hostname: '*', //默认就是这个值，可配置为本机某个 IP，localhost 或域名
        livereload: 35720  //声明给 watch 监听的端口
      },
      server: {
        options: {
          open: true, //自动打开网页
          base: [
            '.'  //主目录
          ]
        }
      }
    },
    uglify:{
      my_target: {
        options: {
          beautify: false
        },
        files: {
          'dest/js/1.js': ['src/js/1.js'],
          'dest/js/2.js': ['src/js/2.js'],
          'dest/js/jquery.min.js': ['src/js/jquery.min.js']
        }
      }
    },
    sass: {
      options:{
        //noCache:true,
        compass:true,
        style:'expanded',
        sourcemap:"none"
      },
      dist: {
        files: {
          'src/css/1.css':'src/scss/1.scss',
          'src/css/2.css':'src/scss/2.scss'
        }
      }
    },
    cssmin:{
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          "dest/css/1.css": "src/css/1.css",
          "dest/css/2.css": "src/css/2.css"
        }
      }
    },
    htmlmin: {                                     // Task
      dist: {                                      // Target
        options: {                                 // Target options
          removeComments: true,
          collapseWhitespace: true
        },
        files: {                                   // Dictionary of files
          'dest/1.html': 'src/1.html',     // 'destination': 'source'
          'dest/2.html': 'src/2.html'     // 'destination': 'source'
        }
      }
    },
    watch: {
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'  //监听前面声明的端口  35729
        },
        files: [  //下面文件的改变就会实时刷新网页
          './{,*/}*.html',
          "src/scss/{,*/}*.scss",
          'src/css/{,*/}*.css',
          'src/js/{,*/}*.js'
        ],
        tasks:['sass', 'htmlmin', 'cssmin', 'uglify', 'connect']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', [
    'sass',
    'cssmin',
    'htmlmin',
    'uglify',
    'connect',
    'watch'
  ]);
};

/*
* 5/2
* 5/28
* */

/*
concat: {
  /!*options: {
   separator: ';'
   },*!/
  dest:{
    src: ['dest/js/element.js','dest/js/script.js'],
        dest:'dest/script.js'
  }
},
imagemin: {                          // Task
  static: {                          // Target
    options: {                       // Target options
      optimizationLevel: 3,
          svgoPlugins: [{ removeViewBox: false }]
      //use: [mozjpeg()],
    }
  },
  dynamic: {                         // Another target
    files: [{
      expand: true,                  // Enable dynamic expansion
      cwd: 'src/img/',                   // Src matches are relative to this path
      src: ['*.{png,jpg,gif}'],   // Actual patterns to match
      dest: 'dest/'                  // Destination path prefix
    }]
  }
},
less: {
  development: {
    files: {
      'src/css/styles.css': 'src/less/styles.less'
    }
  }
},
 jshint: {
 files: {
 all: ['src/js/*.js']
 },
options:{
  jshintrc: "./.jshintrc"
}
},*/
