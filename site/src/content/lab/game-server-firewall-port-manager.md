---
title: "Game Server Firewall Port Manager"
description: "Notes from building a PowerShell script to manage firewall rules for self-hosted game servers."
date: 2026-04-26
status: "active"
tags:
  - PowerShell
  - Windows Server
  - Automation
  - Home Server
---

## What this is

This note is about a PowerShell script I built to make game server firewall management easier on my home server.

The original problem was simple: opening and closing the right ports for different dedicated game servers becomes annoying when everything is handled manually.

## Why I built it

Before the Discord bot idea became clear, I was looking for a cleaner way to manage firewall rules for different games.

I wanted a script where I could choose a game, open the required ports, and later remove all temporary game-related firewall rules when they were no longer needed.

## How it works

The script runs as administrator and manages Windows Firewall rules with PowerShell.

It can:

- open predefined TCP or UDP ports for different games
- remove existing rules before creating new ones
- close all rules matching `Game - *`
- keep the firewall rules named consistently

The menu includes several games, such as 7 Days to Die, Valheim, Palworld, Minecraft, Conan Exiles, ARK, Enshrouded, V Rising and Soulmask.

## What this led to

This script became the first step toward a bigger idea.

Once the firewall part existed, it made sense to think about the next layer:

- starting servers
- stopping servers
- checking status
- running backups
- controlling everything through Discord

That thinking eventually led into the Discord server control bot.

## What I learned

This was a good reminder that small scripts can become building blocks.

The firewall script was not just a standalone helper. It became part of a larger server management workflow.

It also made the next project easier to reason about, because one problem was already isolated and solved.

## What I want to remember

Start with the annoying manual task.

Solve that first.

Then build the larger system around it.