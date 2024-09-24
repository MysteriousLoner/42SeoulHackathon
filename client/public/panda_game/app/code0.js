gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.localVariables = [];
gdjs.Untitled_32sceneCode.GDBackgroundColourObjects1= [];
gdjs.Untitled_32sceneCode.GDBackgroundColourObjects2= [];
gdjs.Untitled_32sceneCode.GDRedButtonWithShadowObjects1= [];
gdjs.Untitled_32sceneCode.GDRedButtonWithShadowObjects2= [];
gdjs.Untitled_32sceneCode.GDCollision_9595rightObjects1= [];
gdjs.Untitled_32sceneCode.GDCollision_9595rightObjects2= [];
gdjs.Untitled_32sceneCode.GDPandaObjects1= [];
gdjs.Untitled_32sceneCode.GDPandaObjects2= [];
gdjs.Untitled_32sceneCode.GDCollision_9595floorObjects1= [];
gdjs.Untitled_32sceneCode.GDCollision_9595floorObjects2= [];


gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPandaObjects1Objects = Hashtable.newFrom({"Panda": gdjs.Untitled_32sceneCode.GDPandaObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDCollision_95959595rightObjects1Objects = Hashtable.newFrom({"Collision_right": gdjs.Untitled_32sceneCode.GDCollision_9595rightObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPandaObjects1Objects = Hashtable.newFrom({"Panda": gdjs.Untitled_32sceneCode.GDPandaObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDCollision_95959595floorObjects1Objects = Hashtable.newFrom({"Collision_floor": gdjs.Untitled_32sceneCode.GDCollision_9595floorObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDCollision_95959595floorObjects1Objects = Hashtable.newFrom({"Collision_floor": gdjs.Untitled_32sceneCode.GDCollision_9595floorObjects1});
gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

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
gdjs.copyArray(runtimeScene.getObjects("Panda"), gdjs.Untitled_32sceneCode.GDPandaObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPandaObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPandaObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPandaObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPandaObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Collision_right"), gdjs.Untitled_32sceneCode.GDCollision_9595rightObjects1);
gdjs.copyArray(runtimeScene.getObjects("Panda"), gdjs.Untitled_32sceneCode.GDPandaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPandaObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDCollision_95959595rightObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDPandaObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPandaObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPandaObjects1[i].getBehavior("Flippable").flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Collision_floor"), gdjs.Untitled_32sceneCode.GDCollision_9595floorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Panda"), gdjs.Untitled_32sceneCode.GDPandaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPandaObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDCollision_95959595floorObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDCollision_9595floorObjects1 */
/* Reuse gdjs.Untitled_32sceneCode.GDPandaObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPandaObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPandaObjects1[i].separateFromObjectsList(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDCollision_95959595floorObjects1Objects, false);
}
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Collisions");
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("RedButtonWithShadow"), gdjs.Untitled_32sceneCode.GDRedButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDRedButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDRedButtonWithShadowObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDRedButtonWithShadowObjects1[k] = gdjs.Untitled_32sceneCode.GDRedButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDRedButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Panda"), gdjs.Untitled_32sceneCode.GDPandaObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPandaObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPandaObjects1[i].getBehavior("Animation").setAnimationName("Panda Idle Eat");
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPandaObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPandaObjects1[i].activateBehavior("TimedBackAndForthMirroredMovement", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Panda"), gdjs.Untitled_32sceneCode.GDPandaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPandaObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPandaObjects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPandaObjects1[k] = gdjs.Untitled_32sceneCode.GDPandaObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPandaObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDPandaObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPandaObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPandaObjects1[i].activateBehavior("TimedBackAndForthMirroredMovement", true);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPandaObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPandaObjects1[i].getBehavior("Animation").setAnimationName("Panda");
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDBackgroundColourObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBackgroundColourObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDRedButtonWithShadowObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDRedButtonWithShadowObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDCollision_9595rightObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDCollision_9595rightObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPandaObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPandaObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDCollision_9595floorObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDCollision_9595floorObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);
gdjs.Untitled_32sceneCode.GDBackgroundColourObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBackgroundColourObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDRedButtonWithShadowObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDRedButtonWithShadowObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDCollision_9595rightObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDCollision_9595rightObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPandaObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPandaObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDCollision_9595floorObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDCollision_9595floorObjects2.length = 0;


return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
