var eventclick = document.getElementById("eventlink");
var eventcopy = document.getElementById("copylink");



eventclick.addEventListener("click", function () {
  var telphone = document.getElementById("idtelphone").value;
  var textmessaje = document.getElementById("idtextmessaje").value;
  var texterror = document.getElementById("texterror");
  var texturl = document.getElementById("texturl");
  var urlgene = document.getElementById("urlgene");

  telphone = telphone.trim();
  textmessaje = textmessaje.trim();

  if (emptyinput(telphone) || emptyinput(textmessaje)) {   
      texterror.style.visibility = "visible";  
  }else{
      texterror.style.visibility = "hidden";
      if(telphone.length - stringinput(telphone) == 0){

        urlgene.style.visibility = "visible";
        texturl.value = generatelink(telphone,textmessaje)

        eventcopy.addEventListener("click",function(){
           texturl.select();
           document.execCommand('copy');
           
        });
        
      }else{
        texterror.innerHTML = "<span>Digitar un numero telefonico valido</span>"
        texterror.style.visibility = "visible";  
      }
      
  }
});




function emptyinput(str) {
  if (str.length == 0) {
    return true;
  } else {
    return false;
  }
}


function stringinput(str){
    var number = 0;
    for(var i = 0 ; i < str.length ; i++){
      if(str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57){
          number++;
      }
    }
    return number;
}

function generatelink(strNumber , strMessaje){
   var url = "api.whatsapp.com/send?phone="+strNumber+"&text="+strMessaje
   return url;
}