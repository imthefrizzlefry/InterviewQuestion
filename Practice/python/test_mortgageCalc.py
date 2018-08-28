import unittest
from mortgageCalc import CalcMonthlyPayment

class mortgageCalcTests(unittest.TestCase):
    def test_calculatesMyMortgageCorrectly(self):
        inputPrincipal = 522000
        inputinterest = 0.03875
        inputPayments = 360
        expectedResult = 2454.64

        self.assertEqual(expectedResult, float('{0:.2f}'.format(CalcMonthlyPayment(inputPrincipal, inputinterest, inputPayments))))

    def test_calculatesEnerbankCorrectly(self):
        inputPrincipal = 15106
        inputinterest = 0.0699
        inputPayments = 84
        expectedResult = 227.92

        self.assertEqual(expectedResult, float('{0:.2f}'.format(CalcMonthlyPayment(inputPrincipal, inputinterest, inputPayments))))

    def test_calculatesHondaLoanCorrectly(self):
        inputPrincipal = 32063.65
        inputinterest = 0.0190
        inputPayments = 60
        expectedResult = 560.60

        self.assertEqual(expectedResult, float('{0:.2f}'.format(CalcMonthlyPayment(inputPrincipal, inputinterest, inputPayments))))

