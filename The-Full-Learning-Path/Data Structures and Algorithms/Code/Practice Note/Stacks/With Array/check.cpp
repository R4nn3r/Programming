#include <iostream>

using namespace std;

int main(){
    // Stack 
    int stack_arr[6];

    // Keep track of the top of last element in the stack
    int size = sizeof(stack_arr)/sizeof(stack_arr[0]);
    // int top = stack_arr[size-1];

    // when array is empty,
    int top = -1;


    // add items to the stack push()
    cout << "Enter 1 - 5; \n";
    for(int i = 0; i < 5; i++){
        top ++;
        cin >> stack_arr[top];
    }

    cout <<"Element at top: " << stack_arr[top] << " = index -> "<< top << endl;

    return 0;
}