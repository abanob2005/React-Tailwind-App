import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="text-center p-6">
        <h1 className="text-9xl font-extrabold text-red-600 mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-3">Page Not Found</h2>
        <p className="text-gray-500 mb-6">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-md shadow-md hover:bg-blue-700 transition-colors"
        >
          Go Back Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
