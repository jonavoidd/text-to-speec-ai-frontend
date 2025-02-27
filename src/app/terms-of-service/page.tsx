const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
        <p className="text-gray-600 mb-4">
          By using this website, you agree to the following terms and
          conditions. Please read them carefully.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          1. Acceptance of Terms
        </h2>
        <p className="text-gray-600 mb-4">
          This is a personal, open-source project. By using this website, you
          agree to these terms. If you do not agree, please do not use the site.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. No Warranty</h2>
        <p className="text-gray-600 mb-4">
          This project is provided "as is" without any warranties, express or
          implied. The developer is not responsible for any issues arising from
          its use.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          3. Open-Source License
        </h2>
        <p className="text-gray-600 mb-4">
          The code for this project is open-source and available under the MIT
          License. You are free to use, modify, and distribute it in accordance
          with the license terms.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          4. Limitation of Liability
        </h2>
        <p className="text-gray-600 mb-4">
          The developer is not liable for any damages or losses resulting from
          the use of this project.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">5. Changes to Terms</h2>
        <p className="text-gray-600 mb-4">
          These terms may be updated in the future. Continued use of the site
          constitutes acceptance of the updated terms.
        </p>

        <p className="text-gray-600 mt-8">
          If you have any questions, feel free to{" "}
          <a href="/contact" className="text-blue-600 hover:underline">
            contact me
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default TermsOfService;
