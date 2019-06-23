def findMaxGain(arr):
    maxGain=0
    first = arr[0]
    for cur in range(1,len(arr)):
        curGain = arr[cur]-first
        if arr[cur] < first:
            first = arr[cur]
        
        if curGain > maxGain:
            maxGain = curGain           
            
    return maxGain