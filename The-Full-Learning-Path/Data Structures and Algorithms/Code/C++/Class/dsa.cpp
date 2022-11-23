// Singly Linked List implementation 
#include <iostream>

using namespace std;

// Create the Structure of the linked list 
struct Node {
    string data;
    Node* next;
};

/* 
Traverse the linked list cout the list node data's
    1, Check if the List is empty or not
        - create a temp node to keep track of the head
        - assign the temp to the head 
        - create a while loop that traverses all the way through the list until the next pointer points to a NULL value cause only the last node has next set to NULL
            - cout the temp->data 
            - set the temp value to the next node
    2. if list is empty
        - cout "the list is empty"
 */
void traverse_list(Node* temp){
    if (temp != NULL){
        while(temp != NULL){
            cout << temp->data << endl;
            temp = temp->next;
        }
    }else{
        cout << "List is empty" << endl;
    }
}


/* 
Add a new node to the linked list from the Front
    1, Allocate a new node
    2, assign the date to the new node 
    3, make the next of the new node the head 
    4, move the head pointer to the new node
 */
void add_new_node(Node* head){
    Node* new_node = new Node();
    new_node->data = "new_node";

    if(head != NULL){
        new_node->next = head;
        head = new_node;
    }else{
        new_node->next = NULL;
        head = new_node;
    }
}

int main(){

    // Create the nodes and assign data and next
    Node* head = new Node();
    Node* first = new Node();
    Node* second = new Node();
    Node* third = new Node();

    // Head
    head->data = "head";
    head->next = first;

    // 1st
    first->data = "first";
    first->next = second;

    // 2nd
    second->data = "second";
    second->next = third;

    // 3rd
    third->data = "third";
    third->next = NULL;

    
    
    // Add a new node to the front of the list 
    // add_new_node(head);

    // Traverse the Linked List 
    traverse_list(head);

    // Add a new node to the end of the list 
    Node* new_back_node = new Node();
    new_back_node->data = "end of the list";

    Node* temp = new Node();
    temp = head;

    while(temp->next = NULL){
        temp->next = new_back_node;
        new_back_node->next = NULL;
    }
 

    return 0;
}