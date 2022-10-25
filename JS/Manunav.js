document.getElementById("hoge").style.display ="none";

function Tops(){
  var change = document.getElementById("hoge");

  if(change.style.display=="block"){
    change.style.display ="none";
  }else{
    change.style.display ="block";    
  }
}
