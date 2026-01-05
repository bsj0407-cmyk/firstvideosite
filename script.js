btn.addEventListener("click", async () => {
  const scriptText = document.getElementById("script").value;

  try {
    const res = await fetch(
      "https://script2video-api.onrender.com/script",
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

    const data = await res.json();
    alert(
      `${data.message}\n글자 수: ${data.length}`
    );
  } catch (err) {
    alert("서버 전송 실패");
    console.error(err);
  }
});
