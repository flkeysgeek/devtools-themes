**Improve readability of devtools Zero Dark Matrix canary.css**

## theme changes ##
- comment color changed to dim pink
- gutter lineno little brighter
- elements > side-panel > styles: unmatched selectors changed to lime green
- suggest popover .selected and :hover BG changed to deep purple
- sources > javascript: Object inspector BG changed to green  
...no contrast with black on black  
...mouseover nearly impossible to see black hover  
...arrow above popover border more clutter than value (hidden)  
...moved popup up to fully cover next line -- sliver looks like junk  

**standard Dark theme** . . . . . **Zero Dark Matrix**  
![](http://i.imgur.com/JN7CrzM.png) . ![](http://i.imgur.com/H7KxeL1.png) 

**changes**  
![](http://i.imgur.com/wRfJAU7.png) . ![](http://i.imgur.com/XwvQJpY.png)

## how to inspect devtools html and css with devtools ##

After going Dark for a couple weeks, got bug up my ??? to make some minor css tweaks.

***How hard can that be?*** ... but where is devtools html and css?

[see using devtools to inspect its own elements](https://github.com/flkeysgeek/devtools-themes/wiki/using-devtools-to-inspect-its-own-elements)

## installation ##

- Enable DevTools experiments at `chrome://flags/#enable-devtools-experiments`
- relaunch Chrome and open DevTools 
- open `Settings > Experiments` and check *Allow UI themes* experiment.

TBD

## wiki -- what I learned ##

explains how to modify any devtools theme and/or css including...

how to inspect devtools with devtools to find css selectors
