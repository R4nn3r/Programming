#include<iostream>
#include<vector>
#include<iomanip>
#include <string>
#include <bits/stdc++.h>
#include <cmath>

using namespace std;


int main()
{
    
#/*1. Prompt the user for two numbers A & B, computes and displays C=A/B. If the number B is zero, displays a
       
        “division by Zero” message. 
        double a, b, c;
        cout << "========================================================= \n";

        cout << "First number: ";
        cin >> a; // eg. x = 5
        cout << "Second number: ";
        cin >> b; // eg. y = 15
        
        

        if (b == 0)
        {
            cout << "division by Zero" << endl;
        }else
        {
            c = a / b;
            cout << "Answer: " << c << endl;
        }
        */
    


//============================================================================================================//
#/*2. Write a program that reads two integers (in any order) and then print either “multiple” or “not “according to
    weather 2nd number is multiple of the 1st one or not.
    int x, y;

    cout << "weather 2nd number is multiple of the 1st one or not: \n";
    cout << "========================================================= \n";

    cout << "Second number: ";
    cin >> x; // eg. x = 5
    cout << "First number: ";
    cin >> y; // eg. y = 15

    int k;
    k = x % y;

    if(k == 0)
    {
        cout << x << " Is a Multiple of "<< y << endl;
    }else
    {
        cout << "Not a Multiple" << endl;
    }  
    */










//============================================================================================================//
#/*3. Write a program that reads two integers (in any order) and then print either “multiple” or “not” according to
    weather one of the integer is multiple of other.
   
            int x, y;

            cout << "weather 2nd number is multiple of the 1st one or not: \n";
            cout << "========================================================= \n";

            cout << "Second number: ";
            cin >> x; // eg. x = 5
            cout << "First number: ";
            cin >> y; // eg. y = 15

            int k;
            k = x % y;

            int z;
            z = y % x;

            if(k == 0)
            {
                cout << x << " Is a Multiple of "<< y << endl;
            }else if (z == 0)
            {
                cout << y << " Is a Multiple of "<< x << endl;
            } else
            {
                cout << "Not!" << endl;
            }*/


//============================================================================================================//
#/*4. Write a program that takes two numbers from user and determines that first number is a factor of second
    number
        double x, y;
        cout << "Determine if the First number is a Factor of the second number or not? \n";
        cout << "========================================================= \n";

        cout << "First number: ";
        cin >> x; // eg. 150
        cout << "Second number: ";
        cin >> y; // eg. 50
        
        
        int k;
        k = x / y; // k = 3
        int j;
        j = k * y; // j = 3 * 50 -> 150 == (x = 150) 

        if (j == x)
        {
            cout << y << " Is a Factor of " << x << endl;
        }else
        {
            cout << y << " NOT A Factor of " << x << endl;
        }*/


//============================================================================================================//
#/*5. Write a program that mimics a calculator. The program should take as input two integers and the operation
    to be performed. It should then output the numbers, the operator, and the result. (For division, if the
    denominator is zero, output an appropriate message.) Use 1 for Addition, 2 for Subtraction, 3 for Multiplication,
    and 4 for Division.

            double x, y;
            char op;
            cout << "First Number: ";
            cin >> x ;
            cout << "Operation? ";
            cin >> op ;
            cout << "Second Number: ";
            cin >> y ;
            
            double result;
            if( op == '+')
            {
                result = x + y;
            }
            else if( op == '/')
            {
                result = x / y;
            }
            else if( op == '*')
            {
                result = x * y;
            }
            else if( op == '-')
            {
                result = x - y;
            }
            else
            {
                cout << "ERROR: Invalid";
            }
            cout << result; */


//============================================================================================================//
#/*6. Write a program that calculate the real roots of a quadratic equation and displays the result.
        
        // ax^2+bx+c = 0 this a quadratic equation
        // the root is calculated --> X = -b +- |b^2 - 4ac / 2a

        float x1, x2;
        float a, b, c;

        cout << "Enter The coefficients of the quadratic equation a, b, c : " << endl;
        cin >> a >> b >> c;
        float root = (b*b - 4*a*c);
        float z = 2*a;

        if (root > 0)
        {
            x1 = -b + sqrt(root)/ z;
            x2 = -b - sqrt(root)/ z;
            cout << "Roots are real and different. " << endl;
            cout << "x1 = " << x1 << endl;
            cout << "x2 = " << x2 << endl;
        }else if (root == 0)
        {
            x1 = x2 = -b / z;
            cout << "Roots are real and same. " << endl;
            cout << "x1 = x2 = " << x1 << endl;
        }else if(root < 0)
        {
            x1 = -b/(2*a);
            x2 =sqrt(-root)/(z);
            cout << "Roots are complex and different."  << endl;
            cout << "x1 = " << x1 << " + " << x2 << "i" << endl;
            cout << "x2 = " << x1 << " - " << x2 << "i" << endl; 
        }*/


//============================================================================================================//
#/*7. Write a program to display the first 100 odd numbers
            int i, sum = 0;
            
            for (i = 0; i <= 100; i++)
            {
                if ( (i % 2) != 0 )
                {
                    cout << "Odd: " << i << endl;
                }
            }*/


//============================================================================================================//
#/*8. Write for, do-while, and while statements to compute the following sums and products.
            a. 1+2+3+…+100
            b. 1*2*3*…*20

            cout << "a. 1+2+3+…+100: \n" << endl;
            

            // for loop         a. 1+2+3+…+100
            int sum = 0;
            for (int i = 0; i <= 100; i++) 
            {
                sum = sum + i;
            }

            cout << "================================================================="<< endl;
            cout << "For Loop:"<< endl;
            cout << "sum: " << sum << endl;

            // do while loop    a. 1+2+3+…+100
            int j = 1;
            int sum1 = 0;
            do
            {
                sum1 = sum1 + j;
                j++;
            } while (j <= 100);

            cout << "================================================================= " << endl;
            cout << "Do-while Loop:"<< endl;
            cout << "sum: " << sum1 << endl;

            //while loop        a. 1+2+3+…+100
            int k = 1;
            int sum2 = 0 ;
            while (k <= 100)
            {
                sum2 = sum2 + k;
                k++;
            }

            cout << "================================================================="<< endl;
            cout << "while Loop:" << endl;
            cout << "sum: " << sum2 << endl;

            cout << endl;
            cout << endl;


            //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            
            cout << "b. 1*2*3*…*20*: \n" << endl;


            // for loop         b. 1*2*3*…*20*
            double sum3 = 1;
            for (double l = 1; l <= 20; l++) 
            {
                sum3 = sum3 * l;
            }

            cout << "================================================================="<< endl;
            cout << "For Loop:"<< endl;
            cout << "multiple: " << sum3 << endl;

            // do while loop    b. 1*2*3*…*20*
            double m = 1;
            double sum4 = 1;
            do
            {
                sum4 = sum4 * m;
                m++;
            } while (m <= 20);

            cout << "================================================================= " << endl;
            cout << "Do-while Loop:"<< endl;
            cout << "multiple: " << sum4 << endl;

            //while loop        b. 1*2*3*…*20*
            double n = 1;
            double sum5 = 1 ;
            while (n <= 20)
            {
                sum5 = sum5 * n;
                n++;
            }

            cout << "================================================================="<< endl;
            cout << "while Loop:" << endl;
            cout << "multiple: " << sum5 << endl; */


//============================================================================================================//
#/*9. A prime number is an integer greater than one and divisible only by itself and one. The first seven prime
    numbers are 2, 3, 5, 7, 11, 13, and 17. Write a program that displays all the prime numbers between 1 and 100. 
    
            
        int isprime_num(int);

        int main()
        {
            int a;
            cout << "Find the prime numbers up too: ";
            cin >> a;

            bool isprime;
            for (int n = 2; n <= a; n++)
            {

                isprime = isprime_num(n);


                if (isprime == true)
                cout << n << " ";
            }
            return 0; 
        }

        // the function that does the calculation
        int isprime_num(int n)
        {
            bool isprime = true;
            for( int i = 2; i <= n / 2; i++ )
            {
                if(n % i == 0)
                {
                    isprime = false;
                    break;
                }
            }
            return isprime;
        }
    */


//============================================================================================================//
#/*10. Write a C++ program that counts the number of digits in an integer number. For example; 23,498 has five
    digits
    
        int n;
        cout << "ENTER num: ";
        cin >> n;

        int count = 0;

            while (n > 0)
            {
                n = n / 10;
                count++;
            }

            // int count = n % 10; >>>>>> easier method
        
            cout << "Digits: " << count << endl;*/


//============================================================================================================//
#/* 11. Write a C++ application that can compute the letter grade of a student after accepting the student’s mid and
    final mark. The program should only accept mid result [0-40] and final [0- 60]. If the data entered violates this
    rule, the program should display that the user should enter the mark in the specified range. The program is also
    expected to run until the user refuses to continue. 

            int mid, fina, result;
            char grade;
            cout << "Grade Report: ";
            cout << "=========================================================================== \n";
            do
            {
                cout << "Enter Your mid Grade out off 40%: "; // this cause the do while loops start by executing the code first then check the conditions
                cin >> mid;
            } while (mid < 0 || mid > 40);
            
            do
            {
                cout << "Enter Your Final Grade out off 60%: ";
                cin >> fina;
            } while (fina < 0 || fina > 60);
            
            result = mid + fina;
            
            cout << "=========================================================================== \n";

            if (result >= 90 && result <= 100)
            {
                cout << " A* : " << result << endl;
            }else if(result >= 80 && result <= 89)
            {
                cout << " A :  " << result << endl;
            }else if(result >= 70 && result <= 79)
            {
                cout << " B :  " << result << endl;
            }else if(result >= 60 && result <= 69)
            {
                cout << " C :  " << result << endl;
            }else if(result >= 50 && result <= 59)
            {
                cout << " D :  " << result << endl;
            }*/


//============================================================================================================//
#/* 12. Write a C++ program that accepts a positive number from the user and displays the factorial of that number.
    Use for loops to find the factorial of the number. 

            int num ,fac = 1, lam;
            //taking in an input thats only positive
            do
            {
                cout << "Find the factorial of the number: ";
                cin >> num;
                    if(num < 0)
                        cout << "Please Enter a positive number! \n";
            }while(num < 0);
            
            //finding the factorial of the number*/

   
//============================================================================================================//
#/* 13. write a program in C++ to read a number n and a single digit d. The program then determines whether the
    digit presents in the number or not. If it presents the program should determine how many times it appear and
    the position of the digit in the number 

    int num, last_d, place_d, counter_d;
    cout << "Number: ";
    cin >> num; // 125451
    cout << "Number to find: ";
    cin >> place_d; // 5

    int safe = num;
    while(num != 0) 
    {
        last_d = num % 10; // last_d = 1
        num = num / 10; //
        if(last_d == place_d)
        {
            counter_d++;
        }

    }
    cout << "Number is present: " << counter_d << " Times. ";*/
    


//============================================================================================================//
#/* 14. Using the ASCII table numbers, write a program to print the following output, using a nested for loop. (Hint:
    the outer loop should loop from 1 to 5, and the inner loop’s start variable should be 65, the value of ASCII “A”). 
    
    for(int i = 65; i < 75; i++)
    {
        cout << char(i) << " ";
    }
    
    
    */
    

