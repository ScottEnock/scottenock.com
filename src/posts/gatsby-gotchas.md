---
title: Solve GraphQL Data Undefined with Static Queries in Gatsby JS
description: How to stop your data being returned as undefined in your GraphQL query using Gatsby JS. 
thumbnail: ./thumbnails/graphql.png
date: "2019-10-03"
---

# The Issue

Let me set the scene. You start to learn Gatsby JS, all is going well and soon you're delving into graphQL. You run a few queries and are able to get back your site's metadata. You think to yourself, perfect, time to turn these dumb components into dynamic ones. 

Then Bamb! You see: `Uncaught TypeError: Cannot read property 'site' of undefined`.

If like me you're going through the same issue then relax as I'm going to tell you how this can be solved.