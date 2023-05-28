import path from 'path';
import fs from 'fs';

const __rootpath = path.resolve(".");
const dir = path.join(__rootpath, '/uploads');

/* Sources
Path issue : https://stackoverflow.com/questions/10265798/determine-project-root-from-a-running-node-js-application
Serving image : https://stackoverflow.com/questions/5823722/how-to-serve-an-image-using-nodejs/40899767#40899767
*/

const mime = {
    html: 'text/html',
    txt: 'text/plain',
    css: 'text/css',
    gif: 'image/gif',
    jpg: 'image/jpeg',
    png: 'image/png',
    svg: 'image/svg+xml',
    js: 'application/javascript'
};

export async function getResourceByFilename(req, res) {
    // Get filename on params
    let reqPath = req.path;

    console.log("__rootpath : ", __rootpath);
    console.log("dir : ", dir);
    console.log("reqPath : ", reqPath);

    var file = path.join(dir, req.path.replace(/\/$/, '/index.html'));
    if (file.indexOf(dir + path.sep) !== 0) {
        return res.status(403).end('Forbidden');
    }
    var type = mime[path.extname(file).slice(1)] || 'text/plain';
    var s = fs.createReadStream(file);
    s.on('open', function () {
        res.set('Content-Type', type);
        s.pipe(res);
    });
    s.on('error', function () {
        res.set('Content-Type', 'text/plain');
        res.status(404).end('Not found');
    });
}