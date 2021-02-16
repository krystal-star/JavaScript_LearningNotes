var arr = [43, 54, 4, -4, 84, 100, 58, 27, 140];
/*将上面数组分别按从大到小以及从小到大进行排序后在console中输出
console.log(arr.sort(function(a, b) {
    return b - a;
  }));
console.log(arr.sort(function(a, b) {
    return a - b;
  }));
*/

var arr = ['apple', 'dog', 'cat', 'car', 'zoo', 'orange', 'airplane'];
/*将上面数组分别按字母顺序a-z及z-a进行排序，在console中输出
console.log(arr.sort());
console.log(arr.sort(function(a, b) {
    var nameA = a.toUpperCase(); // ignore upper and lowercase
    var nameB = b.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return 1;
    }
    if (nameA > nameB) {
      return -1;
    }
    // names must be equal
    return 0;
  }))
*/

var arr = [[10, 14], [16, 60], [7, 44], [26, 35], [22, 63]];
//将上面的二维数组，按照每个元素中第二个数从大到小的顺序进行排序输出，输出结果应该为：
/*[[22, 63], [16, 60], [7, 44], [26, 35], [10, 14]]
console.log(arr.sort(function(a,b){
    if(a[1] < b[1]){
        return 1;
    }
    if(a[1] > b[1]){
        return -1;
    }
    return 0;
}))
*/

var arr = [
    {
        id: 1,
        name: 'candy',
        value: 40
    }, {
        id: 2,
        name: 'Simon',
        value: 50
    }, {
        id: 3,
        name: 'Tony',
        value: 45
    }, {
        id: 4,
        name: 'Annie',
        value: 60
    }
];
//将上面数组分别按元素对象的value值从小到大进行排序后输出
console.log(arr.sort(function(a,b){
    var valA = a.value;
    var valB = b.value;
    if(valA > valB){
        return 1;
    }
    if(valA < valB){
        return -1;
    }
    return 0;
}))