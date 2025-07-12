
export default function Home() {
  const client_id = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID || "ddafe8ea658944459472012833ce7aeb";
  const redirect_uri = process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URI || "http://localhost:3000/callback";
  const scopes = [
    "user-read-private",
    "user-read-email",
    "user-read-playback-state",
    "user-modify-playback-state",
    "streaming",
  ].join(" ");

  const authUrl = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=code&redirect_uri=${encodeURIComponent(
    redirect_uri
  )}&scope=${encodeURIComponent(scopes)}`;

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Spotify Clone</h1>
      <a href={authUrl}>
        <button style={{ padding: "10px 20px", fontSize: "16px" }}>Login with Spotify</button>
      </a>
    </div>
  );
}
