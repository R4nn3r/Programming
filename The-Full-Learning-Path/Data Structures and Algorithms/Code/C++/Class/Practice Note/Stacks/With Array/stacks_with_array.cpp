/* Stacks With Array Implementation*/
#include <iostream>
#include <bits/stdc++.h>

using namespace std;

/* Stack */
class stacks{
    int * arr;
    int size;
    int top;

public:
    /* Constructor */ 
    stacks(int n){
        size = n;
        arr = new int[n];
        top = n / 2 + 1;
    }

    /* Method to push an element x to stack  */
    void push(int x){
        /* at least one empty space for the new element */
        if(top > 0){
            top --;
            arr[top] = x;
        }else{
            cout << "Stack overflow: " << x << endl;
            return;
        }
    }

    /* Method to pop an element from the stack */
    int pop(){
        if(top <= size / 2){
            int x = arr[top];
            top ++;
            return x;
        }else{
            cout << "Stack overflow: " << endl;
            exit(1);
        }
    }


};

/* Driver */
int main(){
    stacks ts(5);
    ts.push(5);
    ts.push(15);
    ts.push(25);
    ts.push(35);
    ts.push(45);

/*     cout << "Popped element from stack is "
         << ": " << ts.pop() << endl; */
    ts.push(55);
    ts.push(65);
/*     cout << "Popped element from stack is "
         << ": " << ts.pop() << endl;  */

    return 0;
}


