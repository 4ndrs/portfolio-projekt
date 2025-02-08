---
title: Gifufu
tags: TypeScript, Tailwind, HTML, React, Next.js
pseudoImageFirst: Gif
pseudoImageSecond: ufu
pseudoImageFontSize: 32px
frontPage: 1
sourceCode: https://github.com/4ndrs/gifufu.lol
liveSite: https://gifufu.lol/
---
Web app to convert videos to gifs.
<br />
<br />
It uses ffmpeg with web assembly to do the conversion entirely on the browser and doesn't use a server.
<br />
<br />
It is possible to set the start and end time of the video to convert only a part of it, or crop a specific section with the cropping tool in the video editor.
<br />
<br />
This app came about due to a frustration I had on another project one day where I wanted to convert videos to a browser compatible format, but the WASM implementation of ffmpeg was severely slower than the native one, so slow that it was completely unusable for that project, so I had to go with a server solution. I still wanted to make something with ffmpeg and WASM, so I made this app.
<br />
<br />
Previously, I used to convert many of my webms to gif manually with ffmpeg, they are very short, so I wanted a drop and forget solution, and this app is exactly that.
