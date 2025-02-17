async function drawCard() {
    try {
        const response = await fetch('/draw');  // 调用后端 API
        const data = await response.json();
        document.getElementById('card-result').innerText = `你抽到了：${data.card}`;
    } catch (error) {
        console.error('抽卡失败:', error);
    }
}
