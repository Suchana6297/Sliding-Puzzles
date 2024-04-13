var MVCount=0
function ranPos(){
    var arr = [];
    while(arr.length < 9){
        var r = ((Math.floor(Math.random() * 3)+1).toString())+((Math.floor(Math.random() * 3)+1).toString());
        if(arr.indexOf(r) === -1) arr.push(r);
    }
    return arr
}

var ranPos=ranPos()

for(let i =0;i<document.getElementsByClassName("puznum").length;i++){
    document.getElementsByClassName("puznum")[i].style.gridArea=ranPos[i][0]+"/"+ranPos[i][1]
}
function MoveMe(puznum){
    var EmptyTile=document.querySelector(".emtile")
    var possibilties=[
        parseInt(ranPos[puznum][0])+1==parseInt(ranPos[8][0])&&parseInt(ranPos[puznum][1])==parseInt(ranPos[8][1]),
        parseInt(ranPos[puznum][0])-1==parseInt(ranPos[8][0])&&parseInt(ranPos[puznum][1])==parseInt(ranPos[8][1]),
        parseInt(ranPos[puznum][1])+1==parseInt(ranPos[8][1])&&parseInt(ranPos[puznum][0])==parseInt(ranPos[8][0]),
        parseInt(ranPos[puznum][1])-1==parseInt(ranPos[8][1])&&parseInt(ranPos[puznum][0])==parseInt(ranPos[8][0]),
    ]
if(possibilties[0]||possibilties[1]||possibilties[2]||possibilties[3]){
    MVCount++;
    EmptyTile.style.gridArea=ranPos[puznum][0]+"/"+ranPos[puznum][1];
    document.querySelectorAll(".puznum")[puznum].style.gridArea=ranPos[8][0]+"/"+ranPos[8][1];

    var CurrentTile=ranPos[puznum]
    ranPos[puznum]=ranPos[8]
    ranPos[8]=CurrentTile;
    NeededPos=["11","12","13","21","22","23","31","32","33"]
    if(ranPos.join(".")==NeededPos.join(".")){
        console.log("Game Beated");
        document.querySelector(".screen").style.display='flex'
        document.querySelector(".MVCount").innerHTML=MVCount;
        var stars=0;
        if(MVCount<100){
            stars=3
        }else if(MVCount<200){
            stars=2
        }else if(MVCount<300){
            stars=1
        }else{
            stars=0
        }
        for(let i=0;i<2;i++){
            document.getElementsByTagName("path").style.fill="yellow"
        }
    }
}
}