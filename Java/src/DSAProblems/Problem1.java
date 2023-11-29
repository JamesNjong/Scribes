package DSAProblems;

public class Problem1 {

    private final int[] nums;
    private final int target;

    private int[] response ;
    public Problem1( int[] args, int k){
        this.nums = args ;
        this.target = k ;
    }

    private void solution( ){
        response = new int[2];

        for (int r=0;  r< nums.length; r++){
            var ref = nums[r];
            for( int j =0 ;  j < nums.length-1; j++){
                if(ref + j == target){
                    response[0] = r;
                    response[1] = j ;
                    return;
                }
            }
        }
        return ;
    }

    public int[] getResponse() {
        return response;
    }
}
