

# SpaceX Data Sharing App

This project is a React app that allows users to access and search SpaceX data, including information about rockets and capsules. The app fetches data from the SpaceX API and presents it in a user-friendly interface.

## Table of Contents

- [About SpaceX](#about-spacex)

- [Features](#features)

- [Technologies Used](#technologies-used)

- [Getting Started](#getting-started)

- [Usage](#usage)

- [API Authorization](#api-authorization)

- [Testing](#testing)

- [Deployment](#deployment)

- [Contributing](#contributing)

- [License](#license)

## About SpaceX

SpaceX (Space Exploration Technologies Corp.) is a private aerospace manufacturer and space transportation company founded by Elon Musk. They design, manufacture, and launch advanced rockets and spacecraft. More information about SpaceX can be found on their [official website](https://www.spacex.com). They have also open-sourced their data through the [SpaceX API documentation](https://docs.spacexdata.com/).

## Features

- Landing page with a modern and responsive design

- Search form with three filters: status, original launch, and type

- Optimized search query for quick results

- Data grid to display fetched SpaceX data with pagination

- Popup details for each item in the grid

- Authorized REST API for fetching and sending data between SpaceX and the app

- Use of PHP for API authorization

- Jest tests for various components

- Semantic HTML and SEO best practices

## Technologies Used

- React

- Tailwind CSS (optional, if chosen for styling)

- State Context API (optional, if chosen for state management)

- Redux (optional, if chosen for state management)

- Jest (for testing)

- PHP (for API authorization)

- Node.js and npm (Node Package Manager)

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:

```shell

git clone https://github.com/your-username/your-repository.git

```

2. Install the dependencies:

```shell

cd your-repository

npm install

```

3. Start the development server:

```shell

npm start

```

4. Open the app in your browser:

```

http://localhost:3000

```

## Usage

Once the app is running, you will see the landing page with the search form and data grid. You can use the search form to filter the data based on the available filters. The data will be displayed in the data grid, and you can click on an item to view detailed information in a popup.

## API Authorization

The app uses a REST API for fetching and sending data between the app and the SpaceX API. API authorization is implemented using PHP. Make sure to provide the necessary authorization details in the API requests to access the SpaceX data.

## Testing

Jest is used for testing various components of the app. You can run the tests using the following command:

```shell

npm test

```

## Deployment

The app can be deployed to a hosting service of your choice. Follow the deployment instructions provided by the hosting service to make the app accessible online.

## Contributing

Contributions to this project are welcome. If you find any issues or want to add new features, feel free to open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to modify and customize this README file according to your project's specific details.
