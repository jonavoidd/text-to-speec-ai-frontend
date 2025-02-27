export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-gray-600 mb-4">
          This Privacy Policy explains how we handle your information in the
          context of this personal, open-source project.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          1. Information We Collect
        </h2>
        <p className="text-gray-600 mb-4">
          Since this is a personal project, we do not collect any personal data.
          Any data processed (e.g., audio files for transcription) is done
          locally on your device and is not stored or shared.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          2. Open-Source Nature
        </h2>
        <p className="text-gray-600 mb-4">
          This project is open-source, meaning the code is publicly available
          for review. You can check the source code to verify that no data is
          being collected or misused.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          3. Third-Party Services
        </h2>
        <p className="text-gray-600 mb-4">
          This project does not use any third-party services that collect or
          process user data.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          4. Changes to This Policy
        </h2>
        <p className="text-gray-600 mb-4">
          If this project evolves in the future, this Privacy Policy will be
          updated accordingly. However, as of now, no data is collected or
          stored.
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
}
