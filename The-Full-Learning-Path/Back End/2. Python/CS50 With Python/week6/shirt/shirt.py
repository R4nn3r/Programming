from sys import exit, argv
from PIL import Image, ImageOps
from os.path import splitext

def main():
    check_command_line(argv)


def check_command_line(argv):
    check = ['JPG','jpg','JPEG','jpeg', 'PNG', 'png']
    try:
        if len(argv) < 3:
            exit("Too few command-line arguments")
        elif len(argv) > 3:
            exit("Too many command-line arguments")
        a, b = argv[1].split('.')
        c, d = argv[2].split('.')

        if d not in check:
            exit("Invalid output")
        elif b not in check:
            exit("Invalid input")
        elif b != d:
            exit('Input and output have different extensions')
        edit(argv[1], argv[2])
    except FileNotFoundError:
        exit(f'Input does not exist')

def edit(before, after):
    image = Image.open(before)
    image_ = Image.open('shirt.png')

    size_2 = image_.size

    muppet = ImageOps.fit(image, size_2)

    muppet.paste(image_, image_)
    muppet.save(after)


if __name__ == '__main__':
    main()