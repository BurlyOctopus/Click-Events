# Click-Events
The best way to listen for click events on all links in an ordered list, whether it's 2 or 100?

Below is the ordered list.
```html
<ol id="orderedList">
  <li><a href="#">Link 1</a></li>
  <li><a href="#">Link 2</a></li>
  <li><a href="#">Link 3</a></li>
  <li><a href="#">Link 4</a></li>
  <li><a href="#">Link 5</a></li>
  <li><a href="#">Link 6</a></li>
</ol>
```
Using Event bubbling you are able to add a listener event only to the parent. This would also allow you to add links dynamically without creating additional listener events. Using the same amount of code you are able to listen to any number of links.

```javascript
// locate ordered list and add the Click Event Listener
document.getElementById("orderedList").addEventListener("click",function(e) {
    // e.target is our targetted element, aka a tag.
    if(e.target && e.target.nodeName == "A") {
      //Do something cool on the link
        console.log(e.target.innerHTML + " was clicked");
    }
});
```
