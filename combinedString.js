'use strict'

var combinationOfStrings = function (strA, strB, strC)
  {
    var idxA=0, idxB=0;
    var result = true;

    for(var i = 0; i < strC.length; i++)
    {
      if(idxA < strA.length && strC[i] == strA[idxA])
      {
        idxA++
      }
      else if(idxB < strB.length && strC[i] == strB[idxB])
      {
        idxB++;
      }
      else
      {
        result = false;
      }
    }

    if (idxA < strA.length || idxB < strB.length)
    {
      result = false;
    }

    return result;
  }

module.exports.combinationOfStrings = combinationOfStrings;
