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



    // Read through the data in the linked list 
    Node* temp = head;

    if (temp != NULL){
        while(temp != NULL){
            cout << temp->data << endl;
            temp = temp->next;
        }
    }else {
        cout << "List is empty" << endl;
    }


    return 0;
}