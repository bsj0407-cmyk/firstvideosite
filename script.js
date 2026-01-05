// 버튼 가져오기
const btn = document.getElementById("generateBtn");

btn.addEventListener("click", async () => {
  // textarea에서 대본 가져오기
  const scriptText = document.getElementById("script").value;

  // 대본이 비어 있으면 중단
  if (!scriptText.trim()) {
    alert("대본을 입력해주세요.");
    return;
  }

  try {
    // 백엔드 서버로 POST 요청
    const res = await fetch(
      "https://script2video-backend-a64d.onrender.com/script",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          script: scriptText
        })
      }
    );

    // 서버 응답 받기
    const data = await res.json();

    // 결과 확인
    alert(
      `${data.message}\n글자 수: ${data.length}`
    );

  } catch (err) {
    console.error(err);
    alert("서버 전송 중 오류가 발생했습니다.");
  }
});

