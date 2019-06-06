# M = L[i(1+i)^n] / [(1+i)^n-1]
# M = Monthly Payment
# L = loan amount
# i = interest rate (for an interest rate of 5% i = 0.05)
# n = number of payments

import datetime
import csv
import logging

def CalcMonthlyPayment(principal, interest, numOpayments):
    if interest == 0:
        return principal/numOpayments
    else:
        r = interest/12
        a = principal * r * ((1 + r) ** numOpayments) 
        b = ((1 + r) ** numOpayments - 1)
    return a/b

def CalcRemainingPrincipal(principal, interest, paymentAmt, numOPayments, verbose=False):
    print("Starting Balance: ${0:,.2f}".format(principal))
    if not verbose and interest == 0:
        logging.debug("No Interest so returning product of: ${0:,.2f} and {1}".format(paymentAmt, numOPayments))
        return principal - (paymentAmt * numOPayments)
    else:
        for x in range(numOPayments):
            principal = principal * (1 + (interest/12)) - paymentAmt
            logging.debug("Principal After {0} Payments: ${1:,.2f}".format(x+1, principal))
        return principal

def completedPayments(originationDate, EndDate = datetime.date.today()):
    if originationDate >= EndDate:
        return 0
    else:
        monthsPast = EndDate.month - originationDate.month
        yearsPast = EndDate.year - originationDate.year

        return (yearsPast*12) + monthsPast

def LoanMaturity(payments, originationDate = datetime.date.today()):
    
    maturityYear = originationDate.year + (payments//12)
    maturityMonth = originationDate.month + (payments%12)
    if maturityMonth > 12:
        maturityYear += 1
        maturityMonth -= 12

    maturityDate = datetime.date(maturityYear, maturityMonth, originationDate.day) 

    return maturityDate

def LoanSummary(principal, interest, payments, originationDate = datetime.date.today(), verbose=False):
    monthly = CalcMonthlyPayment(principal, interest, payments)
    total = monthly * payments
    maturityDate = LoanMaturity(payments, originationDate)
    paymentsSoFar = completedPayments(originationDate)
    remainingPrincipal = CalcRemainingPrincipal(principal,interest, monthly, paymentsSoFar, verbose)

    print('Regarding Your original loan of ${0:,.2f} at an interest rate of {1:.3%} spread across {2} payments'.format(principal, interest, payments))
    print('Your date originated on {0}, and it should be paid off by {1}'.format(originationDate, maturityDate))
    print('You will pay ${0:,.2f} per Month'.format(monthly))
    print('You will pay a total of ${0:,.2f}'.format(total))
    print('You will pay ${0:,.2f} in interest'.format(total-principal))
    print('Remaining Balance as of now is ${0:,.2f}'.format(remainingPrincipal))

def SummarizeMyLoans(filename = './Practice/Python/JustForFun/loanList.csv', verbose=False):

    with open(filename, 'r') as myCSVFile:
        dataFromFile = csv.reader(myCSVFile)
        headerParsed = False

        for loan in dataFromFile:
            if headerParsed:
                loanName = loan[0]
                principal = float(loan[1])
                interest = float(loan[2])
                payments = int(loan[3])
                originationDate = datetime.datetime.strptime(loan[4], '%Y-%m-%d').date()

                print('------------------------------------ {0} ------------------------------------'.format(loanName))
                LoanSummary(principal, interest, payments, originationDate, verbose)
                
            else:
                # headers = loan #first row is the headers...
                headerParsed = True


if __name__ == '__main__':
    logging.basicConfig(level=logging.DEBUG)

    #LoanSummary(32063.65, 0.0190, 60)
    SummarizeMyLoans(verbose=True)

    # print('========--------========--------========--------========--------========')

    # transBalance = CalcRemainingPrincipal(10419.54, 0.0, 201.00, 6)
    # newOrigination = LoanMaturity(6)
    # print(' We will transfer a balance of ${0:,.2f}'.format(transBalance))
    # LoanSummary(transBalance, 0.0, 15,newOrigination)

    # print('========--------========--------========--------========--------========')
    # EnerbankOriginationDate = datetime.date(2018, 4, 17)
    # EnerbankPaymentsTodate = completedPayments(EnerbankOriginationDate)
    # print('Remaining Enerbank Balance Now: ${0:,.2f}'.format(CalcRemainingPrincipal(15106,0.0699, 227.92, EnerbankPaymentsTodate)))