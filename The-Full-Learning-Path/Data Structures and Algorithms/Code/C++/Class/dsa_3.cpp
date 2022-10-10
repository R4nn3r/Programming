#include<iostream>

using namespace std;

int main(){
    int k = 0;
    int n;

    cout << "Enter an integer: ";
    cin >> n;

    for (int i = 0; i < n; i++) {
        k++;
    }

    cout << k << endl;
    
    return 0;
}

// Check