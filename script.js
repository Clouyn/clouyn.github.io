var divs = document.getElementsByClassName("divJump");
//div跳转链接
for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener("click", function() {
    var url = this.getAttribute("data-url");
    if (url) {
        window.location.href = url;
    }
});
}
//div返回上级菜单
document.getElementById("divBack").addEventListener("click", function() {
    window.history.back();
});