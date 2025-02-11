for( let i=0; i<=10; i++)
    {
        console.log(i)
    }
    
    
    
    for (let i=1; i<100; i+=2)
    {
        console.log(i)
    }
    
    
    
    for (let i=1; i<=10;i++)
    {
        console.log(`Multiplication of 7 is`,(`7 x ${i} = ${7 * i}`))
    }
    
    
    
    
    for(let i=1; i<=10; i++)
    for(letj=1;j<=10;j++){
        console.log(`${i} x ${j} = ${i * j}`)
    }
    
    
    
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        sum += i;
    }
    console.log(sum);
    
    
    
    
    function factorial(n) {
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
    console.log(factorial(10));
    
    
    
    
    
    //let sum = 0;
    for (let i = 10; i <= 30; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    console.log(sum);
    
    
    
    
    
    function celsiusToFahrenheit(celsius) {
        return (celsius * 9/5) + 32;
    }
    
    
    
    function fahrenheitToCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5/9;
    }
    
    
    
    
    
    //function arrSum(array) {
       // return array.reduce((sum, num) => sum + num, 0);
    //}
    function arrSum(array) {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return sum;
    }
    
    
    
    
    //function arraverage(array) {
      //  return array.reduce((sum, num) => sum + num, 0) / array.length;
    //}
    function arrAverage(array) {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return array.length === sum / array.length; // Avoid division by zero
    }
    
    
    
    
    function getPositiveNum(array) {
        let result = [];
        for (let i = 0; i < array.length; i++) {
            if (array[i] > 0) {
                result.push(array[i]);
            }
        }
        return result;
    }
    
    
    
    
    function findMax(arr) {
        if (arr.length === 0) return undefined; 
         let max = arr[0];
          for (let i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        return max;
    }
    
    
    
    
    
    function isPrime(n) {
        if (n <= 1) 
            return false;
        if (n===2)return true;
        //Math.sqrt(num)
        for (let i = 2; i<=n; i++) {
            if (n % i === 0) return false;
        }
        return true;
    }
    
    
    function sumOfDigits(num) {
        let sum = 0;
        while (num > 0) {
            sum += num % 10;
               num = (num - (num % 10)) / 10; 
             }
        return sum;
    }
    
    
    
    
    
    
    function getPrimeNum(n) {
        let prime = [];
        let num = 2;
        while (prime.length < n) {
            if (isPrime(num)) {
                prime.push(num);
            }
            num++;
        }
        return prime;
    }
    
    
    
    function getPrimeNumb(n,count){
        let prime=[];
        let num=n+1;
    
        while (prime.length < count) {
            if (isPrime(num)) {
                prime.push(num);
            }
            num++;
        }
        return prime;
    }
    
    
    
    function reverseArray(arr) {
        let start = 0;
        let end = arr.length - 1;
        
        while (start < end) {
            let temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            
            start++;
            end--;
        }
        return arr;
    }
    
    
    
    
    function reverseString(str) {
        let charArray = []; 
        for (let i = 0; i < str.length; i++) {
            charArray.push(str[i]); 
         }
     let start = 0;
        let end = charArray.length - 1;
    
        while (start < end) {
            let temp = charArray[start];
            charArray[start] = charArray[end];
            charArray[end] = temp;
    
            start++;
            end--;
        }
        let reversedStr = "";
        for (let i = 0; i < charArray.length; i++) {
            reversedStr += charArray[i];
        }
    
        return reversedStr;
    }
    
    
    
    
    function mergeArr(arr1, arr2) {
            let mergedArr = []; 
            for (let i = 0; i < arr1.length; i++) {
                mergedArr.push(arr1[i]);}
    
            for (let i = 0; i < arr2.length; i++) {
                mergedArr.push(arr2[i]);
            }
        
            return mergedArr;
        }
        
    
    
        function rotateLeft(arr, I) {
            let n = arr.length;
            for (let j = 0; j < I; j++) {
                let first = arr[0];
                  for (let i = 0; i < n - 1; i++) {
                    arr[i] = arr[i + 1];
                }
                arr[n - 1] = first;
              }
            return arr;
        }
    
    
        function rotateRight(arr, I) {
            let n = arr.length;
            for (let j = 0; j < I; j++) {
                let last = arr[n-1];
                  for (let i = n-1; i >0; i--) {
                    arr[i] = arr[i - 1];
                }
                arr[0] = last;
              }
            return arr;
        }
        
    
    
    
        function Difference(arr1, arr2) {
            let result = [];
            for (let i = 0; i < arr1.length; i++) {
                let found = false;
                for (let j = 0; j < arr2.length; j++) {
                    if (arr1[i] === arr2[j]) { 
                         found = true;
                        break;
                    }
                }
                if (!found) { 
                     result.push(arr1[i]);
                }
            }
              for (let i = 0; i < arr2.length; i++) {
                let found = false;
                for (let j = 0; j < arr1.length; j++) {
                    if (arr2[i] === arr1[j]) { 
                          found = true;
                        break;
                    }
                }
                if (!found) { 
                     result.push(arr2[i]);
                }
            }
            return result;
        }
    
    
    
    
    
        function difference(arr1, arr2) {
            let result = [];
            for (let i = 0; i < arr1.length; i++) {
                let found = false;
                for (let j = 0; j < arr2.length; j++) {
                    if (arr1[i] === arr2[j]) { 
                         found = true;
                        break;
                    }
                }
                if (!found) { 
                    result.push(arr1[i]);
                }
            }
        
            return result;
        }
        


        function fibSeries(n) {
            let arr = [], num;
            let num1 = 0, num2 = 1;
        
            for (let i = 0; i < n; i++) {
                arr.push(num1);
                num = num1 + num2;
                num1 = num2;
                num2 = num;
            }
            return arr;
        }
        
        console.log(fibSeries(10)); 