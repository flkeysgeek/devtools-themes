/*--------------------------------------------------------------------------------------------------
full access to chrome.extensions API

No access to Dev Tools API
--------------------------------------------------------------------------------------------------*/


window.g = {z:0}
//______________________________________________________________________________________________
function getTargets() {
/**
 *
**/
    chrome.debugger.getTargets(function(targetList)
    {
        g.targetList = targetList;    
    })
}
//______________________________________________________________________________________________
function getPanel(winId, name) {
/**
 *
**/
    var id = (winId == -2) ? 'current' : id;
    name = name || id;
    chrome.windows.get(winId, {windowTypes: ['panel']}, function(win)
    {
        g[name] = win;    
    })
}
/*--------------------------------------------------------------------------------------------------
Dreamweaver LINT global references and defined variables not used here {
--------------------------------------------------------------------------------------------------*/
/*global 
    chrome,
    g:true
*/
var e;			//global used for try/catch
//. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .}
(function() {[	//global variables and functions defined but not used
    getTargets,
    getPanel,
e, g]});