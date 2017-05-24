canary.css updated the HARD WAY

-grabbed files installed by chrome web store -- Zero Dark Matrix
-formatted css as dedcribed below and directly updated canary.css
-installed from extensions tab via "load unpacked extension"

downloaded: https://github.com/mauricecruz/zero-base-themes
but only using as rewference -- have not learned how to build yet.

-------------------------
changes as of 05-24-2017:
-------------------------

Zero Dark Matrix canidates --
	changed sugg hover and select colors (default global text too hard to read)
	
	Changed suggest popup hover and selected background to deep purple 
	(purple 1st picked to test if selector was  correct -- but I like it)
	
	::shadow div.suggest-box .suggest-box-content-item.source-code:hover,
	::shadow ::shadow div.suggest-box .suggest-box-content-item.source-code:hover {
		background-color: #720047 !important;
		/* deep purple for hover -- #2f2f2f unreadable */
		border: 1px solid rgba(0, 0, 0, 0) !important;
	}
	::shadow div.suggest-box .suggest-box-content-item.source-code.selected,
	::shadow ::shadow div.suggest-box .suggest-box-content-item.source-code.selected {
		color: #fff !important;
		background-color: #720047 !important;
		/* deep purple for selected */
	}
	
	likewise on Elements panel (style side panel) 
		unmatched css selectors too hard to read -- reason I changed to dark theme 
		was because matched and unmatched too alike -- now hocked on dark
		 
	/* css side panel (un-matched selectors): default color un-readable  */
	/*										  lime green may be overkill */
	.simple-selector:not(.selector-matches) {
		color: #04C526 !important;
	}
	
	
Personal Preferences 

	lightened lineno -- I'm old school and code using both DW and devtools
	
	.CodeMirror-gutter-elt {
		color: #888888 !important;
		color: #b2b2b2 !important;	/* lineno just a bit lighter */
	}
	
	changed comments color to dim pink -- comments are part my coding process
	
	.cm-comment {
		color: rgba(255, 192, 203, 0.83) !important;	/* dim pink */
		font-style: italic;
	}	

	console.log() info used a lot during testing
	
	/* lt blue #49a6d2  too un-readable --> skyblue/wheat */
	#console-messages .console-info-level .console-message-text,
	#console-messages .console-info-level .console-message-url {
		color: wheat !important;
	}
	#console-messages .console-info-level .children div:hover * {
		color: #359ccd !important;
	}
	#console-messages .console-info-level .section > .header .title {
		color: skyblue !important;
	}
	
	increased highlight fadeout -- I'think very slow and focused 
	
	.cm-highlight {				/* 3s -- 9s */
		-webkit-animation: "fadeout-revised" 9s 0s !important;
		outline: 1px solid #56795e;
	}
	
------------------------------
FORMATTING CSS with DW CC 2017
------------------------------

1. open canary.css and "apply source formatting"

2. save as canary.less in dev repo to get each selector on separate line

	DW creates canary.css when canary.less saved (if no syntax errors)
	
	-AND-	Under site: CSS Preprocessors > General:
			"Auto Compilation On File Save" --> checked
			"SASS/SCSS Output file style"   --> expanded

3. open canary.css in textpad and replace(/^  /g, '\n') -- save
