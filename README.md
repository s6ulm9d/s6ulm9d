
# Spotify Clone Starter

## Setup

1. Install dependencies:

```
npm install
```

2. Create `.env.local` file and add:

```
SPOTIFY_CLIENT_ID=your_client_id_here
SPOTIFY_CLIENT_SECRET=your_regenerated_secret_here
SPOTIFY_REDIRECT_URI=http://localhost:3000/callback
```

3. Run the dev server:

```
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) and log in with Spotify.

## Important

✅ Regenerate your client secret and update it.
✅ Add `http://localhost:3000/callback` in Spotify dashboard redirect URIs.
