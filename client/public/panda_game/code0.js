gdjs.Game_32SceneCode = {};
gdjs.Game_32SceneCode.localVariables = [];
gdjs.Game_32SceneCode.GDBackgroundColourObjects1= [];
gdjs.Game_32SceneCode.GDBackgroundColourObjects2= [];
gdjs.Game_32SceneCode.GDFEED_9595BUTTONObjects1= [];
gdjs.Game_32SceneCode.GDFEED_9595BUTTONObjects2= [];
gdjs.Game_32SceneCode.GDCollision_9595sideObjects1= [];
gdjs.Game_32SceneCode.GDCollision_9595sideObjects2= [];
gdjs.Game_32SceneCode.GDPandaObjects1= [];
gdjs.Game_32SceneCode.GDPandaObjects2= [];
gdjs.Game_32SceneCode.GDCollision_9595floorObjects1= [];
gdjs.Game_32SceneCode.GDCollision_9595floorObjects2= [];
gdjs.Game_32SceneCode.GDBambooDisplayObjects1= [];
gdjs.Game_32SceneCode.GDBambooDisplayObjects2= [];
gdjs.Game_32SceneCode.GDInventory_9595BorderObjects1= [];
gdjs.Game_32SceneCode.GDInventory_9595BorderObjects2= [];
gdjs.Game_32SceneCode.GDINVENTORY_9595BUTTONObjects1= [];
gdjs.Game_32SceneCode.GDINVENTORY_9595BUTTONObjects2= [];
gdjs.Game_32SceneCode.GDFEED_9595BUTTON_95952Objects1= [];
gdjs.Game_32SceneCode.GDFEED_9595BUTTON_95952Objects2= [];
gdjs.Game_32SceneCode.GDInventory_9595border_95952Objects1= [];
gdjs.Game_32SceneCode.GDInventory_9595border_95952Objects2= [];
gdjs.Game_32SceneCode.GDLogObjects1= [];
gdjs.Game_32SceneCode.GDLogObjects2= [];


