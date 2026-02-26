# lastfm-proxy-api
Useful links:

https://nimigames-lastfm-proxy-api.vercel.app/

https://nimigames-lastfm-proxy-api.vercel.app/api/lastfm

https://nimigames-lastfm-proxy-api.vercel.app/lastfm-widget-music-now-playing.html



# 🎧 Last.fm Now Playing Widget

A clean and minimal dark-themed Last.fm widget that displays your **currently playing** or **last played** track.

Built with pure HTML, CSS and JavaScript.

---

## Features

- 🎵 Displays current or last played track  
- 🖼 Shows album cover  
- 🔗 Clickable links (track / artist / album)  
- 🔄 Auto refresh every 60 seconds  
- 🎨 Clean dark UI  
- 📱 Responsive layout  
- 🔎 Quick "Lyrics" button (Google search)

---

## Preview

```
Now Listening 🎧
Track Name
Artist Name
Album Name
```
---

## Requirements

- A Last.fm account  
- A Last.fm API key  
- A deployed API proxy (Vercel recommended)

---

## How It Works

The widget fetches data from a custom API endpoint that acts as a proxy for the Last.fm API.

This avoids CORS issues and keeps your API key secure.

Example fetch call:

```js
fetch("https://your-vercel-app.vercel.app/api/lastfm")
```

The script:

1. Fetches the latest track
2. Extracts track, artist, album and cover
3. Renders the widget dynamically
4. Updates automatically every 60 seconds

---

## Setup Guide

### 1 Create a Last.fm API Key

- Go to https://www.last.fm/api
- Create an API application
- Copy your API key

---

### 2 Create a Vercel API Proxy

Create:

```
/api/lastfm.js
```

Example:

```js
export default async function handler(req, res) {
  const username = "YOUR_LASTFM_USERNAME";
  const apiKey = "YOUR_LASTFM_API_KEY";

  const response = await fetch(
    `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${apiKey}&format=json&limit=1`
  );

  const data = await response.json();

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).json(data);
}
```

Deploy it to Vercel.

---

### 3 Add the Widget HTML

Copy the full widget HTML into your project.

Then replace:

```js
fetch("https://your-vercel-app.vercel.app/api/lastfm")
```

With your deployed API URL.

---

## Auto Refresh

The widget refreshes every 60 seconds:

```js
setInterval(loadMusic, 60000);
```

You can change the interval if needed.

---

## Customization

You can easily modify:

- Widget width
- Font sizes
- Colors
- Border radius
- Shadow strength
- Refresh interval

All styles are inside the `<style>` block.
