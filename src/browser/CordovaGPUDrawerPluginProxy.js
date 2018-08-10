var CordovaGPUDrawerPlugin = {
    draw : function(cb, error, opts) {
        var draw;
        if (opts && typeof(opts[0]) === 'string' && opts[0].length > 0) {
            draw = opts[0];
        }
        setTimeout(()=>cb(draw),1000);
    }
}
module.exports = CordovaGPUDrawerPlugin;

require('cordova/exec/proxy').add('CordovaGPUDrawerPlugin', CordovaGPUDrawerPlugin);

