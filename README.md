# Linear Regression Analysis

This repository contains a university assignment project that demonstrates linear regression analysis using synthetic data. The project is built with Node.js and Express on the server side, leverages [stdlib](https://github.com/stdlib-js/stdlib) for generating random data and performing statistical computations (e.g., computing means and dot products), and uses Chart.js on the client side to visualize the measured data along with the estimated regression line.


## Project Overview

- **Data Generation:**  
  Synthetic data is generated based on the linear model:
  y = 2x + 5 with added Gaussian noise using stdlib's random functions.

- **Parameter Estimation:**  
The regression parameters (slope and intercept) are computed via the least squares method using stdlib functions for calculating the mean and dot products.

- **API Endpoint:**  
The Express server exposes an API endpoint (`/model-data`) that returns the synthetic data, estimated regression parameters, and regression line endpoints in JSON format.

- **Visualization:**  
The client-side code fetches the model data and renders a scatter plot with the regression line using Chart.js.


## How to Run

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/iraandrushko/stdlib-demo.git
   cd stdlib-demo
    ```
2. **Install Dependencies:**
    ```bash
    npm install
    ```
3. **Start the server**
    ```bash
    npm start
    ```
    **Note:** For ```npm start``` to work, your ```package.json``` should include a script like:

    ```bash 
   {
     "scripts": {
        "start": "node demo.js"
        }
   }
    ```
    If you prefer, you can run ```node demo.js``` directly instead.
4. **See the result:**
 
    Visit http://localhost:3000 to view the linear regression visualization.
