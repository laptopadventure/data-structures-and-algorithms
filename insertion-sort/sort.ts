export default function insertionSort(arr: number[]) {
  for(let i = 1; i < arr.length; i++) {
    let prevIndex = i - 1
    let temp = arr[i]
    while(prevIndex >= 0 && temp < arr[prevIndex]) {
      arr[prevIndex + 1] = arr[prevIndex]
      prevIndex -= 1
    }

    arr[prevIndex + 1] = temp
  }
}
