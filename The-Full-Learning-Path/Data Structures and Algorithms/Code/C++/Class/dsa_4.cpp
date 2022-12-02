#include <iostream>

using namespace std;

int main(){
    int array[] {1,2,3,4,5};
    int sizeOfArray = sizeof(array)/sizeof(array[0]);
    cout << "Size(before): " << sizeOfArray << endl;


    int newArray[sizeOfArray - 1];
    for (int i = 0; i < 4; i++){
        newArray[i] = array[i];
    }

    for (int j = 0; j < sizeOfArray; j++){
        cout << array[j] << " ";
    }
    cout<<endl;

    for (int j = 0; j < 4; j++){
        cout << newArray[j] << " ";
    }
    cout<<endl;

    // Check 
    int sizeOfArray_ = sizeof(newArray)/sizeof(newArray[0]);

    cout << "Size(after): " << sizeOfArray_ << endl;


    return 0;
}