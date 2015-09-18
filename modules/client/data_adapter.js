// First attempt. No longer used. Kept as reference.

module.exports = DataAdapter;

function DataAdapter() {}

DataAdapter.prototype.request = function(url, options, callback) {
  const xhr = new XMLHttpRequest;
  const timeStamp = new Date().getTime();
  url += (/\?/).test(url) ? '&' : '?'
  url += timeStamp
  const uri = encodeURI(url);

  xhr.open('GET', uri);

  xhr.addEventListener('load', function(xhrProgress) {
    if (xhr.status === 200) {
      callback(xhr.responseText);
    } else {
      alert('error');
    }
  });

  xhr.send();
};