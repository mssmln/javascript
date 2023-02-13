// The safe integers consist of all integers from -(2^53 - 1) inclusive to 2^53 - 1 inclusive
// helps out to prevent precision loss
// ± 9007199254740991
Number.isSafeInteger(3);                    
Number.isSafeInteger(Math.pow(2, 53));      
Number.isSafeInteger(Math.pow(2, 53) - 1);  
Number.isSafeInteger(NaN);                  
Number.isSafeInteger(Infinity);             
Number.isSafeInteger('3');                 
Number.isSafeInteger(3.1);                 
Number.isSafeInteger(3.0);                  