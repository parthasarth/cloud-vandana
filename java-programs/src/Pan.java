import java.util.Scanner;
public class Pan {
	

	
	    public static void main(String[] args) {
	        Scanner scanner = new Scanner(System.in);
	        System.out.print("Enter a sentence: ");
	        String input = scanner.nextLine().toLowerCase();
	        boolean isPangram = isPangram(input);
	        if (isPangram) {
	            System.out.println("The input is a pangram.");
	        } else {
	            System.out.println("The input is not a pangram.");
	        }
	        scanner.close();
	    }

	    public static boolean isPangram(String input) {
	        boolean[] alphabet = new boolean[26];
	        int count = 0;
	        for (int i = 0; i < input.length(); i++) {
	            char c = input.charAt(i);
	            if ('a' <= c && c <= 'z') {
	                int index = c - 'a';
	                if (!alphabet[index]) {
	                    alphabet[index] = true;
	                    count++;
	                }
	            }
	            if (count == 26) {
	                // All letters from 'a' to 'z' are present
	                return true;
	            }
	        }
	        return false;
	    }
	}


