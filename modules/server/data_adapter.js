import request from 'superagent'
import _ from 'underscore'

function DataAdapter(options) {
  this.options = options || {};

  _.defaults(this.options, {
    userAgent: 'Node.js'
  });

};

DataAdapter.prototype.request = function(url, options, callback) {
  if (arguments.length === 2) {
    callback = options;
    options = {};
  }

  if (!(options.method && request[options.method])) {
    options.method = 'get'
  }

  var start = new Date().getTime(),
      end;

  const timeStamp = new Date().getTime();
  url += (/\?/).test(url) ? '&' : '?';
  url += timeStamp;

  request[options.method](url)
    .end(function(err, response) {
      if (err) return callback(err);

      end = new Date().getTime();

      console.log(`${options.method.toUpperCase()} ${url} ${response.statusCode} ${end - start}`);

      var contentType = response.headers['content-type'] || '';
      if (typeof body === 'string' && contentType.indexOf('application/json') !== -1) {
        try {
          body = JSON.parse(body);
        } catch(e) {
          err = e;
        }
      }

      callback(err, response);
    });
};

module.exports = DataAdapter;
