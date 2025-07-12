import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Script from "next/script";

export default function Profile() {
  const router = useRouter();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const token = router.query.access_token;
    if (!token) return;

    async function getProfile() {
      try {
        const res = await axios.get("https://api.spotify.com/v1/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProfile(res.data);
      } catch (error) {
        console.error(error);
      }
    }

    getProfile();
  }, [router]);

  if (!profile) return <p>Loading profile...</p>;

  return (
    <>
      {/* ✅ Spotify SDK script */}
      <Script
        src="https://sdk.scdn.co/spotify-player.js"
        strategy="afterInteractive"
        onLoad={() => console.log("Spotify SDK loaded!")}
      />

      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <h1>Welcome, {profile.display_name}</h1>
        <img
          src={profile.images?.[0]?.url}
          alt="profile"
          width="150"
          style={{ borderRadius: "50%", marginTop: "10px" }}
        />
        <p>Email: {profile.email}</p>
        <p>Country: {profile.country}</p>
      </div>
    </>
  );
}
