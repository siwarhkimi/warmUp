//create a function isSubset that should take two arrays and determine whether the second array
// is a subset of the first array. 
//For example:  array: [ 1, 2, 3, 4 ], sub:[ 2, 3, 4 ] => true
//              array: [ 2, 2, 2, 3, 4 ], sub:[ 2, 4, 3 ] => true
//              array: [ 2, 3, 3, "a" ],  sub:[ 3, 3, 3, "a" ] => false


function isSubset(array1, array2) {
    var testt = true;


    if (array1.length < array2.length) {
        return false;
    }
    else {
        for (var i = 0; i < array2.length; i++) {
            if (array1.includes(array2[i])) {
                testt = testt && true;
                array1 = array1.splice(i, 1);// I know that the index isn't i but I didn't know to fix it 
            }

            // else {
            //     testt = testt && false;
            // }

        }
        return testt;
    }
}