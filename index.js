(function(){
	
	window.onload=function(){
		var a = document.getElementsByTagName("head");
		var b = document.createElement("script");
		var div = document.createElement('div');
		var d = document.createElement("link");
		var c = document.createElement("link");
		var e = document.createElement("META");
		e.setAttribute("charset", "utf-8");
		a[0].appendChild(e);
		
		
		b.language = "JavaScript";
		b.type = "text/javascript";
		b.src = "/content/demojs.js";
		b.charset = "utf-8";
		
		a[0].appendChild(b);
		
		
		
		
		
		d.rel = "stylesheet";
		d.href = "https://fonts.googleapis.com/css?family=Roboto&amp;subset=cyrillic,cyrillic-ext,greek,greek-ext,latin-ext,vietnamese";
		
		a[0].appendChild(d);
		
		div.className = "sketon_div";
		div.style.display = 'block';
		div.style.position = 'fixed';
		
		document.body.appendChild(div);

		
		$("div").load("/content/demoProject.txt");
		
		c.type = "text/css";
		c.rel = "stylesheet";
		c.href = "demostyle.css";
		
		a[0].appendChild(c);
		
		
		$.getScript("/content/demojs.js", function(){
			document.body.onload = myfunt();
		});
		
		
	}
	
	
})();
