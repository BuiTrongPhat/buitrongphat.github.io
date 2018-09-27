document.addEventListener("DOMContentLoaded", function (){
  var sai = document.getElementsByClassName('sai');
  var choilai = document.getElementsByClassName('choilai');
   var tieptuc = document.getElementsByClassName('tieptuc');
  var dung = document.getElementsByClassName('dung');
  var cauhoi = document.getElementsByClassName('cauhoi');
  var manche = document.getElementsByClassName('manche');
 
  for (var i = 0; i < sai.length; i++) {
      sai[i].onclick = function(){
        this.classList.add('do');
        choilai[0].classList.add('lai');
         manche[0].classList.add('len');
      }

  }
  
  for (var i = 0; i < dung.length; i++) {
    dung[i].onclick = function(){
      this.classList.add('xanh');
      manche[0].classList.add('len');
      tieptuc[0].classList.add('lai');
    }
  }
  for (var i = 0; i < manche.length; i++) {
    manche[i].onclick = function(){
      // window.location.href="2.html";
    }
  }
 
  
for (var i = 0; i < choilai.length; i++) {
    choilai[i].onclick = function(){
      window.location.href="2.html";
    }
  }
  for (var i = 0; i < tieptuc.length; i++) {
    tieptuc[i].onclick = function(){
      window.location.href="6.html";
    }
  }

}, false )      