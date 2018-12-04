var url_img_close = "close-ic.png"// icon close chat
var url_img_icon = "icon.png"; //Image chat icon
var button_func_1 = "Nâng cấp tài khoản Slimweb?";
var button_func_2 = "Xây dựng landing site";
var button_func_3 = "Gia hạn tài khoản";
var url_link_1 = '#';	//link
var url_link_2 = '#';	//link
var url_link_3 = '#';	//link
var time_delay = 3; //delay time show mess welcome (s)
var content_welcome = 'Hello there!'	//fake AI
var num_of_button = 3;


function myFuct(){
	time_cal = time_delay*1000;
	time_r = 2000;
	document.getElementById("conten_welcome").innerHTML = content_welcome;
	
	var bt1 = document.getElementById("bt1");
	var bt2 = document.getElementById("bt2");
	var bt3 = document.getElementById("bt3");
	
	//cai dat link button
	bt1.innerHTML = button_func_1;
	bt1.setAttribute("href",url_link_1);
	bt2.innerHTML = button_func_2;
	bt2.setAttribute("href",url_link_2);
	bt3.innerHTML = button_func_3;
	bt3.setAttribute("href",url_link_3);
	
	//time tre hien message
	setTimeout(function(){
		document.getElementById("m").style.display = 'block';
		document.getElementById("news").style.display = 'block';
	},1000);
};

function turn_on(){
	document.getElementById("cs").style.display = 'block';
	document.getElementById("m").style.display = 'none';
	document.getElementById("news").style.display = 'none';
	document.getElementById("im").setAttribute("href", url_img_close);
}

function turn_off(){
	document.getElementById("cs").style.display = 'none';
	document.getElementById("im").setAttribute("href", url_img_icon);
}


		