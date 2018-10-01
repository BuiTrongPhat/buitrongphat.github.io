document.addEventListener("DOMContentLoaded", function(){
	var nut = document.getElementById('nuthieuung');
	var trangthai = "lan1";
	var khoi = document.getElementById('kcd');
	 nut.onclick= function()
	 {
		if(trangthai == "lan1")
	{
		console.log("click lan 1");
		trangthai ="lan2";
		kcd.classList.remove('khongcd');
		kcd.classList.add('chieuso1');
		
	}

	else if(trangthai== "lan2"){
		console.log("click lan 2");
		trangthai = "lan1";

		khoi.classList.remove('chieuso1');

	}
	} 
}, false )
