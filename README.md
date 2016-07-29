# Click-Events
Some Demo's that show different ways to bind click events


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