//============================================================================================================//
#/*15. Write a C++ program that will print the following shapes  
        A.
        *
        **
        ***
        ****
        *****

        solution for A

        char sym;
        cout << "Symbol: ";
        cin >> sym;


        for (int i = 0; i < 5; i++) //height
        {
            cout << sym; 
            for(int j = 5; j > 5 - i; j--) //width
                {
                    cout << sym ;
                }
            cout << endl;
        }

        B.
        *****
        ****
        ***
        **
        *

        Solution for B

        char sym;
        cout << "Symbol: ";
        cin >> sym;


        for (int i = 0; i < 5; i++) //height
        {
            cout << sym; 
            for(int j = 0; j < 4 - i; j++) //width
                {
                    cout << sym ;
                }
            cout << endl;
        }
    

        D.
        *
        **
        ****
        *****
        ****
        **
        *

        Solution for C

        for(int i = 0; i < 5; i++)
        {
            for (int j = 0; j < i; j++)
            {
                cout << setw(1) << "*";
            }
        cout << endl;
        }

        for(int i = 0; i < 5; i++)
        {
            for (int j = 0; j < 5 - i; j++)
            {
                cout << setw(1) << "*";
            }
        cout << endl;
        }

        d. cool thing
            int h;
            cout << "Height: ";
            cin >> h;


            for(int i = 0; i < h; i++)
            {
                for (int j = 0; j < h - i; j++)
                {
                    cout << setw(1) << " ";
                }
                for( int j = 0; j <= i; j++)
                {
                    cout << setw(1) << "*";
                }
                cout << "  ";
                for(int k = 0; k <= i; k++)
                {
                    cout << setw(1) << "*";
                }

            cout << endl;
            }
    
    */


