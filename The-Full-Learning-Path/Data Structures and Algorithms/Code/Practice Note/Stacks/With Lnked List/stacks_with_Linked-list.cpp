#include <iostream>

/* 
    Push - This adds a data value to the top of the stack.
    Pop - This removes the data value on top of the stack
    Peek - This returns the top data value of the stack
 */

using namespace std;


/* Structure for the Stack with a single pointer of the Top */
struct Node {
    int data;
    Node* next;
};

Node* head = NULL;
Node* top = NULL;


void traversal(){
    if(head == NULL){
        cout << "Stack is Empty" << endl;

    }else{
        cout << "Stack Elements : ";
        Node* curr = head;
        while (curr != NULL){
            cout << curr->data << " ";
            curr = curr->next;
        }
    }
    cout<< "\n";
}

int check(){
    if(top == NULL){
        cout << "Stack is Empty" << endl;
        return 0;
    }else{
        cout << "No, Stack is Not Empty" << endl;
        return 1;
    }
}

void push(int value){
    Node * new_node = new Node();
    new_node->data = value;
    new_node->next = NULL;

    if(top == NULL){
        head = new_node;
        top = new_node;
    }else{
        top->next = new_node;
        top = new_node;
    }
}

/* Pop the top element */
int pop(){
    if(head == NULL){
        cout << "Stack Underflow" << endl;
        return 0;
    }else{
        int x = top->data;
        if(top == head){
            free(top);
            top = NULL;
            head = NULL;
        }else{
            Node * curr = head;
            while (curr->next != top){
                curr = curr->next;
            }
            curr->next = NULL;
            free(top);
            top = curr;
        }
        cout << x << " : Popped " << endl;
        return x;
    }
}

/* Peek element */
void showTop(){
    if(top == NULL){
        cout << "Stack is empty" << endl;
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
    traversal();
    showTop();

    pop();
    showTop();
    traversal();
    check();


    return 0;
}