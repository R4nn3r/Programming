from bank import value

def main():
    test_bank()


def test_if_hello():
    assert value("Hello") == 0

def test_not_hello():
    assert value("My guy") == 100
    assert value("What's up?") == 100
    assert value("sir, goodevening?") == 100
    assert value("1234") == 100

def test_sparated_space():
    assert value("Hello Guy are u good?") == 0

def test_sparated_comma():
    assert value("Hello, My Guy") == 0

def test_first_letter():
    assert value("Hi sir") == 20
    assert value("Hi there") == 20



if __name__ == "__main__":
    main()