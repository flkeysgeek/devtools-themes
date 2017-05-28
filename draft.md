## overview ##

- Initially unhappy with lack of contrast for CSS selectors in devtools style panel
- Enabled devtools Dark theme which solved the selector issue
- My first Dark experience -- now hooked
- show Dark to couple non-geek friends and they love it 

One slightly visually impaired and says its by far the easiest screen to read she has ever seen!!

## tweaking chrome.devtools css ##

After going Dark for a couple weeks, got bug up my ??? to make some minor css tweaks.

***How hard can that be?***

answer: not easy -- not hard

**first step: find css file**

- *not as easy as expected -- no where in installed...*
- knew nothing about how extensions worked or languages used
- what a shock to discover html/css/js -- my current forte

Discovered **Zero Dark Matrix** what a find!!

- huge step beyond devtools default theme
- made 2 simple changes to canary.css -- comment color and brighter lineno
- just re-installed Zero Dark Matrix installed from Chrome Web Store as unpacked extension
  
## more css tweaks ##

After couple more weeks, still in love with Dark and especially latest Zero Dark Matrix but some styling started driving me nuts...

- elements > styles panel: easy to see matched selectors but unmatched too dim
- suggestions popup: nearly impossible to see selected and hovered items 
- sources > javascript > inspector popup: no contrast with black on black AND nearly impossible to see hover
- not biggie but text of unmatched filename tabs hard to see

Could be my age 66 -or- the fact I work in sunlight room overlooking Gulf of Mexico.

----------

Found the suggested popup selector w/o too much difficulty but finding the
Object inspector selectors seemed impossible.

***...If only I could find the html used to display the popup...***

Found copy of devtools source -- little helpful but selector names not obvious AND I feared this approach could very easily be dead end w/o investing more time in analysis than warranted.

***...to the rescue...***

## using devtools to inspect its own elements ##

