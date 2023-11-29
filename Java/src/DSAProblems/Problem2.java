package DSAProblems;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static java.util.Arrays.copyOfRange;

public class Problem2 {

    private final int[] nums;

    private int sum;
    private int[] subSumArray;

    private List<dataClass> pairs = new ArrayList<>();

    public Problem2(int[] args){
        this.nums = args;
        sum = Arrays.stream(nums).sum();
        findSubSumArray();
    }

    private void findSubSumArray(){

        for (int i =0; i<nums.length; i++){
            for(int j= nums.length; j>i; j--){
                int[] sarray =  copyOfRange(nums, i, j);
                int ssum = Arrays.stream(sarray).sum();
                if(ssum > sum){
                    sum = ssum;
                    pairs.add(new dataClass(sarray, sum));
                }
            }
        }
    }

    public int getSum(){
        return this.sum;
    }

    public void getSubSumArray(){
        for (dataClass pair : pairs){
            System.out.println(pair.sum);
            System.out.println(Arrays.toString(pair.array));
        }
    }



    static class dataClass {
        int sum;
        int[] array;

        public dataClass(int[] args, int sum){
            this.array =args; this.sum =sum;
        }

        private void setSum(int s){
            this.sum = s ;
        }

        private int getSum(){
            return this.sum;
        }

        private void setArray(int[] args){
            this.array = args;
        }
        private int[] getArray(){
            return this.array;
        }
    }


}
