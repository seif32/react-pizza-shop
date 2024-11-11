# Fast React Pizza Co.

A modern web application for ordering pizzas online with a seamless experience for users and efficient management for restaurant staff. Built using **React.js**, **Redux**, **React Router**, and RESTful API integration, this project offers a complete solution from customer interaction to order processing.

## Project Overview

**Fast React Pizza Co.** is a digital ordering platform for a fictional pizza restaurant. It enables users to browse the menu, add pizzas to their cart, and place an order with or without priority delivery. This application is designed to provide a smooth user experience, maintainable codebase, and efficient handling of orders and data.

## Features

### User Features

- **User Registration**: Users can enter their name to start browsing and ordering pizzas.
- **Order Menu**: Browse through a wide variety of pizzas with detailed descriptions.
- **Order Management**: Add items to the cart, adjust quantity, and view total prices.
- **Priority Orders**: Users can opt for priority delivery at an additional cost.
- **Order Tracking**: Users can search and track their order status by order ID.
- **Order Updates**: Users can update their order status and prioritize orders before delivery.
- **Responsive Design**: Optimized for mobile and desktop views, ensuring a smooth experience across devices.

## Tech Stack

- **Frontend**: React.js, Redux, React Router, JavaScript, CSS
- **Backend**: API integration with a RESTful API for managing orders and menu (using a service like `apiRestaurant`).
- **State Management**: Redux for managing user and cart state.

## Project Structure

The project is organized into the following directories:

- `src/`: Main source code.
  - `features/`: Contains the application's core features.
    - `cart/`: Logic for managing the cart state.
    - `order/`: Components and functions related to orders.
    - `user/`: User registration and state management.
    - `menu/`: Displaying menu items.
  - `services/`: API services for interacting with the backend.
  - `ui/`: UI components like buttons, loaders, and layout components.
  - `utils/`: Helper functions for formatting currency, date, and calculating delivery time.
- `store.js`: Redux store configuration.
- `App.js`: Main app component with router configuration.

## Key Components

### `CreateOrder.js`

Handles the order creation process, including user input for name, phone number, address, and whether the order should be prioritized.

- Uses a **form** to gather user data and handle validation (e.g., phone number).
- Submits order data using `react-router`'s **Form** element.
- Uses Redux to retrieve cart data and calculate total prices.
- Redirects to order confirmation after successful creation.

### `Order.js`

Displays a single order with its details, including status, priority, delivery time, and the items ordered.

- Uses `useLoaderData` to fetch the order based on the `orderId` parameter.
- Dynamically loads pizza ingredients using `useFetcher`.
- Updates order status and handles priority toggles through PATCH requests.

### `AppLayout.js`

The main layout of the application, providing a consistent header, navigation, and cart overview.

- Displays a loading indicator during page transitions.
- Uses the `Outlet` component for rendering nested routes.
- Includes a `Header` with a search bar for orders and a username display.

### `Home.js`

Provides a welcome screen for new users to enter their name or continue to the menu if they have already registered.

- Uses `CreateUser` component to handle user registration.
- Redirects users to the menu once they have provided their name.

## How to Run the Project

1. **Clone the repository**:

   ```bash
   git clone https://github.com/seif32/react-pizza-shop.git
   cd react-pizza-shop
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run for development**:

   ```bash
   npm run dev
   ```

4. **Run Tests**:
   If you have written tests, run:

   ```bash
   npm test
   ```

5. **Build for production**:
   ```bash
   npm run build
   ```

## API Endpoints

This application relies on several API endpoints for managing orders and fetching menu items:

- `GET /menu`: Retrieve the list of available pizzas.
- `POST /order`: Create a new order.
- `GET /order/:id`: Fetch a specific order's details.
- `PATCH /order/:id`: Update an existing order (e.g., mark as priority).

## Future Enhancements

- **Admin Dashboard**: Implement an admin panel for better order and menu management.
- **User Authentication**: Add user authentication for a more personalized experience.
- **Payment Integration**: Integrate a payment gateway to enable online payments.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.
