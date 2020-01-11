//////universal
var c = document.getElementById("myCanvas");//html canvas draws the representation
var ctx = c.getContext("2d");
var x = new sortAlgoRender(c,ctx);
x.renderInitial();
var interval;
var count = 0;
var fails = 0;
var count_merge = 0;
var dic = {};
var list = x.list;
var count2 = 0;
var dict = {};
var array_length;
var option_1 = document.getElementById("1");//used for selection of navbar
var option_2 = document.getElementById("2");//used for selection of navbar
var option_3 = document.getElementById("3");//used for selection of navbar
var option_4 = document.getElementById("4");//used for selection of navbar
var pop =document.getElementById("pop");
var blur = document.getElementById("myCanvas");
var nav = document.getElementById("nav");



function end(){
  pop.style.visibility = "hidden";
  blur.classList.remove("blur");
  nav.classList.remove("blur");

}
function instructions(){
  
  blur.classList.add("blur");
  pop.style.visibility = "visible";
  nav.classList.add("blur");
}
function work(){
  /*
  this function starts the sorting process or if clicked twice or more fast forwards it.
  */
var interval = setInterval(function () {document.getElementById("clicker").click();}, 115);
  
}
function change2(){
  option_1.classList.remove("active");
  option_2.classList.remove("active");
  option_3.classList.remove("active");
  option_4.classList.remove("active");
  option_2.classList.add("active");
  
  selectionsort(x.list);
  document.getElementById("clicker").onclick = user_selection;
}

function change3(){
  option_1.classList.remove("active");
  option_2.classList.remove("active");
  option_3.classList.remove("active");
  option_4.classList.remove("active");
  option_3.classList.add("active");
var arr = x.list; 
heapSort(arr);
document.getElementById("clicker").onclick = user_heap;


}
function change4(){
  option_1.classList.remove("active");
  option_2.classList.remove("active");
  option_3.classList.remove("active");
  option_4.classList.remove("active");
  option_4.classList.add("active");
  quickSort(x.list, 0, x.list.length - 1);
  document.getElementById("clicker").onclick = user_quick;
}

var v = new bubbleSort()
function user_bubble(){
  /*
  This is what starts the sorting process for bubblesort once start is clicked
  */
  
    x.clear();
    x.renderNew(v.sort(x.list, count));
    if (count !== x.list.length - 1 ){
    count ++; 
    }
    else if (v.fails >= 100){
      clearInterval(interval);
      x.clear();
      x.finish_render(x.list);
      document.getElementById('start').disabled = true;
    }
 
    else{
      count = 0; 

  }
 
}




//selection sort

function selectionsort(arr) 
{ 
  
  //selection sort algorithm.
    var n = arr.length; 

    for ( i = 0; i < n-1; i++) 
    { 
        // Find the minimum element in unsorted array 
        var min_idx = i; 
        for ( j = i+1; j < n; j++) 
            if (arr[j] > arr[min_idx]) 
                min_idx = j; 

        var temp = arr[min_idx]; 
        arr[min_idx] = arr[i]; 
        arr[i] = temp; 
        dic[count] = list.slice();
        count ++;
    } 
} 
function user_selection(){
/* this is what starts the selectionsort process once start is clicked*/
 
  if (count_merge < x.list.length - 1){
    x.clear();
    x.renderNew(dic[count_merge]);
     count_merge ++;
  }
  else{
    x.finish_render(dic[count_merge - 1]);
    clearInterval(interval);


  }
  
}






//heap sort time

function heap_root(input, i) {
  //heap sort algorithm
  var left = 2 * i + 1;
  var right = 2 * i + 2;
  var max = i;

  if (left < array_length && input[left] > input[max]) {
      max = left;
  }

  if (right < array_length && input[right] > input[max])     {
      max = right;
  }

  if (max != i) {
      swap(input, i, max);
      heap_root(input, max);
  }
}

function swap(input, index_A, index_B) {
  // swaps the elements.
  var temp = input[index_A];
  input[index_A] = input[index_B];
  input[index_B] = temp;
  dict[count] = input.slice();
  count ++;

}

function heapSort(input) {
  
  array_length = input.length;

  for (var i = Math.floor(array_length / 2); i >= 0; i -= 1)      {
      heap_root(input, i);
    }

  for (i = input.length - 1; i > 0; i--) {
      swap(input, 0, i);
      array_length--;
    
    
      heap_root(input, 0);
  }
}
function user_heap(){
  
  if (count2 !== Object.keys(dict).length){
      x.clear();
  x.renderNew(dict[count2]);
  count2 ++;
  }
  else{
      clearInterval(interval);
      x.clear();
      x.finish_render(dict[count2]);
      count2 = 0;
  }
}

//quick

function swap(items, leftIndex, rightIndex){
  //function which swaps element in the list this allows the algorithm to be in-place.
  var temp = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temp;
  dict[count] = items.slice();
  count ++;

}
function partition(items, left, right) {
  var pivot   = items[Math.floor((right + left) / 2)], 
      i       = left, 
      j       = right; 
  while (i <= j) {
      while (items[i] < pivot) {
          i++;
      }
      while (items[j] > pivot) {
          j--;
      }
      if (i <= j) {
          swap(items, i, j); 
          i++;
          j--;
      }
  }
  return i;
}

function quickSort(items, left, right) {
  var index;
  if (items.length > 1) {
      index = partition(items, left, right); 
      if (left < index - 1) {
          quickSort(items, left, index - 1);
      }
      if (index < right) { 
          quickSort(items, index, right);
      }
  }
  return items;
}




function user_quick(){
  //Initiates the quicksort algorithm once the start button is clicked.
  if (count2 !== Object.keys(dict).length){
      x.clear();
  x.renderNew(dict[count2]);
  count2 ++;
  }
  else{
      clearInterval(interval);
      x.clear();
      x.finish_render(dict[count2]);
      count2 = 0;
  }
}






