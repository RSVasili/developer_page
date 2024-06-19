const srcPath = './src';
const distPath = './dist';

export const paths = {
    base: {
        src: srcPath,
        dist: distPath
    },
    src: {
        srcHtml: srcPath + '/*.html',
        srcScss: srcPath + '/scss/**/*.+(scss|sass)',
        srcResources: srcPath + '/resources/**',
        srcImages: srcPath + '/images/**/**.{jpg,jpeg,png,webp,gif}',
        srcScripts: srcPath + '/js/**/*.js'

    },
    build: {
        buildHtml: distPath,
        buildCss: distPath + '/css',
        buildResources: distPath + '/resources',
        buildImages: distPath + '/images',
        buildScripts: distPath + '/scripts'
    }
}