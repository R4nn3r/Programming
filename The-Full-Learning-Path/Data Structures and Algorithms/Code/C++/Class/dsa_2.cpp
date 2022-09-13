#include<iostream>
#include<string>

using namespace std;

int main(){

    int arr[10] {1,2,3,4,5};
    int *p_arr;
    p_arr = &arr[10];

    for (int i = 0; i < 10; i++)
        cout << arr[i] << endl;
    
    std::cout << *&p_arr << endl;

    return 0;
}