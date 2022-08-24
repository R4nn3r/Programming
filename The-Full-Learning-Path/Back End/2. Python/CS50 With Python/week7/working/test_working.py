from working import convert
import pytest

def main():
    test_form()
    test_wordcase()
    test_outofboundnumber()
    test_correct_case()


def test_form():
    assert convert("9:00 AM to 5:00 PM") == "09:00 to 17:00"
    assert convert("9 AM to 5 PM") == "09:00 to 17:00"

    with pytest.raises(ValueError):
        convert('10:7 AM - 5:1 PM')
    with pytest.raises(ValueError):
        convert('9 AM - 5 PM')


def test_wordcase():
    with pytest.raises(ValueError):
        convert("9:00 am to 5:00 pm")
    with pytest.raises(ValueError):
        convert("9 am to 5 pm")


def test_outofboundnumber():
    with pytest.raises(ValueError):
        convert("9:60 am to 5:60 pm")
    with pytest.raises(ValueError):
        convert("8:60 am to 4:60 pm")


def test_correct_case():
    assert convert("9:00 AM to 5:00 PM") == "09:00 to 17:00"
    assert convert("9 AM to 5 PM") == "09:00 to 17:00"


if __name__ == "__main__":
    main()