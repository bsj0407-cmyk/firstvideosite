const btn = document.getElementById("generateBtn");

btn.addEventListener("click", async () => {
  const scriptText = document.getElementById("script").value;

  // 대본 비어있으면 중단
  if (!scriptText.trim()) {
    alert("대본을 입력해주세요.");
    return;
  }

  try {
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

    if (!res.ok) {
      throw new Error("서버 응답 오류");
    }

    const data = await res.json();

    alert(
      `${data.message}\n글자 수: ${data.length}`
    );

  } catch (err) {
    console.error(err);
    alert("서버 전송 중 오류가 발생했습니다.");
  }
});

