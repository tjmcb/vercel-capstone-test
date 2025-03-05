import pytest

from backend import models


@pytest.mark.parametrize(
    "data,expected",
    [],
)
def test_message_deserialize(data: str, expected: models.BaseModel) -> None:
    """Test that Pydantic field discriminator is working as expected."""
    model = models.Message.validate_json(data)
    assert model.data == expected
