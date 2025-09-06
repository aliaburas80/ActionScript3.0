module.exports = (grunt) => {

    grunt.initConfig({
        clean: ['src/js/main.js', 'src/js/main.min.js'],

        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['css/*.scss','**/css/*.scss'],
                    dest: 'out/',
                    ext: '.css'
                }]
            }
        },

        concat: {
            build: {
                src: ['src/js/**/*.js','src/js/*.js'],
                dest: 'out/js/main.js'
            }
        },

        watch: {
            css: {
                files: ['src/css/*.scss', 'src/css/_vars.scss'],
                tasks: ['sass']
            },

            js: {
                files: ['src/js/*.js','src/js/**/*.js'],
                tasks: ['clean', 'concat']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.registerTask('default', ['clean', 'concat', 'sass', 'watch']);
}