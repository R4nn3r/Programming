#include <iostream>

using namespace std;

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


 /*    pop();
    traversal();
    check();
    showTop();

    pop();
    traversal();
    pop();
    traversal();
    pop();
    traversal();
    pop();
    traversal();
    pop();
    traversal(); */

    return 0;
}