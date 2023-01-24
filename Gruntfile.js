module.exports = function (grunt){
    const sass = require('node-sass');
    //configuration
    grunt.initConfig({
   //pass in options to plugins,ref to file
     concat:{
        js:{
            src:['js/*.js'],
            dest:'build/scripts.js'
        },
        css:{
            src:['css/*.css'],
            dest:'build/style.css'
        },
     },
     sass:{
        build:{
           files:[{
            src:'css/sass/style.scss',
            dest:'css/style.css'
           }] 
        },
        options: {
			implementation: sass,
			sourceMap: true
		}
     }
    });

    //load plugins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-sass');

    //Register tasks
    
    grunt.registerTask('concat-js',['concat:js']);
    grunt.registerTask('concat-css',['concat:css']);
}