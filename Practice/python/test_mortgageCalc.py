import unittest
import datetime
import mortgageCalc

class mortgageCalcTests(unittest.TestCase):
    def test_calculatesMyMortgageCorrectly(self):
        inputPrincipal = 522000
        inputinterest = 0.03875
        inputPayments = 360
        expectedResult = 2454.64

        self.assertEqual(expectedResult, float('{0:.2f}'.format(mortgageCalc.CalcMonthlyPayment(inputPrincipal, inputinterest, inputPayments))))

    def test_calculatesEnerbankCorrectly(self):
        inputPrincipal = 15106
        inputinterest = 0.0699
        inputPayments = 84
        expectedResult = 227.92

        self.assertEqual(expectedResult, float('{0:.2f}'.format(mortgageCalc.CalcMonthlyPayment(inputPrincipal, inputinterest, inputPayments))))

    def test_calculatesHondaLoanCorrectly(self):
        inputPrincipal = 32063.65
        inputinterest = 0.0190
        inputPayments = 60
        expectedResult = 560.60

        self.assertEqual(expectedResult, float('{0:.2f}'.format(mortgageCalc.CalcMonthlyPayment(inputPrincipal, inputinterest, inputPayments))))

        def test_InterestRateIsZero(self):
            inputPrincipal = 10000.0
            inputinterest = 0.0
            inputPayments = 15
            expectedResult = 666.67

            self.assertEqual(expectedResult, float('{0:.2f}'.format(mortgageCalc.CalcMonthlyPayment(inputPrincipal, inputinterest, inputPayments))))

    def test_maturityDateIsCalculatedCorrectly(self):
        inputOriginationDate = datetime.date(2018, 5, 10)
        inputNumberOfPayments = 5
        expectedMaturityDate = datetime.date(2018, 10, 10)

        self.assertEqual(expectedMaturityDate, mortgageCalc.LoanMaturity(inputNumberOfPayments, inputOriginationDate))

    def test_maturityDateHandlesYearRollover(self):
        inputOriginationDate = datetime.date(2018, 10, 10)
        inputNumberOfPayments = 5
        expectedMaturityDate = datetime.date(2019, 3, 10)

        self.assertEqual(expectedMaturityDate, mortgageCalc.LoanMaturity(inputNumberOfPayments, inputOriginationDate))

    def test_maturityDateWorksForMultiYearLoans(self):
        inputOriginationDate = datetime.date(2018, 5, 10)
        inputNumberOfPayments = 60
        expectedMaturityDate = datetime.date(2023, 5, 10)

        self.assertEqual(expectedMaturityDate, mortgageCalc.LoanMaturity(inputNumberOfPayments, inputOriginationDate))

    
        
