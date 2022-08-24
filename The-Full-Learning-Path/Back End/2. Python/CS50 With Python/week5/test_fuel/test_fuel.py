import pytest
from fuel import convert , gauge

def main():
    test_fuel()

def test_convert():
    assert convert("1/4") == 25
    assert convert("3/4") == 75
    assert convert("3/4") != "75"

def test_value_error():
    with pytest.raises(ValueError):
        convert('cat/dog')
        convert('three/four')

def test_zero_division():
    with pytest.raises(ZeroDivisionError):
        convert('5/0')
        convert('1/0')


def test_gauge():
    assert gauge(1)  != "1%"
    assert gauge(99)  != "99%"
    assert gauge(50) != "50"
    assert gauge(0)  == "E" or gauge(1)  == "E"
    assert gauge(100) == "F" or gauge(99) == "F"




if __name__ == "__main__":
    main()