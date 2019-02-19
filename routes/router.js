const routerMethods = require('../util/routeMethods');
/**
 * 
 * @param {*} req request
 * @param {*} res response
 * Handle incoming request depending on a route and method.
 */
async function handleRoutes(req, res) {

    const url = req.url,
        method = req.method;

    let data = await routerMethods.getData(req);

    //GET requests handlers
    if (method === "GET") {
        switch (url) {
            case '/':
                routerMethods.sendPage(res, 'home.html');
                break;
            case '/about':
                routerMethods.sendPage(res, 'about.html');
                break;
            default:
                routerMethods.sendPage(res);
        };
    }

    //POST requests handlers
    if (method === "POST") {
        switch (url) {
            case '/about':
                routerMethods.sendPage(res, 'about.html', data);
                break;
            default:
                routerMethods.sendPage(res);
        };
    }


}



module.exports = handleRoutes;