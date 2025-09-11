import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

export default function PetsCheck() {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const snap = await getDocs(collection(db, 'pets'));
        setPets(snap.docs.map(d => ({ id: d.id, ...d.data() })));
      } catch (e) {
        setError(e?.message || String(e));
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <p>Loading…</p>;
  if (error) return <pre style={{ color: 'crimson' }}>Error: {error}</pre>;
  return <pre>{JSON.stringify(pets, null, 2)}</pre>;
}
