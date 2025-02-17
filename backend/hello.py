from typing import Union

from fastapi import FastAPI, WebSocket
from .models import Message, MessageKind, QueryResponse

app = FastAPI()

@app.get("/")
async def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
async def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}


@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()

    while True:
        data = await websocket.receive_text()

        try:
            message = Message.parse_raw(data)
        except Exception as e:
            await websocket.send_text(f"[Server] Error: {str(e)}")
        else:
            match message.data.type:
                case MessageKind.query:
                    query = message.data
                    response = QueryResponse(type=MessageKind.query_response, count=2)
                    await websocket.send_text(f"[Server] Query received for player {query.target_player_id}, card {query.card}. Responding with count: {response.count} (placeholder)")
                
                case MessageKind.chat:
                    chat = message.data
                    await websocket.send_text(f"[Server] Chat received from player {message.source_player_id}: {chat.message}")
                
                case _:
                    await websocket.send_text("[Server] Unknown message type received.")

                
