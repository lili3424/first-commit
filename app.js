var container = document.querySelector('.container') //回传第一个元素

data = '<div class="box-title"><div class="caption">九九乘法表</div><div class="english">MULTIPLICATION CHART</div></div>'


for (i = 2; i < 10; i++) {
    data += '<div class="box"><div class="sub-title">' + i + '</div>'
    for (k = 1; k < 10; k++) {
        data += '<div class="sub-box">' + i + " x " + k + " = " + i * k + '</div>'
    }
    data += '</div>'
}

container.innerHTML = data
console.log(data)