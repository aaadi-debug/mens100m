# mens100m

1. After downloading and extracting the zip folder
2. use the terminal in the same project directory
3. write "npm install" to install all the packages
4. "npm run dev" to start the server 

Use Postman:-

5. create a new collection "mens100m"

6. add a POST request "create Mens"
   
7. In url section of that POST request in Postman write "localhost:8000/mens
   
8. go to "Body" > "text" > "JSON"
    
9. copy and paste the below code into that JSON -
    
{

  "ranking": 1,
  
  "name": "Christian COLEMAN",
  
  "dob": "1996-03-05T18:30:00.000Z",
  
  "country": "USA",
  
  "score": 1477,
  
}

10. click "Send"
    

Now, you can see the response in your browser at "localhost:8000/mens"
One can add as much JSON data as needed, and it will be reflected in the browser itself
