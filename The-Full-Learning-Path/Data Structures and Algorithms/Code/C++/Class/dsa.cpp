// Array's C++ Recap
#include <iostream>

using namespace std;

int main(){
    // Dynamic Array
    int size;
    cout << "Size of array: ";
    cin >> size;

    // Creating the Dynamic array '*'
    string *anArray = new string[size];

    cout << "Enter the Numbers to store: \n";
    for (int i = 0; i < size; i++) {
        cout << "Enter "<<i +1 <<": ";
        cin >> anArray[i];
    }

    // Accessing the array through a loop using the size as a boundary value
    for (int x = 0; x < size; x++) {
        cout << anArray[x] << " ";
    }

    // Deleting the data from the Dynamic array
    delete[] anArray;
    anArray = NULL;

    cout << endl << "Deleted Dynamic array" << endl;

    // will output 0 cause the array is cleared
    cout << anArray[2] << endl;



    return 0;
}


