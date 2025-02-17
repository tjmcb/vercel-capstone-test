---
sidebar_position: 5
---

# Use Case Descriptions
## **Use Case 1 - Start a Lobby**
1. The user accesses the web application and sees the option to start or join a game.
2. The user clicks the "Start Lobby" button.
3. The user receives a unique game code.
4. The user copies the game code and shares it with friends.

```mermaid
sequenceDiagram
    participant LobbyCreator as Lobby Creator
    participant WebApplication as Web Application
    participant Backend
    participant OtherPlayers as Other Players

    LobbyCreator->>WebApplication: Accesses the web application
    WebApplication-->>LobbyCreator: Return landing page
    LobbyCreator->>WebApplication: Clicks the "Start Lobby" button
    WebApplication->>Backend: Request unique game code
    Backend-->>WebApplication: Return unique game code
    WebApplication-->>LobbyCreator: Return the lobby leader screen with the unique game code
    LobbyCreator->>OtherPlayers: Shares the game code with external communication
```


## **Use Case 2 - Join a Lobby**
1. The user accesses the web application and sees the option to start or join a game.
2. The user clicks the "Join Game" button.
3. The user is taken to a new screen to enter the game code.
4. The user enters the game code provided by a friend.
5. The user clicks the "Join" button.
6. The user sees the lobby page.

```mermaid
sequenceDiagram
    participant User
    participant WebApplication as Web Application
    participant Backend

    User->>WebApplication: Accesses the web application
    WebApplication-->>User: Return landing page
    User->>WebApplication: Clicks the "Join Game" button
    WebApplication-->>User: Displays game code entry screen
    User->>WebApplication: Enters game code
    User->>WebApplication: Clicks the "Join" button
    WebApplication->>Backend: Validates game code and informs of new player
    Backend-->>WebApplication: Return game details or error
    WebApplication-->>User: Display lobby page
```

