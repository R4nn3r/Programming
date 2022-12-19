#include <iostream>

/* 
    Push - This adds a data value to the top of the stack.
    Pop - This removes the data value on top of the stack
    Peek - This returns the top data value of the stack
 */

using namespace std;

/* Global Definition for 
    Stack Array, 
    Size Var, 
    Top Pointer
*/
int stack[100], n=100, top=-1;

/* Push a new Element in a Stack */
void push(int val){
    if(top >= n - 1){
        cout << "Stack Overflow" << endl;
    }else{
        top++;
        stack[top] = val;
    }
}

/* Pop the Top element in the Stack */
void pop(){
    if(top == -1){
        cout << "Stack Underflow" << endl;
    }else{
        cout << "Element Popped "<< stack[top] << endl;
        top--;
    }
}

/* Display Elements in the Stack */
void display(){
    if(top >= 0){
        for(int i = top; i >= 0; i--){
            cout << " -> " << stack[i] ;
        }
        cout << endl;
    }else{
        cout << "Stack is Empty" << endl;
    }
}

/* Return the Peek of the Stack */
int peek(){
    return stack[top];
}

int main(){
    push(10);
    push(20);
    push(30);
    push(40);
    push(50);

    display();
    
    pop();

    cout << peek();
    cout << endl;
    return 0;
}