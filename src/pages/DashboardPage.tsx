import { Link } from 'react-router-dom';

function DashboardPage() {
  return (
    <div>
      <h1>Dashboard Page</h1>
      <Link to="/">Back to Landing Page</Link>
    </div>
  );
}

export default DashboardPage;