function padZero(num) {
  return num < 10 ? '0' + num : num;
}

function updateClock() {
  const now = new Date();

  const year = now.getFullYear();
  const month = padZero(now.getMonth() + 1);  // getMonth(): 0-11
  const date = padZero(now.getDate());

  const hours = padZero(now.getHours());
  const minutes = padZero(now.getMinutes());
  const seconds = padZero(now.getSeconds());

  // 요일 표시 (한국어)
  const weekdays = ["Sunday","월요일","화요일","수요일","Thursday","금요일","토요일"];
  const weekday = weekdays[now.getDay()];

  document.getElementById('date').textContent = `${year}-${month}-${date}`;
  document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;
  document.getElementById('weekday').textContent = `${weekday}`;
}

// 1초마다 업데이트
setInterval(updateClock, 1000);
// 초기 실행
updateClock();
