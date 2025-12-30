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

No. The games you add with SteamTools are fully client-side, and are not visible to Steam servers.

</details>

<details>
<summary>Does Steam Cloud work?</summary>

Yes, but it's pretty buggy - doesn't always work and is known to lose saves.

</details>

<details>
<summary>Can I play multiplayer/online games?</summary>

Yes, but you need to install Online-Fixes for the multiplayer games you want to play. You'll be prompted to download one once you download a multiplayer game from the website.

</details>

<details>
<summary>Can I play online with people who bought the game?</summary>

No, you can only play with others who have also installed the Online-Fix. If you want to play with friends who bought the game, they'll also need to install the Online-Fix.

</details>

<details>
<summary>What's Spacewar and why is that the game my friends get invited to once I invite them?</summary>

That's completely normal.

</details>

<details>
<summary>Can I use the workshop?</summary>

Yes, you can use the workshop directly like with your purchased games. (For games marked with the `Workshop` badge on the website)

</details>

<details>
<summary>Where are the games downloaded from?</summary>

The game files are downloaded directly from official Steam content servers - the same place Steam downloads them from normally.

</details>

## Generator (openlua.cloud)

<details>
<summary>Why is there no zip file? Why is it just a single .lua file?</summary>

This is completely normal, it's supposed to be like that. Just import that single file into SteamTools.

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