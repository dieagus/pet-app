import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './BrowsePage.module.css';

const BrowsePage = () => {
    const [pets, setPets] = useState([]);
    const [filteredPets, setFilteredPets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedBreed, setSelectedBreed] = useState('all');
    const [selectedAge, setSelectedAge] = useState('all');
    const [sortBy, setSortBy] = useState('name');
    const [currentPage, setCurrentPage] = useState(1);
    const [petsPerPage] = useState(9);

    // data representing database items for testing
    const mockPets = [
        {
            id: 1,
            name: "Buddy",
            breed: "Golden Retriever",
            age: 3,
            image: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=400&fit=crop&crop=face",
            description: "Friendly and energetic golden retriever who loves playing fetch and swimming.",
            location: "San Francisco, CA",
            type: "Dog",
            gender: "Male",
            vaccinated: true,
            neutered: true
        },
        {
            id: 2,
            name: "Luna",
            breed: "Persian Cat",
            age: 2,
            image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=400&fit=crop&crop=face",
            description: "Beautiful and calm Persian cat with long silky fur",
            location: "Los Angeles, CA",
            type: "Cat",
            gender: "Female",
            vaccinated: true,
            neutered: true
        },
        {
            id: 3,
            name: "Max",
            breed: "German Shepherd",
            age: 4,
            image: "https://images.unsplash.com/photo-1551717743-49959800b1f6?w=400&h=400&fit=crop&crop=face",
            description: "Intelligent and loyal German Shepherd.",
            location: "New York, NY",
            type: "Dog",
            gender: "Male",
            vaccinated: true,
            neutered: true
        },
        {
            id: 4,
            name: "Bella",
            breed: "Labrador Mix",
            age: 1,
            image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=400&h=400&fit=crop&crop=face",
            description: "Young and playful Labrador mix. Full of energy and loves learning new tricks.",
            location: "Chicago, IL",
            type: "Dog",
            gender: "Female",
            vaccinated: true,
            neutered: false
        },
        {
            id: 5,
            name: "Whiskers",
            breed: "Maine Coon",
            age: 5,
            image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=400&fit=crop&crop=face",
            description: "Gentle giant Maine Coon with a friendly personality.",
            location: "Seattle, WA",
            type: "Cat",
            gender: "Male",
            vaccinated: true,
            neutered: true
        },
        {
            id: 6,
            name: "Rocky",
            breed: "Bulldog",
            age: 6,
            image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=400&fit=crop&crop=face",
            description: "Calm and gentle bulldog who loves relaxing and short walks.",
            location: "Miami, FL",
            type: "Dog",
            gender: "Male",
            vaccinated: true,
            neutered: true
        },
        {
            id: 7,
            name: "Mittens",
            breed: "Siamese",
            age: 3,
            image: "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=400&h=400&fit=crop&crop=face",
            description: "Talkative and social Siamese cat. Very intelligent.",
            location: "Austin, TX",
            type: "Cat",
            gender: "Female",
            vaccinated: true,
            neutered: true
        },
        {
            id: 8,
            name: "Charlie",
            breed: "Beagle",
            age: 2,
            image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=400&fit=crop&crop=face",
            description: "Curious and friendly beagle with a great nose for adventure.",
            location: "Denver, CO",
            type: "Dog",
            gender: "Male",
            vaccinated: true,
            neutered: true
        },
        {
            id: 9,
            name: "Princess",
            breed: "British Shorthair",
            age: 4,
            image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=400&h=400&fit=crop&crop=face",
            description: "Elegant British Shorthair with a calm demeanor.",
            location: "Boston, MA",
            type: "Cat",
            gender: "Female",
            vaccinated: true,
            neutered: true
        },
        {
            id: 10,
            name: "Duke",
            breed: "Rottweiler",
            age: 7,
            image: "https://images.unsplash.com/photo-1567752881298-894bb81f9379?w=400&h=400&fit=crop&crop=face",
            description: "Mature and well-behaved Rottweiler.",
            location: "Phoenix, AZ",
            type: "Dog",
            gender: "Male",
            vaccinated: true,
            neutered: true
        },
        {
            id: 11,
            name: "Snowball",
            breed: "Ragdoll",
            age: 1,
            image: "https://images.unsplash.com/photo-1615789591457-74a63395c990?w=400&h=400&fit=crop&crop=face",
            description: "Fluffy and docile Ragdoll kitten.",
            location: "Portland, OR",
            type: "Cat",
            gender: "Female",
            vaccinated: true,
            neutered: false
        },
        {
            id: 12,
            name: "Scout",
            breed: "Border Collie",
            age: 5,
            image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop&crop=face",
            description: "Highly intelligent Border Collie who needs mental stimulation.",
            location: "Nashville, TN",
            type: "Dog",
            gender: "Female",
            vaccinated: true,
            neutered: true
        }
    ];

    // loading data
    useEffect(() => {
        const loadPets = async () => {
            setLoading(true);
            await new Promise(resolve => setTimeout(resolve, 1500));
            setPets(mockPets);
            setFilteredPets(mockPets);
            setLoading(false);
        };

        loadPets();
    }, []);

    // filter and search 
    useEffect(() => {
        let filtered = pets;

        // search by name
        if (searchTerm) {
            filtered = filtered.filter(pet =>
                pet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                pet.breed.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // filter by breed
        if (selectedBreed !== 'all') {
            filtered = filtered.filter(pet => pet.breed === selectedBreed);
        }

        // filter by age
        if (selectedAge !== 'all') {
            if (selectedAge === 'young') {
                filtered = filtered.filter(pet => pet.age <= 2);
            } else if (selectedAge === 'adult') {
                filtered = filtered.filter(pet => pet.age > 2 && pet.age <= 6);
            } else if (selectedAge === 'senior') {
                filtered = filtered.filter(pet => pet.age > 6);
            }
        }

        // sort pets
        filtered.sort((a, b) => {
            switch (sortBy) {
                case 'name':
                    return a.name.localeCompare(b.name);
                case 'age':
                    return a.age - b.age;
                case 'breed':
                    return a.breed.localeCompare(b.breed);
                default:
                    return 0;
            }
        });

        setFilteredPets(filtered);
        setCurrentPage(1); // reset to first page when filters change
    }, [pets, searchTerm, selectedBreed, selectedAge, sortBy]);

    // get unique breeds for filter dropdown
    const breeds = [...new Set(pets.map(pet => pet.breed))].sort();

    // pagination logic
    const indexOfLastPet = currentPage * petsPerPage;
    const indexOfFirstPet = indexOfLastPet - petsPerPage;
    const currentPets = filteredPets.slice(indexOfFirstPet, indexOfLastPet);
    const totalPages = Math.ceil(filteredPets.length / petsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (loading) {
        return <LoadingState />;
    }

    return (
        <div className={styles.browsePage}>
            {/* Header */}
            <header className={styles.header}>
                <div className={styles.container}>
                    <Link to="/" className={styles.backLink}>
                        ← Back to Home
                    </Link>
                    <h1 className={styles.pageTitle}>Browse Available Pets</h1>
                    <p className={styles.pageSubtitle}>
                        Find your perfect companion from our loving pets looking for homes
                    </p>
                </div>
            </header>

            {/* Search and Filter Section */}
            <section className={styles.filtersSection}>
                <div className={styles.container}>
                    <div className={styles.filtersContainer}>
                        {/* Search Bar */}
                        <div className={styles.searchContainer}>
                            <input
                                type="text"
                                placeholder="Search by name or breed..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className={styles.searchInput}
                            />
                            <span className={styles.searchIcon}>🔍</span>
                        </div>

                        {/* filters */}
                        <div className={styles.filters}>
                            <select
                                value={selectedBreed}
                                onChange={(e) => setSelectedBreed(e.target.value)}
                                className={styles.filterSelect}
                            >
                                <option value="all">All Breeds</option>
                                {breeds.map(breed => (
                                    <option key={breed} value={breed}>{breed}</option>
                                ))}
                            </select>

                            <select
                                value={selectedAge}
                                onChange={(e) => setSelectedAge(e.target.value)}
                                className={styles.filterSelect}
                            >
                                <option value="all">All Ages</option>
                                <option value="young">Young (0-2 years)</option>
                                <option value="adult">Adult (3-6 years)</option>
                                <option value="senior">Senior (7+ years)</option>
                            </select>

                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className={styles.filterSelect}
                            >
                                <option value="name">Sort by Name</option>
                                <option value="age">Sort by Age</option>
                                <option value="breed">Sort by Breed</option>
                            </select>
                        </div>
                    </div>

                    {/* Results Count */}
                    <div className={styles.resultsInfo}>
                        <p>Showing {currentPets.length} of {filteredPets.length} pets</p>
                    </div>
                </div>
            </section>

            {/* Pets Grid */}
            <section className={styles.petsSection}>
                <div className={styles.container}>
                    {filteredPets.length === 0 ? (
                        <EmptyState searchTerm={searchTerm} />
                    ) : (
                        <>
                            <div className={styles.petsGrid}>
                                {currentPets.map(pet => (
                                    <PetCard key={pet.id} pet={pet} />
                                ))}
                            </div>

                            {/* Pagination */}
                            {totalPages > 1 && (
                                <Pagination
                                    currentPage={currentPage}
                                    totalPages={totalPages}
                                    onPageChange={handlePageChange}
                                />
                            )}
                        </>
                    )}
                </div>
            </section>
        </div>
    );
};

// pet card component
const PetCard = ({ pet }) => (
    <div className={styles.petCard}>
        <div className={styles.petImageContainer}>
            <img src={pet.image} alt={pet.name} className={styles.petImage} />
            <div className={styles.petType}>{pet.type}</div>
            <div className={styles.petAge}>{pet.age} years</div>
        </div>
        <div className={styles.petInfo}>
            <h3 className={styles.petName}>{pet.name}</h3>
            <p className={styles.petBreed}>{pet.breed}</p>
            <p className={styles.petLocation}> {pet.location}</p>
            <p className={styles.petDescription}>{pet.description}</p>
            {/*
            <div className={styles.petDetails}>
                <span className={styles.petDetail}>
                    {pet.gender === 'Male' ? '♂' : '♀'} {pet.gender}
                </span>
                {pet.vaccinated && (
                    <span className={styles.petDetail}>💉 Vaccinated</span>
                )}
                {pet.neutered && (
                    <span className={styles.petDetail}> Neutered</span>
                )}
            </div>
            */}

            <div className={styles.petActions}>
                <Link to={`/pet/${pet.id}`} className={styles.viewDetailsBtn}>
                    View Details
                </Link>
                <button className={styles.favoriteBtn}>
                    Save
                </button>
            </div>
        </div>
    </div>
);

PetCard.propTypes = {
    pet: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        breed: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        gender: PropTypes.string.isRequired,
        vaccinated: PropTypes.bool.isRequired,
        neutered: PropTypes.bool.isRequired
    }).isRequired
};

// loading state component
const LoadingState = () => (
    <div className={styles.loadingState}>
        <div className={styles.container}>
            <div className={styles.loadingContent}>
                <div className={styles.spinner}></div>
                <h2>Loading adorable pets...</h2>
                <p>Finding the perfect companions for you!</p>
            </div>
            <div className={styles.loadingGrid}>
                {[...Array(6)].map((_, index) => (
                    <div key={index} className={styles.loadingCard}>
                        <div className={styles.loadingImage}></div>
                        <div className={styles.loadingInfo}>
                            <div className={styles.loadingLine}></div>
                            <div className={styles.loadingLine}></div>
                            <div className={styles.loadingLine}></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

// empty state component
const EmptyState = ({ searchTerm }) => (
    <div className={styles.emptyState}>
        <div className={styles.emptyIcon}>🐾</div>
        <h2>No pets found</h2>
        <p>
            {searchTerm
                ? `No pets match your search for "${searchTerm}". Try adjusting your filters or search terms.`
                : 'No pets match your current filters. Try adjusting your search criteria.'
            }
        </p>
        <button
            onClick={() => window.location.reload()}
            className={styles.resetFiltersBtn}
        >
            Reset Filters
        </button>
    </div>
);

EmptyState.propTypes = {
    searchTerm: PropTypes.string.isRequired
};

// pagination component
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pages = [];
    const maxVisiblePages = 5;

    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage < maxVisiblePages - 1) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
    }

    return (
        <div className={styles.pagination}>
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={styles.paginationBtn}
            >
                Previous
            </button>

            {startPage > 1 && (
                <>
                    <button
                        onClick={() => onPageChange(1)}
                        className={styles.paginationNumber}
                    >
                        1
                    </button>
                    {startPage > 2 && <span className={styles.paginationEllipsis}>...</span>}
                </>
            )}

            {pages.map(page => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={`${styles.paginationNumber} ${currentPage === page ? styles.active : ''
                        }`}
                >
                    {page}
                </button>
            ))}

            {endPage < totalPages && (
                <>
                    {endPage < totalPages - 1 && <span className={styles.paginationEllipsis}>...</span>}
                    <button
                        onClick={() => onPageChange(totalPages)}
                        className={styles.paginationNumber}
                    >
                        {totalPages}
                    </button>
                </>
            )}

            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={styles.paginationBtn}
            >
                Next
            </button>
        </div>
    );
};

Pagination.propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired
};

export default BrowsePage; 