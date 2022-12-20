#include <iostream>
#include <algorithm>
#include <vector>

/* Bucket Sort */

using namespace std;

/*  Function to sort arr[] of size n */
void bucketSort(float arr[], int n){

    // Create n empty buckets
    vector<float> buckets[n];

    // Put array elements in different buckets
    for (int i = 0; i < n; i++){
        int buck = n * arr[i]; // Index in bucket
        buckets[buck].push_back(arr[i]); // Add data to the end of the %vector.
    }

    // Sort individual buckets 
    for (int i = 0; i < n; i++)
        sort(buckets[i].begin(), buckets[i].end()); //Returns a read/write iterator

    // concatenate all buckets int arr[]
    int index = 0;
    for (int i = 0; i < n; i++)
        for (int j = 0; j < buckets[i].size(); j++) // Returns the number of elements in the %vector.
            arr[index++] = buckets[i][j];
}

/* Driver */
int main(){
    float arr[] = { 0.8, 0.5, 0.6, 0.1, 0.9, 0.3, 0.2, 0.4, 0.7 };
    int size = sizeof(arr)/sizeof(arr[0]);
    
    cout << "Unsorted Array -: ";
    for (int i = 0; i < size; i++)
        cout << arr[i] << " ";
    
    cout << endl;
    cout << endl;

   /* Function Call */
    bucketSort(arr,size);

    cout << "Sorted Array -: ";
    for (int i = 0; i < size; i++)
        cout << arr[i] << " ";

    cout << endl;

    return 0;
} 