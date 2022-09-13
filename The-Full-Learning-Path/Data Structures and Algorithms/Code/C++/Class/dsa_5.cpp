// Pointer C++ Recap
#include<iostream>

using namespace std;

int main(){

    int num = 10;
    // A pointer variable
    int *point_num;

    // putting the address of num in *p_num
    point_num = &num;

    cout << "Number is: (*point_num) = " << *point_num << endl; // Dereferencing the pointer
    cout << "It's Address is: (point_num) = " << point_num << endl; // Address on num in memory
    cout << &point_num << endl; // Address of the pointer it self

    return 0;

    // Pointer role is like of a shortcut "you create on desktop its just the address of 
    // app you want to use without going through you files to find it." so you use the address
    // to perform any of your executions instead of using more unnecessary memory space 
    // this is far more efficient and effective.
}