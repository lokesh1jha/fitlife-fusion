### Complete Database Schema Design

#### 1. **users**
```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  goal VARCHAR(50), -- e.g., 'weight_loss', 'muscle_gain'
  experience_level VARCHAR(20), -- e.g., 'beginner', 'intermediate'
  preferred_days_per_week INT,
  subscription_plan_id INT REFERENCES subscription_plans(id),
  trial_ends_at TIMESTAMP, -- End date for the 1-week trial
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

#### 2. **subscription_plans**
```sql
CREATE TABLE subscription_plans (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL, -- e.g., 'Plan 1', 'Plan 2', 'Plan 3'
  gym_exercises BOOLEAN DEFAULT TRUE,
  free_meetings_per_month INT,
  diet_plan_frequency VARCHAR(20), -- e.g., 'one_time', 'monthly', 'biweekly'
  price DECIMAL(10, 2),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Insert initial subscription plans
INSERT INTO subscription_plans (name, free_meetings_per_month, diet_plan_frequency, price)
VALUES 
('Plan 1', 1, 'BASIC', 999.00),
('Plan 2', 1, 'PRIME', 1999.00),
('Plan 3', 2, 'PREMIUM', 2999.00);
```

#### 3. **user_credits**
```sql
CREATE TABLE user_credits (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  credits INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

#### 4. **exercises**
```sql
CREATE TABLE exercises (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  body_part VARCHAR(50),
  category VARCHAR(50),
  difficulty VARCHAR(20),
  equipment_required VARCHAR(100),
  instructions TEXT,
  video_url VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW()
);
```

#### 5. **workout_plans**
```sql
CREATE TABLE workout_plans (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  name VARCHAR(100),
  days_per_week INT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

#### 6. **workout_plan_exercises**
```sql
CREATE TABLE workout_plan_exercises (
  id SERIAL PRIMARY KEY,
  workout_plan_id INT REFERENCES workout_plans(id) ON DELETE CASCADE,
  exercise_id INT REFERENCES exercises(id),
  day_of_week INT,
  sets INT,
  reps INT,
  rest_time_seconds INT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

#### 7. **diet_plans**
```sql
CREATE TABLE diet_plans (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  name VARCHAR(100),
  goal VARCHAR(50),
  calories_per_day INT,
  protein_grams INT,
  carbs_grams INT,
  fats_grams INT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

#### 8. **diet_plan_meals**
```sql
CREATE TABLE diet_plan_meals (
  id SERIAL PRIMARY KEY,
  diet_plan_id INT REFERENCES diet_plans(id) ON DELETE CASCADE,
  meal_type VARCHAR(20),
  name VARCHAR(100),
  description TEXT,
  calories INT,
  protein_grams INT,
  carbs_grams INT,
  fats_grams INT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

#### 9. **meetings**
```sql
CREATE TABLE meetings (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  trainer_id INT REFERENCES users(id),
  scheduled_at TIMESTAMP,
  duration_minutes INT,
  status VARCHAR(20),
  credits_used INT,
  notes TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

#### 10. **payments**
```sql
CREATE TABLE payments (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  amount DECIMAL(10, 2),
  payment_method VARCHAR(50),
  credits_purchased INT,
  transaction_id VARCHAR(100),
  status VARCHAR(20),
  created_at TIMESTAMP DEFAULT NOW()
);
```

---

### Explanation of the Schema

1. **Users & Subscription Plans**: Users can have one of the three subscription plans. Each plan has specific benefits, like the number of free 1:1 meetings and the diet plan frequency.
2. **User Credits**: Manages the credits available for users to book additional 1:1 meetings.
3. **Exercises & Workout Plans**: Stores gym exercises and assigns them to users based on their workout plans.
4. **Diet Plans**: Manages diet plans for users, with meal details and macros.
5. **Meetings & Payments**: Handles 1:1 meeting scheduling using credits, and allows users to purchase more credits via the payment system.

### MVP Flow

1. **User Signup**: Users register and get a 1-week trial.
2. **Subscription**: After the trial, users choose one of the three subscription plans.
3. **Dashboard**: Users receive personalized workout and diet plans.
4. **1:1 Meetings**: Users can book meetings with trainers using their free monthly credits or purchase additional credits.
5. **Diet & Exercise Updates**: Diet plans and workouts are adjusted periodically based on the subscription.


## Prisma Schema (schema.prisma)
```
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model User {
  id                 Int       @id @default(autoincrement())
  username           String    @unique
  email              String    @unique
  passwordHash       String
  goal               String?
  experienceLevel    String?
  preferredDaysPerWeek Int?
  subscriptionPlan   SubscriptionPlan? @relation(fields: [subscriptionPlanId], references: [id])
  subscriptionPlanId Int?
  trialEndsAt        DateTime?
  credits            UserCredits?
  workoutPlans       WorkoutPlan[]
  dietPlans          DietPlan[]
  meetings           Meeting[]
  payments           Payment[]
  createdAt          DateTime  @default(now())
  updatedAt          DateTime  @updatedAt
}

model SubscriptionPlan {
  id                    Int       @id @default(autoincrement())
  name                  String
  gymExercises          Boolean   @default(true)
  freeMeetingsPerMonth  Int
  dietPlanFrequency     String    // e.g., 'one_time', 'monthly', 'biweekly'
  price                 Decimal   @db.Decimal(10, 2)
  users                 User[]
  createdAt             DateTime  @default(now())
  updatedAt             DateTime  @updatedAt
}

model UserCredits {
  id        Int      @id @default(autoincrement())
  user      User     @relation(fields: [userId], references: [id])
  userId    Int
  credits   Int      @default(0)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Exercise {
  id                 Int       @id @default(autoincrement())
  name               String
  bodyPart           String?
  category           String?
  difficulty         String?
  equipmentRequired  String?
  instructions       String?
  videoUrl           String?
  workoutPlanExercises WorkoutPlanExercise[]
  createdAt          DateTime  @default(now())
}

model WorkoutPlan {
  id          Int                    @id @default(autoincrement())
  user        User                   @relation(fields: [userId], references: [id])
  userId      Int
  name        String
  daysPerWeek Int
  exercises   WorkoutPlanExercise[]
  createdAt   DateTime              @default(now())
  updatedAt   DateTime              @updatedAt
}

model WorkoutPlanExercise {
  id              Int        @id @default(autoincrement())
  workoutPlan     WorkoutPlan @relation(fields: [workoutPlanId], references: [id])
  workoutPlanId   Int
  exercise        Exercise   @relation(fields: [exerciseId], references: [id])
  exerciseId      Int
  dayOfWeek       Int
  sets            Int
  reps            Int
  restTimeSeconds Int
  createdAt       DateTime   @default(now())
}

model DietPlan {
  id        Int         @id @default(autoincrement())
  user      User        @relation(fields: [userId], references: [id])
  userId    Int
  name      String
  goal      String?
  caloriesPerDay Int
  proteinGrams Int
  carbsGrams Int
  fatsGrams Int
  meals     DietPlanMeal[]
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model DietPlanMeal {
  id        Int       @id @default(autoincrement())
  dietPlan  DietPlan  @relation(fields: [dietPlanId], references: [id])
  dietPlanId Int
  mealType  String
  name      String
  description String?
  calories  Int
  proteinGrams Int
  carbsGrams Int
  fatsGrams Int
  createdAt DateTime @default(now())
}

model Meeting {
  id             Int       @id @default(autoincrement())
  user           User      @relation(fields: [userId], references: [id])
  userId         Int
  trainer        User      @relation(fields: [trainerId], references: [id])
  trainerId      Int
  scheduledAt    DateTime
  durationMinutes Int
  status         String    // e.g., 'scheduled', 'completed', 'cancelled'
  creditsUsed    Int
  notes          String?
  createdAt      DateTime  @default(now())
}

model Payment {
  id               Int       @id @default(autoincrement())
  user             User      @relation(fields: [userId], references: [id])
  userId           Int
  amount           Decimal   @db.Decimal(10, 2)
  paymentMethod    String    // e.g., 'credit_card', 'UPI'
  creditsPurchased Int
  transactionId    String?
  status           String    // e.g., 'completed', 'failed'
  createdAt        DateTime  @default(now())
}
```