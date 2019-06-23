def findMaxGain(arr):
    maxGain=0
    if arr:
        lowestBuy = arr[0]
        for cur in range(1,len(arr)):
            curGain = arr[cur]-lowestBuy
            if arr[cur] < lowestBuy:
                lowestBuy = arr[cur]
            
            if curGain > maxGain:
                maxGain = curGain           
            
    return maxGain