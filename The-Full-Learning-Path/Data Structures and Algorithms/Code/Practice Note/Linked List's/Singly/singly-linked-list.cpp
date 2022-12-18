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
void traverse_list(Node** temp){
    Node* temp_node = *temp;
    if (*temp != NULL){
        while(temp_node != NULL){
            cout << temp_node->data << "\n";
            temp_node = temp_node->next;
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
void add_to_front(Node** temp){
    Node* new_node = new Node();
    new_node->data = "new_node";
    Node* head = *temp;

    if(*temp != NULL){
        new_node->next = *temp;
        *temp = new_node;
    }else{
        *temp = new_node;
        new_node->next = NULL;
    }
}


/* 
    Deleting the first node on the list

 */

void delete_from_front(Node** temp){
    Node * head = *temp;
    Node * to_delete = head;
    
    *temp = head->next;
    delete to_delete;
}


/* 
    Add to the end of the list
 */
void add_to_back(Node** temp){
    Node* new_back_node = new Node();
    new_back_node->data = "end of the list";
    Node* head = *temp;

     if (*temp != NULL){
        while(head != NULL){
            if (head->next == NULL){
                head->next = new_back_node;
                new_back_node->next = NULL;
            }
            head = head->next;
        }
    }else{
        *temp = new_back_node;
        new_back_node->next = NULL;
    }
}

/* 
    Deleting the node thats on the end of the list
 */
void delete_from_back(Node** temp){
    Node* curr = *temp;
    while(curr != NULL){
        if(curr->next->next == NULL){
            Node* to_delete = curr->next;
            curr->next = NULL;
            delete to_delete;
        }
        curr = curr->next;
    }
}


/*
    Adding a new node after a specified position
  */

void add_on_pos(Node** temp, int *pos){
    Node* new_node_in = new Node();
    new_node_in->data = "3rd Node of the list";
    Node* head = *temp;
    
    // Count and position tracker
    int count = 1;
    int position = *pos;

    if (*temp != NULL){
        while(head != NULL){
            if (count == position-1){
                new_node_in->next = head->next;
                head->next = new_node_in;
            }
            count++;
            head = head->next;
       }
    }else{
       *temp = new_node_in;
        new_node_in->next = NULL;
    }
}


/* 
    Delete a node from the given list after finding the one with the right value.
 */
void delete_node(Node** temp, string *str){
    Node* dummy = new Node();
    dummy->next = *temp;
    Node* curr = dummy;

    if(curr->next->data == *str){
        delete curr;
    }else if(*temp != NULL) {
        while(curr->next != NULL && curr != NULL) {
            if (curr->next->data == *str){
                Node* delete_node = curr->next;
                curr->next = curr->next->next;
                free(delete_node);
            }
            curr = curr->next; 
        }   
    }else {
        cout << "empty list" << endl;
    }
}



int main(){
    // An empty list using it to check NULL case's
    // Node* head = NULL;

    // Create the nodes and assign data and next
    Node* head = new Node();
    Node* headp = new Node();
    Node* first = new Node();
    Node* second = new Node();
    Node* third = new Node();

    // Head
    head->data = "head";
    head->next = headp;

    headp->data = "second";
    headp->next = first;

    // 1st
    first->data = "first";
    first->next = second;

    // 2nd
    second->data = "second";
    second->next = third;

    // 3rd
    third->data = "third";
    third->next = NULL;

    
    // Operations on The Linked List Created

    // Add a new node to the front of the list
    // &head is the address of the pointer 
    add_to_front(&head);
    delete_from_front(&head);

    // Add a new node to the end of the list 
    add_to_back(&head);
    delete_from_back(&head);


    // Add a new node after a specific position 
    int pos = 3;
    int * ptr;
    ptr = &pos;
    add_on_pos(&head, ptr);

    //  Delete the node that has the value 
    string val = "second";
    string * str;
    str = &val;
    delete_node(&head, str);


    // Traverse the Linked List 
    // cout << "Linked List Traversed. \n";
    traverse_list(&head);

    return 0;
}