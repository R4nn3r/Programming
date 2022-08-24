from um import count

def main():
    test_um()
    test_noum()
    test_formum()


def test_um():
    assert count(r"Um, thanks, um...") == 2
    assert count(r"Um?") == 1
    assert count(r"Um, thanks, um... um") == 3
    assert count(r"Um, thanks, um... um um ") == 4

def test_noum():
    assert count(r"thanks, for the album...") == 0
    assert count(r"This is such a yummy") == 0

def test_formum():
    assert count(r"umumum") == 0



if __name__ == "__main__":
    main()