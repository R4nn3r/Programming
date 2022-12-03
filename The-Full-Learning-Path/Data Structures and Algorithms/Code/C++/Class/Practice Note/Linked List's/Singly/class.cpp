#include <iostream>

using namespace std;

struct Node{
    int data;
    Node* next;
};

Node * head = NULL;


void push_front(int newElement){
    Node* newNode = new Node();
    newNode->data = newElement;
    newNode->next = head;
    head = newNode;
}

void push_back(int newElement){
    Node* newNode = new Node();
    newNode->data = newElement;
    newNode->next = NULL;

    if (head == NULL){
        head = newNode;
    }else{
        Node* temp = head;

        while(temp->next != NULL){
            temp = temp->next;
        }
        temp->next = newNode;
    }
}

void push_at(int newElement, int position){
    Node *newNode = new Node();
    newNode->data = newElement;
    newNode->next = NULL;

    if(position < 1){
        cout << "Enter a valid Position" << endl;
    }else{
        Node* temp = head;
        for (int i = 0; i < position - 1; i++){
            if(temp != NULL){
                temp = temp->next;
            }
        }
        if(temp != NULL){
            newNode-> next = temp->next;
            temp->next = newNode;
        }else{
            cout << "List Is empty" << endl;
        }
    }
}

void printList(){
    Node* temp = head;

    if(temp != NULL){
        cout << "List Contains: ";
        while(temp != NULL){
            cout << temp->data << "  ";
            temp = temp->next;
        }
    }else{
        cout << "List Is empty" << endl;
    }
        
}

/* Deleting */
void pop_front(){
    if(head != NULL){
        Node* temp = head;
        head = head->next;
        delete head;
    }
}

void pop_back(){
    if(head != NULL){
        if(head->next == NULL){
            head = NULL;
        }else{
            Node* temp = head;
            while(temp->next->next != NULL){
                temp = temp->next;
            }
            Node * lastNode = temp->next;
            temp->next = NULL;
            delete lastNode;
        }
    }
}

void pop_at(int position){
    if(position < 1){
        cout << "Enter a valid Position" << endl;
    }else{
        if(position == 1 && head != NULL){
            Node * nodeToDelete = head;
            head = head->next;
            delete nodeToDelete;
        }else{
            Node * temp = head;
            for (int i = 1; i < position -1; i++){
                if(temp != NULL){
                    temp = temp->next;
                }
            }
        }
       
    }
}


int main(){
    /* Driver Code */
    push_front(10);
    push_front(20);
    push_front(30);
    push_back(40);
    printList();
    cout << endl;
    push_at(99,3);
    push_at(100,4);
    printList();
    cout << endl;
    // pop_at(4);

    // pop_front();
    pop_back();

    printList();
    cout << endl;

    return 0;
}