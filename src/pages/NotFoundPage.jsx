import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="not-found-page">
      <h2>404 - Page Not Found</h2>

      <p>Oops! The page you're looking for doesn't exist.</p>

      <Link to="/">Go Back Home</Link>
    </div>
  );
}

export default NotFoundPage;