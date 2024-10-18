function insertSort(arr) {
    // Traverse through the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
        // Store the current element
        let current = arr[i];
        // Initialize a variable to hold the index of the previous element
        let j = i - 1;

        // Shift elements of arr[0..i-1] that are greater than current
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j]; // Shift element to the right
            j--; // Move to the previous element
        }
        // Place the current element at its correct position
        arr[j + 1] = current;
    }
    return arr; // Return the sorted array
}

// Example usage:
let array = [5, 2, 9, 1, 5, 6];
console.log('Sorted array:', insertSort(array));

