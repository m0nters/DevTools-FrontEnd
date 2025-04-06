import { Link } from "react-router-dom";

function TermsOfService() {
  return (
    <>
      <article>
        <title>Terms of Service | IT Tools</title>
        <meta
          name="description"
          content="Read the terms of service for using IT Tools"
        />
      </article>
      <div className="w-full max-w-5xl mx-auto pt-24 px-6 pb-12">
        <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
        <div className="bg-white rounded-lg border border-gray-200 p-8 mb-6">
          <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
          <p className="text-gray-700 mb-6">
            Welcome to IT Tools. By accessing or using our application, you
            agree to be bound by these Terms of Service. If you disagree with
            any part of the terms, you do not have permission to access the
            service.
          </p>
          <h2 className="text-xl font-semibold mb-4">
            2. User Responsibilities
          </h2>
          <p className="text-gray-700 mb-6">
            Users are responsible for maintaining the confidentiality of their
            accounts and passwords. You agree to accept responsibility for all
            activities that occur under your account.
          </p>
          <h2 className="text-xl font-semibold mb-4">3. Account Tiers</h2>
          <p className="text-gray-700 mb-4">
            IT Tools offers different account tiers with varying features:
          </p>
          <ul className="list-disc pl-5 mb-6 text-gray-700">
            <li className="mb-2">
              <span className="font-medium">Anonymous:</span> Limited access to
              basic tools
            </li>
            <li className="mb-2">
              <span className="font-medium">Free User:</span> Access to standard
              tools and ability to save favorites
            </li>
            <li className="mb-2">
              <span className="font-medium">Premium:</span> Access to all tools
              including premium features
            </li>
          </ul>
          <h2 className="text-xl font-semibold mb-4">4. Premium Features</h2>
          <p className="text-gray-700 mb-6">
            Premium features are only accessible to users with a premium
            account. Premium status may be obtained through our approval
            process. We reserve the right to modify premium features at any
            time.
          </p>
          <h2 className="text-xl font-semibold mb-4">
            5. Prohibited Activities
          </h2>
          <p className="text-gray-700 mb-4">Users may not:</p>
          <ul className="list-disc pl-5 mb-6 text-gray-700">
            <li className="mb-2">Use our tools for any illegal purposes</li>
            <li className="mb-2">
              Attempt to gain unauthorized access to any portion of the service
            </li>
            <li className="mb-2">
              Interfere with the proper working of the service
            </li>
            <li className="mb-2">
              Circumvent, disable, or otherwise interfere with security features
            </li>
          </ul>
          <h2 className="text-xl font-semibold mb-4">
            6. Intellectual Property
          </h2>
          <p className="text-gray-700 mb-6">
            The service and its original content, features, and functionality
            are owned by the project team and are protected by international
            copyright, trademark, patent, trade secret, and other intellectual
            property laws.
          </p>
          <h2 className="text-xl font-semibold mb-4">
            7. Limitation of Liability
          </h2>
          <p className="text-gray-700 mb-6">
            To the maximum extent permitted by law, we exclude all
            representations, warranties, and conditions relating to our service.
            We will not be liable for any loss or damage of any nature.
          </p>
          <h2 className="text-xl font-semibold mb-4">8. Changes to Terms</h2>
          <p className="text-gray-700 mb-6">
            We reserve the right to modify these terms at any time. We will
            provide notice of significant changes by posting the updated terms
            on our website or through other communications.
          </p>
          <h2 className="text-xl font-semibold mb-4">9. Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions about these Terms, please contact us.
          </p>
        </div>
        <div className="text-center">
          <Link
            to="/register"
            className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors inline-block"
          >
            Back to Registration
          </Link>
        </div>
      </div>
    </>
  );
}

export default TermsOfService;
