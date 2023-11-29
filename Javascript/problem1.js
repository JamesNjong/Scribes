function findSum(nums, k){
    //TODO: Check type of input variables and return null is it invalid
     
    //use two pointers 
    var response = []
    try{
        for(let i=0; i<nums.length; i++){
            let ref = nums[i]
            for(let j = i+1; j<nums.length; j++ ){
                if(ref+nums[j] == k) {
                    response.push(i)
                    response.push(j)
                    console.log(`${ref} + ${nums[j]} = ${k}`)
                    return response; // u do not need to continue once u find a pair
                }
            }
        }
    }catch(e){
        console.log(e.message) // types 
        return; 
    }
    return response;  // return and empty array if u find nothing
}

console.log(findSum([17, 0, 2,3,4,5],7))