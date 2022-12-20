#include <iostream>

using namespace std;

int sort(int arr[], int size){
  

  return 1
}


int main(){
  int arr[] = {11,9,21,8,17,19,1,24,12};

  int size = sizeof(arr)/sizeof(arr[0]) - 1;


  if(sort(arr, size)){
    cout << "Sorted -: ";
    for(int i = 0; i < size; i++){
      cout << arr[i] << " ";
    }
    cout << endl;
  }


  return 0;
}