import java.util.*;
public class dsa {
    public static void main(String[] args) {
        int[] arr = {12,42,42,32,4,55,3,6};


        System.out.println(arr[19]);
        System.out.print("enter your number to check is occ : ");
        Scanner input = new Scanner(System.in);
        int num = input.nextInt();
        int occ = noOfOccurrence(arr, num);
        System.out.printf("your element is found at % occ ", occ);
       




        
    }

    public static void greet(){
        System.out.println("Welcome to occuracne");
    }

    public static int dublicateArray(int[] arr ){
        for(int i = 0; i<arr.length; i++){
            for(int j = i+1; j<arr.length; j++){
                if(arr[i]==arr[j]){
                    System.out.printf("element is found at " + i);
                }
            }
        }
        return 0;
    }

        public static int noOfOccurrence(int[] numArr, int num){
        int occ = 0;
        int i = 0;
        while(i < numArr.length){
            if(numArr[i] == num){
                occ++;
            }
            i++;

        }
        return occ;
         
    }
    
}

