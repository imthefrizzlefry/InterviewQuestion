
public class BaseConverter {
	public static String itoa(int value, int base) {

		//check for unsupported base
		if(base != 8 && base != 10 && base != 16) {
			// it may be appropriate to throw an exception here
			return "The base provided is not supported.";
		}
		
		// a mutable String Builder
		StringBuilder answer = new StringBuilder();
        
		// check for negative numbers
		if( value < 0) {
			answer.append("-");
			value = -value;
		}
        

        if( value/base > 0 ) {
            answer.append(itoa(value/base, base));
        }

        int remainder = value % base;

        answer.append(convertNumberToString(remainder));
        return answer.toString();
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
                return "6";
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
