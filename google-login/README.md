## What the project does

GMAIL LOGIN WITH GOOGLE

NOTE:  
    NODE VERSION --> v17.6.0 | v17.8.0 
    NPM VERSION --> v8.5.1 | v8.5.5

    Test GMAIL-ACCOUNT to Login 
        Email - mangoit.mit12@gmail.com
        Pass - mangoit@123

## How users can get started with the project

--- FRONT-END configuration ---

1. You have to clone => git clone https://github.com/muskaanved/SignInWithGoogle.git
2. You have to run  => npm install | npm install -f
3. Now start front-end server => npm start
4. You need to configure the base url (we are implement the code with http://localhost:3000 )
5. we have enabled the test mode on APIs So,We have to access the site with the use of TEST GMAIL-ACCOUNT.

--- BACK-END configuration --- 

1. You have to clone => git clone https://github.com/muskaanved/nodeLoginWithGoogle.git
2. You have to run  => npm install
3. Now 
    start back-end server => pm2 start server.js, 
    if stop back-end server => pm2 stop server.js 
    if restart back-end server => pm2 restart server.js 
    if check status => pm2 status 
4. You need to configure the callBack url nodeLoginWithGoogle -> server.js -> res.redirect(`http://localhost:3000/`) = res.redirect(`Paste your server url`);
