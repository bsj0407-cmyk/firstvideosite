btn.addEventListener("click", async () => {
  try {
    const res = await fetch(
      "https://script2video-backend-a64d.onrender.com/"
    );
    const text = await res.text();
    alert("서버 응답: " + text);
  } catch (e) {
    alert("서버 연결 실패");
  }
});
