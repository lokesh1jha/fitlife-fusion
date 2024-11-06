
# FitLife Fusion

**FitLife Fusion** is a comprehensive fitness platform designed to provide personalized workout schedules, diet plans, and one-on-one personal training options. With FitLife Fusion, users can track their fitness journey, access instructional workout videos, and explore training options tailored to their specific needs, including zumba, yoga, and specialized training for pre- and post-pregnancy and other medical considerations.

## Features

- **Workout Schedules**: Access personalized workout plans with detailed instructional videos for each exercise.
- **Diet Plans**: Receive customized diet recommendations to support your fitness goals.
- **One-on-One Training**: Upgrade to a premium plan for personal training with fitness professionals.
- **Progress Tracking**: Track workout progress and monitor improvements over time.
- **Wearable Integration**: Connect with popular wearables to sync activity and health data.
- **Specialized Training Programs**: Options for zumba, yoga, and specialized pre- and post-pregnancy workouts.
- **Community Support**: Join a community of like-minded fitness enthusiasts and stay motivated.

## Technologies Used

- **Frontend**: React, Tailwind CSS
- **Backend**: Next.js, Prisma, PostgreSQL
- **Authentication**: NextAuth.js with Discord integration
- **APIs**: Etherfuse for additional functionalities
- **Blockchain**: Crypto Payment options
- **Payment Integration**: Solana Pay for efficient and low-cost transactions

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v16 or higher)
- PostgreSQL database

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/fitlife-fusion.git
   cd fitlife-fusion
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Environment Variables:**

   Create a `.env` file in the root directory and add your environment variables:

   ```plaintext
    DATABASE_URL="postgresql://postgres:password@localhost:5432/fitlife-fusion"

    NEXTAUTH_SECRET="your-secret"
    NEXTAUTH_URL="http://localhost:3000"

    RAZORPAY_KEY_ID="your-razorpay-key-id"
    RAZORPAY_KEY_SECRET="your-razorpay-key-secret"


    GOOGLE_CLIENT_ID="id"
    GOOGLE_CLIENT_SECRET="secret"
   ```

4. **Database Setup:**

   Run the Prisma migrations to set up the database:

   ```bash
   npx prisma migrate dev
   ```

5. **Run the Application:**

   Start the development server:

   ```bash
   npm run dev
   ```

   The app will be running on `http://localhost:3000`.

## Usage

1. **User Registration**: Sign up and create an account to access the platform's features.
2. **Personalize Your Plan**: Customize workout and diet plans based on your goals.
3. **Track Progress**: Use the progress tracker and wearable integration for real-time feedback.
4. **Upgrade for Premium Features**: Access one-on-one personal training sessions and specialized programs with a premium subscription.

## Project Structure

```plaintext
fitlife-fusion/
├── public/               # Static assets
├── src/
│   ├── components/       # Reusable components
│   ├── pages/            # Next.js pages
│   ├── lib/              # Helper functions and utilities
│   ├── prisma/           # Database schema
│   └── styles/           # Tailwind CSS styles
├── .env                  # Environment variables
└── README.md
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add a feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

**FitLife Fusion Team**  
Email: support@fitlifefusion.com  
Project Link: [https://github.com/your-username/fitlife-fusion](https://github.com/your-username/fitlife-fusion)

---

Thank you for checking out **FitLife Fusion**! Get ready to transform your fitness journey.
