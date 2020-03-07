---
title: How to redact sensitive information / API Keys from your git repositories.
description: A detailed guide on how to remove sensitive information such as API Keys from your git repositories. 
thumbnail: ./thumbnails/git.png
date: "2020-03-07"
published: true
---

This is a quick, right to the information tutorial on how you can redact sensitive information from your git repositories. 

You'll probably need to do this if you carelessly hard-coded and committed API keys to your repository (Like me!) and are wanting to secure it before making it public.

## Remove all Sensitive Data

First of all, ensure all passwords, API Keys, and other data has been removed from your code base and commit the changes.

This is necessary as the tool we'll be using to redact the information from our repository doesn't make changes to the latest commit. This is their explanation for this behaviour:

> The BFG treats you like a reformed alcoholic: you’ve made some mistakes in the past, but now you’ve cleaned up your act. Thus the BFG assumes that your latest commit is a good one, with none of the dirty files you want removing from your history still in it. This assumption by the BFG protects your work, and gives you peace of mind knowing that the BFG is only changing your repo history, not meddling with the current files of your project. ~ BFG 

## Clone your repository

Next you'll need to clone your repository with the `--mirror` flag.

This flag creates a bare repository which means you won't be able to see any of your normal files as it is just a copy of the Git database.

```bash
git clone --mirror git://example.com/some-big-repo.git
```

## Install BFG

We'll now need to install the tool that'll do all the leg work for us.

The BFG sadly relies on Java, and if like me you don't have java on your environment and have no desire to install it we can rely on Homebrew or Chocolatey depending on your OS.

These two tools are both package managers for Windows and Mac and have a similar syntax for installing software.

#### Install With Chocolatey (Windows)

If you don't have chocolatey installed you're going to want to run this command in powershell:

For more info on how to install chocolatey read their simple guide [here](https://chocolatey.org/install)

```bash
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```

Once chocolatey is install we'll simply run the chocolatey command:

```bash
choco install bfg-repo-cleaner
```

#### Install with Homebrew (Mac)

If you don't have homebrew install then simply run the following command in the MacOS Terminal:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

Once Homebrew is up and running simply type the Homebrew command to install the BFG.

```bash
brew install bfg
```

## Building a replacement file

We're so very close!

Now all we need to do is write a very short file that will tell the BFG what information to redact. 

Create a replacement.txt file in the directory that you cloned.

The file syntax is quite simple and offers four options when redacting information.

```
PASSWORD1                       # Replace literal string 'PASSWORD1' with '***REMOVED***' (default)
PASSWORD2==>examplePass         # replace with 'examplePass' instead
PASSWORD3==>                    # replace with the empty string
regex:password=\w+==>password=  # Replace, using a regex
regex:\r(\n)==>$1               # Replace Windows newlines with Unix newlines
```

For most needs the default option will be fine and you can just write each sensitive string on a new line.

Here's an example of what your replacement.txt file should look like (Relax! Those keys ain't real!):

![replacement.txt file](../images/replacement-txt-file.png)

## Run It!

We're all ready to run the command and wipe the sensitive information from the face of the earth... Or at least off the face of your git repository.

```bash 
bfg --replace-text replacement.txt
```

## Regarding Neutrality

Now you should have a secured repository but there's still an elephant in the room.

If you followed the steps above and ran the command you will have seen the following message: 

```
You can rewrite history in Git - don't let Trump do it for real!
Trump's administration has lied consistently, to make people give up on ever
being told the truth. Don't give up being told the truth. Don't give up: 
[link to political website asking for money]
```

You probably think I'm kidding and I was very shocked when I read it too! 

The author of this tool seems perfectly happy to put political messaging/propaganda into an open source tool, and I for one think it's very unprofessional. 

Whatever your persuasion, I think we can all agree, politics should be left out of the tech space.

I've raised yet another issue on the [repository page](https://github.com/rtyley/bfg-repo-cleaner) (As of writing there's been 19 similar issues raised) and would recommend anyone who feels similarly to do the same.