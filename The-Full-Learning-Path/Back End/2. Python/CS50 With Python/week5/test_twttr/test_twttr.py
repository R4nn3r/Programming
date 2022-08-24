from twttr import shorten


def main():
    test_twttr()
    
def test_noreplacment():
    assert shorten("twttr") == "twttr"

def test_lower():
    assert shorten("twitter") == "twttr"

def test_upper():
    assert shorten("TWITTER") == "TWTTR"
    
def test_numbers():
    assert shorten("0") == "0"
    assert shorten("123") == "123"
    assert shorten("-1") == "-1"
    
def test_punctuation(): 
    assert shorten("twitter,") == "twttr,"
    

if __name__ == "__main__":
    main()
