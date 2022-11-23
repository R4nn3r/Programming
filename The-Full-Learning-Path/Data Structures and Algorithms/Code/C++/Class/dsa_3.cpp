#include <iostream>

using namespace std;

// Creating a struct that hold the nod 
struct Node{
    string data;
    Node* next;
    Node* prev;
};


int main(){

    Node* head = new Node();
    Node* first = new Node();

    // Adding the data to the Empty nodes 
    head->data = "first";
    head->prev = NULL;
    head->next = first;

    first->data = "second";
    first->prev = head;
    first->next = NULL;




    // insert new node into the list 
    // creat node
    // Find the node with a prev that NULL
    // change the newNode prev to NULL and the head prev to the newNode 
    // change the newNode next to head 


    for(int i = 0; i < 5; i++) {
        Node* tempTrack = head;

        // 1,
        Node* newNodeAdded = new Node();
        // 2,
        newNodeAdded->data = "From Loop Node";



        while (tempTrack->prev == NULL){
            // 3,
            newNodeAdded->next = tempTrack;
            // 4,
            newNodeAdded->prev = NULL;
            tempTrack->prev = newNodeAdded;
            head = newNodeAdded;
        }


    }
    
    // Read through the data in the linked list 
    Node* tempRead = head;

    if (tempRead != NULL){
        while(tempRead != NULL){
            cout << tempRead->data << endl;
            tempRead = tempRead->next;
        }
    }else {
        cout << "List is empty" << endl;
    }


    return 0;
}