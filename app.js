
const browserSync = require('browser-sync');

browserSync({
    server: './app.js',
    
    files: [
        'app/*.html',
        'app/*.css'
    ]
});
