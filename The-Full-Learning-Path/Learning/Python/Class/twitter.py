import re 


url = input("URL: ").strip()

matches = re.search(r"^https?://(?:www\.)?twitter\.(.+)/(\w+)", url, re.IGNORECASE)

if matches.group(1) == "com":
    print(f"Username:" , matches.group(2))
else:
    print(".org :(")