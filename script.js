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


// 수정(핵심)
const btn = document.getElementById("generateBtn");
const resultDiv = document.getElementById("result");

btn.addEventListener("click", async () => {
  const scriptText = document.getElementById("script").value;
  resultDiv.innerHTML = "이미지 생성 중...";

  try {
    const res = await fetch(
      "https://script2video-backend-a64d.onrender.com/generate-images",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ script: scriptText })
      }
    );

    const data = await res.json();

    resultDiv.innerHTML = "";

    data.images.forEach(item => {
      const img = document.createElement("img");
      img.src = item.imageUrl;
      img.style.width = "300px";
      img.style.margin = "10px";
      resultDiv.appendChild(img);
    });

  } catch (err) {
    console.error(err);
    resultDiv.innerHTML = "이미지 생성 실패";
  }
});