//============================================================================================================//
#/*16. A program to generate Fibonacci series. The first two digits in the series are 0 and 1 and the rest is 
        computed by adding the preceding two digits. (i.e. 0 1 2 3 5 8 13 . . .) 
        int n;
        cout << "Up to Number: ";
        cin >> n;

        int t1, t2, numNext;
        t1 = 0;
        t2 = 1;
        numNext = t1 + t2;

        cout << "Fibonacci series: " << " " << t1 << " " << t2 << " ";

        for(int i = 0; i <= n; i++)
        {
            t1 = t2;
            t2 = numNext;
            numNext = t1 + t2;

            cout << numNext << " " ;
        }
        */
      




//============================================================================================================//
#/*17. Write a program that accepts a number from the key board and reverses the digits of a given number. 
        write a program that generates the following series of numbers 
        a.
        1
        12
        123
        1234
        12345
        123456
        1234567

        Solution for a
        int h;
        cout << "Height: ";
        cin >> h;


        for(int i = 1; i < h; i++)
        {
            for(int k = 1; k <= i; k++)
            {
                cout << setw(1) << k;
            }

        cout << endl;
        }

        b.
        1
        21
        321
        4321
        54321
        654321
        7654321

        int h;
        cout << "Height: ";
        cin >> h;



        for(int i = 1; i <= h; i++)
        {
            for(int k = i; k >= 1; k--)
            {
                cout << setw(1) << k;
            }

        cout << endl;
        }

        c.
        987654321
        87654321
        7654321
        654321
        54321
        4321
        321
        21
        1

        int h = 9;

        for (int i = h; i >= 1; i--)
        {
            for (int j = i; j >= 1; j--)
            {
                cout << setw(1) << j;
            } cout << endl;
        }
        */


