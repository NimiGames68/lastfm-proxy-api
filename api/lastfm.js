<script>
async function loadMusic() {
  try {
    const res = await fetch("https://nimigames-lastfm-proxy-api.vercel.app/api/lastfm");
    const text = await res.text();

    console.log("Resposta crua:", text);

    const data = JSON.parse(text);

    const track = data?.recenttracks?.track?.[0];

    if (!track) {
      document.getElementById("music-box").innerText = "Sem música encontrada 😭";
      return;
    }

    document.getElementById("music-box").innerText =
      track.name + " - " + track.artist["#text"];

  } catch (err) {
    document.getElementById("music-box").innerText = "Erro a carregar música 💀";
    console.error("ERRO REAL:", err);
  }
}

loadMusic();
</script>