gdjs.Game_32SceneCode.asyncCallback11280076 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Log"), gdjs.Game_32SceneCode.GDLogObjects2);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDLogObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDLogObjects2[i].getBehavior("Text").setText("Bamboo: " + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber()));
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.common.toNumber(runtimeScene.getScene().getVariables().getFromIndex(3).getAsString()));
}gdjs.Game_32SceneCode.localVariables.length = 0;
}
gdjs.Game_32SceneCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.network.sendAwaitableAsyncRequest(runtimeScene.getGame().getVariables().getFromIndex(2).getAsString() + "database/queryBambooCount/", "{\"name\":\"EcoPioneer\"}", "POST", "", runtimeScene.getScene().getVariables().getFromIndex(3), runtimeScene.getScene().getVariables().getFromIndex(5)), (runtimeScene) => (gdjs.Game_32SceneCode.asyncCallback11280076(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPandaObjects1Objects = Hashtable.newFrom({"Panda": gdjs.Game_32SceneCode.GDPandaObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDCollision_95959595sideObjects1Objects = Hashtable.newFrom({"Collision_side": gdjs.Game_32SceneCode.GDCollision_9595sideObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDCollision_95959595sideObjects1Objects = Hashtable.newFrom({"Collision_side": gdjs.Game_32SceneCode.GDCollision_9595sideObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPandaObjects1Objects = Hashtable.newFrom({"Panda": gdjs.Game_32SceneCode.GDPandaObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDCollision_95959595floorObjects1Objects = Hashtable.newFrom({"Collision_floor": gdjs.Game_32SceneCode.GDCollision_9595floorObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDCollision_95959595floorObjects1Objects = Hashtable.newFrom({"Collision_floor": gdjs.Game_32SceneCode.GDCollision_9595floorObjects1});
gdjs.Game_32SceneCode.asyncCallback11285444 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Log"), gdjs.Game_32SceneCode.GDLogObjects2);
gdjs.copyArray(runtimeScene.getObjects("Panda"), gdjs.Game_32SceneCode.GDPandaObjects2);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDLogObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDLogObjects2[i].getBehavior("Text").setText("Bamboo: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))));
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDPandaObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPandaObjects2[i].getBehavior("Animation").setAnimationName("Panda Idle Eat");
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDPandaObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPandaObjects2[i].activateBehavior("TimedBackAndForthMirroredMovement", false);
}
}gdjs.Game_32SceneCode.localVariables.length = 0;
}
gdjs.Game_32SceneCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.network.sendAwaitableAsyncRequest(runtimeScene.getGame().getVariables().getFromIndex(2).getAsString() + "database/decreaseBambooCount/", "{\"name\":\"EcoPioneer\"}", "POST", "", runtimeScene.getScene().getVariables().getFromIndex(6), runtimeScene.getScene().getVariables().getFromIndex(5)), (runtimeScene) => (gdjs.Game_32SceneCode.asyncCallback11285444(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Game_32SceneCode.asyncCallback11290108 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Log"), gdjs.Game_32SceneCode.GDLogObjects2);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDLogObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDLogObjects2[i].getBehavior("Text").setText("Bamboo: 0");
}
}gdjs.Game_32SceneCode.localVariables.length = 0;
}
gdjs.Game_32SceneCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.network.sendAwaitableAsyncRequest(runtimeScene.getGame().getVariables().getFromIndex(2).getAsString() + "database/decreaseBambooCount/", "{\"name\":\"EcoPioneer\"}", "POST", "", runtimeScene.getScene().getVariables().getFromIndex(6), runtimeScene.getScene().getVariables().getFromIndex(5)), (runtimeScene) => (gdjs.Game_32SceneCode.asyncCallback11290108(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDFEED_95959595BUTTON_959595952Objects1Objects = Hashtable.newFrom({"FEED_BUTTON_2": gdjs.Game_32SceneCode.GDFEED_9595BUTTON_95952Objects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDFEED_95959595BUTTONObjects1Objects = Hashtable.newFrom({"FEED_BUTTON": gdjs.Game_32SceneCode.GDFEED_9595BUTTONObjects1});
gdjs.Game_32SceneCode.asyncCallback11297548 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Log"), gdjs.Game_32SceneCode.GDLogObjects2);
gdjs.copyArray(runtimeScene.getObjects("Panda"), gdjs.Game_32SceneCode.GDPandaObjects2);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDLogObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDLogObjects2[i].getBehavior("Text").setText("Bamboo: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))));
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDPandaObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPandaObjects2[i].getBehavior("Animation").setAnimationName("Panda Songkok Idle Eat");
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDPandaObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPandaObjects2[i].activateBehavior("TimedBackAndForthMirroredMovement", false);
}
}gdjs.Game_32SceneCode.localVariables.length = 0;
}
gdjs.Game_32SceneCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.network.sendAwaitableAsyncRequest(runtimeScene.getGame().getVariables().getFromIndex(2).getAsString() + "database/decreaseBambooCount/", "{\"name\":\"EcoPioneer\"}", "POST", "", runtimeScene.getScene().getVariables().getFromIndex(6), runtimeScene.getScene().getVariables().getFromIndex(5)), (runtimeScene) => (gdjs.Game_32SceneCode.asyncCallback11297548(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Game_32SceneCode.asyncCallback11301668 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Log"), gdjs.Game_32SceneCode.GDLogObjects2);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDLogObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDLogObjects2[i].getBehavior("Text").setText("Bamboo: 0");
}
}gdjs.Game_32SceneCode.localVariables.length = 0;
}
gdjs.Game_32SceneCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.network.sendAwaitableAsyncRequest(runtimeScene.getGame().getVariables().getFromIndex(2).getAsString() + "database/decreaseBambooCount/", "{\"name\":\"EcoPioneer\"}", "POST", "", runtimeScene.getScene().getVariables().getFromIndex(6), runtimeScene.getScene().getVariables().getFromIndex(5)), (runtimeScene) => (gdjs.Game_32SceneCode.asyncCallback11301668(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Game_32SceneCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FEED_BUTTON_2"), gdjs.Game_32SceneCode.GDFEED_9595BUTTON_95952Objects1);
gdjs.copyArray(runtimeScene.getObjects("Inventory_Border"), gdjs.Game_32SceneCode.GDInventory_9595BorderObjects1);
gdjs.copyArray(runtimeScene.getObjects("Inventory_border_2"), gdjs.Game_32SceneCode.GDInventory_9595border_95952Objects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDInventory_9595BorderObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDInventory_9595BorderObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDInventory_9595border_95952Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDInventory_9595border_95952Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDFEED_9595BUTTON_95952Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDFEED_9595BUTTON_95952Objects1[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.Game_32SceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Panda"), gdjs.Game_32SceneCode.GDPandaObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPandaObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPandaObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDPandaObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPandaObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Collision_side"), gdjs.Game_32SceneCode.GDCollision_9595sideObjects1);
gdjs.copyArray(runtimeScene.getObjects("Panda"), gdjs.Game_32SceneCode.GDPandaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPandaObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDCollision_95959595sideObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDCollision_9595sideObjects1 */
/* Reuse gdjs.Game_32SceneCode.GDPandaObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPandaObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPandaObjects1[i].getBehavior("Flippable").flipX(true);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDPandaObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPandaObjects1[i].separateFromObjectsList(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDCollision_95959595sideObjects1Objects, false);
}
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Collisions");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Collision_floor"), gdjs.Game_32SceneCode.GDCollision_9595floorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Panda"), gdjs.Game_32SceneCode.GDPandaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPandaObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDCollision_95959595floorObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDCollision_9595floorObjects1 */
/* Reuse gdjs.Game_32SceneCode.GDPandaObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPandaObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPandaObjects1[i].separateFromObjectsList(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDCollision_95959595floorObjects1Objects, false);
}
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Collisions");
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("FEED_BUTTON"), gdjs.Game_32SceneCode.GDFEED_9595BUTTONObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDFEED_9595BUTTONObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDFEED_9595BUTTONObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDFEED_9595BUTTONObjects1[k] = gdjs.Game_32SceneCode.GDFEED_9595BUTTONObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDFEED_9595BUTTONObjects1.length = k;
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(-(1));
}
{ //Subevents
gdjs.Game_32SceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Panda"), gdjs.Game_32SceneCode.GDPandaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPandaObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPandaObjects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPandaObjects1[k] = gdjs.Game_32SceneCode.GDPandaObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPandaObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPandaObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPandaObjects1[i].getBehavior("Animation").getAnimationName() == "Panda Idle Eat" ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPandaObjects1[k] = gdjs.Game_32SceneCode.GDPandaObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPandaObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11287180);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPandaObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPandaObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPandaObjects1[i].activateBehavior("TimedBackAndForthMirroredMovement", true);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDPandaObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPandaObjects1[i].getBehavior("Animation").setAnimationName("Panda Walk");
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("FEED_BUTTON"), gdjs.Game_32SceneCode.GDFEED_9595BUTTONObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) < 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDFEED_9595BUTTONObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDFEED_9595BUTTONObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDFEED_9595BUTTONObjects1[k] = gdjs.Game_32SceneCode.GDFEED_9595BUTTONObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDFEED_9595BUTTONObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Panda"), gdjs.Game_32SceneCode.GDPandaObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPandaObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPandaObjects1[i].getBehavior("Animation").setAnimationName("Panda Jump Fall");
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDPandaObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPandaObjects1[i].activateBehavior("TimedBackAndForthMirroredMovement", false);
}
}
{ //Subevents
gdjs.Game_32SceneCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Panda"), gdjs.Game_32SceneCode.GDPandaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPandaObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPandaObjects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPandaObjects1[k] = gdjs.Game_32SceneCode.GDPandaObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPandaObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPandaObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPandaObjects1[i].getBehavior("Animation").getAnimationName() == "Panda Jump Fall" ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPandaObjects1[k] = gdjs.Game_32SceneCode.GDPandaObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPandaObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11291116);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPandaObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPandaObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPandaObjects1[i].activateBehavior("TimedBackAndForthMirroredMovement", true);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDPandaObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPandaObjects1[i].getBehavior("Animation").setAnimationName("Panda Walk");
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("INVENTORY_BUTTON"), gdjs.Game_32SceneCode.GDINVENTORY_9595BUTTONObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDINVENTORY_9595BUTTONObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDINVENTORY_9595BUTTONObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDINVENTORY_9595BUTTONObjects1[k] = gdjs.Game_32SceneCode.GDINVENTORY_9595BUTTONObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDINVENTORY_9595BUTTONObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Inventory_Border"), gdjs.Game_32SceneCode.GDInventory_9595BorderObjects1);
gdjs.copyArray(runtimeScene.getObjects("Inventory_border_2"), gdjs.Game_32SceneCode.GDInventory_9595border_95952Objects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDInventory_9595BorderObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDInventory_9595BorderObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDInventory_9595border_95952Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDInventory_9595border_95952Objects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Inventory_Border"), gdjs.Game_32SceneCode.GDInventory_9595BorderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDInventory_9595BorderObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDInventory_9595BorderObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDInventory_9595BorderObjects1[k] = gdjs.Game_32SceneCode.GDInventory_9595BorderObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDInventory_9595BorderObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FEED_BUTTON"), gdjs.Game_32SceneCode.GDFEED_9595BUTTONObjects1);
/* Reuse gdjs.Game_32SceneCode.GDInventory_9595BorderObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Inventory_border_2"), gdjs.Game_32SceneCode.GDInventory_9595border_95952Objects1);
gdjs.copyArray(runtimeScene.getObjects("Panda"), gdjs.Game_32SceneCode.GDPandaObjects1);
gdjs.Game_32SceneCode.GDFEED_9595BUTTON_95952Objects1.length = 0;

{for(var i = 0, len = gdjs.Game_32SceneCode.GDPandaObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPandaObjects1[i].getBehavior("Animation").setAnimationName("Panda Songkok Walk");
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDInventory_9595BorderObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDInventory_9595BorderObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDInventory_9595border_95952Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDInventory_9595border_95952Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDFEED_9595BUTTONObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDFEED_9595BUTTONObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDFEED_95959595BUTTON_959595952Objects1Objects, +(1613), 99, "");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Inventory_border_2"), gdjs.Game_32SceneCode.GDInventory_9595border_95952Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDInventory_9595border_95952Objects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDInventory_9595border_95952Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDInventory_9595border_95952Objects1[k] = gdjs.Game_32SceneCode.GDInventory_9595border_95952Objects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDInventory_9595border_95952Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FEED_BUTTON_2"), gdjs.Game_32SceneCode.GDFEED_9595BUTTON_95952Objects1);
gdjs.copyArray(runtimeScene.getObjects("Inventory_Border"), gdjs.Game_32SceneCode.GDInventory_9595BorderObjects1);
/* Reuse gdjs.Game_32SceneCode.GDInventory_9595border_95952Objects1 */
gdjs.copyArray(runtimeScene.getObjects("Panda"), gdjs.Game_32SceneCode.GDPandaObjects1);
gdjs.Game_32SceneCode.GDFEED_9595BUTTONObjects1.length = 0;

{for(var i = 0, len = gdjs.Game_32SceneCode.GDPandaObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPandaObjects1[i].getBehavior("Animation").setAnimationName("Panda Walk");
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDInventory_9595BorderObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDInventory_9595BorderObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDInventory_9595border_95952Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDInventory_9595border_95952Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDFEED_9595BUTTON_95952Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDFEED_9595BUTTON_95952Objects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDFEED_95959595BUTTONObjects1Objects, +(1613), 99, "");
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("FEED_BUTTON_2"), gdjs.Game_32SceneCode.GDFEED_9595BUTTON_95952Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDFEED_9595BUTTON_95952Objects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDFEED_9595BUTTON_95952Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDFEED_9595BUTTON_95952Objects1[k] = gdjs.Game_32SceneCode.GDFEED_9595BUTTON_95952Objects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDFEED_9595BUTTON_95952Objects1.length = k;
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(-(1));
}
{ //Subevents
gdjs.Game_32SceneCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Panda"), gdjs.Game_32SceneCode.GDPandaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPandaObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPandaObjects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPandaObjects1[k] = gdjs.Game_32SceneCode.GDPandaObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPandaObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPandaObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPandaObjects1[i].getBehavior("Animation").getAnimationName() == "Panda Songkok Idle Eat" ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPandaObjects1[k] = gdjs.Game_32SceneCode.GDPandaObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPandaObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11299380);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPandaObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPandaObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPandaObjects1[i].getBehavior("Animation").setAnimationName("Panda Songkok Walk");
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDPandaObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPandaObjects1[i].activateBehavior("TimedBackAndForthMirroredMovement", true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FEED_BUTTON_2"), gdjs.Game_32SceneCode.GDFEED_9595BUTTON_95952Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) < 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDFEED_9595BUTTON_95952Objects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDFEED_9595BUTTON_95952Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDFEED_9595BUTTON_95952Objects1[k] = gdjs.Game_32SceneCode.GDFEED_9595BUTTON_95952Objects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDFEED_9595BUTTON_95952Objects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Panda"), gdjs.Game_32SceneCode.GDPandaObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPandaObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPandaObjects1[i].getBehavior("Animation").setAnimationName("Panda Songkok Jump Fall");
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDPandaObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPandaObjects1[i].activateBehavior("TimedBackAndForthMirroredMovement", false);
}
}
{ //Subevents
gdjs.Game_32SceneCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Panda"), gdjs.Game_32SceneCode.GDPandaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPandaObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPandaObjects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPandaObjects1[k] = gdjs.Game_32SceneCode.GDPandaObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPandaObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPandaObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPandaObjects1[i].getBehavior("Animation").getAnimationName() == "Panda Songkok Jump Fall" ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPandaObjects1[k] = gdjs.Game_32SceneCode.GDPandaObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPandaObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11302676);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPandaObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPandaObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPandaObjects1[i].activateBehavior("TimedBackAndForthMirroredMovement", true);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDPandaObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPandaObjects1[i].getBehavior("Animation").setAnimationName("Panda Songkok Walk");
}
}}

}


};

gdjs.Game_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32SceneCode.GDBackgroundColourObjects1.length = 0;
gdjs.Game_32SceneCode.GDBackgroundColourObjects2.length = 0;
gdjs.Game_32SceneCode.GDFEED_9595BUTTONObjects1.length = 0;
gdjs.Game_32SceneCode.GDFEED_9595BUTTONObjects2.length = 0;
gdjs.Game_32SceneCode.GDCollision_9595sideObjects1.length = 0;
gdjs.Game_32SceneCode.GDCollision_9595sideObjects2.length = 0;
gdjs.Game_32SceneCode.GDPandaObjects1.length = 0;
gdjs.Game_32SceneCode.GDPandaObjects2.length = 0;
gdjs.Game_32SceneCode.GDCollision_9595floorObjects1.length = 0;
gdjs.Game_32SceneCode.GDCollision_9595floorObjects2.length = 0;
gdjs.Game_32SceneCode.GDBambooDisplayObjects1.length = 0;
gdjs.Game_32SceneCode.GDBambooDisplayObjects2.length = 0;
gdjs.Game_32SceneCode.GDInventory_9595BorderObjects1.length = 0;
gdjs.Game_32SceneCode.GDInventory_9595BorderObjects2.length = 0;
gdjs.Game_32SceneCode.GDINVENTORY_9595BUTTONObjects1.length = 0;
gdjs.Game_32SceneCode.GDINVENTORY_9595BUTTONObjects2.length = 0;
gdjs.Game_32SceneCode.GDFEED_9595BUTTON_95952Objects1.length = 0;
gdjs.Game_32SceneCode.GDFEED_9595BUTTON_95952Objects2.length = 0;
gdjs.Game_32SceneCode.GDInventory_9595border_95952Objects1.length = 0;
gdjs.Game_32SceneCode.GDInventory_9595border_95952Objects2.length = 0;
gdjs.Game_32SceneCode.GDLogObjects1.length = 0;
gdjs.Game_32SceneCode.GDLogObjects2.length = 0;

gdjs.Game_32SceneCode.eventsList5(runtimeScene);
gdjs.Game_32SceneCode.GDBackgroundColourObjects1.length = 0;
gdjs.Game_32SceneCode.GDBackgroundColourObjects2.length = 0;
gdjs.Game_32SceneCode.GDFEED_9595BUTTONObjects1.length = 0;
gdjs.Game_32SceneCode.GDFEED_9595BUTTONObjects2.length = 0;
gdjs.Game_32SceneCode.GDCollision_9595sideObjects1.length = 0;
gdjs.Game_32SceneCode.GDCollision_9595sideObjects2.length = 0;
gdjs.Game_32SceneCode.GDPandaObjects1.length = 0;
gdjs.Game_32SceneCode.GDPandaObjects2.length = 0;
gdjs.Game_32SceneCode.GDCollision_9595floorObjects1.length = 0;
gdjs.Game_32SceneCode.GDCollision_9595floorObjects2.length = 0;
gdjs.Game_32SceneCode.GDBambooDisplayObjects1.length = 0;
gdjs.Game_32SceneCode.GDBambooDisplayObjects2.length = 0;
gdjs.Game_32SceneCode.GDInventory_9595BorderObjects1.length = 0;
gdjs.Game_32SceneCode.GDInventory_9595BorderObjects2.length = 0;
gdjs.Game_32SceneCode.GDINVENTORY_9595BUTTONObjects1.length = 0;
gdjs.Game_32SceneCode.GDINVENTORY_9595BUTTONObjects2.length = 0;
gdjs.Game_32SceneCode.GDFEED_9595BUTTON_95952Objects1.length = 0;
gdjs.Game_32SceneCode.GDFEED_9595BUTTON_95952Objects2.length = 0;
gdjs.Game_32SceneCode.GDInventory_9595border_95952Objects1.length = 0;
gdjs.Game_32SceneCode.GDInventory_9595border_95952Objects2.length = 0;
gdjs.Game_32SceneCode.GDLogObjects1.length = 0;
gdjs.Game_32SceneCode.GDLogObjects2.length = 0;


return;

}

gdjs['Game_32SceneCode'] = gdjs.Game_32SceneCode;
