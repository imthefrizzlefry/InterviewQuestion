# M = L[i(1+i)^n] / [(1+i)^n-1]
# M = Monthly Payment
# L = loan amount
# i = interest rate (for an interest rate of 5% i = 0.05)
# n = number of payments

import datetime

def CalcMonthlyPayment(principal, interest, nunOpayments):
    r = interest/12
    a = principal * r * ((1 + r) ** nunOpayments) 
    b = ((1 + r) ** nunOpayments - 1)
    return a/b

def LoanMaturity(payments, originationDate = datetime.date.today()):
    
    maturityYear = originationDate.year + (payments//12)
    maturityMonth = originationDate.month + (payments%12)
    if maturityMonth > 12:
        maturityYear += 1
        maturityMonth -= 12

    maturityDate = datetime.date(maturityYear, maturityMonth, originationDate.day) 

    return maturityDate

def LoanSummary(principal, interest, payments, originationDate = datetime.date.today()):
    monthly = CalcMonthlyPayment(principal, interest, payments)
    total = monthly * payments
    maturityDate = LoanMaturity(payments, originationDate)

    

    print('Regarding Your original loan of ${0:,.2f} at an interest rate of {1:.3%} spread across {2} payments'.format(principal, interest, payments))
    print('Your date originated on {0}, and it should be paid off by {1}'.format(originationDate, maturityDate))
    print('You will pay ${0:,.2f} per Month'.format(monthly))
    print('You will pay a total of ${0:,.2f}'.format(total))
    print('You will pay ${0:,.2f} in interest'.format(total-principal))


if __name__ == '__main__':
    LoanSummary(32063.65, 0.0190, 60)