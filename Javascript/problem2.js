function findMaxSub(nums){
    // initialize mazimum 
    let fmax =nums.reduce((a,b) => b + a, 0) ; 
    // initialize subarray 
    let  fsub = nums

    // now use two pointers to navigate and find array with maximun sum
    nums.forEach((item, i) => {

        try{

            for( let j = nums.length-i ; j>i ; j-- ){
                console.log(j)
            }

        }catch(e){
            console.log(e)
        }

        
    })

    return fsub;

}


const getSum = (ray) => {

}

const getSplice = (nums, i,j) => {
    return nums.splice(i,j)
}

var ray = [1,2,3,4,-5] 
const res = findMaxSub(ray) ;
