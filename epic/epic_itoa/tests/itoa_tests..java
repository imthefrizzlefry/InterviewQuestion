import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;

import com.company.Main;

public class ItoATests {
    private enum Bases = {
        OCTAL(8), DECIMAL(10), HEX(16);
        private int value;

        private Bases(int value) {
            this.value = value;
        }
    }

    @Test
    public void convertSimpleIntegerToString() {
        //arrange
        String expectedResult = "1";

        for (Bases testBase : Bases.values()) {
            //act
            String actualResult = itoa(1, testBase.value);

            //assert
            assertEquals("1 in " + testBase + " is the string of '1'", expectedResult, actualResult)
        }

    }

    @Test
    public void convertIntegerToOctalString() {
        //arrange
        String expectedResult = "10";

        //act
        String actualResult = itoa(8, Bases.OCTAL.value);

        //assert
        assertEquals("8 in OCTAL is string of '10'", expectedResult, actualResult)

    }

    @Test
    public void convertIntegerToDecimalString() {
        //arrange
        String expectedResult = "10";

        //act
        String actualResult = itoa(1, Bases.DECIMAL.value);

        //assert
        assertEquals("10 in DECIMAL is string of '10'", expectedResult, actualResult)

    }

    @Test
    public void convertIntegerToHexString() {
        //arrange
        String expectedResult = "10";

        //act
        String actualResult = itoa(16, Bases.HEX.value);

        //assert
        assertEquals("16 in HEX is string of '10'", expectedResult, actualResult)

    }
}