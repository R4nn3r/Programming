#include<iostream>

using namespace std;

// Create  a linked list 
struct Node {
    int value; 
    Node* next;
};

// Pushing a node to the front of the Linked List
void push_front(Node ** temp){   
    /* 
        1, Allocate a new node
        2, assign the value to the new node 
        3, make the next of the new node the head 
        4, move the head pointer to the new node
     */

    /* 
        recommended:
            create a ptr that points to the address of the received head address pointer
                Ex:
                    Node * ptr  = *temp;
     */
    Node * ptr  = *temp;
   
    Node* newNode = new Node(); // [1.]
    newNode->value = 69;        // [2.]

    newNode->next = ptr;        // [3.] You can use *temp as well
    *temp = newNode;            // [4.] 

}

// Pushing a node to the back  of the Linked List
void push_back(Node** temp){
    /* 
        1, Allocate a new node
        2, assign the value to the new node 
        3, Check if the the list is not empty 
            - while temp is not pointing at NULL
                - if the temp next is NULL
                    - temp next should point to the new node 
                    - then new node points to NULL
                - increment the temp 
        4, if the list is empty 
            - temp should point to the new node
            - then new node points to NULL     

    
        recommended:
            create a ptr that points to the address of the received head address pointer
                Ex:
                    Node * ptr  = *temp;

     */
    Node * ptr = *temp;

    Node* newEndNode = new Node(); // [1.]
    newEndNode->value = 88;        // [2.]    
    
    if (ptr != NULL){                           // [3.0]
        while(ptr != NULL){                     // [3.1]
            if(ptr->next == NULL){              // [3.2.0]
                ptr->next = newEndNode;         // [3.2.1]
                newEndNode->next = NULL;        // [3.2.2]
            }
            ptr = ptr->next;                    // [3.3]
        }
    }else {                                     // [4.0]    
        *temp = newEndNode;                     // [4.1]    
        newEndNode->next = NULL;                // [4.2]    
    }

}

// Pushing a node to the pso received on the Linked List
void push_at_pos(Node** temp, int* pos){

}

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




    // perform insertion on the linked list 
    /* The functions receives the address of the head node */

        // front
        push_front(&head);


        // back
        push_back(&head);


        // after position 3
        /* functions receives the address and the position */
        /* the pos it receives needs to be a pointer the variable not the var it self */
        int position = 3;
        int * ptr;
        ptr = &position;

        push_at_pos(&head, ptr);


    // perform deletion on the linked list
        // front
        // back
        // after position 3

         


    
    // traverse over the list 
    /* Create a temp node pointer to keep track of your position */
    Node* temp = new Node();
    temp = head;

    /* Check if the head pointes to a node or NULL */
    if (temp != NULL) {
        /* While temp is not pointing to null print value and increment */
        while(temp != NULL) {
            cout << temp->value << endl;
            temp = temp->next;
        }
    }else {
        cout << "List Empty!" << endl;
    }


    return 0;
}
