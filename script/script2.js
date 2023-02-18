
class Color{
    constructor(){
        this.color1 = document.querySelector(".color1");
        this.color2 = document.querySelector(".color2");
        this.color3 = document.querySelector(".color3");
        this.color4 = document.querySelector(".color4");
        this.content = document.querySelector(".content");
        this.heightMain = document.getElementById("background");

        this.color1.addEventListener("click",()=>{
            this.myColor("color1");
        });
        this.color2.addEventListener("click",()=>{
            this.myColor("color2");
        });
        this.color3.addEventListener("click",()=>{
            this.myColor("color3");
        });
        this.color4.addEventListener("click",()=>{
            this.myColor("color4");
        });
        if(localStorage.getItem("COLOR")==null){
            this.heightMain.style.background = "rgb(248, 223, 1)";
        }
        this.myColor(localStorage.getItem("COLOR"));
    }
    myColor(color){
        if(color=="color1"){
            this.heightMain.style.background = "red"
        }else if(color=="color2"){
            this.heightMain.style.background = "rgb(248, 223, 1)"
        }else if(color=="color3"){
            this.heightMain.style.background = "rgb(216, 211, 211)"
        }
        else if(color=="color4"){
            this.heightMain.style.background = "green"
        }
        localStorage.setItem("COLOR",color)
    }
    
}
onload = new Color();