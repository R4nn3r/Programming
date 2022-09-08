import pytube

link = input("Enter Link: ")
yt = pytube.YouTube(link)

yt.streams.first().download()

print('Downloaded', link)