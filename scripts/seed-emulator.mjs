import admin from 'firebase-admin';

process.env.FIRESTORE_EMULATOR_HOST = 'localhost:8080';
process.env.FIREBASE_AUTH_EMULATOR_HOST = 'localhost:9099';
process.env.GOOGLE_APPLICATION_CREDENTIALS = ''; // not used with emulators

if (!admin.apps.length) admin.initializeApp({ projectId: 'petprofiles-a36d8' });

// seeding app to seed emulators with data
const db = admin.firestore();
const auth = admin.auth();

async function main() {
    const { uid } = await auth.createUser({ email: 'diegoyapagustin@gmail.com', password: 'Access123' });
    await auth.setCustomUserClaims(uid, { role: 'admin' });
    await db.collection('users').doc(uid).set({ email: 'diegoyapagustin@gmail.com', role: 'admin' });

    // seed pets data
    const pets = [
        { name: 'Buddy', species: 'dog', breed: 'mutt', age: 3, color: 'brown', status: 'available' },
        { name: 'Milo', species: 'cat', breed: 'tabby', age: 2, color: 'orange', status: 'available' },
        { name: 'Luna', species: 'cat', breed: 'siamese', age: 4, color: 'cream', status: 'pending' },
        { name: 'Rocky', species: 'dog', breed: 'bulldog', age: 5, color: 'white', status: 'adopted' },
        { name: 'Coco', species: 'bird', breed: 'cockatiel', age: 1, color: 'gray', status: 'available' },
        { name: 'Nyla', species: 'dog', breed: 'labrador', age: 6, color: 'black', status: 'available' },
        { name: 'Ziggy', species: 'cat', breed: 'maine coon', age: 3, color: 'gray', status: 'available' },
        { name: 'Peanut', species: 'rabbit', breed: 'dwarf', age: 2, color: 'white', status: 'available' }
    ];

    const batch = db.batch();
    const now = admin.firestore.FieldValue.serverTimestamp();
    pets.forEach(p => {
        const ref = db.collection('pets').doc();
        batch.set(ref, { ...p, createdAt: now });
    });
    await batch.commit();

    console.log('Seeded admin user + pets into emulators.');
}

main().catch(e => (console.error(e), process.exit(1)));
