/*  Given an array arr[] of N elements, the task is to write a
function to search a given element x in arr[]. */

#include <iostream>

using namespace std;

/* Array to search Through */
int arr[] = {10, 20, 80, 30, 60, 50,110, 100, 130, 170}; 

/* Search */
int search(int val){
    /* Find the size of the arr */
    int size = sizeof(arr) / sizeof(arr[0]);

    /* iterate through arr */
    for(int i = 0; i < size; i++){
        if (arr[i] == val){
            return 1;
        }
    }
    return -1;
}

int main(){
    /* Value to search that is present*/
    int x = 110;
    cout << search(x) << endl; // returns 1

    /* Value to search that is not present */
    int y = 1100;
    cout << search(y) << endl; // returns -1


    return 0;
}