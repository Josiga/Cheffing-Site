# Chef Booking Platform

A beautiful, full-stack chef booking platform built with React and Node.js/Express.

## Push to GitHub

If you need to push this project to a new GitHub repository:

```bash
# Create a new repo on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
``` This application allows clients to book private chefs for their events with a sophisticated, warm design that reflects culinary artistry.

## 🎨 Design Features

- **Elegant Color Palette**: Warm terracotta primary, sage secondary, and golden accent colors
- **Typography**: Playfair Display for headers, Inter for body text
- **Smooth Animations**: Fade-in transitions, hover effects, and micro-interactions
- **Responsive Design**: Works beautifully on all device sizes
- **Form Validation**: Both client-side and server-side validation

## 🚀 Features

### Frontend
- Interactive booking form with:
  - Personal information (name, email, phone)
  - Event details (date, time, guest count, type, location)
  - Culinary preferences (cuisine selection, dietary restrictions, special requests)
- Real-time form validation
- Success confirmation with animation
- Responsive card-based layout
- Icon-enhanced inputs using Lucide React

### Backend
- RESTful API with Express.js
- JSON file-based data storage
- Full CRUD operations for bookings
- Comprehensive input validation
- Error handling and logging
- Status management (pending, confirmed, cancelled, completed)

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## 🛠️ Installation

### 1. Clone or Download the Project

Create a project directory and navigate to it:

```bash
mkdir chef-booking-platform
cd chef-booking-platform
```

### 2. Set Up Backend

Create a `backend` folder and set up the server:

```bash
mkdir backend
cd backend
```

Copy the following files into the `backend` folder:
- `server.js`
- `package.json` (backend package.json)

Install backend dependencies:

```bash
npm install
```

### 3. Set Up Frontend

Go back to the root directory and create a React app:

```bash
cd ..
npx create-react-app frontend
cd frontend
```

Install additional frontend dependencies:

```bash
npm install lucide-react
```

Replace `src/App.js` with the contents of `chef-booking-app.jsx`

Update `src/App.css` to be empty or minimal (all styles are inline in the component)

## 🏃‍♂️ Running the Application

### Start the Backend Server

Open a terminal and navigate to the backend folder:

```bash
cd backend
npm start
```

The server will start on `http://localhost:3001`

You should see:
```
🔥 Chef Booking API Server is running
📍 Port: 3001
🌐 Base URL: http://localhost:3001
```

### Start the Frontend

Open a NEW terminal and navigate to the frontend folder:

```bash
cd frontend
npm start
```

The React app will start on `http://localhost:3000` and automatically open in your browser.

## 📡 API Endpoints

### Create Booking
```
POST /api/bookings
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1 (555) 123-4567",
  "eventDate": "2024-12-25",
  "eventTime": "18:00",
  "numberOfGuests": 12,
  "cuisine": "Italian",
  "eventType": "Private Dinner",
  "location": "123 Main St, New York, NY",
  "dietaryRestrictions": "Gluten-free",
  "specialRequests": "Would love a pasta-making demonstration"
}
```

### Get All Bookings
```
GET /api/bookings
```

### Get Single Booking
```
GET /api/bookings/:id
```

### Update Booking Status
```
PATCH /api/bookings/:id/status
Content-Type: application/json

{
  "status": "confirmed"
}
```

Valid statuses: `pending`, `confirmed`, `cancelled`, `completed`

### Delete Booking
```
DELETE /api/bookings/:id
```

### Health Check
```
GET /api/health
```

## 🗂️ Project Structure

```
chef-booking-platform/
├── backend/
│   ├── server.js           # Express server
│   ├── package.json        # Backend dependencies
│   └── bookings.json       # Data storage (auto-created)
│
├── frontend/
│   ├── src/
│   │   ├── App.js          # Main React component
│   │   ├── App.css         # Minimal styles
│   │   └── index.js        # React entry point
│   ├── public/
│   └── package.json        # Frontend dependencies
│
└── README.md
```

## 🎯 Usage

1. Fill out the booking form with all required information:
   - Personal details
   - Event date, time, and guest count
   - Event type and location
   - Preferred cuisine and dietary needs
   - Any special requests

2. Submit the form

3. Receive instant confirmation

4. Backend saves the booking to `bookings.json`

## 🔧 Customization

### Colors
All colors are defined as CSS variables in the component. To customize:

```css
--color-primary: #B85C38;        /* Main brand color */
--color-secondary: #7A8471;      /* Secondary accent */
--color-accent: #D4A574;         /* Highlights */
--color-background: #FEFCFA;     /* Page background */
```

### Cuisine Options
Edit the `cuisineOptions` array in `chef-booking-app.jsx`:

```javascript
const cuisineOptions = [
  'Italian', 'French', 'Japanese', 'Mediterranean', 'Mexican', 
  'Indian', 'Thai', 'Chinese', 'American BBQ', 'Fusion'
];
```

### Event Types
Edit the `eventTypes` array:

```javascript
const eventTypes = [
  'Private Dinner', 'Wedding', 'Corporate Event', 'Birthday Party', 
  'Anniversary', 'Holiday Gathering', 'Cooking Class', 'Meal Prep Service'
];
```

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🔐 Security Notes

This is a demonstration application. For production use:

1. Add proper authentication and authorization
2. Use a real database (MongoDB, PostgreSQL, etc.)
3. Implement rate limiting
4. Add HTTPS/SSL
5. Sanitize all user inputs
6. Add CSRF protection
7. Use environment variables for configuration
8. Implement proper logging and monitoring

## 🐛 Troubleshooting

### Port Already in Use

If port 3001 is already in use, you can change it in `server.js`:

```javascript
const PORT = process.env.PORT || 3002; // Change to any available port
```

Then update the fetch URL in `chef-booking-app.jsx`:

```javascript
const response = await fetch('http://localhost:3002/api/bookings', {
  // ... rest of the code
});
```

### CORS Issues

The backend is configured to accept requests from any origin. For production, restrict CORS:

```javascript
app.use(cors({
  origin: 'http://yourdomain.com'
}));
```

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## ✨ Future Enhancements

- User authentication system
- Chef profiles and ratings
- Real-time availability calendar
- Payment integration
- Email notifications
- Admin dashboard
- Photo galleries
- Review and rating system
- Multi-language support

---

Built with ❤️ using React and Node.js
