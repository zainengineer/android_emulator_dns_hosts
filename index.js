var jack = require('dnsjack').createServer();
 
jack.route('yourappdomain.com', '10.0.2.2'); //re-route app domain to outside emulator
jack.listen();