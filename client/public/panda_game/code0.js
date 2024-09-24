gdjs.Game_32SceneCode = {};
gdjs.Game_32SceneCode.localVariables = [];
gdjs.Game_32SceneCode.GDBackgroundColourObjects1= [];
gdjs.Game_32SceneCode.GDBackgroundColourObjects2= [];
gdjs.Game_32SceneCode.GDRedButtonWithShadowObjects1= [];
gdjs.Game_32SceneCode.GDRedButtonWithShadowObjects2= [];
gdjs.Game_32SceneCode.GDCollision_9595sideObjects1= [];
gdjs.Game_32SceneCode.GDCollision_9595sideObjects2= [];
gdjs.Game_32SceneCode.GDPandaObjects1= [];
gdjs.Game_32SceneCode.GDPandaObjects2= [];
gdjs.Game_32SceneCode.GDCollision_9595floorObjects1= [];
gdjs.Game_32SceneCode.GDCollision_9595floorObjects2= [];
gdjs.Game_32SceneCode.GDBambooDisplayObjects1= [];
gdjs.Game_32SceneCode.GDBambooDisplayObjects2= [];


gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPandaObjects1Objects = Hashtable.newFrom({"Panda": gdjs.Game_32SceneCode.GDPandaObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDCollision_95959595sideObjects1Objects = Hashtable.newFrom({"Collision_side": gdjs.Game_32SceneCode.GDCollision_9595sideObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDCollision_95959595sideObjects1Objects = Hashtable.newFrom({"Collision_side": gdjs.Game_32SceneCode.GDCollision_9595sideObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPandaObjects1Objects = Hashtable.newFrom({"Panda": gdjs.Game_32SceneCode.GDPandaObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDCollision_95959595floorObjects1Objects = Hashtable.newFrom({"Collision_floor": gdjs.Game_32SceneCode.GDCollision_9595floorObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDCollision_95959595floorObjects1Objects = Hashtable.newFrom({"Collision_floor": gdjs.Game_32SceneCode.GDCollision_9595floorObjects1});
gdjs.Game_32SceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
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

gdjs.copyArray(runtimeScene.getObjects("RedButtonWithShadow"), gdjs.Game_32SceneCode.GDRedButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDRedButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDRedButtonWithShadowObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDRedButtonWithShadowObjects1[k] = gdjs.Game_32SceneCode.GDRedButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDRedButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Panda"), gdjs.Game_32SceneCode.GDPandaObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPandaObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPandaObjects1[i].getBehavior("Animation").setAnimationName("Panda Idle Eat");
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDPandaObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPandaObjects1[i].activateBehavior("TimedBackAndForthMirroredMovement", false);
}
}}

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
/* Reuse gdjs.Game_32SceneCode.GDPandaObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPandaObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPandaObjects1[i].activateBehavior("TimedBackAndForthMirroredMovement", true);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDPandaObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPandaObjects1[i].getBehavior("Animation").setAnimationName("Panda");
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("RedButtonWithShadow"), gdjs.Game_32SceneCode.GDRedButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDRedButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDRedButtonWithShadowObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDRedButtonWithShadowObjects1[k] = gdjs.Game_32SceneCode.GDRedButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDRedButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9489484);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BambooDisplay"), gdjs.Game_32SceneCode.GDBambooDisplayObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDBambooDisplayObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDBambooDisplayObjects1[i].getBehavior("Text").setText("Bamboo: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("resourceCount"))));
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(-(1));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RedButtonWithShadow"), gdjs.Game_32SceneCode.GDRedButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDRedButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDRedButtonWithShadowObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDRedButtonWithShadowObjects1[k] = gdjs.Game_32SceneCode.GDRedButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDRedButtonWithShadowObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Panda"), gdjs.Game_32SceneCode.GDPandaObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPandaObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPandaObjects1[i].getBehavior("Animation").setAnimationName("Panda Jump Fall");
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDPandaObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPandaObjects1[i].activateBehavior("TimedBackAndForthMirroredMovement", false);
}
}}

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
/* Reuse gdjs.Game_32SceneCode.GDPandaObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPandaObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPandaObjects1[i].activateBehavior("TimedBackAndForthMirroredMovement", true);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDPandaObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPandaObjects1[i].getBehavior("Animation").setAnimationName("Panda");
}
}}

}


};

gdjs.Game_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32SceneCode.GDBackgroundColourObjects1.length = 0;
gdjs.Game_32SceneCode.GDBackgroundColourObjects2.length = 0;
gdjs.Game_32SceneCode.GDRedButtonWithShadowObjects1.length = 0;
gdjs.Game_32SceneCode.GDRedButtonWithShadowObjects2.length = 0;
gdjs.Game_32SceneCode.GDCollision_9595sideObjects1.length = 0;
gdjs.Game_32SceneCode.GDCollision_9595sideObjects2.length = 0;
gdjs.Game_32SceneCode.GDPandaObjects1.length = 0;
gdjs.Game_32SceneCode.GDPandaObjects2.length = 0;
gdjs.Game_32SceneCode.GDCollision_9595floorObjects1.length = 0;
gdjs.Game_32SceneCode.GDCollision_9595floorObjects2.length = 0;
gdjs.Game_32SceneCode.GDBambooDisplayObjects1.length = 0;
gdjs.Game_32SceneCode.GDBambooDisplayObjects2.length = 0;

gdjs.Game_32SceneCode.eventsList0(runtimeScene);
gdjs.Game_32SceneCode.GDBackgroundColourObjects1.length = 0;
gdjs.Game_32SceneCode.GDBackgroundColourObjects2.length = 0;
gdjs.Game_32SceneCode.GDRedButtonWithShadowObjects1.length = 0;
gdjs.Game_32SceneCode.GDRedButtonWithShadowObjects2.length = 0;
gdjs.Game_32SceneCode.GDCollision_9595sideObjects1.length = 0;
gdjs.Game_32SceneCode.GDCollision_9595sideObjects2.length = 0;
gdjs.Game_32SceneCode.GDPandaObjects1.length = 0;
gdjs.Game_32SceneCode.GDPandaObjects2.length = 0;
gdjs.Game_32SceneCode.GDCollision_9595floorObjects1.length = 0;
gdjs.Game_32SceneCode.GDCollision_9595floorObjects2.length = 0;
gdjs.Game_32SceneCode.GDBambooDisplayObjects1.length = 0;
gdjs.Game_32SceneCode.GDBambooDisplayObjects2.length = 0;


return;

}

gdjs['Game_32SceneCode'] = gdjs.Game_32SceneCode;
