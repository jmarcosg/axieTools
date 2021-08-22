function uncheckAll() {
      var uncheck=document.getElementsByTagName('input');
      for(var i=0;i<uncheck.length;i++) {
        if(uncheck[i].type=='checkbox') {
          uncheck[i].checked=false;
        }
      }
  }