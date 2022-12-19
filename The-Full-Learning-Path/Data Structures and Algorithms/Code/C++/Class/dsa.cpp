#include <iostream>

/* 
    Push - This adds a data value to the top of the stack.
    Pop - This removes the data value on top of the stack
    Peek - This returns the top data value of the stack
 */

using namespace std;

/* Structure */
struct stack{
    int data;
    stack * next;
};

/* Pointer to the Stack top and head */
stack * head = NULL;
stack * top = NULL;

/* Traverse through the Stack */
void traversal(){
    if(head == NULL){
        cout << "Stack is empty" << endl;
    }else{
        cout << "Stack is Elements" << " -> ";
        stack * curr = head;
        while(curr != NULL){
            cout << curr->data << " ";
            curr = curr->next;
        }
    }
    cout<< "\n";
}

/* Check the if the stack is empty or not */
int check(){
    if(head != NULL){
        cout << "Stack is Not Empty" << endl;
        return 1;
    }else{
        cout << "Stack is Empty" << endl;
        return 0;
    }
}

/* Push an Element to the Stack */
void push(int val){
    stack * new_node = new stack();
    new_node->data = val;
    new_node->next = NULL;

    if(top == NULL){
        head = new_node;
        top = new_node;
    }else{
        top->next = new_node;
        top = new_node;
    }
}

/* Pop the Element on the top of the stack */
void pop(){
    if(head == NULL){
        cout << "Stack Underflow" << endl;
    }else{
        int x = top->data;
        if(top == head){
            free(top);
            top = NULL;
            head = NULL;
        }else{
            stack * curr = head;
            while(curr->next != top){
                curr = curr->next;
            }
            curr->next = NULL;
            free(top);
            top = curr;
        }
        cout << x << ": Popped " << endl;
    }
}


/* Peak Element from the stack */
void peek(){
    if(top == NULL){
        cout << "Stack empty" << endl;
    }else{
        cout << "Top Element: " << top->data << endl;
    }
}


int main(){
    check();
    push(10);
    push(20);
    push(30);
    push(40);
    push(50);
    check();

    traversal();
    peek();
    pop();
    peek();



    return 0;
}