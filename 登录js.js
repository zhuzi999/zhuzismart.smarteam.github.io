// 登录js.js

document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.querySelector('.btn-box > div > button:nth-of-type(1)'); // 登录按钮
    const registerButton = document.querySelector('.btn-box > div > button:nth-of-type(2)'); // 注册按钮
    const usernameInput = document.querySelector('.input-box input[type="text"]'); // 账号输入框
    const passwordInput = document.querySelector('.input-box input[type="password"]'); // 密码输入框

    // 登录按钮点击事件
    loginButton.addEventListener('click', function () {
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (username === '' || password === '') {
            alert('账号和密码不能为空！');
        } else {
            // 这里可以添加实际的登录逻辑，比如发送请求到服务器
            alert('登录成功！');
            // 例如：window.location.href = '主页.html';
        }
    });

    // 注册按钮点击事件（跳转到注册页面）
    registerButton.addEventListener('click', function () {
        window.location.href = '注册.html';
    });
});