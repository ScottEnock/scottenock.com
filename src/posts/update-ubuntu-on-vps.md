---
title: Update Ubuntu to the latest LTS Release. (Upgrade Ubuntu 16.04 to 18.04)
description: How to update ubuntu to the latest LTS release on your VPS. 
thumbnail: ./thumbnails/terminal.png
date: "2019-12-03"
published: true
---

Recently I purchased a new vps and found out that the provider didn't support Ubuntu 18.04. 

If you're in the same boat as me fear not as upgrading is simple!

Use the following code to fully upgrade your VPS.

```bash
apt update && apt full-upgrade
```

After successfully upgrading, issue the next command which will run you through upgrading to the latest Ubuntu release. Upgrades can have hickups so make sure you understand the risks and have backed up your important data!

```bash
do-release-upgrade
```
