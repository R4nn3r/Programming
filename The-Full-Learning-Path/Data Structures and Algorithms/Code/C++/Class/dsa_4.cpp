#include <iostream>

using namespace std;

int binarySearch(int arr[], int l, int r, int v){
  if(r >= l){
    int mid = l + (r - l) / 2;
    
    // Cause Best
    if(arr[mid] == v)
      return mid;

    // Left Sub
    if(arr[mid] > v)
      return binarySearch(arr, l , mid - 1, v);
    return binarySearch(arr, mid + 1, r, v);
  }
  return -1;
}


int main(){
  int arr[] = {1,2,3,4,5,6,7};
  int f = 3;
  int size = sizeof(arr) / sizeof(arr[0]);


  int result = binarySearch(arr, 0, size, f);
  (result == -1)
    ? cout << "Element not Found! "
    : cout << "Element Found, at index " << result << endl;

  return 0;
}