console.log('def');

var CordovaGPUDrawerPlugin = {
    draw : function(cb, error, opts) {
        var draw;
        if (opts && typeof(opts[0]) === 'string' && opts[0].length > 0) {
            draw = opts[0];
        }
        cb(draw)
    }
}
module.exports = CordovaGPUDrawerPlugin;

require('cordova/exec/proxy').add('CordovaGPUDrawerPlugin', CordovaGPUDrawerPlugin);

