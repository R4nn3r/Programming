import matplotlib.pyplot as plt 
import numpy as np

x = range(1,11)
y = [i**4 for i in x]


plt.style.use('Solarize_Light2')
fig , ax = plt.subplots()
# ax.plot(x,y, c="red",linewidth=2)
# ax.scatter(x,y, c="red",s=20)
# ax.scatter(x, y, c=x, cmap=plt.cm.Blues, s=10)
ax.bar(x,y, color='green', edgecolor='black', linewidth=1)
       

ax.set_title("Cube Numbers", fontsize=11)
ax.set_xlabel("Value", fontsize=11)
ax.set_ylabel("Cube of Value", fontsize=11)



ax.axis([0 ,15 ,0 ,12000]) # [xmin, xmax, ymin, ymax]

plt.show()