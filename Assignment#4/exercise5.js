
function colourchange(color) 
{ 
    document.body.style.background = color; 
} 
  
function change() 
{ 
    colourchange("#"+((1<<24)*Math.random()|0).toString(16)); 
}      