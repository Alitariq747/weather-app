



# Weather App



The Weather App is a simple web application built using Express.js, Node.js, and EJS templates to provide real-time weather information for a specified city. It leverages the OpenWeatherMap API to fetch weather data based on user input.

## Features

- User-friendly interface to enter a city name.
- Displays current weather information, including temperature, humidity, and conditions.
- Responsive design for a seamless experience on both desktop and mobile devices.

## Prerequisites

Before you get started with the Weather App, make sure you have the following software installed:

- Node.js: Download and install Node.js from [nodejs.org](https://nodejs.org/).
- npm (Node Package Manager): Typically included with Node.js.

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/Alitariq747/weather-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd weather-app
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

## Usage

1. Configure your OpenWeatherMap API Key:

   - Create an account on [OpenWeatherMap](https://openweathermap.org/).
   - Generate an API Key.
   - Copy the API Key to your clipboard.

2. Create a `.env` file in the project root:

   ```plaintext
   OPENWEATHERMAP_API_KEY=YOUR_API_KEY
   ```

   Replace `YOUR_API_KEY` with the API Key you generated.

3. Start the Weather App:

   ```bash
   npm start
   ```

4. Open your web browser and navigate to [http://localhost:3000](http://localhost:3000) to access the Weather App.

5. Enter the name of a city and press enter. The app will fetch and display the current weather conditions for that city.

## Development

If you want to make changes or customize the Weather App, the following information will be useful:

- The main server file is `app.js`.
- EJS templates are located in the `views` directory.
- CSS styles are located in the `public/css` directory.

## Acknowledgments

- This project uses the [OpenWeatherMap API](https://openweathermap.org/).
- The app's design is based on Bootstrap for styling and responsiveness.



## Contact

If you have any questions, feedback, or suggestions, feel free to contact the project owner:

- Email: alitariq9740@gmail.com
- GitHub: Alitariq747(https://github.com/Alitariq747)

Thank you for using the Weather App!


