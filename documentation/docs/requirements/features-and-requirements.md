---
sidebar_position: 4
---

# Features and Requirements
## Functional Requirements
- Users can create a game room or join others with a code (similar to Kahoot)
    - Each user types their name which will be included on the AAC board
- Users can connect with up to 3 other users to play Go Fish integrated with Augmentative and Alternative Communication (**AAC**) software
- Users will each have their own screen with a synced game state
    - Cards held in hand will be hidden from other players
- Users can communicate in real-time via an integrated AAC menu or by performing in-game actions
    - Text-To-Speech (**TTS**) will say selected messages out loud
- Users can use frequent game specific phrases included on AAC board for faster communications
    - Ability to quickly say common quick statements like yes/no/repeat
    - AAC Grid layout should be customizable
- Game will pause or indicate when a user is making an AAC message

## Non-Functional Requirements
- The Go Fish game should integrate seamlessly with AAC making it easy to switch between communication and the game 
    - Pausing to let an AAC user speak can help others build empathy for that user
- The application will have clear menu options for creating and joining game lobbies
    - Simple menu buttons and a number system like Kahoot should allow younger users to easily play with others
    - Clear icons with accessibility guidelines in mind
- The application will have clear instructions on game rules, potentially with a breif tutorial before gameplay
    - Make a multiplayer game application easily usable elementary school students while respecting a lower attention span
    - Clear audio and visual cues for game actions like asking for a card  
- Application will stay in line with the standard accessibility guidelines 
    - Especially those applied to AAC and accomodating those with disabilities
- The application will feature modifications to the base Go Fish game to be more interesting to children
    - Customizable card decks (for example, instead of card ranks there could be ranks of animals or foods)

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
