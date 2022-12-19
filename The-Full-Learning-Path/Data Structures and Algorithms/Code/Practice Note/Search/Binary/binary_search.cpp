#include <iostream>

/* A recursive binary search function. It returns
location of x in given array arr[l..r] is present,
otherwise -1 */

using namespace std;

/* A Function that take the array, left(start) and right(end), value to check */
int binarySearch(int arr[], int left, int right, int val){
    if(right >= left){
        // find the mid value
        int mid = left + (right - left) / 2;

        // Check Best Case
        if(arr[mid] == val){
            return mid;
        } 

        /* If element is smaller then mid so it can only be 
        in the left sub-array */
        if(arr[mid] > val)
            return binarySearch(arr, left, mid -1, val);
        
        /* Check on the right sub-array */
        return binarySearch(arr, mid + 1, right, val);
    }

    return -1;
}


int main()
{
    int arr[] = { 2, 3, 4, 10, 40 };
    int x = 10;

    /* Size of arr ( with -1 "cause 0 indexing") */
    int size = sizeof(arr) / sizeof(arr[0]) - 1;

    int result = binarySearch(arr, 0, size, x);
    (result == -1)
        ? cout << "Element is not Present."
        : cout << "Element is present at index -> " << result;
    cout << endl;
    return 0;
}