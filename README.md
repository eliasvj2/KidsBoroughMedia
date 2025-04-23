# KidsBoroughMedia
/KIDSBOROUGHMEDIA
                                     
			↳
				/client
				
			 ↳
				/api


The client contains all of the react code. To start the client open the command line and enter npm start.

The api folder contains all of the server side code. To start the server open the command line and enter npm run dev.

File structure of the client folder:

	/client
		 ↳
			
			/component
			/css
			/features
			/hooks
			/pages
			/resources
			app.js
			index.js

The file app.js contains all of the routes of the application. 

Index.js contains top level react components. At this level I have a library notistack that imports snackbarprovider. This is useful because I can use notifications at the react app.

To add a route go to app.js file. Create a file with jsx extension that will be the page. In app.js you use Route component to point to the page created.

File structure of the server /api:
				 ↳ config
					 ↳ dbconnection
				 ↳ controllers
				 ↳images
				 ↳ middleware
				 ↳models
				index.js
				.env
If a change is made to the mongodb model you will need to delete all of the data in database and update the frontend to show the change.
Admin panel
To login as the admin use the username admin and password 1234. Once in the admin panel you will be able to create an user, order and document.
