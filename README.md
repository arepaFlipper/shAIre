# shaire

**shaire** is a full-stack platform designed for sharing AI-generated stock videos. It provides a seamless experience for users to upload, share, and explore a growing library of AI-generated content. The app is built with **React Native** on the frontend and powered by **Appwrite** on the backend.

## Features

- **AI-Generated Content**: Upload and share AI-generated stock videos.
- **Browse and Explore**: Discover an extensive collection of AI-generated media.
- **User Authentication**: Secure sign-up and login with Appwrite’s authentication system.
- **Responsive Design**: Fully optimized for mobile use with a user-friendly interface.
- **High-Quality Streaming**: Stream videos smoothly without quality loss.

## Tech Stack

- **Frontend**: React Native
- **Backend**: Appwrite
- **Database**: Appwrite\'s integrated database
- **Storage**: Appwrite for file storage
- **Authentication**: Appwrite user authentication

## Installation and Setup

### Prerequisites

- Node.js v16 or higher
- React Native development environment
- Appwrite server

### Backend Setup (Appwrite)

1. Install and set up [Appwrite](https://appwrite.io/docs/installation).
2. Create a project and configure the following:
   - User Authentication
   - Database for video metadata
   - Storage for video files

### Frontend Setup (React Native)

1. Clone this repository:

   ```bash
   git clone https://github.com/arepaFlipper/shaire.git
   cd shaire
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

3. Set up your environment variables for Appwrite:

   ```bash
   cp .env.example .env
   ```

4. Run the development server:

   ```bash
   npm run start
   ```

5. Open your preferred emulator or device and run:

   ```bash
   npm run android  # For Android
   npm run ios      # For iOS
   ```

### Environment Variables

Configure the following variables in your `.env` file:

- `APPWRITE_ENDPOINT`: The URL of your Appwrite server.
- `APPWRITE_PROJECT_ID`: Your Appwrite project ID.
- `APPWRITE_API_KEY`: Your Appwrite API key.

## Contributing

We welcome contributions from the community! To get started:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/new-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/new-feature`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or feedback, feel free to contact us.

