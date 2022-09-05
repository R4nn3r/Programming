#include<iostream> //input and output
#include<vector>
#include<iomanip>
#include<string> //string manipulation 
#include<bits/stdc++.h>
#include<cmath>
#include<fstream>  //file manipulation
#include<iomanip>
#include<string> // Needed to use strings
#include<cstdlib> // Needed to use random numbers
#include<ctime>


using namespace std;

int main()
{
#/*1. Receive a number and determine whether it is odd or even.
    int num;
    cout << "Number: ";
    cin >> num;

    if(num % 2 == 0)
    {
        cout <<"Even";
    }else
    {
        cout << "odd";
    }*/


#/*2. Receive 3 numbers and display them in ascending order from smallest to largest
    double num1, num2, num3;
    cout << "Number 1: ";
    cin >> num1;
    cout << "Number 2: ";
    cin >> num2;
    cout << "Number 3: ";
    cin >> num3;


    if((num1 < num2 && num3) && (num2 < num3))
    {
        cout << "Your Answer: "<< endl << num1 << " < " << num2 << " < " << num3;
    }else if((num2 > num1 && num3) && (num1 > num3))
    {
        cout << "Your Answer: "<< endl << num2 << " < " << num1 << " < " << num3;
    }else if((num3 < num2 && num1) && (num2 < num1))
    {
        cout << "Your Answer: "<< endl << num3 << " < " << num2 << " < " << num1;
    }else
    {
        cout << "Your Answer: "<< endl << num1 << " = " << num2 << " = " << num3;
    }*/


#/*3. Add the numbers from 1 to 100 and display the sum
    int num;
    cout << "Number: ";
    cin >> num;

    int i, sum = 0;
    for (i = 0; i <= num; i++)
    {
        sum += i;
    }
    cout << "Sum: " << sum << endl;*/


#/*4. Add the even numbers between 0 and any positive integer number given by the user
    int num;
    cout << "Number: ";
    cin >> num;

    int i, sum = 0;

    for(i = 0; i <= num; i++)
    {
        if (i % 2 == 0)
        {
            sum += i;
        }
    }
    cout << sum;*/


#/*5. Find the average of two numbers given by the user
    int num;
    cout << "Number: ";
    cin >> num;
    int num2;
    cout << "Number two: ";
    cin >> num2;

    double ave = (num + num2) / 2;

    cout << ave << " :Is The Average ";*/


#/*6. Find the average, maximum, minimum, and sum of three numbers given by the user

    //get the input of the numbers::
    double num1, num2, num3;

    cout << "Number 1: ";
    cin >> num1;
    cout << "Number 2: ";
    cin >> num2;
    cout << "Number 3: ";
    cin >> num3;

    // the calculations of min, ave , max::
    //average
    double ave = (num1 + num2 + num3)/ 3;
    //sum
    double sum = num1 + num2 + num3;

    //minimum
    double min;
    if(num1 < num2 && num3)
    {
        min = num1;
    }else if(num2 < num1 && num3)
    {
        min = num2;
    }else if(num3 < num1 && num2)
    {
        min = num3;
    }else
    {
        min = num2;
    }
    //maximum
    double max;
    if(num1 > num2 && num3)
    {
        max = num1;
    }else if(num2 > num1 && num3)
    {
        max = num2;
    }else if(num3 > num1 && num2)
    {
        max = num3;
    }else
    {
        max = num1;
    }
        // display the result of the calculations for min, ave, max::

       int go;
        cout << "what to Find?" << endl << "1-Average:" << endl << "2-Minimum:" << endl << "3-Maximum: "<< endl << "4-Sum: "<< endl << "5-All: "<< endl;
        cin >> go;
        switch(go)
        {
            case 1:
                    cout << ave;
                    break;
            case 2:
                    cout << min;
                    break;
            case 3:
                    cout << max;
                    break;
            case 4:
                    cout << sum;
                    break;
            case 5:
                    cout << "The maximum: " << max << endl << "The minimum: " << min << endl <<"The average: " << ave << endl <<"The sum: " << sum << endl;
                    break; 
            default:
                    cout << "UNKNOWN ERROR TRY AGAIN!" << endl;
        }*/


#/*7. Find the area of a circle where the radius is provided by the user
        int r;
        cout << "Radius: ";
        cin >> r;

        double area = (r * r) * 3.14;

        cout << "Area: " << area << endl;*/


#/*8. Swap the contents of two variables using a third variable.

        int num1, num2, temp;
        cout << "Number 1: ";
        cin >> num1;
        cout << "Number 2: ";
        cin >> num2;

        cout << "Before the swap: "<< endl << "Num 1: "<< num1 << endl << "Num 2: " << num2 <<endl;
        
        temp = num1;
        num1 = num2;
        num2 = temp;
       

        cout << "After the swap: "<< endl << "Num 1: "<< num1 << endl << "Num 2: " << num2 <<endl;
        */


#/*9. Swap the content of two variables without using a third variable.
        int x, y;
        cout << "Number 1: ";
        cin >> x;
        cout << "Number 2: ";
        cin >> y;

        cout << "Before the swap: "<< endl << "Num 1: "<< x << endl << "Num 2: " << y <<endl;

        x = x + y;
        y = x - y;
        x = x - y;

        cout << "After the swap: "<< endl << "Num 2: "<< x << endl << "Num 1: " << y <<endl;*/


#/*11. Read 10 integers from the keyboard in the range 0 - 100, and count how many of them are larger than 50,and display this result
       
       int a[10], i , b = 0, n = 10;
       cout << "Enter 10 integers in the range 0 - 100." << endl;

       for (i = 0; i < n; i++)
       {
           cin >> a[i];
           if (a[i] >= 50)
           b++;
        }
        cout << "The Numbers that are larger than 50 are: "<< b ; */


#/*12. Take an integer from the user and display the factorial of that number
        double i, n, sum = 1;

        cout << "The Number: ";
        cin >> n;

        for(i = 1; i <= n; i++)
        {
          if( i <= n)
                {
                   sum *= i;
                }
        }
             cout << "The Factorial is: " << sum << endl;*/


#/*13. A program to find the sum of first N even numbers.
             int num, even = 0, sum = 0;
            cout << "Enter to find the sum of the even numbers upto:  ";
            cin >> num;

            for(int i = 0; i <= num; i++)
            {
                sum = sum + i;
                if (i % 2 == 0)
                    {
                        even = i + even;
                    }
            }
                cout << "The sum of all Even numbers upto " << num << " is: " << even << endl;     
                cout << "The sum of all the numbers is: " << sum << endl; */


#/*14. A program to generate Fibonacci series. The first two digits in the series are 0 and 1 and the rest is
    computed by adding the preceding two digits. (i.e. 0 1 1 2 3 5 8 13 . . .) 
        int i, n;
        cout << "Up To What Number: ";
        cin >> n;


        int t1,t2,Nextnum;

        t1 = 0;
        t2 = 1;

            Nextnum = t1 + t2;

            cout << "Fibonacci Series: " << t1 << " " << t2 ;

            for(i = 0; i <= n; i++)
            {
                t1 = t2;
                t2 = Nextnum;
                Nextnum = t1 + t2;
                cout << " " << Nextnum << " ";
            }




    */

    
#/*15. A program to find the sum of digits of given number. If for example the given number is 536, the sum of
                 digits in the number = 5 + 3 + 6 =14 
            
                int n,sum = 0,m;    
                cout<<"Enter a number: ";    
                cin>>n;    

                while(n > 0)    
                {    
                    m = n % 10;    
                    sum = sum + m;    
                    n = n / 10;    
                }    
                cout<<"Sum is: "<<sum<<endl;    */

            
#/*16. A program that Checks a given number is palindrome or not. A palindrome number is the one which is the
                    same when it is read from left to right.

            int num, rev, last_d;
            cout << "Number: ";
            cin >> num; // 123
            int safe = num;

            while (num != 0) 
            {
                rev *= 10; // rev = 0
                last_d = num % 10; //la -> 3 && -> num 12
                rev = rev + last_d; // rev = 0  + 3 = 3
                num /= 10; //
            }
                cout << "num = " << safe << endl;
                cout << "rev = " << rev << endl;
            
                if (safe == rev)
                {
                    cout << "The number is a palindrome.";
                }else
                {
                    cout << "The number is not a palindrome.";
                }
      */
        

#/* 17. A program that displays the number of digits of a given number
                
                int n , digit = 0;
                cout << "Enter Number: ";
                cin >> n;

                if(n == 0)
                {
                    cout << "The Number you Entered is 0|Zero| ";
                }else
                {
                    while(n != 0)
                    {
                        n = n / 10;
                        digit++;
                    }
                }

                    cout << "Digit: " << digit << endl;
              

#/*18. The factorial of a given number by a user
         6! = 1 * 2 * 3 * 4 * 5 * 6 = 720
 
        long long num, fac_num = 1;
        cout << "Number to Find the Factorial: ";
        cin >> num;

        for (long long i = 1; i <= num; i++) 
        {
            fac_num *= i;
        }

        cout << "Factorial of: " << num << "! = " << fac_num << endl; */


                
    return 0;

} 