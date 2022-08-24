def main():
     #prompts the user for the name of a file
    file_ = input("File name: ").strip().lower()

    answer = file_.replace(".txt.pdf",".pdf.txt")
    file_ = answer


     # disjoin the files suffixes and store in a variable
    if "." in file_:
        file_ = file_.split(".")
        filen_ = file_[1]
        file(filen_)
    else:
        file(file_)


def file(x):
    if ((x == "gif")):
        print("image/gif")
    elif ((x == "jpg") or (x == "jpeg")):
        print("image/jpeg")
    elif (x == "pdf"):
        print("application/pdf")
    elif (x == "txt"):
        print("text/plain")
    elif (x == "zip"):
        print("application/zip")
    elif (x == "png"):
        print("image/png")
    else:
        print("application/octet-stream")


main()
