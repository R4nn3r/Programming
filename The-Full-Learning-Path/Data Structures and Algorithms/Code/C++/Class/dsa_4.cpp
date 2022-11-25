#include<iostream>

using namespace std;

// Create  a linked list 
struct Node {
    int value; 
    Node* next;
};

int main(){
    // Create a node in the created linked list (head)
    Node* head = new Node();

    // create 4 nodes within the linked list 
    Node* second = new Node();
    Node* third = new Node();
    Node* fourth = new Node();
    Node* fifth = new Node();

    // Pointers and Data value 
    head->value = 10;
    head->next = second;

    second->value = 20;
    second->next = third;

    third->value = 30;
    third->next = fourth;

    fourth->value = 40;
    fourth->next = fifth;

    fifth->value = 50;
    fifth->next = NULL;


    // traverse over the list 
    // perform insertion on the linked list 
        // front
        // back
        // after position 3
    // perform deletion on the linked list
        // front
        // back
        // after position 3

    return 0;
}
