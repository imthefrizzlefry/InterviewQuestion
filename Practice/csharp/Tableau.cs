/*
Consider a scenario where you are asked to write 
a simple program that will take an input stream 
of integers and output a very similar stream of 
integers containing only the first instance of 
any particular integer. The output must be in the 
same order that the numbers were given to the program, 
other than the duplicates that were removed. The values 
of the integers are randomly distributed, and the size 
(or length) of the stream is completely unknown.

What would your general approach and data structures be


Example
inputStream 1 4 5 2 6 5 2 4 8 11 1

outputStream 1 4 5 2 6 8 11

outPutFirstInstanceOfIngeger



Stream Object has these methods:
bool HasData()
<t> ReadNext()
WriteNext(<T> data)

----------------------------------------------------- Begining
*/

uniqueStreamFilter(Stream<int> inputStream, Stream<int> outputStream)
{
    if (!inputStream || !outputStream) {
        throw new InvalidAnrgumentException("Message");
    }
    
    var usedList = new Dictioinary<int><bool>();
    
    while(inputStream.HasData()) 
    {
         // ck to see if current value has been seen
        var current = inputStream.ReadNext();
        
        if (usedList.ContainsKey(current) != true) {
            ostream.WriteNext(current);
            usedList.Add(current, true);
        }
    }
}

// feed into stream
/*
1
a -- throws invalid type
1111111111111111111111111111111111111111111
'\n' -- 
bit 2^64 (double)



1 2 2 3 => 1 2 3
10 millions of number into stream => mem requirements, clock measure time
*/

//alternatively, use a bit vector  vector[index]
