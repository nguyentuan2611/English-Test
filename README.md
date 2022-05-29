# English-Test
Frameword: Angular , Spring Boot
# Environment require
- IDE support spring boot  (eclipse , spring tool suite 4 ...)
- IDE support lombok.jar
- Mysql sever
# Guide
- Build path lombok library "BackEnd/english_test/lib/lombok.jar" on IDE.
- Import database "database/englishtest.sql".
- Edit port database coincide your port mysql in file "application.properties"
- Run project with Spring Boot App.


# Tutorial API  'http://localhost:8080/'  +
- Login:  'rest/checkLogin' - POST
        {
        "userName": "thanh123",
        "password": "123"
         }
- Get all user:   'rest/getListUser'
- Sign up user: 'rest/register' - POST
        {
	          "userName": "Thanh12345",
            "password": "12345",
            "fullName": "ThanhNguyen",
            "email": ""
        }
-----------
- Get all reslut exam of User: 'rest/getListResult' - POST (vd: rest/getListResult?id=3)
-----------
- Get top User with the highest score: 'rest/getRank'
- -----------
- Get List 30 Question: 'rest/getListQuestion'
---------------
- Get List of answers : 'rest/getListAnswer'
- Check the correct answer:  'rest/checkAnswer' - POST 
              {
              "id": 2,
              "timed": "10:30",
              "listAnswer":[
                    {
                        "answer": "had",
                        "id": 1
                    },
                    {
                        "answer": "an eraser",
                        "id": 10
                    },
                    {
                      "answer": "watch",
                        "id": 5
                    }
              ]
            }