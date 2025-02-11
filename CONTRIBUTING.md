# Contributing

## Backend

The backend uses FastAPI. We use `uv` (see [uv](https://docs.astral.sh/uv/) to
install). Use `uv sync --dev` to create a venv.

To run the server in development mode, use `uv run -- fastapi dev hello.py`. To
run the tests, use `uv run -- pytest`.
