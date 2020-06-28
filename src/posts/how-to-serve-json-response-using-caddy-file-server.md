---
title: How to Return JSON response using Caddy File Server
description: How to instruct Caddy to respond in JSON when viewing files and directories hosted with Caddy's File Server Browse functionality. After spending a day on the solution I of course found the simply, quick answer right under my nose!
thumbnail: ./thumbnails/caddy.png
date: "2020-06-28"
published: true
---

This is a very quick post quickly outlining how to get Caddy to respond with JSON when making requests to the file server that it can host. 

I spent a day scouring the corners of the internet to find if it supported such functionality, and flipped flopped back and forth as to whether I would have to build my own API to simply index the directory and serve the files myself.

Luckily! Caddy does support this functionality and it's as simple as changing the `accept header` in your requests that you make to route hosted with Caddy.

## Chaning Accept Header in Javascript

```javascript
fetch("https://files.example.com/directory/", {
  headers: {
    "accept": "application/json"
  }
}).then(res => console.log(res.body.toJson()))
```

## Changing Accept Header in Postman

Below you can see how it's done in Postman:

![Postman accept header settings](../images/postman-caddy-accept.jpg)

> It's important to note that you need to create another "Accept header" field inside postman in order for the default one to be overwritten. (This is what caught me out originally!)


