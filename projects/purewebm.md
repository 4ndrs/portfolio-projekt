---
title: PureWebM
tags: Python
pseudoImageFirst: Pure
pseudoImageSecond: WebM
sourceCode: https://github.com/4ndrs/PureWebM
---
Command line utility to make size restricted webms.
<br />
<br />
This utility uses ffmpeg internally to make webms, and keeps a queue of the parameters with which it is executed using unix sockets.
<br />
<br />
When the encoded webm exceeds the limit, a new re-encoding happens with a new calculated bitrate.
<br />
<br />
I made this replicating my process of making webms with ffmpeg. With the queue, it is possible to send multiple instructions and the webms will be made without exceeding the limit, simplifying and automating the process of making multiple webms.
