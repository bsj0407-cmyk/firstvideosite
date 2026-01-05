const btn = document.getElementById("generateBtn");

btn.addEventListener("click", () => {
  const scriptText = document.getElementById("script").value;

  console.log("보낼 대본:", scriptText);
  alert("대본이 준비되었습니다!");
});
