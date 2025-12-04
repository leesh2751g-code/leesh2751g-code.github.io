// ===== 시계 =====
function padZero(num) {
  return num < 10 ? '0' + num : num;
}

function updateClock() {
  const now = new Date();

  const year = now.getFullYear();
  const month = padZero(now.getMonth() + 1);
  const date = padZero(now.getDate());

  const hours = padZero(now.getHours());
  const minutes = padZero(now.getMinutes());
  const seconds = padZero(now.getSeconds());

  const weekdays = ["일요일","월요일","화요일","수요일","목요일","금요일","토요일"];
  const weekday = weekdays[now.getDay()];

  document.getElementById('date').textContent = `${year}-${month}-${date}`;
  document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;
  document.getElementById('weekday').textContent = weekday;
}

setInterval(updateClock, 1000);
updateClock();

// ===== 소리 재생 버튼 =====
const video = document.getElementById('bg-video');
const btn = document.getElementById('play-btn');

// 클릭 시 영상 재생 + 소리 켜기
btn.addEventListener('click', () => {
  video.muted = false; // 음소거 해제
  video.play();
  btn.style.display = 'none'; // 버튼 숨기기
});
