// Linked List's 
#include <iostream>

using namespace std;

class Node {

    public: 
        int value;
        Node* next;

};

// Function to read the value of Linked Lists Node's 
void printNodes(Node* temp){
    while(temp != NULL){
        cout << temp->value << endl;
        temp = temp->next;

    }
}


int main(){

    // Creating a new Node pointers 
    Node* head = new Node();
    Node* second = new Node();
    Node* third = new Node();


    // Adding value to the Node's

    // First Node 
    // [->] is used to access values while using pointers 
    head->value = 10;
    head->next = second;

    // Second Node
    second->value = 20;
    second->next = third;

    // Third Node
    third->value = 30;
    third->next = NULL;




    //  Print the node from with is the main function by creating a temp node that tracks the head
    Node* temp = new Node();
    temp = head;

    while(temp != NULL){
        cout << temp->value << endl;
        temp = temp->next;
    }

    cout << "n/n/";

    cout << "Output from the outside Function: " << endl;
    printNodes(head);



    return 0;
}


