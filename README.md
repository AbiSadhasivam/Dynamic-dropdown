This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### AirportChooser Component

A react component built to load airport details from a json and dynamically load the list of airports in the dropdown

An example has been implemented in the App.js

The component takes the following as props
1. url - URL of the JSON which has the airport details similar to the data in the [link ](https://github.com/AbiSadhasivam/Dynamic-dropdown/blob/master/public/data.json)
2. noOfElementsToAdd - the number of elements to be added on every scroll.

### Suggested Improvements 

1. Dynamically handle the element removal - All elements that are not in the view can be removed 
2. Error handling - Better error handling of the props

