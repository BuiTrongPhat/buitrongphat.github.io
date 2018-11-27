
$(function() {

 var arg=[
 	{
 		id: '04',
 		banthang: '0',
 		kientao:'0',
 		danhhieu:'0',
 		tyle:'0',
 		chantrai:'0',
 		chanphai:'0',
 		pen:'0',
 		sotran:'0',
 		team : 'arg'	
 	},
 	{
 		id: '05',
 		banthang: '0',
 		kientao:'1',
 		danhhieu:'0',
 		tyle:'0',
 		chantrai:'0',
 		chanphai:'0',
 		pen:'0',
 		sotran:'5',
 		team : 'arg'	
 	},
 	{
 		id: '06',
 		banthang: '2',
 		kientao:'2',
 		danhhieu:'0',
 		tyle:'0.29',
 		chantrai:'1',
 		chanphai:'1',
 		pen:'0',
 		sotran:'7',
 		team : 'arg'	
 	},
 	{
 		id: '07',
 		banthang: '6',
 		kientao:'4',
 		danhhieu:'1',
 		tyle:'0.43',
 		chantrai:'6',
 		chanphai:'0',
 		pen:'1',
 		sotran:'14',
 		team : 'arg'	
 	},
 	{
 		id: '08',
 		banthang: '2',
 		kientao:'2',
 		danhhieu:'1',
 		tyle:'0.25',
 		chantrai:'1',
 		chanphai:'0',
 		pen:'0',
 		sotran:'8',
 		team : 'arg'	
 	},
 	{
 		id: '09',
 		banthang: '8',
 		kientao:'14',
 		danhhieu:'2',
 		tyle:'0.47',
 		chantrai:'7',
 		chanphai:'1',
 		pen:'1',
 		sotran:'7',
 		team : 'arg'	
 	},
 	{
 		id: '10',
 		banthang: '7',
 		kientao:'7',
 		danhhieu:'2',
 		tyle:'0.66',
 		chantrai:'5',
 		chanphai:'2',
 		pen:'2',
 		sotran:'12',
 		team : 'arg'	
 	},
 	{
 		id: '11',
 		banthang: '4',
 		kientao:'7',
 		danhhieu:'0',
 		tyle:'0.36',
 		chantrai:'4',
 		chanphai:'0',
 		pen:'0',
 		sotran:'6',
 		team : 'arg'	
 	},
 	{
 		id: '12',
 		banthang: '8',
 		kientao:'3',
 		danhhieu:'2',
 		tyle:'0.6',
 		chantrai:'6',
 		chanphai:'3',
 		pen:'2',
 		sotran:'11',
 		team : 'arg'	
 	},
 	{
 		id: '13',
 		banthang: '7',
 		kientao:'4',
 		danhhieu:'6',
 		tyle:'0.76',
 		chantrai:'12',
 		chanphai:'10',
 		pen:'0',
 		sotran:'4',
 		team : 'arg'	
 	},
 	{
 		id: '14',
 		banthang: '4',
 		kientao:'3',
 		danhhieu:'22',
 		tyle:'0.36',
 		chantrai:'1',
 		chanphai:'0',
 		pen:'0',
 		sotran:'4',
 		team : 'arg'	
 	},
 	{
 		id: '15',
 		banthang: '10',
 		kientao:'13',
 		danhhieu:'1',
 		tyle:'0.56',
 		chantrai:'9',
 		chanphai:'6',
 		pen:'0',
 		sotran:'8',
 		team : 'arg'	
 	},
 	{
 		id: '16',
 		banthang: '4',
 		kientao:'5',
 		danhhieu:'0',
 		tyle:'0.44',
 		chantrai:'5',
 		chanphai:'1',
 		pen:'0',
 		sotran:'12',
 		team : 'arg'	
 	},
 	{
 		id: '17',
 		banthang: '7',
 		kientao:'5',
 		danhhieu:'1',
 		tyle:'0.76',
 		chantrai:'10',
 		chanphai:'0',
 		pen:'1',
 		sotran:'1',
 		team : 'arg'	
 	},
 	{
 		id: '18',
 		banthang: '1',
 		kientao:'3',
 		danhhieu:'2',
 		tyle:'0.36',
 		chantrai:'1',
 		chanphai:'0',
 		pen:'0',
 		sotran:'4',
 		team : 'arg'	
 	},
 	{
 		id: 'all',
 		banthang: '56',
 		kientao:'25',
 		danhhieu:'4',
 		tyle:'0.66',
 		chantrai:'40',
 		chanphai:'10',
 		pen:'0',
 		sotran:'77',
 		team : 'arg'	
 	},

 ];

 var bar=[
 	{
 		id: '04',
 		banthang: '1',
 		kientao:'3',
 		danhhieu:'2',
 		tyle:'0.36',
 		chantrai:'1',
 		chanphai:'0',
 		pen:'0',
 		sotran:'4',
 		team: 'bar'	
 	},
 	{
 		id: '05',
 		banthang: '10',
 		kientao:'11',
 		danhhieu:'2',
 		tyle:'0.66',
 		chantrai:'10',
 		chanphai:'0',
 		pen:'0',
 		sotran:'30',
 		team: 'bar'	
 	},
 	{
 		id: '06',
 		banthang: '14',
 		kientao:'9',
 		danhhieu:'2',
 		tyle:'0.56',
 		chantrai:'10',
 		chanphai:'5',
 		pen:'5',
 		sotran:'4',
 		team: 'bar'	
 	},
 	{
 		id: '07',
 		banthang: '10',
 		kientao:'7',
 		danhhieu:'4',
 		tyle:'0.62',
 		chantrai:'10',
 		chanphai:'0',
 		pen:'0',
 		sotran:'25',
 		team: 'bar'	
 	},
 	{
 		id: '08',
 		banthang: '38',
 		kientao:'12',
 		danhhieu:'6',
 		tyle:'0.86',
 		chantrai:'30',
 		chanphai:'6',
 		pen:'10',
 		sotran:'20',
 		team: 'bar'	
 	},
 	{
 		id: '09',
 		banthang: '1',
 		kientao:'3',
 		danhhieu:'2',
 		tyle:'0.36',
 		chantrai:'1',
 		chanphai:'0',
 		pen:'0',
 		sotran:'4',
 		team: 'bar'	
 	},
 	{
 		id: '10',
 		banthang: '1',
 		kientao:'3',
 		danhhieu:'2',
 		tyle:'0.36',
 		chantrai:'1',
 		chanphai:'0',
 		pen:'0',
 		sotran:'4',
 		team: 'bar'	
 	},
 	{
 		id: '11',
 		banthang: '1',
 		kientao:'3',
 		danhhieu:'2',
 		tyle:'0.36',
 		chantrai:'1',
 		chanphai:'0',
 		pen:'0',
 		sotran:'4',
 		team: 'bar'	
 	},
 	{
 		id: '12',
 		banthang: '1',
 		kientao:'3',
 		danhhieu:'2',
 		tyle:'0.36',
 		chantrai:'1',
 		chanphai:'0',
 		pen:'0',
 		sotran:'4',
 		team: 'bar'	
 	},
 	{
 		id: '13',
 		banthang: '1',
 		kientao:'3',
 		danhhieu:'2',
 		tyle:'0.36',
 		chantrai:'1',
 		chanphai:'0',
 		pen:'0',
 		sotran:'4',
 		team: 'bar'	
 	},
 	{
 		id: '14',
 		banthang: '1',
 		kientao:'3',
 		danhhieu:'2',
 		tyle:'0.36',
 		chantrai:'1',
 		chanphai:'0',
 		pen:'0',
 		sotran:'4',
 		team: 'bar'	
 	},
 	{
 		id: '15',
 		banthang: '1',
 		kientao:'3',
 		danhhieu:'2',
 		tyle:'0.36',
 		chantrai:'1',
 		chanphai:'0',
 		pen:'0',
 		sotran:'4',
 		team: 'bar'	
 	},
 	{
 		id: '16',
 		banthang: '1',
 		kientao:'3',
 		danhhieu:'2',
 		tyle:'0.36',
 		chantrai:'1',
 		chanphai:'0',
 		pen:'0',
 		sotran:'4',
 		team: 'bar'	
 	},
 	{
 		id: '17',
 		banthang: '1',
 		kientao:'3',
 		danhhieu:'2',
 		tyle:'0.36',
 		chantrai:'1',
 		chanphai:'0',
 		pen:'0',
 		sotran:'4',
 		team: 'bar'	
 	},
 	{
 		id: '18',
 		banthang: '1',
 		kientao:'3',
 		danhhieu:'2',
 		tyle:'0.36',
 		chantrai:'1',
 		chanphai:'0',
 		pen:'0',
 		sotran:'4',
 		team: 'bar'	
 	},
 	{
 		id: 'all',
 		banthang: '10',
 		kientao:'30',
 		danhhieu:'2',
 		tyle:'0.36',
 		chantrai:'1',
 		chanphai:'0',
 		pen:'0',
 		sotran:'4',
 		team: 'bar'	
 	},

 ];


	

function banner1(){
	TweenMax.staggerFrom($('.nextmatch'),1,{x:300,opacity:0,delay:1},0.2);
	setTimeout(banner1,10000)
}
function thoigian(){
	var today= new Date();
	var eventDate = new Date("December 29,2018 22:15:00");

	var currentTime = today.getTime();
	var eventTime = eventDate.getTime();
	var remTime  = eventTime - currentTime;

	var sec = Math.floor(remTime/1000);
	var min = Math.floor(sec/60);
	var hrs = Math.floor(min/60);
	var days = Math.floor(hrs/24);

	hrs = hrs%24;
	min = min % 60;
	sec = sec %60;
	days = (days<10) ? "0" +	days : days;
	hrs = (hrs<10) ? "0" +	hrs : hrs;
	min = (min<10) ? "0" +	min : min;

	document.getElementById('ngay').innerHTML = days;
	document.getElementById('gio').innerHTML = hrs;
	document.getElementById('phut').innerHTML = min;

	setTimeout(thoigian,1000);
}

function menufix(){
	var trangthai = "duoi100";
	var vitrimenu = $('.menuduoi').offset().top;
	$(window).scroll(function(event) {
		/* Act on the event */
		var vitri = $('html').scrollTop();

		if(vitri >= vitrimenu){
			if(trangthai =="duoi100"){
			$('.menuduoi').addClass('bienhinh');
			$('.backtotop').addClass('backtotop2');
			trangthai= "tren100";
		
		}
	}
		else{
			$('.menuduoi').removeClass('bienhinh'); 
			$('.backtotop').removeClass('backtotop2');
			trangthai= "duoi100";
		}
	});

}
function khoang1(){
	var trangthai = "duoikn";
	var vitrikn = $('.khoangnghi1 .noidung').offset().top -1000;

	$(window).scroll(function(event) {
		/* Act on the event */
		var vitri1 = $('html').scrollTop();
		console.log(vitri1);
		console.log(vitrikn);
		if(vitri1 >= vitrikn){
			if(trangthai = "duoikn"){
				$('.chutokhoangnghi1').addClass('bienhinh2');
				trangthai = "trenkn";
			}
		}
		else{
			$('.chutokhoangnghi1').removeClass('bienhinh2'); 
			
			trangthai= "duoi100";
		}
	});
}

function loadweb(){
	$('.nut1').click(function(event) {
			event.preventDefault();
			/* Act on the event */
			$('html').animate({scrollTop:$('.photo').offset().top}, 1000,'easeOutExpo');
		
		});
		$('.nut2').click(function(event)  {
			event.preventDefault();
			/* Act on the event */
			$('html').animate({scrollTop:$('.video').offset().top}, 1000,'easeInOutBounce' );
		
		});
		$('.nut3').click(function(event)  {
			event.preventDefault();
			/* Act on the event */
			$('html').animate({scrollTop:$('.shop').offset().top}, 1000,'easeOutExpo');
		
		});
		$('.nut4').click(function(event)  {
			event.preventDefault();
			/* Act on the event */
			$('html').animate({scrollTop:$('.thongso').offset().top}, 1000,'easeInOutBounce' );
		
		});
		$('.nut5').click(function(event)  {
			event.preventDefault();
			/* Act on the event */
			$('html').animate({scrollTop:$('.biography').offset().top}, 1000,'easeOutExpo' );
		
		});
		$('.backtotop').click(function(event)  {
			event.preventDefault();
			/* Act on the event */
			$('html').animate({scrollTop:0}, 1000,'easeOutExpo' );
		
		});

}

function loadthem(){
	$('.noidungthem').slideUp(0);
	$('.xemthem').click(function(event) {
		/* Act on the event */
		$('.noidungthem').slideDown();
		$('.noidungthem .tinto').addClass('xemthemra');
		$('.xemthem').addClass('xoaxemthem');
	});
}


function locanh(){
	$('.sanpham .motsanpham').isotope({
		itemSelector:'div'
	});
	//tukhoa
	$('.timkiem').keypress(function(event) {
		/* Act on the event */
		$('.submit').click(function(event) {
			/* Act on the event */
			var tu1 = $('.timkiem').val();
			tu1 = "."+tu1;
			$('.sanpham .motsanpham').isotope({filter:tu1});
		});
			if(event.keyCode === "13") {
			/* Act on the event */
			var tu1 = $('.timkiem').val();

			tu1 = "."+tu1;
			$('.sanpham .motsanpham').isotope({filter:tu1});
		}
		
		thoigian1 = setInterval(function(){
				var tu1 = $('.timkiem').val();
			tu1 = "."+tu1;
			$('.sanpham .motsanpham').isotope({filter:tu1});
		},200)
	
	});

	//timanh
	$('.menushop2 li a').click(function(event) {
		/* Act on the event */
		var danhmuc= $(this).data('danhmuc');

		$('.sanpham .motsanpham').isotope({filter:danhmuc});
		return false;
	});
}








const teamArg = document.getElementById('team-arg');
const teamBar = document.getElementById('team-bar');
const inputYear = document.querySelectorAll('.input-year');


// object de in
const elmBanthang = document.querySelector('.banthang');
const elmKienTao = document.querySelector('.kientao');
const elmDanhHieu = document.querySelector('.danhhieu');
const elmTyLe = document.querySelector('.tyle');
const elmChanTrai = document.querySelector('.chantrai');
const elmChanPhai = document.querySelector('.chanphai');
const elmPen = document.querySelector('.pen');
const elmSoTran = document.querySelector('.sotran');



function inThongSo (thongso){

	elmBanthang.innerHTML = thongso[0].banthang;
	elmKienTao.innerHTML = thongso[0].kientao;
	elmDanhHieu.innerHTML = thongso[0].danhhieu;
	elmTyLe.innerHTML = thongso[0].tyle;
	elmChanPhai.innerHTML = thongso[0].chanphai;
	elmChanTrai.innerHTML = thongso[0].chantrai;
	elmPen.innerHTML = thongso[0].pen;
	elmSoTran.innerHTML = thongso[0].sotran;

}

// lay tat ca input
const allInputCheck = document.querySelectorAll('.input-handle');
let namCheck = '04';
let teamCheck = 'arg'
let temp = [];
allInputCheck.forEach(function(element){
	element.addEventListener('click', function(e){
		if(teamBar.checked){
			teamCheck = 'bar';
		}else {
			teamCheck = 'arg';
		}

		inputYear.forEach(function(elm){
			if(elm.checked){
				namCheck = elm.value;
			}

		})

		if(teamCheck === 'bar'){
			
			temp = bar.filter((item) => item.id === namCheck);
		}else {
			temp = arg.filter((item) => item.id === namCheck);

		}
		
		inThongSo(temp);

		
				
	})
})

	let price;

	$('.muangay').on('click',function() {
		/* Act on the event */
			var cart=[];
		var proId = $(this).attr('productId');
		var imgUrl = $('#sp'+proId).find('img').attr('src');
		 price = $('#sp'+proId).find('.gia1').text();
	
		$('#anhsanpham img').attr('src',imgUrl);


		$('.muahang').click(function(event) {
		
		});
	});



	$('.cong').click(function(event) {
		/* Act on the event */
		var soluong = parseInt(document.getElementById('result').value);
	 		
		document.getElementById('result').value = soluong +1;
		
			document.getElementById('giaca').value = parseInt(document.getElementById('result').value) * parseInt(price) + '$';
	});
	$('.tru').click(function(event) {
		/* Act on the event */
		var soluong = parseInt(document.getElementById('result').value);
		if(soluong>1){

		document.getElementById('result').value = soluong - 1;}

		
			document.getElementById('giaca').value = parseInt(document.getElementById('result').value) * parseInt(price)+ '$';
	});
	
			$('#result').keypress(function(event) {
		/* Act on the event */
		
		thoigian1 = setInterval(function(){
				var soluong = parseInt(document.getElementById('result').value);
			document.getElementById('giaca').value = parseInt(document.getElementById('result').value) * parseInt(price) + '$';
		},200)
	
	});

		$('.close2').click(function(event) {
		/* Act on the event */
		document.getElementById('giaca').value = 0;
		document.getElementById('result').value =0;
		 
	});

// thongso();

locanh();

khoang1();
loadthem();
new WOW().init();
loadweb();
menufix();
banner1();
thoigian();

});

