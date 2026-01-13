---
sidebar_position: 2
pagination_next: null
sidebar_class_name: hidden
description: ""
---

# Frequently Asked Questions

## General
<details>
<summary>What's SteamTools?</summary>

It's a tool developed by chinese hackers used for injecting Lua & Manifest files into Steam.

</details>

<details>
<summary>Can my Steam account get banned?</summary>

No. Games and DLCs added with SteamTools are completely client-side, and are not visible to Steam servers.

</details>

<details>
<summary>Does Steam Cloud work?</summary>

Yes, but it's pretty buggy - doesn't always work and is known to lose saves.

</details>

<details>
<summary>Can I play multiplayer/online games?</summary>

Yes, but you need to install online fixes for the multiplayer games you want to play. You'll be prompted to download them when you download multiplayer games from the website.

</details>

<details>
<summary>Can I play online with my friends who bought the game?</summary>

Yes, but your friends have to install the same online fix as you did.

</details>

<details>
<summary>Why are my friends getting an invite to play Spacewar?</summary>

That's completely normal.

</details>

<details>
<summary>Does the workshop work?</summary>

Yes, the workshop works regularly just like with your purchased games. Please note that the workshop will only work for games marked with the `Workshop` badge on the website

</details>

<details>
<summary>Where are the games downloaded from?</summary>

The game files are downloaded directly from official Steam content servers - the same place Steam downloads them from normally.

</details>

## Generator (openlua.cloud)

<details>
<summary>Why is there no zip file? Why is it just a single .lua file?</summary>

That's completely normal, it's supposed to be like that. Just drag and drop that single file onto SteamTools.

</details>

<details>
<summary>What does `DRM/Restrictions detected` mean?</summary>

That means that the game contains extra security measures, and there's no bypass for it available.

</details>

## Troubleshooting

<details>
<summary>**[COMMON ISSUE]** Games added with SteamTools not appearing in my library/saying `PURCHASE`</summary>

Your SteamTools version is outdated. [Download the installer](https://cdn.openlua.cloud/st-setup-latest.exe), run it, and click Next -> Install -> Finish.

:::warning YOU ONLY NEED TO DO THE FOLLOWING IF YOU'VE DOWNGRADED YOUR STEAM INSTALLATION
Open PowerShell as administrator and paste this:
```powershell
irm -useb https://manifestor.cc/undo-steam-downgrade.ps1 | iex
```
then press Enter and wait until the process finishes.
:::

</details>

<details>
<summary>Why is an error like this popping up when I start the game? What's Denuvo Anti-Tamper? ![](images/denuvo.png)</summary>

If you're seeing this error when launching a game, forget about playing that game for free. It means that the game has Denuvo Anti-Tamper, which doesn't have any public (universal) bypasses.

<details>
<summary>What's Denuvo Anti-Tamper?</summary>

Denuvo Anti-Tamper is a digital anti-piracy technology used in PC video games.

It's designed to make it much harder and slower for pirates/crackers like us to crack or reverse-engineer a game's executable file.

It works by encrypting and obfuscating parts of the game's code, acting as a protective layer around the game's existing Digital Rights Management (DRM) system (like Steam's or Origin's).
</details>

</details>

<details>
<summary>How do I fix the “Content Configuration Unavailable” error?</summary>

Go to `C:\Program Files (x86)\Steam\appcache` and delete the `appinfo.vdf` file.

</details>