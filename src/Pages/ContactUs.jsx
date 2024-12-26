import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-blue-50 py-12 px-6 lg:px-24 mt-[70px]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Section */}
        <div>
          <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
          <p className="mt-4 text-gray-600">
            Email, call, or complete the form to learn how Snappy can solve your messaging problem.
          </p>
          <p className="mt-2 text-gray-600">info@company.io</p>
          <p className="mt-1 text-gray-600">321-221-223</p>
          <a
            href="#"
            className="mt-4 inline-block text-blue-500 font-semibold hover:underline"
          >
            Customer Support
          </a>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Customer Support</h3>
              <p className="mt-2 text-sm text-gray-600">
                Our support team is available around the clock to address any concerns or queries you may have.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Feedback and Suggestions</h3>
              <p className="mt-2 text-sm text-gray-600">
                We value your feedback and are continuously working to improve Snappy.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Media Inquiries</h3>
              <p className="mt-2 text-sm text-gray-600">
                For media-related questions or press inquiries, please contact us at media@snappyapp.com.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800">Get in Touch</h2>
          <p className="mt-2 text-gray-600">You can reach us anytime</p>
          <form className="mt-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First name"
                className="w-full border border-gray-300 rounded-md p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-full border border-gray-300 rounded-md p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <input
              type="email"
              placeholder="Your email"
              className="w-full border border-gray-300 rounded-md p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex items-center border border-gray-300 rounded-md p-3">
              <select
                className="text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent border-none"
              >
                <option value="+62">+91</option>
                <option value="+1">+1</option>
                <option value="+91">+91</option>
              </select>
              <input
                type="tel"
                placeholder="Phone number"
                className="w-full focus:outline-none"
              />
            </div>
            <textarea
              placeholder="How can we help?"
              maxLength="120"
              className="w-full border border-gray-300 rounded-md p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <div className="text-right text-sm text-gray-500">0/120</div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold py-3 rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
          <p className="mt-4 text-xs text-gray-600 text-center">
            By contacting us, you agree to our{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Privacy Policy
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
