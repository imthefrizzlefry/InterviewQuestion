

def calcSteppedInterestRate(self, balance, lowerRate=.0617, upperRate=.001, divider=500):

    if balance > divider:
        return (divider * lowerRate) + ((balance - divider) * upperRate)
    else:
        return balance * lowerRate

if __name__ == '__main__':
    # do by default
    x = RetirementCalc(age=35, income= 200181.18, balance= 123435.12, contributionRate=0.1421, growthRate=0.06)
    #print(x.calcProjectedRetirementAge())

    #print(x.calcContributionAmountByRetirementAge())

    balance = 100
    print(balance)
    for age in range(2,18):
        interest = x.calcSteppedInterestRate(balance) 
        balance += interest
        print('the Effective Interest Rate will be {0:.2f}, and new balance is {1:.2f}'.format(interest/balance, balance))
        balance += 100
        print('new deposit of 100 bring account to {0:.2f}'.format(balance))