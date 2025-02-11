---
sidebar_position: 4
---

# Features and Requirements
## Functional Requirements
- Users can connect with up to 3 other users to play Go Fish integrated with Augmentative and Alternative Communication (**AAC**) software.
- Users can communicate in real-time via an integrated AAC menu or by performing in-game actions.
    - Text-To-Speech (**TTS**) will say AAC messages out loud.
- Users can use frequent game specific phrases included on AAC board for faster communications.
    - Game actions will automatically use TTS without any extra AAC actions.
    - Ability to quickly say common quick statements like yes/no/repeat.
- Game will indicate when a user is making an AAC message.
- Users will each have their own screen with a synced game state.
    - Cards held in hand will be hidden from other players.
    - Users will see the actions other users take on their screen.
- Users can create a game room or join others with a code (similar to Kahoot).
    - Each user types their name which will be included on the AAC board.
- The application will have clear instructions on game rules, potentially with a breif tutorial before gameplay.

## Non-Functional Requirements
- Game menus should be simple and intuitive to maximize accesibility and minimize time taken per turn.
    - The game should have clear audio and visual cues for game actions like asking for a card.
- The Go Fish game should integrate seamlessly with AAC making it easy to switch between communication and the game.
- Application will stay in line with standard accessibility guidelines.
    - Especially those applied to AAC and accomodating those with disabilities.
- This web application should be compatible with mobile devices such as tablets.
- Connecting young users in a lobby should be simple enough to start games quickly.
- The application should feature modifications to the base Go Fish game to be more interesting to children.
    - Customizable card decks (for example, instead of card ranks there could be ranks of animals or foods).

### *Go Fish Game Rules and Requirements*
Go Fish is usually played with a single deck of 52 cards, although with virtual cards any number would be possible.
- How to Win:
    - Player collects 4-of-a-kind sets AKA *“books”*
    - The first player to play two books wins

- Dealing cards:
    - 2 players: `7 cards each`
    - 3 players: `6 cards each`
    - 4 players: `5 cards each`

- Gameplay loop:
    - Each player takes turns clockwise
    - *Assume “Player A” is the player whose turn it is, “Player B” is the player asked for a card*
        - Player A asks a player of their choice if they have a card
            - Player A must ask for a card already in their hand
        - If Player B has the card
            - Player B must give Player A all of the card requested
            - Player A gets another turn
        - If Player B does not have a card, they say "go fish!"
            - Player A must draw one card from the go fish pile and their turn ends
    - Turns continue until a player plays 2 books

- Extra Actions:
    - If a player gets any book, they must play them face up on the table, AKA the *“pool”*
    - If a player runs out of cards:
        - Draw [one / up to three] cards from the go fish pile
        - If there are no cards in the go fish pile, they cannot make any more moves
            - End the game if only one player left who can make a move
