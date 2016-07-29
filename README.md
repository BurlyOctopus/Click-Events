# Click-Events
Best way to listen for click events on all links in an ordered list, whether it's 2 or 100?

Below is the ordred list.
```html
<ol id="orderedList">
  <li><a href="">Link 1</a></li>
  <li><a href="">Link 2</a></li>
  <li><a href="">Link 3</a></li>
  <li><a href="">Link 4</a></li>
  <li><a href="">Link 5</a></li>
  <li><a href="">Link 6</a></li>
</ol>
```
Using event delegation and taking advantage of event bubbling you are able to use bubbled events to find matches on child elements. This technique is very useful because it allows Links to be added dynamically without having to add Listener Events to individual nodes.

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
