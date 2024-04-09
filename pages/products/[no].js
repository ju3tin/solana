import { useRouter } from 'next/router';
import markers2 from '../markers/markers2'; // Adjust the path as needed


function UserDetails() {
    const router = useRouter();
    const { no } = router.query;
  
    const marker = markers2.find((m) => m.no === parseInt(no));
  
    return (
      <div>
        {marker ? (
          <div>
            <h1>Marker Details</h1>
            <p>no: {marker.no}</p>
            <p>Position: {marker.lng}</p>
            <p>Text: {marker.text}</p>
          </div>
        ) : (
          <p>Marker not found</p>
        )}
      </div>
    );
}
export default UserDetails;