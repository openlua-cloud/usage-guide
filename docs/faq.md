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
<summary>Can I play multiplayer games? Will I be able to play with people who bought the game legitimately?</summary>

> Can I play multiplayer games?

Yes, but it requires some extra steps. You'll be guided through them after you download a game from the website that has multiplayer.

> Will I be able to play with people who bought the game legitimately?

Yes, but they have to install the Online-Fix too.

</details>

<details>
<summary>What's Spacewar and why is that the game my friends get invited to once I invite them?</summary>

That's completely normal. If your friend bought the game they have to install the Online-Fix too.

</details>

<details>
<summary>Can I use the workshop?</summary>

Yes, you can use the workshop directly like with your purchased games.

</details>

<details>
<summary>Where are the games downloaded from?</summary>

The games' files are downloaded from official Steam content servers.

</details>

## Generator (openlua.cloud)

<details>
<summary>Why is there no zip file? Why is it just a single .lua file?</summary>

This is completely normal, it's supposed to be like that. Just import that single file into SteamTools.

</details>

## Troubleshooting

<details>
<summary>**[COMMON ISSUE]** Games added with SteamTools not appearing in my library/saying `PURCHASE`</summary>

Update your SteamTools: [Download the installer](https://steamtools.net/res/st-setup-1.8.19.exe), run it, and go through all of the steps

If you've used a script that downgrades your Steam version to the 32-bit version, you also need to remove the update lock. Open PowerShell as administrator and paste this:
```powershell
irm -useb https://manifestor.cc/undo-steam-downgrade.ps1 | iex
```
then press Enter and wait until the process finishes.

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