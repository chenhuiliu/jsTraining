/* 值复制 */
function clone(obj){
	var o;
	if(obj == null || typeof obj !== 'object'){
		return obj;
	}else if(obj instanceof Array){
		o = [];
		for(var i=0,l=obj.length;i<l;i++){
			o.push(clone(obj[i]));
		}
		return o;
	}else if(obj instanceof Object){
		o = {};
		for(var k in obj){
			o[k] = clone(obj[k]);
		}
		return o;
	}
}

/* 数组去重 */

var arr = [1,2,4,5,66,1,3,3,4],
		arr2 = [];
for(var i=0,l=arr.length;i<l;i++){
	if(arr2.indexOf(arr[i])<0){
		arr2.push(arr[i]);
	}
}

function removeRepeat(obj){
	var arr = [];
	for(var i=0,l=obj.length;i<l;i++){
		if(arr.indexOf(obj[i])<0){
			arr.push(obj[i]);
		}
	}
	return arr;
}
/* 统计字符串中字母个数或统计最多字母数。 */
var str = "aaaabbbccccddfgh";
var obj  = {};
for(var i=0;i<str.length;i++){
    var v = str.charAt(i);
    console.log('v',v);
    if(obj[v] && obj[v].value == v){
    	console.log('obj[v]',obj[v]);	
      obj[v].count = ++ obj[v].count;
    }else{
        obj[v] = {};
        obj[v].count = 1;
        obj[v].value = v;
    }
}

for(key in obj){
  console.log(obj[key].value +'='+obj[key].count+' '); // a=4  b=3  c=4  d=2  f=1  g=1  h=1 
}

function countLetter(string){
	var obj = {};
	for(var i=0;i<string.length;i++){
		var val = string.charAt(i);
		console.log('val',val);
		if(obj[val] && obj[val].value == val){
			obj[val].count = ++ obj[val].count;
		}else{
			obj[val] = {};
			obj[val].count = 1;
			obj[val].value = val;
		}
	}
	return obj;
}

/* HTTP过程
		1.域名解析
		2.发起TCP的3次握手
		3.建立TCP链接，发送http请求
		4.服务器端响应http请求，浏览器得到HTML代码
		5.浏览器解析HTML代码，并请求HTML代码中的资源
		6.浏览器渲染页面并呈现给用户
*/


/*
	快速排序
	1.在数据集合中，选择一个元素作为基准。
	2.所有小于基准的元素，都移到基准的左边，大于基准的元素都移到基准的右边。
	3.对基准左边和右边的两个子集，不断重复第一步和第二步，直到所有子集只剩下一个元素为止。
*/

var quickSort = function(arr){
	var standard,
			staIndex,
			left = [],
			right = [];
	if(arr.length <= 1){
		return arr;
	}
	staIndex = Math.floor(arr.length/2);
	standard = arr.splice(staIndex,1)[0];

	for(var i=0,l=arr.length;i<l;i++){
		if(arr[i] < standard){
			if(left.indexOf(arr[i])<0){
				left.push(arr[i]);	
			}
		}else{
			if(right.indexOf(arr[i])<0){
				right.push(arr[i]);
			}
		}
	}
	return quickSort(left).concat([standard],quickSort(right));
};

/*
	二分查找法：是一种在有序数组中查找特定元素的搜索方法。
	1.从有序数组的中间位置开始搜索，如果该元素正好是目标元素的话，搜索结束，否则进行下一步。
	2.如果目标元素大于或者小于中间元素，则在数组大于或小于中间元素的那一半区域查找，然后重复第一步的操作。
	3.如果某一步数组为空，则表示找不到目标元素。
*/
function binarySearch(arr,key){
	var low = 0,
			high = arr.length -1;
	while(low <= high){
		var mid = parseInt((low + high)/2);
		if(key == arr[mid]){
			return mid;
		}else if(key > arr[mid]){
			low = mid + 1;
		}else if(key < arr[mid]){
			high = mid - 1;
		}else{
			return -1;
		}
	}
}

/* 判断指定数是否为素数 */
function isPrime(num){
	var isPrime = true;
	for(var i= 2,l=num;i<l;i++){
		if(num % i === 0){
			isPrime = false;
		}
	}
	return isPrime;
}
isPrime(2);

/* 判断指定范围内的数有多少为素数 */
function getPrime(end){
	var primeStr = [],counter = 0;
	for(var j= 2;j<end;j++){
		if(isPrime(j)){
			primeStr.push(j);
			counter ++;
		}
	}
	return {primeStr,counter};
}
getPrime(100);
