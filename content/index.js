(function(){
	var pos_bottom = '24'; //khoảng cách bottom
	var pos_right = '30'; //khoảng cách right
	var pos_float = 'right';//vị trí bên trái or phải(left\right)
	
	window.onload=function(){
		var a = document.getElementsByTagName("head");
		var b = document.createElement("script");
		var f = document.createElement("div");
		var d = document.createElement("link");
		var c = document.createElement("link");
		var g = document.createElement("link");
		var e = document.createElement("META");
		var h = document.createElement("script");
		var i = document.createElement("script");
		var k = document.createElement("script");
		
		h.src="https://code.jquery.com/jquery-3.3.1.slim.min.js";
		h.integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo";
		h.crossorigin="anonymous";
		//a[0].appendChild(h);
		i.src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js";
		i.integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49";
		i.crossorigin="anonymous";
		//a[0].appendChild(i);
		k.src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js";
		k.integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy";
		k.crossorigin="anonymous";
		//a[0].appendChild(k);
		e.name = "viewport";
		e.content="width=device-width, initial-scale=1.0";
		e.setAttribute("charset", "utf-8");
		a[0].appendChild(e);
		b.language = "JavaScript";
		b.type = "text/javascript";
		b.src = "content/demojs.js";
		b.charset = "utf-8";
		a[0].appendChild(b);
		g.rel="stylesheet";
		g.href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css";
		g.integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO";
		g.crossorigin="anonymous";
		//a[0].appendChild(g);
		d.rel = "stylesheet";
		d.href = "https://fonts.googleapis.com/css?family=Roboto&amp;subset=cyrillic,cyrillic-ext,greek,greek-ext,latin-ext,vietnamese";
		a[0].appendChild(d);
		f.className = "sketon_div";
		f.style.display = "block";
		f.id = "a23";
		f.style.width = "410px";
		f.style.height = "485px";
		f.style.position = "fixed";
		f.style.bottom = pos_bottom;
		f.style.right = pos_right;
		f.style.float = pos_float;
		document.body.appendChild(f);
		$('#a23').load("content/demoProject.txt");
		c.type = "text/css";
		c.rel = "stylesheet";
		c.href = "content/demostyle.css";
		a[0].appendChild(c);
		$.getScript("content/demojs.js", function(){
			document.body.onload = myfunt();
		});
	}
})();
