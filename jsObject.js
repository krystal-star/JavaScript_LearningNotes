var tree = {
    "id": 0,
    "name": "root",
    "left": {
        "id": 1,
        "name": "Simon",
        "left": {
            "id": 3,
            "name": "Carl",
            "left": {
                "id": 7,
                "name": "Lee",
                "left": {
                    "id": 11,
                    "name": "Fate"
                }
            },
            "right": {
                "id": 8,
                "name": "Annie",
                "left": {
                    "id": 12,
                    "name": "Saber"
                }
            }
        },
        "right": {
            "id": 4,
            "name": "Tony",
            "left": {
                "id": 9,
                "name": "Candy"
            }
        }
    },
    "right": {
        "id": 2,
        "name": "right",
        "left": {
            "id": 5,
            "name": "Carl",
        },
        "right": {
            "id": 6,
            "name": "Carl",
            "right": {
                "id": 10,
                "name": "Kai"
            }        
        }
    }
}

// 假设id和name均不会重复，根据输入name找到对应的id
function findIdByName(name) {
    var stack = [];
    var node = tree;
    while(node != null || stack.length != 0){
        if(node != null){
            if(node.name == name){
                console.log(node.id);break;
            }
            stack.push(node);
            node = node.left;
        }else{
            node = stack.pop().right;
        }
    }
}    


findNameById("8");

// 假设id和name均不会重复，根据输入id找到对应的name
function findNameById(id) {
    var stack = [];
    var node = tree;
    while(node != null || stack.length != 0){
        if(node != null){
            if(node.id == id){
                console.log(node.name);break;
            }
            stack.push(node);
            node = node.left;
        }else{
            node = stack.pop().right;
        }
    }
}

// 把这个对象中所有的名字以“前序遍历”的方式全部输出到console中
function getListWithDLR(root) {
    if(root != null){
        console.log(root.name);
        getListWithDLR(root.left);
        getListWithDLR(root.right);
    }
}

// 把这个对象中所有的名字以“中序遍历”的方式全部输出到console中
function getListWithLDR(root) {
    if(root != null){
        getListWithLDR(root.left);
        console.log(root.name);
        getListWithLDR(root.right);
    }
}

// 把这个对象中所有的名字以“后序遍历”的方式全部输出到console中
function getListWithLRD(root) {
    if(root != null){
        getListWithLRD(root.left);        
        getListWithLRD(root.right);
        console.log(root.name);
    }
}