function savestorage134(key, ctt) {
	var data = document.getElementById(ctt).value;
	var key = document.getElementById(key).value;
	localStorage.setItem(key, data);
	alert('数据已保存！');
}

function findstorage134(key, out) {
	var key = document.getElementById(key).value;
	var data = localStorage.getItem(key);
	var result = document.getElementById(out);
	result.innerHTML = data;
}

function loadstorage134(id) {
	var data = document.getElementById(id);
	if(localStorage.length > 0) {
		var result = '<table border="1">';
		result += '<tr><td>索引</td><td>内容</td></tr>';
		for(var i = 0; i < localStorage.length; i++) {
			var value = localStorage.getItem(localStorage.key(i));
			result += '<tr><td>这是第' + i + '条数据</td><td>' + value + '</td></tr>';

		}
		result += '</table>';
		data.innerHTML = result;
	} else {
		data.innerHTML = '<p>数据为空……</p>'

	}
}

function clearstorage134() {
	localStorage.clear();
	alert("数据已被清除！");
	loadstorage134();
}