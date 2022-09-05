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
/* Worksheet 4
For each of the problems write a C++ code to perform the required task. Your program should be based on
the flow chart you drawn in the first worksheet. */


using namespace std;

int main()
{

#/* 1. Write a float function triangle() that computes the area of a triangle using its two formal parameters h and w,
        where h is the height and w is the length of the bases of the triangle. 
     
        float triangle(float x, float y)
        {
            int area;
            area = 0.5 * (x * y);
            
            cout << "Area: " << area << endl;
            return 0;
        }

        int main()
        {
            cout << "Write a float function triangle() that computes the area of a triangle using its two formal parameters h and w," << endl;
            cout << "where h is the height and w is the length of the bases of the triangle." << endl;

            float h, w;

            cout << "Height of triangle: ";
            cin >> h;
            cout << "Width of triangle: ";
            cin >> w;

            triangle(h , w);

            //system("pause > 0");
            return 0;  
        }
======================================================================================================================     
     */
#/* 2. Write a float function rectangle() that computes and returns the area of a rectangle using its two float formal
    parameters h and w, where h is the height and w is the width of the rectangle 
        float rectangle(float h, float w)
        {
            int area;

            area = h * w;

            cout << "Area Of The Rectangle: "<< area << endl;

            return area;
        }

        int main()
        {   
            int height, width;

            cout << "Enter The Height and Width of A Rectangle" << endl;
            cout << "Enter Height: ";
            cin >> height;
            cout << "Enter Width: ";
            cin >> width;

            rectangle(height, width);


            //system("pause > 0");
            return 0;  
        }

===============================================================================================================
    */
#/* 3. The formula for a line is normally given as y = mx + b. Write a function Line() that expects three float
    parameters, a slop m, a y-intercept b, and an x-coordinate x. the function computes the y-coordinate associated
    with the line specified by m and b at x-coordinate. 

    
        float line(float x, float m, float b)
        {
            int y;

            y = (m * x) + b;

            cout << y << " = " << m << "x" << x << " + " << b << endl;
            cout << "Line: " << y;

            return y;
        }

        int main()
        {   
            int x_inter, slope, y_inter;
            //  x       m       b

            cout << "Enter The x , y-intercept and slope to find the line of a function" << endl;
            cout << "y-intercept: ";
            cin >> y_inter;
            cout << "x-coordinate: ";
            cin >> x_inter;
            cout << "Slope: ";
            cin >> slope;

            line(x_inter, slope, y_inter);


            //system("pause > 0");
            return 0;  
        }
    
===============================================================================================================
    */
/* 4. Write a program that accepts a positive integer from the user and displays the factorial of the given number.
    You should use a recursive function called factorial () to calculate the factorial of the number. 
    
===============================================================================================================
    */
/* 5. Develop a program that uses the function factorial () of exercise 4 to compute an approximation of e (Euler’s
    number). Base your approximation on the following formula for e: 1 + 1/1! + 1/2! + 1/3! + … 

===============================================================================================================
    */
/* 6. Write a function called isPrime() that accepts a number and determine whether 
    the number is prime or not. 


============================================================================================================== 
   */
/* 7. Write a function called isEven() that uses the remainder operator(%) to determine whether an integer is even
    or not   
===============================================================================================================
    */

    return 0;
}