/*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/
console.log('plugignng');
var argscheck = require('cordova/argscheck');
var channel = require('cordova/channel');
var utils = require('cordova/utils');
var exec = require('cordova/exec');
var cordova = require('cordova');

// Gpu Drawer

var PLUGIN_NAME = "CordovaGPUDrawerPlugin";

var CordovaGPUDrawerPlugin = {
    draw : function(drawable, cb) {
        try {
            typeof drawable === 'string'
        } catch (error) {
            throw 'Drawble parameter is not a string'
        }

        exec(cb, null, PLUGIN_NAME, 'draw', [drawable]);
    }
}


module.exports = CordovaGPUDrawerPlugin;