---
title: Setting up a mongoDB server & Securing It
description: We'll run you through the steps on how to set one up and secure a MongoDB server.
thumbnail: ./thumbnails/database.png
date: "2019-11-28"
tags: ["database", "MongoDB"]
published: true
---

## An Introduction

If you want to start making websites that have functionality then sooner or later you're going to have to deal with databases. If you're here, I'm guessing you've picked MongoDB as your database of choice.

This article will run you through the steps on how to set up a database server and the nuances of running one.

For this tutorial we'll assume the server is running ubuntu 18.04.

## Dedicated or Local Database Server?

A question you need to consider is whether to have a dedicated server for your DB or to have it running alongside your services on one server.

Both have their advantages and disadvantages which I'll try and outline here:

Advantages of a dedicated DB server:

- Scalability: Separating your DB and web server from one another allows for easier scaling. If your database needs more resources and not your webserver, then you would simply allocate more resources to your DB server, avoiding having to add resources to both.
- Performance: Having two separate servers means that they're not competing against one another for resources.

> 2 boxes = 2 times the CPU, 2 times the RAM, and 2 times the spindles for disk access. ~ Mark Brackett - Stack Overflow

Disadvantages of a dedicated DB server:

- Latency: Depending on your implementation you could run into latency issues. If for example, your web server is hosted in a different region to your DB server then your response times between your servers will increase, thus slowing down the performance of your service. This can be negated by setting up virtual networks (as we'll discuss below).
- More Expensive: Running two separate servers apposed to only one means double the cost. Now, this is highly dependant on your size. If you only have one service and need a DB then it may be worth while combining the two until your needs grow.

## Installing MongoDB

I'm going to confess, server orchestration and dev ops isn't my forte, however, like any good full-stack developer you need to learn to get your hands dirty.

Now, if you're not using Ubuntu, then check out Digital Ocean's installation tutorial. Their tutorials are a great resource to have for all things backend related.

```bash

sudo apt update

sudo apt install -y mongodb

```

After those two commands you should have MongoDB running on your server. To check this, run the following command:

```bash
sudo systemctl status mongodb
```

Now you should see that it says active in the output:

```bash
Output
● mongodb.service - An object/document-oriented database
   Loaded: loaded (/lib/systemd/system/mongodb.service; enabled; vendor preset: enabled)
   Active: active (running) since Sat 2018-05-26 07:48:04 UTC; 2min 17s ago
     Docs: man:mongod(1)
 Main PID: 2312 (mongod)
    Tasks: 23 (limit: 1153)
   CGroup: /system.slice/mongodb.service
           └─2312 /usr/bin/mongod --unixSocketPrefix=/run/mongodb --config /etc/mongodb.conf
```

## Creating an Admin

Alright, we're almost good to go. Let's create an admin user for the Mongo Database.

First let's create an admin account for our database. Replace the `user` and `pwd` content with values that you prefer.

```bash
mongo --eval "db.getSiblingDB('admin').createUser({ user: 'admin', pwd: 'ThisIsAPassword123', roles: [ { role: 'userAdminAnyDatabase', db:'admin' } ] })"
```

It's recommended to give the "userAdminAnyDatabase" role to the admin with the intention that you would use this account to create new users with read/write privallages for a specific database. This behaviour means that the admin account can't create new database or edit existing ones which can be inconvenient.

Optional: If you'd like the admin user to act more like a super user in Linux then use the following command:

```bash
mongo --eval 'db.grantRolesToUser( "<adminUsername>", [ "dbAdminAnyDatabase", "readWriteAnyDatabase" ])'
```

## Enabling Authentication

Now that we have an admin user, we should secure our database by enabling authentication. This'll mean you'll have to log in to make changes to the database.

To do this open `/etc/mongodb.conf` with your preferred text editor (I like nano).

```bash
nano /etc/mongodb.conf
```

Then find the `#auth = true` line and remove the hash. This will uncomment the option which will enable it.

```bash
#auth = true => auth = true
```

### Optional: Change the default port

Whilst we're editing the config file, let's change the default port that MongoDB listens on. This is for security as it prevents would be attackers targeting this known port.

Remember ports 0 - 1023 are reserved

```bash
#port = 27017 => port = <Port of your choice>
```

### Restart MongoDB

Now, restart MongoDB for the changes to take affect:

```bash
systemctl restart mongodb
```

## Automate The Process

If what I've just told you seems too much to keep doing every time you want to install MongoDB then fear not.

Now that you understand the fundamentals of what's going on, you can use a script to automate that whole process. I've built one recently and you're free to use it or even improve upon it. Check it out [here](https://github.com/ScottEnock/mongoDB-server-startup-script).

## Conclusion

Congratulations! You now have a secure MongoDB server up and running!

If you'd like to know how to connect to your server from a client using a GUI then check out my other article here where I talk about other MongoDB considerations and gotchas.
