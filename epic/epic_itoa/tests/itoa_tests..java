import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;

class ItoA_Tests {
	
	 // using enum for example of looping through a constrained input
	 private enum Bases {
	        OCTAL(8), DECIMAL(10), HEX(16);
	        private int value;

	        private Bases(int value) {
	            this.value = value;
	        }
	    }
	 
	 // Helper method to act and assert the expected result
	 private void runAssertion(int value, int base, String expected) {
		 String errorMessage = value + " in HEX is string of " + expected;
     	//act
	        String actualResult = BaseConverter.itoa(value, base);

	        //assert
	        assertEquals(expected, actualResult, errorMessage);
	 }

	    @Test
	    public void convertSimpleIntegerToString() {
	        //arrange
	        String expectedResult = "1";
	        int inputValue = 1;

	        for (Bases testBase : Bases.values()) {
	            //act and assert
	            runAssertion(inputValue, testBase.value, expectedResult);
	        }

	    }
	    
	    @Test
	    public void convertLargeIntegerToHexString() {
	    	//arrange
	        String[] resultList = {"17777777777", "2147483647", "7FFFFFFF"};
	        int inputValue = 2147483647, 
	        	resultCount = 0;

	        for (Bases testBase : Bases.values()) {
	            
	        	//act and assert
	            runAssertion(inputValue, testBase.value, resultList[resultCount]);
	            	            
	            //iterate to next result
	            resultCount++;
	        }
	    }
	    
	    @Test
	    public void convertNegativeIntegerToString() {
	        //arrange
	        String expectedResult = "-7";
	        int inputValue = -7;

	        for (Bases testBase : Bases.values()) {
	        	//act and assert
	            runAssertion(inputValue, testBase.value, expectedResult);
	        }

	    }
	    
	    // examples of normal tests that just run without anything fancy
	    @Test
	    public void convertIntegerToOctalString() {
	        //arrange
	        String expectedResult = "10";
	        int inputValue = 8;

	      //act and assert
            runAssertion(inputValue, Bases.OCTAL.value, expectedResult);

	    }

	    @Test
	    public void convertIntegerToDecimalString() {
	        //arrange
	        String expectedResult = "59";
	        int inputValue = 59;

	      //act and assert
            runAssertion(inputValue, Bases.DECIMAL.value, expectedResult);
	    }

	    @Test
	    public void convertIntegerValuesToHexString() {
	        //arrange
	        String[] expectedResults = {"A", "B", "C", "D", "E", "F", "10"};
	        int[] inputValues = 		{10, 11, 12, 13, 14, 15, 16};

	        for(int counter = 0; counter < inputValues.length; counter++) {
	        	
	        	//act and assert
	            runAssertion(inputValues[counter], Bases.HEX.value, expectedResults[counter]);
	        }
	    }

	    @Test
	    public void providedBaseIsNotSuported() {
	    	//arrange
	        String expectedResult = "The base provided is not supported.";
	        int inputValue = 3647;
	        int inputBase = 0;

	        //act and assert
            runAssertion(inputValue, inputBase, expectedResult);
	    }
}
 