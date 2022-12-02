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

// Add a new node to the front of the list 
void add_to_front(Node **temp){
    Node * new_node = new Node();
    new_node->value = 69;
    
    Node* temp_head = *temp;

    if(*temp != NULL){
        new_node->next = *temp;
        new_node->prev = NULL;
        temp_head->prev = new_node;
        *temp = new_node;
    }else {
        *temp = new_node;
        new_node->next = NULL;
        new_node->prev = NULL;
    }

}

// Add a new node to the end of the list
void add_to_end(Node** temp){
    Node * new_end_node = new Node();
    new_end_node->value = 696969;
    
    Node* temp_head = *temp;

    if(*temp != NULL){
        while (temp_head != NULL){
            if(temp_head->next == NULL){
                temp_head->next = new_end_node;
                new_end_node->next = NULL;
                new_end_node->prev = temp_head;
            }
            temp_head = temp_head->next;
        }
    
    }else {
        *temp =  new_end_node;
        new_end_node->next = NULL;
        new_end_node->prev = NULL;
    }
}

int main(){

    // Creating an empty list 
    // Node* head =NULL;

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




    

    // Operations on The Linked List Created


    // Add a new node to the front of the list 
    add_to_front(&head);  


    // Add a new node to the end of the list 
    add_to_end(&head);



    cout << "\n";
    printNodes(head);
    cout << "\n";



    return 0;
}


