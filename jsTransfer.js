var scoreObject = {
    "Tony": {
        "Math": 95,
        "English": 79,
        "Music": 68
    }, 
    "Simon": {
        "Math": 100,
        "English": 95,
        "Music": 98
    }, 
    "Annie": {
        "Math": 54,
        "English": 65,
        "Music": 88
    }
}

//如上有一个用来存储学习成绩的对象，编写一个函数，将其转为二维数组
function objectToArray(o){
    var names = Object.keys(o);
    var rows = names.length
    var a = [rows];

    for(var r=0; r<rows; r++){
        a[r] = [names[r]];
        var grades = Object.values(o[names[r]]);
        for(var c=1; c<4; c++){
            a[r][c] = grades[c-1];
        }
    }

    return a;
}

var menuArr = [
    [1, "Area1", -1],
    [2, "Area2", -1],
    [3, "Area1-1", 1],
    [4, "Area1-2", 1],
    [5, "Area2-1", 2],
    [6, "Area2-2", 2],
    [7, "Area1-2-3", 4],
    [8, "Area2-2-1", 6],
];

//如上有一个用来存储多级菜单数据的数组，编写一个函数，将其转为对象
function arrayToObject(a){
    var o = {};
    for(var i=0; i<a.length; i++){
        if(a[i][2] == -1){
            o[a[i][0]] = {name:a[i][1]};
        }
    }

    var j=0
    var keys = Object.keys(o);
    function digui(j){
        if(!(a[j][0] in keys)){
            
            if(a[j][2] in keys){
                
            }
        }
    }

    return o;
}

console.log(arrayToObject(menuArr));