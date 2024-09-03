String Sorter API
Overview
String Sorter API is a simple web service that accepts a string, converts it to lowercase, splits it into individual characters, sorts them alphabetically, and returns the sorted characters as a list. The API is deployed on Vercel, making it easily accessible for testing and integration.

Features
Receives a string as input.
Converts the string to lowercase to ensure uniformity.
Splits the string into individual characters.
Sorts the characters alphabetically.
Returns the sorted characters as a JSON response.
Technologies Used
React.js: Frontend framework used for the user interface.
Vercel: Platform used for deployment.
JavaScript: Programming language used for backend processing.
Supabase: Used for testing the API endpoint.
Setup and Installation
Follow the steps below to set up the project on your local machine:

Clone the Repository:

bash
Copy code
https://github.com/sanraf/String-Sort-Api.git
cd string-sorter-api
Install Dependencies: Make sure you have Node.js installed. Then run:

bash
Copy code
npm install
Run the Project Locally: To start the development server, use:

bash
Copy code
npm run dev
The app should be running on http://localhost:3000.

Deploy to Vercel:

If you haven't already, install the Vercel CLI:
bash
Copy code
npm install -g vercel
Deploy the app to Vercel:
bash
Copy code
vercel
API Usage
Endpoint
The main API endpoint to be used for sorting the string is:


Copy code
https://string-sort-api.vercel.app/
Method: POST
Request Body
The API expects a JSON object with a field called data. Here is an example of the request body:

json
Copy code
{
  "data": "Example"
}
Response
The response will be a JSON object containing the sorted characters as a list:

json
Copy code
{
  "word": ["a", "e", "e", "l", "m", "p", "x"]
}
Error Handling
If the input is not a string, the API will return an error:

json
Copy code
{
  "error": "Invalid input. Data must be a string."
}
In case of server errors, the response will be:

json
Copy code
{
  "error": "Server error. Please check your inputs."
}
Testing the API
Manual Testing with Postman:

Send a POST request to your endpoint URL with the JSON body as shown above.
Verify that the response returns the sorted list of characters.

