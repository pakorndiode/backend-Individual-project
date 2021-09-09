var http = require('http');
var url = require('url');
var array = []
const{
    showRoomAll,
    showRoomType,
    searchRoom,
    searchCustomer,
    bookingRoom
} = require('./hotel')

http.createServer(function (req, res) {

    var data = url.parse(req.url, true);
    var message = '';


    switch (data.pathname) {
        case '/showRoomAll':
            try {
                let showItem = showRoomAll()
                message += 'have';
                data = showItem
                status = 200;
            } catch (e) {
                message += 'e';
                status = 400;
                console.log(e);
            }
            break;
        case '/showRoomType':
            try {
                let showItem = showRoomType();
                message += 'have';
                status = 200;
                data = showItem
            } catch (e) {
                message += e;
                status = 400;
                console.log(e);
            }
            break;
        case '/searchRoom':
            try {
                let reg = /[a-zA-z\d]*$/
                console.log(reg.test(data.query.name))
                let showItem = searchRoom(data.query.name);
                message += 'have';
                status = 200;
                data = showItem
            } catch (e) {
                message += e;
                status = 400;
                console.log(e);
            }
            break;
        case '/searchCustomer':
            try {
                let reg = /[a-zA-z\d]*$/
                console.log(reg.test(data.query.name))
                let showItem = searchCustomer(data.query.name);
                message += 'have';
                status = 200;
                data = showItem
            } catch (e) {
                message += e;
                status = 400;
                console.log(e);
            }
            break;
        case '/bookingRoom':
            try {
                let x 
                req.on('data', (chunk) => {
                    array.push(chunk)
                }).on('end', () => {
                    response_object = JSON.parse(Buffer.concat(array).toString())
                    bookingRoom(response_object)
                    console.log(response_object)
                    x = response_object
                })
                data = x
                message = 'Booking success'
            } catch (e) {
                message += e;
                status = 400;
                console.log(e);
            }
            break;
    }

       let response_object = {
            status: 200,
            massage: message,
            data: data
        }


    

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(JSON.stringify(response_object));

}).listen(8080);

console.log('Server running on port 8080.');