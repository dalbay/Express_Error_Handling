# Express_Error_Handling

## Debugging Node.js with ndb (GoogleChromeLabs/ndb)
- install - ```npm i ndb --global```  
- add a new script to package.json - ```"debug": "ndb server.js"```  
- run the app in the terminal - ```> npm run debug```; a new Chrome window will open. 
- we also have access to the app variable(the express application that we export from app.js)  
  - stack: - this is the *Middleware Stack in our application*.  
  ![Express Error Handling middleware stack](images/expressErrorHandling1.png)  
  