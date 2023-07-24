# Classic Reunions

Design a program for Classic reunions - a company that provides services for organizers of high school class reunions. Design a flowchart or psuedocode for a program that accepts reunion contract data and displays a completed contract ready for a customer's signature.

Accept the following as input:

Contract number

Contact person's first and last names

Month, day, and year of the reunion party

Number of guests expected at the reunion

Indicators of whether selected options include cocktails, appetizers, dinner, and a band


Display output as follows:

If the contract number is not between 10000 and 99999 inclusive, issue an error message and end the program.

If the reunion date is invalid, issue an error message and end the program. (In other words, make sure the month is between 1 and 12 inclusive. If the month is 1, 3, 5, 7, 8, 10, or 12, the day must be between 1 and 31 inclusive. If the month is 2, the day must be between 1 and 28 inclusive. You do not need to check for leap years. If the month is 4, 6, 8, or 11, the day must be between 1 to 30 inclusive.)

The indicator value for cocktails, appetizers, dinner, and the band must each be "Y" or "N" (for "Yes" or "No"); otherwise, display an error message and assume "Y".

Display all the entered data along with the total fee for the reunion, which is calculated as follows:

$5 per person base price

An additional $12 per person for appetizers only, $15 per person for cocktails only, and $19 person for dinner only. 

If the customer selects appetizers and cocktails, but no dinner, the cost is $22 per person.

If the customer selects cocktails and dinner, but no appetizers, the cost is $26 per person. 

If the customer selects appetizers and dinner, but no cocktails, the cost is $24 per person. 

If the customer selects appetizers, cocktails, and dinner, the cost is $36 per person.

The charge for the band is $500 no matter how many people attend the reunion.