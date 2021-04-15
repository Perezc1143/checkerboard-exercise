// Your JS goes here
// * Each tile should be a `div`
// * Each tile's width is `11.1%`
// * Set each tile's `float` property to `left`
// // * Each tile's paddingBottom is `11.1%`

function myDiv(){
var div = document.createElement('div');
div.style.width = "11.1%";
div.style.float = "left";
div.style.paddingBottom = "11.1%";
div.style.backgroundColor = "red";
document.body.appendChild(div);

}



function myBlackDiv(){
    var div = document.createElement('div');
    div.style.width = "11.1%";
    div.style.float = "left";
    div.style.paddingBottom = "11.1%";
    div.style.backgroundColor = "black";
    document.body.appendChild(div);
    
}



for(var i = 0; i < 9; i++){
    for(var j = 1; j < 9; j++){
        console.log(i)
        if(j % 2 === 1){
            myDiv();
        }else{
            myBlackDiv();
        }
    }
}