# M = L[i(1+i)n] / [(1+i)n-1]
# M = Monthly Payment
# L = loan amount
# i = interest rate (for an interest rate of 5% i = 0.05)
# n = number of payments

def CalcMonthlyPayment(principal, interest, nunOpayments):
    r = interest/12
    a = principal * r * ((1 + r) ** nunOpayments) 
    b = ((1 + r) ** nunOpayments - 1)
    return a/b

def LoanSummary(principal, interest, payments):
    monthly = CalcMonthlyPayment(principal, interest, payments)
    total = monthly * payments

    print('Regarding Your original loan of ${0:,.2f} at an interest rate of {1:.3%} spread across {2} payments'.format(principal, interest, payments))
    print('You will pay ${0:,.2f} per Month'.format(monthly))
    print('You will pay a total of ${0:,.2f}'.format(total))
    print('You will pay ${0:,.2f} in interest'.format(total-principal))


if __name__ == '__main__':
    LoanSummary(32063.65, 0.0190, 60)