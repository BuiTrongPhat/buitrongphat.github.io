
function bai1(x,y,z) {
	var mangso = [x,y,z];
	// mangso.sort(function(a,b){return a-b});
	// return mangso[2];
  var maxInNumbers = Math.max.apply(Math, mangso); 
 document.write(maxInNumbers);
}
//bai1(6,20,5);
function bai2(luong, sogiolam){
	if(sogiolam<=40){
		document.write('tong luong la: '+(sogiolam*luong));

	}
	else{
		document.write('tong luong la: '+(40*luong + (sogiolam-40)*luong*2));
	}
}
// bai2(10,45);
// bai2(10,40);
function bai3(a,b,c){
	if((a+b)>c &&(b+c)>a && (a+c)>b){
		document.write('yes');
	}else{
		document.write('no');
	}
}
// bai3(4,5,7);
// bai3(1,1,2);
function bai4(a,b){
	for (var i = a; i <= b; i++) {
		document.write((i)+'<br/>');
	}
}
// bai4(4,8);
function bai5(n){
	tong = 0;
	for (var i = 0; i <= n; i++) {
		tong += i;
	}
	document.write(tong);
}
// bai5(10);
function bai6(n){
	tongle = 0;
	for (var i = 0; i <= n; i++) {
		if(i%2 !=0){
			tongle += i;
		}
	}
	document.write(tongle);
}
// bai6(7);
function bai7(n)
{
    // Biến cờ hiệu
    var snt = 'dung';
 
    // Nếu n bé hơn 2 tức là không phải số nguyên tố
    if (n < 2){
        snt = 'sai';
    }
    else if (n == 2){
        snt = 'dung';
    }
    else if (n % 2 == 0){
      snt = 'sai';
    }
    else{
        // lặp từ 3 tới n-1 với bước nhảy là 2 (i+=2)
        for (var i = 3; i < Math.sqrt(n); i+=2)
        {
            if (n % i == 0){
                snt = 'sai';
                break;
            }
        }
    }
 
    // Kiểm tra biến flag
    if (snt == 'dung'){
        document.write(n + " là số nguyên tố <br/>");
    }
    else{
        document.write(n + " không phải là số nguyên tố <br/>");
    }
}
// bai7(17);
// bai7(15);
function bai8(a,b) {
	function UCLN(a,b){
	while(a!=b){
		if(a>b){a=a-b;}
		else{b=b-a}
	}
return a;
}
	document.write('UCLN la:'+UCLN(a,b));
	document.write('BCNN la:'+a*b/(UCLN (a,b)));
}

// bai8(9,8);
function bai9(a) {
	var tong = 0;
	if(a<10000){
		console.log("a chua du lon");
	}else{
	while(a>1){
		num = a%10;
		tong += num;	
		a= parseInt(a/10);
	}
	console.log(tong);
}
}
// bai9(256);
// bai9(256666);
function bai10(a) {
	var tong = 0;
	if(a<10000){
		console.log("a chua du lon");
	}else{
		max = 0;
	while(a>1){
		num = a%10;
		if(max < num){
			max= num;
		}
		a= parseInt(a/10);
	}
	console.log(max);
}
}
 // bai10(256);
 // bai10(2596666);


