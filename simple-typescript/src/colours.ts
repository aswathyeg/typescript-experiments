class Colours{
_color:string="blue";
static availableColors=["red","green"]
static isAvailable(color:string){
   return Colours.availableColors.includes(color);
}
set color(color:string){
    if(!Colours.isAvailable(color)){
       throw new Error(`Color ${color}is not available`)
    }
    this._color=color;
}
}