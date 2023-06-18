interface point{
    x: number;
    y: number;

}
function pc(pt: point){
    console.log("the coordinates x value is "+pt.x);
    console.log("the coordinates y value is "+pt.y);
}
pc({x:100, y:200});