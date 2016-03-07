var request = require('request');

var options = {
  url: 'http://localhost:3000',
  headers: {
  	'Content-Type': 'application/json',
    'X-APP-TOKEN': 'Bearer 477d5f7d0ea3caa16c7b3b6c22d339e0'
  }
};
request(options,function(err,res){
	console.log(err);
	console.log(res);
})