## **Use Case 3 - Start a Game**
**Starts from:**
* [Use Case 1](#use-case-1---start-a-lobby).

1. The user sees a list of players who have joined the lobby.
2. The user clicks the "Start Game" button to begin the game.
3. The user is taken to the game board and sees their starting hand.

```mermaid
sequenceDiagram

    participant LobbyCreator as Lobby Creator
    participant WebApplication as Web Application
    participant Backend

    LobbyCreator->>WebApplication: Sees list of players in the lobby
    LobbyCreator->>WebApplication: Clicks the "Start Game" button
    WebApplication->>Backend: Initiates game start
    Backend-->>WebApplication: Return game state and starting hands
    WebApplication-->>LobbyCreator: Displays game page and starting hand
```

## **Use Case 4 - Lobby starts**
**Starts from:**
* [Use Case 2](#use-case-2---join-a-lobby).

1. The user sees a list of players who have joined the lobby.
2. The user waits for the lobby leader to click the "Start Game" button.
3. The user sees a message indicating that the game has started.
4. The user is taken to the game board and sees their starting hand.

```mermaid
sequenceDiagram

    participant User
    participant LobbyLeader as Lobby Leader
    participant WebApplication as Web Application
    participant Backend

    LobbyLeader->>WebApplication: Clicks the "Start Game" button
    WebApplication->>Backend: Initiates game start
    Backend-->>WebApplication: Return game state and starting hands
    WebApplication-->>User: Displays message that game has started
    WebApplication-->>User: Displays game board and starting hand
```
## **Use Case 5 - Take a Card from a Player Successfully**
**Starts from:**
* [Use Case 3](#use-case-3---start-a-game).
* [Use Case 4](#use-case-4---be-in-a-lobby-that-started).
* [Use Case 5](#use-case-5---take-a-card-from-a-player-successfully).

1. The user sees that it is their turn to play.
2. The user clicks on a card in their own hand to select it.
3. The user clicks on another player’s cards to request the selected card.
4. The other player has one or more of the requested card(s).
5. The user sees all copies of the requested card(s) move from the other player’s hand to their own.
6. The user sees a message confirming the successful request, and their turn continues.

```mermaid
sequenceDiagram

    participant User
    participant WebApplication as Web Application
    participant Backend
    participant OtherPlayer as Other Player

    User->>WebApplication: Clicks on a card in their hand to select that type
    User->>WebApplication: Clicks on another player's hand to request that type from the player
    WebApplication->>Backend: Update backend on card request
    Backend-->>WebApplication: Return result of request
    WebApplication-->>User: Move requested card(s) from the other player's hand to user's hand
    WebApplication-->>User: Display message confirming result of card request
    WebApplication-->>User: Continue user's turn

```
## **Use Case 6 - Take a Card from a Player and Fail ("Go Fish")**
**Starts from:**
* [Use Case 3](#use-case-3---start-a-game).
* [Use Case 4](#use-case-4---be-in-a-lobby-that-started).
* [Use Case 5](#use-case-5---take-a-card-from-a-player-successfully).

1. The user sees it is their turn.
2. The user clicks on a card in their own hand to select it.
3. The user clicks on another player’s cards to request that card.
4. The other player does not have the requested card.
5. The user sees and hears a "Go Fish" message.
6. The user receives a card from the deck if there are any.
7. If the user now has four of a kind - [Use Case 7](#use-case-7---place-a-four-of-a-kind-set-in-the-pool-automatically).
8. The user’s turn automatically ends.

```mermaid
sequenceDiagram

    participant User
    participant WebApplication as Web Application
    participant Backend
    participant OtherPlayer as Other Player

    User->>WebApplication: Clicks on a card in their hand to select that type
    User->>WebApplication: Clicks on another player's hand to request that type from the player
    WebApplication->>Backend: Update backend on card request
    Backend-->>WebApplication: Return result (player does not have the requested card)
    WebApplication-->>User: Display "Go Fish" message and sound
    WebApplication->>WebApplication: Check if card is available in the deck
    WebApplication-->>User: Give the user a card from the deck (if available)
    WebApplication->>Backend: Update backend on card draw
    WebApplication-->>User: End user's turn automatically

```

## **Use Case 7 - Place a Four-of-a-Kind Set in the Pool Automatically**
**Starts from:**
* [Use Case 5](#use-case-5---take-a-card-from-a-player-successfully).
* [Use Case 6](#use-case-6---take-a-card-from-a-player-and-fail-go-fish).

1. The user collects four matching cards in their hand.
2. The four matching cards automatically move to the pool.
3. The user sees their completed set displayed on the board.
4. The user sees a message confirming the completed set.

```mermaid
sequenceDiagram

    participant User
    participant WebApplication as Web Application
    participant Backend

    User->>WebApplication: Collects four matching cards in their hand
    WebApplication->>Backend: Update backend with the completed set
    WebApplication-->>User: Move four matching cards to the pool
    WebApplication-->>User: Display completed set on the board
    WebApplication-->>User: Display message confirming completed set
```

## **Use Case 8 - Run Out of Cards and Draw More**

1. The user puts down a set or gets cards taken from them and has an empty hand.
2. The user immediately and automatically draws upto 3 cards from the deck.

```mermaid
sequenceDiagram
    participant User
    participant WebApplication as Web Application
    participant Backend

    User->>WebApplication: Puts down a set or gets cards taken, hand is empty
    WebApplication->>Backend: Update backend with request to draw up to 3 cards
    Backend-->>WebApplication: Return up to 3 cards 
    WebApplication-->>User: Show user receiving up to 3 cards
```

## **Use Case 9 - Run Out of Cards Completely**

1. The user puts down a set or gets cards taken from them and has an empty hand.
2. The user cannot draw any cards as the deck is empty.
3. The user will pass their turn automatically if it becomes their turn.

```mermaid
sequenceDiagram
    participant User
    participant WebApplication as Web Application
    participant Backend

    User->>WebApplication: Puts down a set or gets cards taken, hand is empty
    WebApplication->>Backend: Check if cards are available in the deck
    Backend-->>WebApplication: No cards available in the deck
    WebApplication-->>User: Display message saying no cards available
    WebApplication-->>User: Automatically pass user's turn
```

## **Use Case 10 - Use Game Text Chat**
1. The user clicks the "Chat" button.
2. The user types a message in the chat input box.
3. The user clicks the send button.
4. The user sees their message appear in the chat window.

```mermaid
sequenceDiagram
    participant User
    participant WebApplication as Web Application
    participant Backend

    User->>WebApplication: Clicks the "Chat" button
    WebApplication-->>User: Display chat window
    User->>WebApplication: Starts typing a message
    WebApplication-->>User: Display message as it is being typed
    User->>WebApplication: Clicks the send button
    WebApplication->>Backend: Send message to backend
    Backend-->>WebApplication: Acknowledge message received
    WebApplication-->>User: Display message in chat window
```

## **Use Case 11 - Receive Message in Game Text Chat**
1. The user clicks the "Chat" button.
2. The user sees previously sent messages.
3. The user sees an indicator someone else is typing.
4. The user sees someone else's message appear in the chat window.

```mermaid
sequenceDiagram
    participant User
    participant WebApplication as Web Application
    participant Backend
    participant Player 2
    participant Player 2 Web Application

    User->>WebApplication: Clicks the "Chat" button
    WebApplication->>Backend: Retrieve previously sent messages
    Backend-->>WebApplication: Return list of previously sent messages
    WebApplication-->>User: Display previously sent messages

    Player 2->>Player 2 Web Application: Starts typing a message
    Player 2 Web Application->>Backend: Notify that Player 2 is typing
    Backend-->>WebApplication: Broadcast that Player 2 is typing
    WebApplication-->>User: Show indicator that Player 2 is typing

    Player 2 Web Application->>Player 2: Clicks the "Send" button
    Player 2 Web Application->>Backend: Sends typed message to backend
    Backend-->>Player 2 Web Application: Acknowledge that the message was received
    Backend-->>WebApplication: Send out Player 2's message to other users
    WebApplication-->>User: Display Player 2's message in chat window
```

## **Use Case 12 - Use the AAC Menu**
1. The user clicks the "AAC Menu" button.
2. The user selects a phrase or word from the menu.
3. The user sees the selected phrase appear in the chat.
4. The user hears the phrase read aloud.

```mermaid
sequenceDiagram
    participant User
    participant WebApplication as Web Application
    participant Backend
    participant Other User's Frontend

    User->>WebApplication: Clicks the "AAC Menu" button
    WebApplication-->>User: Display AAC Menu with available phrases/words with pictures
    User->>WebApplication: Selects a phrase or word from the menu
    WebApplication->>Backend: Send selected phrase or word 
    Backend-->>WebApplication: Acknowledge selected phrase or word
    WebApplication-->>User: Display selected phrase or word in the chat
    Backend->>Other User's Frontend: Broadcast selected phrase to other users
    WebApplication-->>User: Play the phrase out loud
```

## **Use Case 13 - Receive AAC Communication**
1. The user receives AAC communication.
2. The user sees the phrase or word displayed in the chat.
3. The user hears the phrase or word read out loud.

```mermaid
sequenceDiagram
    participant User as User
    participant WebApplication as Web Application
    participant Backend
    participant OtherUsersWebApplication as Other User's Web Application
    participant OtherUser as Other User

    OtherUser->>OtherUsersWebApplication: Selects AAC phrase or word
    OtherUsersWebApplication->>Backend: Sends selected AAC phrase or word
    Backend-->>WebApplication: Broadcasts AAC phrase or word
    WebApplication-->>User: Displays selected phrase or word in the chat
    WebApplication-->>User: Plays the phrase or word out loud
```

## **Use Case 14 - Win the Game**
**Starts from:**
* [Use Case 7](#use-case-7---place-a-four-of-a-kind-set-in-the-pool-automatically).

1. The user places their second four-of-a-kind set in the pool.
2. The user sees a message indicating they won.
3. The user sees the game end.

```mermaid 
sequenceDiagram
    participant User
    participant WebApplication as Web Application
    participant Backend

    User->>WebApplication: Places second four-of-a-kind set in the pool
    WebApplication->>Backend: Update backend with the completed set
    Backend-->>WebApplication: Acknowledge the second completed set and game result
    WebApplication-->>User: Display message indicating user won
    WebApplication-->>User: Display end game screen
```

## **Use Case 15 - End the Game When Only One Player Can Move**
**Starts from:**
* [Use Case 8](#use-case-8---run-out-of-cards).

1. The user sees that only one player has cards remaining.
2. The user sees a message indicating that the game has ended.
3. The user sees a message showing the only player with cards wins.

```mermaid
sequenceDiagram
    participant User
    participant WebApplication as Web Application
    participant Backend

    WebApplication->>Backend: Check if only one player can move
    Backend-->>WebApplication: Confirms only one player can move and that the game is over
    WebApplication-->>User: Display message indicating game is over
    WebApplication-->>User: Display message showing the winner
```

## **Use Case Diagram**
![Use Case Diagram](../../static/img/Usecase.drawio.png)
