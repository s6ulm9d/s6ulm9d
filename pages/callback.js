
import { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import queryString from "query-string";

export default function Callback() {
  const router = useRouter();

  useEffect(() => {
    async function fetchToken() {
      const code = router.query.code;

      if (!code) return;

      const data = {
        grant_type: "authorization_code",
        code,
        redirect_uri: process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URI || "http://localhost:3000/callback",
        client_id: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID || "ddafe8ea658944459472012833ce7aeb",
        client_secret: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET,
      };

      const formBody = queryString.stringify(data);

      try {
        const res = await axios.post("https://accounts.spotify.com/api/token", formBody, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });

        console.log("Access token:", res.data.access_token);
        router.push(`/profile?access_token=${res.data.access_token}`);
      } catch (error) {
        console.error("Error getting token:", error);
      }
    }

    fetchToken();
  }, [router]);

  return <p>Loading...</p>;
}
