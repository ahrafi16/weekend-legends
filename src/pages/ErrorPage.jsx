
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <h2 className="text-3xl font-semibold mb-2">Oops! Page Not Found</h2>
      <p className="text-gray-700 mb-6 text-center max-w-md">
        The page you are looking for doesn’t exist or has been moved. 
        Maybe head back to the home page?
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
      >
        Go Home
      </Link>
    </div>
  );
};

export default ErrorPage;