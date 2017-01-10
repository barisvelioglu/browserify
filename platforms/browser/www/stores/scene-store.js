var eventEmitter = require('../lib/event-manager');
var socketManager = require('socketManager');
var localforage = require('localforage');

localforage.config({
    name        : 'SmartHome',
    version     : 1.0,
    storeName   : 'scene'
});

var sceneStore = {};

localforage.getItem('value', function (err, value) {
  console.log(value)
  sceneStore.scenes = value;
});

function getAll(){
  return sceneStore.scenes;
}
//test purpose
function addScene(scene){
  sceneStore.scenes.add(scene);
  socketManager.emit("add::scene", scene);
}

function callScene(id){
  socketManager.emit("call::scene", id)
}

eventEmitter.on("add::scene", addScene)
eventEmitter.on("call::scene", callScene);

module.exports = {
  getAll : getAll
}
