const VERSION = "1.3.0"
const DATE_OBJ = new Date();
const YEAR = DATE_OBJ.getFullYear().toString()

// 统一处理两类元素的点击事件
document.querySelectorAll('.divJump, .divOpen').forEach(element => {
    element.addEventListener('click', function() {
        const url = this.getAttribute('data-url');
        if (!url) return;

        // 根据类名决定打开方式
        this.classList.contains('divJump')
            ? window.open(url, '_blank') // 新标签页打开
            : window.location.href = url; // 当前页跳转
    });
});

window.addEventListener('load', () => {
    const div_moves = document.querySelectorAll('.divMove');

    div_moves.forEach((div, index) => {
        // 检查是否已有动画
        if (div.classList.contains('animated')) return;

        // 标记为已动画
        div.classList.add('animated');

        // 设置延迟和应用动画
        if (div.classList.contains('block2')){
            div.style.animation = `block_wave 0.7s cubic-bezier(0.2, 0.6, 0.0, 1) ${index * 0.01}s forwards`;
        } else {
            div.style.animation = `wave 0.7s cubic-bezier(0.2, 0.6, 0.0, 1) ${index * 0.01}s forwards`;
        }
    });
});