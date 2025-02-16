from pydantic import BaseModel

class Player(BaseModel):
    '''
    A class representing a player's ingame data

    Attributes:
        id (int): The player's internal ID
        code (str): The code used to join the game
        socket (): TODO: A web socket object (this is probably its own class idk yet)

        cards (list[str]): A list of cards this player has, private
        books (list[str]): A list of books this player has, visible to other players
        card_count (int): However many cards this player has, visible to other players
    '''
    id: int
    name: str = "Unnamed Player"
    socket: None = None

    cards: list[str] = []
    books: list[str] = []
    card_count: int = 0