from pydantic import BaseModel

def make_deck(x):
    '''
    Makes a deck composing of x of each card

    Parameters:
        x (int): The amount of each card to add to deck
    '''

    # Single character representation of a deck of cards, no suits
    cards = ["A","2","3","4","5","6","7","8","9","T","J","Q","K"]

    # Add x of each card to deck
    deck = []
    
    for card in cards:
        for i in range(x):
            deck.append(card)

    return deck

class Lobby(BaseModel):
    '''
    A class representing a game state

    Attributes:
        id (int): The lobby's internal ID
        code (str): The code used to join the lobby
        players (dict): A list of player objects participating in the game
        player_count (int): Number of players in game, max 4

        started (bool): Whether the game has started

        current_turn (int): The ID of the player whose turn it current is

    Methods:
        get_deck_count(): Returns size of the deck
    '''
    id: int
    code: str = "ABC"
    players: dict = dict()
    player_count: int = 0

    started: bool = False

    current_turn: int = -1
    deck: list[str] = make_deck(4)

    def get_deck_count(self):
        return len(self.deck)

class Player(BaseModel):
    '''
    A class representing a player's ingame data

    Attributes:
        id (int): The player's internal ID
        code (str): The code used to join the game
        socket (): TODO: A web socket object (this is probably its own class idk yet)

        cards (list[str]): A list of cards this player has, private
        books (list[str]): A list of books this player has, visible to other players

    Methods:
        get_card_count(): Returns player's hand size
    '''
    id: int
    name: str = "Unnamed Player"
    socket: None = None

    cards: list[str] = []
    books: list[str] = []

    def get_card_count(self):
        return len(self.cards)

