---
sidebar_position: 2
---

# System Block Diagram

```mermaid
graph TD
    Player["👤 Player [person]<br>Player using the web application game"]
    WebApp["🐳 🐍 <span style='font-size:18px'><b>Web Application</b></span><br>[Container: <span style='font-size:16px'><b>FastAPI</b></span>]<br>Delivers static content,<br>handles game sessions, and actions"]
    SPA["🐳 ⚛️ <span style='font-size:18px'><b>Single Page Application</b></span><br>[Container: <span style='font-size:16px'><b>React</b></span>]<br>Implements AAC and<br>game functionality"]

    Player -->|"Visits domain.com using [HTTPS]"| WebApp
    Player -->|"Plays game through web browser"| SPA
    SPA -->|"Displays game state and actions"| Player

    WebApp <-->|"Sends and receives game actions via [WSS]"| SPA
    WebApp -->|"Delivers to browser"| SPA
    classDef docker fill:#f9f9f9,stroke:#0db7ed,stroke-width:2px
    class WebApp,SPA docker
```

## Web Application

Responsible for:

* Maintaining game session state, e.g. customer orders, completed orders, and player actions.
* Broadcasting game actions to all players. Actions done by one player are seen by others.

## Single Page Application

Game runs here. Responsible for:

* Implementing AAC functionality and letting it control the game actions.
* Implementing game logic and visuals. Game rules should not be validated.
* Game updates to **Web Application**.
