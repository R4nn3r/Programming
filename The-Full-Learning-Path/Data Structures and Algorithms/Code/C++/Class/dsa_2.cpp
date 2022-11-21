// Linked List's [Doubly]
#include <iostream>

using namespace std;

class Node {

    public: 
        int value;
        Node* next;
        Node* prev;

};

// Function to read the value of Linked Lists Node's 
void printNodes(Node* temp){
    if (temp != NULL){
        while(temp != NULL){
                cout << temp->value << endl;
                temp = temp->next;
            }
    }else {
        cout << "List Is Empty!" << endl;
    }
  
}


int main(){

    // Creating a new Node pointers 
    Node* head = new Node();
    Node* second = new Node();
    Node* third = new Node();
    Node* fourth = new Node();


    // Adding value to the Node's

    // First Node 
    // [->] is used to access values while using pointers 
    head->value = 10;
    head->prev = NULL;
    head->next = second;

    // Second Node
    second->value = 20;
    second->prev = head;
    second->next = third;

    // Third Node
    third->value = 30;
    third->prev = second;
    third->next = fourth;

    // Fourth Node
    fourth->value = 40;
    fourth->prev = third;
    fourth->next = NULL;




    //  Print the node from with is the main function by creating a temp node that tracks the head
    Node* temp = new Node();
    temp = head;

    if (temp != NULL){

        while(temp != NULL){
                cout << temp->value << endl;
                temp = temp->next;
            }
    } else {
        cout << "List Is Empty!" << endl;
    }

  

    cout << "n/n/";

    cout << "Output from the outside Function: " << endl;
    printNodes(head);



    return 0;
}


