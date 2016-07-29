window.onload=function(){
  // locate ordered list and add the Click Event Listener
  document.getElementById("orderedList").addEventListener("click",function(e) {
      // e.target is our targetted element, aka a tag.
      if(e.target && e.target.nodeName == "A") {
        //Do something cool on the link
          console.log(e.target.innerHTML + " was clicked");
      }
  });
}
