import unittest
import fibonacciGenerator

class fibonacciGeneratorTests(unittest.TestCase):
    def test_returns_First_NumberInSequence(self):
        expectedResult = 1        
        self.assertEqual(expectedResult, fibonacciGenerator.fibonacci_gen().__next__())

    def test_return_ThirtyFirst_NumberInSequence(self):
        expectedResult = 1346269
        fib = fibonacciGenerator.fibonacci_gen()
        for _ in range(30):
            fib.__next__()

        self.assertEqual(expectedResult, fib.__next__())
        
    def test_return_Third_NumberInSequence(self):
        expectedResult = 4
        fib = fibonacciGenerator.fibonacci_gen()
        for _ in range(3):
            fib.__next__()

        self.assertEqual(expectedResult, fib.__next__())

