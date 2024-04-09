import { useRouter } from 'next/router';
import markers from './markers1'; // Adjust the path as needed

function MarkerPage() {
  const router = useRouter();
  const { no } = router.query;

  const marker = markers.find((m) => m.no === parseInt(no));

  return (
    <div>
      {marker ? (
        <div>
          <h1>Marker Details</h1>
          <p>no: {marker.no}</p>
          <p>Position: {marker.position.join(', ')}</p>
          <p>Text: {marker.text}</p>
        </div>
      ) : (
        <p>Marker not found</p>
      )}
    </div>
  );
}

export default MarkerPage;