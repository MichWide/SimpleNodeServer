const fs = require('fs');
/**
 * Methods used during processing the request
 */
const routerMethods = {

    //Creates and send a response 
    createResponse(res, template) {
        res.setHeader('Content-Type', 'text/html');
        res.write(template);
        res.end();
    },

    //Provides the html that will be rendered on a page 
    sendPage(res, fileName, ...params) {
        if (!fileName) {
            routerMethods.createResponse(res, "<h1>404!</h1>");
        } else {
            fs.readFile(`views/${fileName}`, 'utf8', (err, data) => {
                if (err) {
                    routerMethods.createResponse(res, "<h1>Oops! Something went wrong!</h1>");
                    throw new Error;
                }
                routerMethods.createResponse(res, data + `<h2>${params}</h2>`);
            });
        }
    },

    getData(req) {
        return new Promise((resolve, reject) => {
            const body = [];
            req.on('data', (chunk) => {
                body.push(chunk);
            });
            req.on('end', () => {
                const parsedBody = Buffer.concat(body).toString();
                resolve(parsedBody);
            });
        })
    }

}

module.exports = routerMethods;