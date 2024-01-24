AFRAME.registerComponent('car',{

    init:function(){
        var carEl = document.createElement("a-entity")

        carEl.setAttribute("position",{x:0,y:5,z:0})
        carEl.setAttribute("scale",{x:10,y:10,z:10})
        carEl.setAttribute("obj-model","uploads_files_2792345_Koenigsegg.obj")
    }
});