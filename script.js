let boxes=document.querySelectorAll(".box")
let valuo=true;
const winvalue=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],

];
boxes.forEach((box)=>
    {
    box.addEventListener("click", ()=>{
      if(valuo){
        box.innerText= "O";
        valuo=false;
      }else{
        box.innerText= "X";
        valuo=true;
      }
      box.disabled=true;
     checkwiner();
    });
});
const checkwiner=()=>{
    for(let right of winvalue ){
        let pos1valu=boxes[right[0]].innerText;
        let pos2valu=boxes[right[1]].innerText;
        let pos3valu=boxes[right[2]].innerText;
        if(pos1valu !=""&& pos2valu !=""&& pos3valu !=""){
            if(pos1valu===pos2valu && pos2valu===pos3valu){
                console.log("winner");
    
            }
        }
    

    }

}