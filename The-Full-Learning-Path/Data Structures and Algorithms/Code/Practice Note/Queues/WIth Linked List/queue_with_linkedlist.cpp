#include <iostream>
/* 
    enqueue - This adds a data value to the rear of the queue.
    dequeue - This removes the data value on front of the queue
    Peek - This returns the front and end data value of the stack
 */

using namespace std;

/* Structure of the Queue with a pointer to the next Element */
struct queue{
  int data;
  queue * next;
};

queue * front = NULL;
queue * rear = NULL;

/* Check if the Queue is Empty or Not. */
int check(){
  if(front == NULL && rear == NULL){
    return 0;
  }else{
    return 1;
  }
}

/* Push an element to rear of the queue[enqueue] */
void enqueue(int val){
  queue * new_node = new queue();
  new_node->data = val;
  new_node->next = NULL;

  if(rear == NULL && front == NULL){
    rear = front = new_node;
  }else{
    rear->next = new_node;
    rear = new_node;
  }
}

/* Pop an element from the front of the queue [dequeue] */
void dequeue(){
  if(front == NULL){
    cout << "ERROR: Underflow, Queue is empty." << endl;
  }else{
    queue * temp = new queue();
    temp = front;
    front = temp->next;
    free(temp);
  }
}


/* Peak The front and rear Elements of Queue */
void peak(){
  if(check()){
    cout << "Front -: " << front->data<< endl;
    cout << "Rear -: " << rear->data << endl;
  }else{
    cout << "ERROR: Underflow, Queue is empty." << endl;
  }
}

/* Traverse The Queue */
void traverse(){
  queue * temp = new queue();
  temp = front;
  if(check()){
    cout << "Queue Elements -: ";
    while(temp != NULL){
      cout << temp->data << " ";
      temp = temp->next;
    }
    cout << endl;
  }else{
    cout << "ERROR: Underflow, Queue is empty." << endl;  
  }
}

int main(){
  if (check()){
    cout << "Queue is Not Empty" << endl;
  }else{
    cout << "Queue is Empty" << endl;
  }

  enqueue(10);
  enqueue(20);
  enqueue(30);
  enqueue(40);
  enqueue(50);
  peak();

  traverse();

  dequeue();
  dequeue();

  traverse();

  
  return 0;
}