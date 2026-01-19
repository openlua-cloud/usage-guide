---
sidebar_position: 3
description: ""
pagination_next: null
---

# Removing a game
This page explains the process of using our Game Remover. All our Game Remover does is delete the lua file from your Steam directory, effectively removing it from your library. If you wish to delete the file manually rather than using our Game Remover, go to `C:\Program Files (x86)\Steam\config\stplug-in`, delete the lua file for your game and restart Steam through SteamTools.

### 1. [Download](https://github.com/openlua-cloud/game-remover/releases/latest/download/game-remover.exe) and run the Game Remover

:::note
**The Game Remover is open-source!** [Check it out on GitHub](https://github.com/openlua-cloud/game-remover/)
:::

### 2. Select your Steam directory

1. Click the **Browse** button in the Game Remover
2. In most cases, the tool will automatically navigate to your Steam directory. If it did, simply click **Select Folder**

<details>
<summary>If the Steam directory wasn't selected automatically</summary>

Manually navigate to your Steam installation folder, or copy and paste this path into the address bar at the top of the File Explorer window:
```
C:\Program Files (x86)\Steam\config\stplug-in
```

![The address bar](images/4f9f51e6-93d7-4176-99ac-69a83c5f28cf.png)<br></br>
<sub>The address bar</sub>

</details>

### 3. Retrieve the AppID
1. Open the [Steam Store search](https://store.steampowered.com/search) and search for the game you want to remove
2. Click on the game in the search results
3. Copy the AppID from the URL

:::info
The AppID is the number that appears after `/app/` in the URL. For example:<br></br>
In `https://store.steampowered.com/app/70/HalfLife/`, the AppID is **70**
:::

### 4. Remove the game from your library
1. Paste the AppID in the "Enter game ID" field
2. Click on the Delete Game button
3. Restart Steam through SteamTools

### Congrats!
If you've followed all of the steps correctly, you should have removed the game from your Steam Library.