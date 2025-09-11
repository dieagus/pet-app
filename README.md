# PetConnect - Pet Adoption Website

A modern React application for pet adoption with a beautiful, responsive design and comprehensive functionality.

## 🚀 Features

### HomePage Component
- **Modern Landing Page**: Clean, pet-themed design with gradient hero section
- **Navigation**: Sticky header with React Router navigation links
- **Hero Section**: Eye-catching welcome message with call-to-action buttons
- **Featured Pets**: Showcase of available pets with image cards
- **Testimonials**: Customer reviews and success stories
- **Call-to-Action**: Prominent section encouraging user engagement
- **Footer**: Comprehensive site navigation and information

### BrowsePage Component
- **Pet Grid Layout**: Responsive card-based display of available pets
- **Advanced Filtering**: Search by name/breed, filter by breed and age groups
- **Sorting Options**: Sort pets by name, age, or breed
- **Pagination**: Clean pagination with page numbers and navigation
- **Loading States**: Skeleton loading animations while data loads
- **Empty States**: Helpful messages when no pets match filters
- **Detailed Pet Cards**: Rich information including photos, descriptions, and pet details

## 🛠 Technologies Used

- **React 19.1.1**: Modern functional components with hooks
- **React Router DOM**: Client-side routing and navigation
- **CSS Modules**: Scoped styling with modern CSS features
- **PropTypes**: Runtime type checking for components
- **Responsive Design**: Mobile-first approach with breakpoints
- **Modern CSS**: CSS Grid, Flexbox, custom properties, animations

## 📁 Project Structure

```
src/
├── components/
│   ├── HomePage.js          # Landing page component
│   ├── HomePage.module.css  # HomePage styles
│   ├── BrowsePage.js        # Pet browsing component
│   └── BrowsePage.module.css # BrowsePage styles
├── App.js                   # Main app with routing
├── App.css                  # Global styles and CSS reset
├── PetsCheck.jsx           # Original Firebase pets component
└── firebase.js             # Firebase configuration
```

## 🎨 Design Features

### Color Palette
- **Primary**: `#ff6b6b` (Coral red)
- **Secondary**: `#4ecdc4` (Teal)
- **Accent**: `#45b7d1` (Blue)
- **Text Dark**: `#2c3e50`
- **Text Light**: `#7f8c8d`

### Animations & Interactions
- Smooth hover effects on cards and buttons
- Loading skeleton animations
- Fade-in animations for content sections
- Transform effects on interactive elements
- Responsive button states

### Responsive Breakpoints
- **Desktop**: 1200px+ (full layout)
- **Tablet**: 768px-1199px (adapted layout)
- **Mobile**: <768px (stacked layout)
- **Small Mobile**: <480px (optimized for small screens)

## 🧩 Component Architecture

### HomePage
- **FeaturedPetCard**: Reusable pet card component
- **TestimonialCard**: Customer review display component
- **Responsive Navigation**: Collapsible mobile menu
- **Hero Section**: Split layout with content and image

### BrowsePage
- **PetCard**: Detailed pet information cards
- **LoadingState**: Skeleton loading animation
- **EmptyState**: No results found display
- **Pagination**: Smart pagination with ellipsis
- **SearchAndFilter**: Advanced filtering interface

## 🔧 Key Features Implementation

### Search & Filter System
```javascript
// Real-time search by name or breed
// Age group filtering (Young, Adult, Senior)
// Breed-specific filtering
// Multi-criteria sorting
```

### Pagination Logic
```javascript
// 9 pets per page
// Smart page number display
// Smooth scroll to top on page change
// Responsive pagination controls
```

### Loading States
```javascript
// Shimmer loading animations
// Skeleton cards matching final layout
// Smooth transitions between states
```

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## 🧪 Available Routes

- `/` - HomePage (Landing page)
- `/browse` - BrowsePage (Pet listings)
- `/pets-check` - Original Firebase pets component
- `/add-pet` - Placeholder for add pet functionality
- `/about` - Placeholder for about page
- `/contact` - Placeholder for contact page
- `/pet/:id` - Placeholder for individual pet details

## 📱 Mobile Optimization

- Touch-friendly interface elements
- Optimized image sizes and loading
- Collapsible navigation menu
- Stacked layout for small screens
- Fast loading with efficient CSS

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus management
- Screen reader compatibility
- High contrast colors

## 🎯 Future Enhancements

- Individual pet detail pages
- User authentication and profiles
- Favorite pets functionality
- Advanced search with location
- Pet application submission
- Admin dashboard for pet management
- Real-time chat with shelters
- Email notifications
- Social media integration

## 📄 License

This project is part of a pet adoption platform demonstration.

---

Built with ❤️ for connecting pets with loving families.
