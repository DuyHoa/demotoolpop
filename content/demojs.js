var url_img_close = "";// icon close chat
var url_img_icon = ""; //Image chat icon
var button_func_1 = "Nâng cấp tài khoản Slimweb?";
var button_func_2 = "Xây dựng landing site";
var button_func_3 = "Gia hạn tài khoản";
var url_link_1 = '#';	//link
var url_link_2 = '#';	//link
var url_link_3 = '#';	//link
var time_delay = 4; //delay time show mess welcome (s)
var time_delay_icon = 1; //Trễ time hiện icon (s)
var content_welcome1 = 'Xin Chào, mình là Linda!';	//fake AI
var content_welcome2 = 'Bạn đang gặp khó khăn, cần tư vấn';
var num_of_button = 3;
var font_ = "roboto"

//xác định vị trí pop
var pos_bottom = '24'; //khoảng cách bottom
var pos_right = '30'; //khoảng cách right
var pos_float = 'right';//vị trí bên trái or phải(left\right)



function myfunt() {
	time_cal = (time_delay_icon+time_delay)*1000;
	time_r = time_delay_icon*1000;
	var cw1 = document.getElementById("conten_welcome1");
	var cw2 = document.getElementById("conten_welcome2");
	var bt1 = document.getElementById("bt1");
	var bt2 = document.getElementById("bt2");
	var bt3 = document.getElementById("bt3");
	var bd = document.getElementById("bd");
		
	cw1.innerHTML = content_welcome1;
	cw1.style.fontFamily = font_;
		
	cw2.innerHTML = content_welcome2;
	cw2.style.fontFamily = font_;

	bd.style.bottom = pos_bottom;
	bd.style.right = pos_right;
	bd.style.float = pos_float;
		
		
	//cai dat link button
	bt1.innerHTML = button_func_1;
	bt1.setAttribute("href",url_link_1);
	bt1.style.fontFamily = font_;
	bt2.innerHTML = button_func_2;
	bt2.setAttribute("href",url_link_2);
	bt2.style.fontFamily = font_;
	bt3.innerHTML = button_func_3;
	bt3.setAttribute("href",url_link_3);
	bt3.style.fontFamily = font_;

	
	setTimeout(function(){
		document.getElementById("bd").style.display = 'block';
	},time_r);
	//if()
	//time tre hien message
	//if(document.getElementById("cs").style.display == 'none'){
	setTimeout(function(){
			document.getElementById("news").style.display = 'block';
		
	},time_cal);
		
	setTimeout(function(){
		
			document.getElementById("m").style.display = 'block';
		
	},time_cal+1000);
	//}
	document.getElementById("cl").onclick = function(){
		if(document.getElementById("cs").style.display == 'block')
			turn_off();
	};
	document.getElementById("mb").onclick = function () {
		if(document.getElementById("cs").style.display == 'none'){
			turn_on();
		}
		else{
			turn_off();
		}	
	};	
}

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






		