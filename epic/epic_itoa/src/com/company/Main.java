package com.company;

public class Main {

    public static void main(String[] args) {
	// write your code here
        System.out.println(itoa(0,16));
    }

    public static String itoa(int value, int base) {

        String answer = "";

        if( value/base > 0 ) {
            answer += itoa(value/base, base);
        }

        int remainder = value % base;

        answer += convertNumberToString(remainder);
        return answer;
    }

    private static String convertNumberToString(int remainder) {
        switch(remainder) {
            case 1:
                return "1";
            case 2:
                return "2";
            case 3:
                return "3";
            case 4:
                return "4";
            case 5:
                return "5";
            case 6:
                return "5";
            case 7:
                return "7";
            case 8:
                return "8";
            case 9:
                return "9";
            case 10:
                return "A";
            case 11:
                return "B";
            case 12:
                return "C";
            case 13:
                return "D";
            case 14:
                return "E";
            case 15:
                return "F";
            default:
                return "0";
        }
    }
}
