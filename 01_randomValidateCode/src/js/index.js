window.onload = function() {
    var validateCode = getId("codes");
    var randomCode = getId("randomCode");
    var refresh = getId("refresh");
    var errorInfo = getId("errorInfo");
    var confirm = getId("confirm");
    randomCode.innerHTML = generateRandomCode();
    // 点击refresh按钮,重置验证码
    refresh.onclick = function() {
        randomCode.innerHTML = generateRandomCode();
    };
    // 进行验证
    confirm.onclick = function() {
        var val = validateCode.value;
        errorInfo.style.display = 'block';
        if (val) {
            if (val !== randomCode.innerHTML) {
                errorInfo.innerHTML = '验证码有误，请重新输入！';
                randomCode.innerHTML = generateRandomCode();
            } else {
                errorInfo.style.display = "none";
                setTimeout(function() {
                    alert("验证成功");
                }, 80);

            }
        } else {

            errorInfo.innerHTML = '请输入验证码！';
            randomCode.innerHTML = generateRandomCode();
        }
    };
};
/**
 * 根据元素获取id
 * @param {String} id 需要获取的元素的id
 */
function getId(id) {
    return document.getElementById(id);
}

function generateRandomCode() {
    var result = [];
    var arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    for (var i = 0; i < 4; i++) {
        // 用于随机获取arr中的元素
        var num = Math.floor(Math.random() * 62);
        result.push(arr[num]);
    }
    return result.join('')
}