# Module 9

## Content: Databases

* What is a Database
* Database Servers
* Transact SQL
* Data Definition Language Queries
* Data Manipulation Language Queries
* Stored Procedures
* Database Normalisation

## Database concepts

* A database is a computerized system that makes it easy to search, select and store information

* there are different data storage architectures:
  * File on local hard drive
    * i.e. streamreader
  * File of File server
    * i.e. streamreader over SMB
  * Database server
    * i.e. SQL query over ODBC
  * App server and database server
    * i.e. HTTP then SQL query over ODBC

* database can be on one computer or stored across many
* You don't talk to the data directly you tell the database how to manage the files

* SQL
  * Structured Query Language
  * Ask the database questions
  * Make changes to records
  * Create new records
  * Change / implement the database design

* RDBMS
  * Relational Database Management System
  * Commits data to log and data files on disk
  * Exposes data to users via SQL
  * Enforces rules about data

* ODBC
  * Protocol that allows clients to connect to database
  * Authentication
  * Listens for Queries
  * Sends Results / Responses
  * Stateless Protocol (unlike HTML)

* Data files
  * Log Files Cache database writes
  * Data Files hold the master copy of the data
  * RDBMS holds the most frequently needed and indexed data in RAM for speed

* Transactions
  * Ensures that every command in a SQL Query completes or everything gets rolled back
  * RDBMS ensures data rules are followed

## Database design

* Data stored into Tables:
  * Data is never directly stored into the database. Data is stored into tables, created inside the database
* Relationships Between Tables
  * RDBMS also allows to have relationships between tables which makes the data more meaningful and connected
  * Reduced Redundancy:
    * In the modern world hard drives are very cheap, but earlier when hard drives were too expensive, unnecessary repetition of datain database was a big problem
  * Data Consistency:
  * On Live data, i.e., data that is being continuously updated and added, maintaining the consistency of data can become a challenge. But DBMS handles it all by itself
* Support Multiple user and Concurrent Access:
  * DBMS allows multiple users to work on it (update, insert, delete data) at the same time and still manages to maintain the data consistency

## Entity relationship diagrams and Table designs

### Creating a table in SQL

* In Relational database model, a table is a collection of data elements organized in terms of rows and columns.
* A table is also considered as a convenient representation of relations.
* Tables can have duplicate rows of data while a true relation cannot have duplicate data.
* Table is the simplest form of data storage.

### Relational model

* In a relational model, data is organized in two-dimensional tables and the relationship is maintained by storing a common field.
* The basic structure of data in the relational model is tables.
* All the information related to a particular type is stored in rows of that table.
* So, tables are also known as relations in relational model.

* Types of relationship:
  * One to One
    * i.e. one customer may only have one credit card
  * One to many
    * i.e. one customer will have many orders
  * Many to Many
    * i.e One customer may have multiple delivery addresses and one delivery address may be linked to multiple diferent customers

## Transact SQL DML (data manipulation language)

### SQL query statements

* There are FOUR main types of SQL statements used to manipulate SQL Server data:
  * Select
    * retrieves data
  * Insert
    * adds a new record or eecords into a table
  * Update
    * modifies one or more properties/fields of a record or records
  * Delete
    * deletes an entire record or multiple records

```sql
// insert
INSERT dbo.Products (ProductName, ProductID, Price, ProductDescription) 
VALUES ('Screwdriver', 50, 3.17, 'Flat head') 
GO 

// select
SELECT *        // * denotes all
FROM Orders
WHERE ShipCountry = 'Canada'

//update
UPDATE dbo.Products
SET ProductName = 'Flat Head Screwdriver' 
WHERE ProductID = 50 
GO 

//delete
DELETE FROM Customers
WHERE CustomerId = 'ALFKI'
```

## DML (data manipulation laguage) vs DDL (data definition language)

* DML is used to manipulate the data itself
  * using select, update, insert and delete

* DDL is used to define data structures
  * using commands:
    * CREATE DATABASE
    * DROP TABLE
      * drop means delete
    * RENAME TABLE
    * ALTER DATABASE

## Stored vs ad hoc queries

* Adhoc queries are created and run each time a client calls the database
  * they can be very slow/ take time to execute

* Stored procedures are stored versions of queries
  * they redude run time of calls to the database / are more efficient

## Database normalisation

* There are 5 levels of normalisation but most devs only adhere to third normal form:
  * 1NF (first normal form):
    * Tables should only have single(atomic) valued attributes/columns
    * Values stored in a column should be of the same domain
    * All the columns in a table should have unique names
    * And the order in which data is stored, does not matter
  * 2NF
    * Tables should follow ALL the rules of 1NF plus:
    * it should not have Partial Dependency
      * all the coloumns in the table MUST depend on the WHOLE of the primary key
  * 3NF
    * Tables should follow ALL the rules of 1NF and 2NF plus:
    * it doesn't have Transitive Dependency
      * coloumns can ONLY depend on the WHOLE of the primary key and NOT any other column in the table

### Side Note

* connectining to a database from vs
  * add database to project
  * get connection string
  * set string = @"connection_string"
  * add using System.Data.SqlClient;
  * use command SqlConnection and assign that to new SqlConnection(string_of_connection_string);
  * use command sqlcon.Open(); to open connection to database
  * you can now interact with database

```c#
static void Main(string[] args)
{
    // connection string
    string conn = @"Data Source=localhost\MSSQLSERVER01;Database=master;Trusted_Connection=True;";

    SqlConnection sqlcon = new SqlConnection(conn);
    sqlcon.Open();

    // sql statement
    string sql = "SELECT*FROM Employee";

    SqlCommand sqlcomm = new SqlCommand(sql,sqlcon);

    SqlDataReader reader = sqlcomm.ExecuteReader();

    while(reader.Read())
    {
        Console.Writeline("employee id: " + reader.GetString(0));
        Console.Writeline("employee first name: " + reader.GetString(1));
    }

    Console.Read();
}
```
