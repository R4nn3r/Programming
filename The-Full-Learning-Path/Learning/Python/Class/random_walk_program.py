import matplotlib.pyplot as plt

from random_walk_generator import RandomWalk as rw

    # make a random walk instance 
walk = rw()
walk.fill_walk()

    # plot the points in the walk

plt.style.use("classic")
fig, ax = plt.subplots()
ax.scatter(walk.x_values, walk.y_values, c="black", s =5)

plt.show()