//============================================================================================================//
#/*18.. Use either a switch or an if-else statement and display whether a vowel or a consonant character is entered
    by the user. The program should work for both lower case and upper case letters. 
    
        char word;
    cout << "Enter word: ";
    cin >> word;

    // Vowel = a , e , i , o , u or A, E, U, I, O,
    if(word == 'a' || word == 'e' || word == 'i'|| word == 'o' || word == 'u' || word == 'A' || word == 'E' || word == 'I'|| word == 'O' || word == 'U')
    {
        cout << word <<" is a Vowel.";
    }else
        cout << word << " is a consonant.";


    switch(word)
    {
        case 'a':
                cout << word <<" is a Vowel.";
                break;
        case 'e':
                cout << word <<" is a Vowel.";
                break;
        case 'i':
                cout << word <<" is a Vowel.";
                break;
        case 'o':
                cout << word <<" is a Vowel.";
                break;
        case 'u':
                cout << word <<" is a Vowel.";
                break;
        case 'A':
                cout << word <<" is a Vowel.";
                break;
        case 'E':
                cout << word <<" is a Vowel.";
                break;
        case 'I':
                cout << word <<" is a Vowel.";
                break;
        case 'O':
                cout << word <<" is a Vowel.";
                break;
        case 'U':
                cout << word <<" is a Vowel.";
                break;
        default:
                cout << word <<" is a consonant.";
    }


   



    */
//============================================================================================================//
 #/*19. Write a C++ code to display only even numbers found between 0 and 20.
        for (int i = 0; i <= 20; i++)
        {
            if(i % 2 == 1)
                cout << i << " ";
        }

    */



//============================================================================================================//
#/*20. A multiplication table
            long long num , mult_num = 1;
            cout << "======================================================== \n";
            cout << "Multiplication up to: ";
            cin >> num;

            for (long long i = 1; i <= num; i++)
                {
                    cout << "                Multiplication of " << i <<endl;
                    cout << "======================================================== \n";
                    for (long long j = 1; j <= 10; j++)
                    {
                        mult_num = j * i;
                        cout << i  << " x " << j << " = " << mult_num << endl;
                    }
                    cout << "======================================================== \n";
                    
                } */
               
//============================================================================================================//










    return 0; 
}

