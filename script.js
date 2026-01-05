async function generateVideo() {
  const script = document.getElementById("scriptInput").value;
  const result = document.getElementById("result");

  if (!script.trim()) {
    result.textContent = "대본을 입력해주세요.";
    return;
  }

  result.textContent = "AI가 영상을 분석 중입니다...";

  try {
    const response = await fetch(
      "https://script2video-backend-a64d.onrender.com/generate",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ script }),
      }
    );

    const data = await response.json();

    result.textContent = JSON.stringify(data, null, 2);
  } catch (error) {
    console.error(error);
    result.textContent = "서버 오류가 발생했습니다.";
  }
}

