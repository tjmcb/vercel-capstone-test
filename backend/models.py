from enum import StrEnum
from typing import Literal

from pydantic import BaseModel, Field


class MessageKind(StrEnum):
    """Enum for different message kinds."""

    query = "query"
    query_response = "query_response"
    chat = "chat"


class Query(BaseModel):
    """
    Represents the action of a player asking for a card.

    Attributes:
        target_player_id: The id of the player being asked for cards.
    """

    type: Literal[MessageKind.query]
    target_player_id: int
    card: int


class QueryResponse(BaseModel):
    """
    The server response to a player query.

    Attributes:
        count: Non-negative number of cards the target player had.
    """

    type: Literal[MessageKind.query_response]
    count: int


class Chat(BaseModel):
    """
    Represents a chat message from a player.

    Attributes:
        message: The message.
    """

    type: Literal[MessageKind.chat]
    message: str


class Message(BaseModel):
    """
    Represents a generic message.

    Attributes:
        source_player_id: The id of the player that sent this message.
    """

    data: Query | QueryResponse | Chat = Field(discriminator="type")
    source_player_id: int
