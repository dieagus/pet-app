# PetConnect - Pet Adoption Website

A modern React application for pet adoption with a responsive design and functionality.

## Features

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

## Technologies Used

- **React 19.1.1**
- **React Router DOM**
- **CSS Modules**
- **Firebase/Firestore Emulators**

## Project Structure

```
src/
├── components/
│   ├── HomePage.js          # landing page 
│   ├── HomePage.module.css  # homepage styles
│   ├── BrowsePage.js        # pet browsing 
│   └── BrowsePage.module.css # browsepage styles
├── App.js                   # main routing
├── App.css                  # Global styles and CSS reset
├── PetsCheck.jsx           # proof of concept for firebase
└── firebase.js             # firebase config
```

## Component Architecture

### HomePage
- **FeaturedPetCard**: pet card component
- **TestimonialCard**: review display component
- **Responsive Navigation**: Collapsible mobile menu
- **Hero Section**: Split layout with content and image

### BrowsePage
- **PetCard**: pet information cards
- **LoadingState**: loading animation
- **EmptyState**: no results found display
- **Pagination**: pagination handling page logic
- **SearchAndFilter**: filtering interface


## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```


## Routes

- `/` - HomePage 
- `/browse` - browse page to list pets
- `/pets-check` - original firestore pets component
- `/add-pet` - placeholder for add/edit pet
- `/about` - placeholder for about page
- `/contact` - placeholder for contact page
- `/pet/:id` - placeholder for individual pet details


## 📄 License

This project is part of a pet adoption platform demonstration.


