import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './HomePage.module.css';

const HomePage = () => {
    const featuredPets = [
        {
            id: 1,
            name: "Buddy",
            breed: "Golden Retriever",
            age: 3,
            image: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=300&h=300&fit=crop&crop=face",
            location: "San Francisco, CA"
        },
        {
            id: 2,
            name: "Luna",
            breed: "Persian Cat",
            age: 2,
            image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=300&h=300&fit=crop&crop=face",
            location: "Los Angeles, CA"
        },
        {
            id: 3,
            name: "Max",
            breed: "German Shepherd",
            age: 4,
            image: "https://images.unsplash.com/photo-1551717743-49959800b1f6?w=300&h=300&fit=crop&crop=face",
            location: "New York, NY"
        }
    ];

    return (
        <div className={styles.homePage}>
            {/* nav bar */}
            <header className={styles.header}>
                <div className={styles.container}>
                    <div className={styles.logo}>
                        <h1>🐾 PetConnect</h1>
                    </div>
                    <nav className={styles.nav}>
                        <Link to="/browse" className={styles.navLink}>Browse Pets</Link>
                        <Link to="/add-pet" className={styles.navLink}>Add Pet</Link>
                        <Link to="/about" className={styles.navLink}>About</Link>
                        <Link to="/contact" className={styles.navLink}>Contact</Link>
                    </nav>
                </div>
            </header>

            {/* hero section */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <div className={styles.heroContent}>
                        <h1 className={styles.heroTitle}>
                            Find Your Perfect <span className={styles.highlight}>Furry Friend</span>
                        </h1>
                        <p className={styles.heroSubtitle}>
                            Connect with loving pets looking for their forever homes.
                            Discover companions that will bring joy, love, and endless memories to your life.
                        </p>
                        <div className={styles.heroActions}>
                            <Link to="/browse" className={styles.primaryBtn}>
                                Browse Available Pets
                            </Link>
                            <Link to="/add-pet" className={styles.secondaryBtn}>
                                List a Pet
                            </Link>
                        </div>
                    </div>
                    <div className={styles.heroImage}>
                        <img
                            src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&h=400&fit=crop"
                            alt="Happy pets"
                            className={styles.heroImg}
                        />
                    </div>
                </div>
            </section>

            {/* featured pets section */}
            <section className={styles.featured}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>Featured Pets</h2>
                    <p className={styles.sectionSubtitle}>Meet some of our amazing pets looking for homes</p>
                    <div className={styles.petGrid}>
                        {featuredPets.map(pet => (
                            <FeaturedPetCard key={pet.id} pet={pet} />
                        ))}
                    </div>
                    <div className={styles.featuredActions}>
                        <Link to="/browse" className={styles.viewAllBtn}>
                            View All Available Pets
                        </Link>
                    </div>
                </div>
            </section>

            <section className={styles.cta}>
                <div className={styles.container}>
                    <div className={styles.ctaContent}>
                        <div className={styles.ctaActions}>
                            <Link to="/browse" className={styles.ctaPrimaryBtn}>
                                Start Your Search
                            </Link>
                            <Link to="/about" className={styles.ctaSecondaryBtn}>
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className={styles.footer}>
                <div className={styles.container}>
                    <div className={styles.footerContent}>
                        <div className={styles.footerSection}>
                            <h3>🐾 PetConnect</h3>
                            <p>Connecting hearts, one paw at a time.</p>
                        </div>
                        <div className={styles.footerSection}>
                            <h4>Quick Links</h4>
                            <Link to="/browse">Browse Pets</Link>
                            <Link to="/add-pet">Add Pet</Link>
                            <Link to="/about">About Us</Link>
                        </div>
                        <div className={styles.footerSection}>
                            <h4>Support</h4>
                            <Link to="/contact">Contact</Link>
                            <Link to="/faq">FAQ</Link>
                            <Link to="/help">Help Center</Link>
                        </div>
                    </div>
                    <div className={styles.footerBottom}>
                        <p>&copy; 2024 PetConnect. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

// definition for featured pet cards
const FeaturedPetCard = ({ pet }) => (
    <div className={styles.petCard}>
        <div className={styles.petImageContainer}>
            <img src={pet.image} alt={pet.name} className={styles.petImage} />
            <div className={styles.petAge}>{pet.age} years</div>
        </div>
        <div className={styles.petInfo}>
            <h3 className={styles.petName}>{pet.name}</h3>
            <p className={styles.petBreed}>{pet.breed}</p>
            <p className={styles.petLocation}>📍 {pet.location}</p>
            <Link to={`/pet/${pet.id}`} className={styles.petViewBtn}>
                View Details
            </Link>
        </div>
    </div>
);

FeaturedPetCard.propTypes = {
    pet: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        breed: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired
    }).isRequired
};




export default HomePage; 