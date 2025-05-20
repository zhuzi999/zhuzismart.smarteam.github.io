// 注册js.js

document.addEventListener('DOMContentLoaded', function () {
    const registerButton = document.getElementById('register-btn'); // 注册按钮
    const usernameInput = document.getElementById('username'); // 账号输入框
    const emailInput = document.getElementById('email'); // 邮箱输入框
    const passwordInput = document.getElementById('password'); // 密码输入框
    const confirmPasswordInput = document.getElementById('confirm-password'); // 确认密码输入框

    // 邮箱格式验证函数
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    // 注册按钮点击事件
    registerButton.addEventListener('click', function () {
        const username = usernameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();

        if (username === '' || email === '' || password === '' || confirmPassword === '') {
            alert('所有字段不能为空！');
        } else if (!validateEmail(email)) {
            alert('请输入有效的邮箱地址！');
        } else if (password !== confirmPassword) {
            alert('两次输入的密码不一致！');
        } else {
            // 这里可以添加实际的注册逻辑，比如发送请求到服务器
            alert('注册成功！');
            // 例如：window.location.href = '登录.html';
        }
    });
});