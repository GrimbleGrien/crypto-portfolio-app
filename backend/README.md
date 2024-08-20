
# README
## Directory : Backend (backend/)
### config/: Contains configuration files.

- db.js: MongoDB connection setup.
- keys.js: Contains environment variables or other sensitive keys.
### controllers/: Contains logic for handling requests.

- authController.js: Handles user authentication (e.g., login, signup).
- portfolioController.js: Handles portfolio-related logic like fetching historical data.
- tokenController.js: Handles token-related logic like fetching balances, performing transfers.
### models/: Mongoose models for MongoDB collections.

- User.js: User schema (wallet address, tokens, etc.).
- Token.js: Token schema (token info, balance, etc.).
- Transaction.js: Transaction schema (sender, receiver, amount, date).
### routes/: Express routes for handling API endpoints.

- authRoutes.js: Routes related to user authentication.
- portfolioRoutes.js: Routes for portfolio management.
- tokenRoutes.js: Routes for token operations.
### utils/: Utility functions.

- web3.js: Utility functions for Web3.js integration.
- ethers.js: Utility functions for Ethers.js integration.
- errorHandler.js: Error handling middleware for Express.

### root
- server.js: The main entry point for the Node.js backend. Sets up the Express server, connects to MongoDB, and loads routes.

.env: Environment variables file (not included in source control).

## Controllers
These controllers are responsible for handling the main features of Crypto-Portfolio App. They interact with the Mongoose models, perform business logic, and return the necessary data to the frontend.
### authController.js:

- authUser: Handles user login or registration using their wallet address. It generates a JWT token for session management.

### portfolioController.js:

- addTokenToWatchlist: Adds a token to the user's watchlist.
- getWatchlist: Retrieves the user's watchlist with all tokens.
- getHistoricalData: Fetches historical price data for a specific token over a given date range using an API like CoinGecko.

### tokenController.js:

- checkAllowance: Checks the allowance of a token for a specific spender on behalf of the token owner.
- transferTokens: Transfers tokens from the user's wallet to another address.

## Routes
Make sure to integrate these routes into your server.js
### authRoutes.js:

- POST /api/auth: Authenticates the user based on their wallet address and returns a JWT token.

### portfolioRoutes.js:

- POST /api/portfolio/add-token: Adds a token to the user's watchlist.
- GET /api/portfolio/watchlist: Retrieves the user's watchlist.
- GET /api/portfolio/historical-data: Fetches historical balance data for a specific token.
- 
### tokenRoutes.js:

- GET /api/tokens/allowance: Checks the token allowance for a specific spender address.
- POST /api/tokens/transfer: Transfers tokens from the user's wallet to another address.