(function(){
	window.onload=function(){
		var a = document.getElementsByTagName("head");
		var b = document.createElement("script");
		var div = document.createElement('div');
		var d = document.createElement("link");
		var c = document.createElement("link");
		var e = document.createElement("meta");
		
		e.charset="utf-8";
		a[0].appendChild(e);
		
		b.language = "JavaScript";
		b.type = "text/javascript";
		b.src = "demojs.js";
		
		a[0].appendChild(b);
		
		
		c.type = "text/css";
		c.rel = "stylesheet";
		c.src = "demostyle.css";
		
		a[0].appendChild(c);
		
		
		c.rel = "stylesheet";
		c.href = "https://fonts.googleapis.com/css?family=Roboto&amp;subset=cyrillic,cyrillic-ext,greek,greek-ext,latin-ext,vietnamese";
		
		a[0].appendChild(d);
		
		div.className = "sketon_div";
		document.body.appendChild(div);
		
		$("div").load("demoProject.html");
		
		
	}
	
	
})();
