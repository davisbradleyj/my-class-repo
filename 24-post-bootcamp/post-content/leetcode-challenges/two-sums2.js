var twoSum = function (arrayTest, target) {
    // let obj1, obj2 = {}
    let obj1;
    let obj2 = {};
    // [0,1,2,4] 6
    for (let i = 0; i < arrayTest.length; i++) {
        if (null != obj2[obj1 = arrayTest[i]]) {
        // null != obj2[obj1 = arrayTest[0]]
        // null != obj2[obj1 = 0]
        // null != obj2[0]
            return [obj2[obj1], i];
            // obj2[0],0
        } else {
            obj2[target - obj1] = i;
            // obj2[6-0] = 0
            // obj2[6] =
            // obj2 = {6:0}

        }
    }
    for (let i = 1; i < arrayTest.length; i++) {
        // obj2 = {6:0}
        if (null != obj2[obj1 = arrayTest[1]]) {
            // null != obj2[1]
            return [obj2[obj1], 1];
        } else {
            obj2[target - obj1] = 1
            // obj2[6-1] = 1
            // obj2[5] = 1
            // obj2 = {6:0,5:1};
        }
    }
    for (let i = 2; i < arrayTest.length; i++) {
        // obj2 = {6:0,5:1}
        if (null != obj2[obj1 = arrayTest[2]]) {
            // null != obj2[2]
            return [obj2[obj1], 2];
        } else {
            obj2[target - obj1] = 2
            // obj2[6-2] = 2
            // obj2[4] = 2
            // obj2 = {6:0,5:1,4:2};
        }
    }
    for (let i = 3; i < arrayTest.length; i++) {
        // obj2 = {6:0,5:1,4:2}
        if (null != obj2[obj1 = arrayTest[3]]) {
            // null != obj2[4]
            return [obj2[4], 3]
        //    return [2,3];

        }
    }
};