const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
    const files = [
        './dist/map/runtime.js',
        './dist/map/polyfills.js',
        './dist/map/scripts.js',
        './dist/map/main.js',
    ]

    await fs.ensureDir('component')
    await concat(files, 'component/map-control.js');
    await fs.copyFile('./dist/map/styles.css', 'component/styles.css')
    await fs.copy('./dist/map/assets/', 'component/assets/' )
})()