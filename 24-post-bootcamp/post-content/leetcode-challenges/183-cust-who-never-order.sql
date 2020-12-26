-- Write your MySQL query statement below

-- Select name from customers, and rename to customers
-- Where the ID is not in a select query of custID in orders)

SELECT name as Customers FROM Customers 
WHERE Id NOT IN (SELECT CustomerId from Orders);