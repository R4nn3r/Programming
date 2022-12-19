#include <iostream>

/* 
    enqueue - This adds a data value to the rear of the queue.
    dequeue - This removes the data value on front of the queue
    Peek - This returns the front and end data value of the stack
 */

using namespace std;

int queue[100], n = 100, front = -1, rear = -1; 


/* Check if the Queue is Empty or Not */
int check(){
  if(rear == -1 && front == -1){
    return 0;
  }else{
    return 1;
  }
}

/* Push element to the end [enqueue] */
void enqueue(int val){
  if(rear == -1){
    rear++;
    front++;
    queue[rear] = val;
  }else{
    rear++;
    queue[rear] = val;
  }
}

/* Pop element from the front [dequeue] */
void dequeue(){
  if(check()){
    front++;
  }else{
    cout << "Queue is empty" << endl;
  }
}


/* Traverse the Queue */
void traverse(){
  if(check()){
    cout << "Traversing the queue -> ";
    for(int i = front; i <= rear; i++){
      cout << queue[i] << " ";
    }
    cout << endl;
  }else{
    cout << "Queue is empty" << endl;
  }
}

/* Return the Front and Rear Elements */
void Peek(){
  cout << "Front -: " << queue[front] << endl;
  cout << "Rear -: " << queue[rear] << endl;
}



int main(){
  if(check()){
    cout << "Queue is Not Empty" << endl;
  }else{
    cout << "Queue is empty" << endl;
  }

  enqueue(10);
  enqueue(20);
  enqueue(30);
  enqueue(40);
  Peek();

  traverse();

  dequeue();
  dequeue();



  traverse();

  Peek();


  return 0;
} 