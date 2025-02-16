from pydantic import BaseModel
from deck import make_deck

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
        deck (list[str]): A list of cards left in the card pile
        deck_size (int): The number of cards left in deck, visible to all players
    '''
    id: int
    code: str = "ABC"
    players: dict = dict()
    player_count: int = 0

    started: bool = False

    current_turn: int = -1
    deck: list[str] = make_deck(4)
    deck_size: int = 52