AFRAME.registerComponent("move-car",{
    schema:{
        moveX:{type:"number", default:1},
    },
    tick:function(){
        window.addEventListener("click",(e)=>{
            this.data.moveX=this.data.moveX+0.05
        })

        var pos= this.el.getAttribute("position");

        pos.x=this.data.moveX

        this.el.setAttribute("position",{x:pos.x,y:pos.y,z:pos.z});
    }
});

AFRAME.registerComponent("counter",{
    schema:{
        clickCounter:{type:"number", default:0},
    },
    update: function(){
        
        window.addEventListener("click",(e)=>{
            this.data.clickCounter = this.data.clickCounter+1;
            if (this.data.clickCounter==1){
                const rotation = {x:0,y:20,z:0};
                this.el.setAttribute("rotation",rotation);
            }
            else if (this.data.clickCounter==2){
                const rotation = {x:0,y:40,z:0};
                this.el.setAttribute("rotation",rotation)
            }
            else if (this.data.clickCounter==3){
                const rotation = {x:0,y:60,z:0};
                this.el.setAttribute("rotation",rotation)
            }
            else if (this.data.clickCounter==4){
                const rotation = {x:0,y:80,z:0};
                this.el.setAttribute("rotation",rotation)
            }
            else if (this.data.clickCounter==5){
                const rotation = {x:0,y:90,z:0};
                this.el.setAttribute("rotation",rotation)
            }
            else{
                const rotation = {x:0,y:90,z:0};
                this.el.setAttribute("rotation",rotation)
                this.el.setAttribute("position",{x:0,y:5,z:0});
            }
        })
    }
})