// implementing binary search using divide and conquer approach

#include <iostream>
using namespace std;

int main(){
    int n;
    cout << "Enter the size of the array: ";
    cin >> n;

    int arr[n];
    for (int i = 0; i < n; i++) {
        cout << "Enter element #" << i + 1 << ": ";
        cin >> arr[i];
    }

    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    int key;
    cout << "Search for an element: ";
    cin >> key;

    int high = n - 1, low = 0, mid;
    bool found = false;
    while (low <= high) {
        mid = (low + high) / 2;
        if (arr[mid] == key) {
            found = true;
            break;
        } else if (arr[mid] < key) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    if (found) {
        cout << "Element found at index " << mid;
    } else {
        cout << "Element not found";
    }
}