var div = document.createElement("div");
var grid = document.getElementById("gridder");
var chosenOne = Math.floor(Math.random()*200+1);
var chosenTwo = Math.floor(Math.random()*200+1);
var chosenThree = Math.floor(Math.random()*200+1);
var chosenFour = Math.floor(Math.random()*200+1);

//Each div item created in the loop below will have both a style class and invisible class added.
div.classList.add("grid-item");

//Creates 200 div elements within a parent div called gridder, essentially a table.
for (i=0; i<200; i++) {    
    div.innerHTML = Math.floor(Math.random()*10);
    div.id = i+1;
    grid.appendChild(div.cloneNode(true));
};

var gridchild = document.querySelectorAll(".grid-item"); //Selector of all div elements within the grid. 

//Wipes all divs in the table of their class animations and then adds a new random one every 6 seconds.
setInterval(()=>{
    for (i=0; i<200; i++){
    gridchild[i].classList.remove("dir0", "dir1", "dir2", "dir3", "dir4", "dir5", "dir6", "dir7", "dir8", "dir9", "dir10", "dir11", "dir12", "dir13", "dir14", "dir15");	
    gridchild[i].classList.add("dir" + Math.floor(Math.random()*15));
}},6000);

//On click the four randomly selected numbers (chosen 1, 2, 3 and 4) will have a special class added to indicate they're selected and special numbers.
function emotionalnumbers(){
    gridchild[chosenOne-1].addEventListener("click", ()=>{gridchild[chosenOne-1].classList.add("special")});
    gridchild[chosenTwo-1].addEventListener("click", ()=>{gridchild[chosenTwo-1].classList.add("special")});
    gridchild[chosenThree-1].addEventListener("click", ()=>{gridchild[chosenThree-1].classList.add("special")});
    gridchild[chosenFour-1].addEventListener("click", ()=>{gridchild[chosenFour-1].classList.add("special")});
};

/*Grabs the id of currently hovered div and adds classes to 20 surrounding divs, essentially an aoe around the user's cursor. 
Below: user interface of hovered cells, 0 being the center where the user's cursor is situated. 
1-2-3
4-5-6-7-8
9-10-0-11-12
13-14-15-16-17
18-19-20
*/

function radius(){
    var hovered0, hovered1, hovered2, hovered3, hovered4, hovered5, hovered6, hovered7, hovered8, hovered9, hovered10, hovered11, hovered12, hovered13, hovered14, hovered15, hovered16, hovered17, hovered18, hovered19, hovered20;
	
	for (i=0; i<200; i++){
        gridchild[i].addEventListener("mouseover", function(e){
        hovered0=Number(e.target.id);
        hovered1=hovered0-42;
        hovered2=hovered0-41;
        hovered3=hovered0-40;
        hovered4=hovered0-23;
        hovered5=hovered0-22;
        hovered6=hovered0-21;
        hovered7=hovered0-20;
        hovered8=hovered0-19;
        hovered9=hovered0-3; 
        hovered10=hovered0-2;
        hovered11=hovered0;
        hovered12=hovered0+1;
        hovered13=hovered0+17;
        hovered14=hovered0+18;
        hovered15=hovered0+19;
        hovered16=hovered0+20;
        hovered17=hovered0+21;
        hovered18=hovered0+38;
        hovered19=hovered0+39;
        hovered20=hovered0+40;
        
            gridchild[hovered1].classList.add("layer3");
            gridchild[hovered2].classList.add("layer3");
            gridchild[hovered3].classList.add("layer3");       
            gridchild[hovered4].classList.add("layer3");      
            gridchild[hovered5].classList.add("layer2");     
            gridchild[hovered6].classList.add("layer1");    
            gridchild[hovered7].classList.add("layer2");   
            gridchild[hovered8].classList.add("layer3");  
            gridchild[hovered9].classList.add("layer3"); 
            gridchild[hovered10].classList.add("layer1");  
            gridchild[hovered11].classList.add("layer1");
            gridchild[hovered12].classList.add("layer3");
            gridchild[hovered13].classList.add("layer3");       
            gridchild[hovered14].classList.add("layer2");      
            gridchild[hovered15].classList.add("layer1");     
            gridchild[hovered16].classList.add("layer2");    
            gridchild[hovered17].classList.add("layer3"); 
            gridchild[hovered18].classList.add("layer3");     
            gridchild[hovered19].classList.add("layer3");    
            gridchild[hovered20].classList.add("layer3"); 
        })
            
        gridchild[i].addEventListener("mouseout", function(){ 
            gridchild[hovered1].classList.remove("layer3");
            gridchild[hovered2].classList.remove("layer3");
            gridchild[hovered3].classList.remove("layer3");       
            gridchild[hovered4].classList.remove("layer3");      
            gridchild[hovered5].classList.remove("layer2");     
            gridchild[hovered6].classList.remove("layer1");    
            gridchild[hovered7].classList.remove("layer2");   
            gridchild[hovered8].classList.remove("layer3");  
            gridchild[hovered9].classList.remove("layer3"); 
            gridchild[hovered10].classList.remove("layer1");  
            gridchild[hovered11].classList.remove("layer1");
            gridchild[hovered12].classList.remove("layer3");
            gridchild[hovered13].classList.remove("layer3");       
            gridchild[hovered14].classList.remove("layer2");      
            gridchild[hovered15].classList.remove("layer1");     
            gridchild[hovered16].classList.remove("layer2");    
            gridchild[hovered17].classList.remove("layer3"); 
            gridchild[hovered18].classList.remove("layer3");     
            gridchild[hovered19].classList.remove("layer3");    
            gridchild[hovered20].classList.remove("layer3");
        })
    }
};

radius();
emotionalnumbers();
