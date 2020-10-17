var loadCss = function(_url, callback) {
        var head = document.getElementsByTagName('head')[0];
        if (!document.querySelector('link[id="skin"]')) {
            var link = document.createElement('link');
            link.type = 'text/css';
            link.rel = 'stylesheet';
            link.id = 'skin';
            link.href = _url;
            link.onload = function() {
                console.log('loaded');
            };
            link.onerror = function() {
                callback(1);
            };
            head.appendChild(link);
        }
    },
    removeCss = function(id) {
        var head = document.getElementsByTagName('head')[0],
            elm = document.querySelector('link[id="' + id + '"]');
        if (elm) {
            head.removeChild(elm);
        }
    };
$(function() {
    setInterval(function() {
        var skins = ['coral', 'lavender', 'lime-breeze', 'mavericks', 'orient', 'red-sunset', 'sunrise'];
        var skin = skins[Math.floor(Math.random() * skins.length)];
        removeCss('skin');
        loadCss('/assets/css/skin/' + skin + '.css');
    }, 30000);
});