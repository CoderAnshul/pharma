import React, { useState } from "react";

const Product = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const productData = Array.from({ length: 40 }, (_, index) => ({
    title: `Acyclovir (Aciclovir) API`,
    grade: `BP / USP`,
    casNo: `59277-89-3`,
  }));

  const handleInquiryClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  return (
    <div className="bg-gray-100 py-6 text-center mt-[70px]">
      <h1 className="text-4xl font-bold mb-8">PHARMACEUTICAL API</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {productData.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md transition-transform transform hover:-translate-y-2 hover:shadow-lg group"
          >
            <div className="bg-blue-600 text-white p-4 font-semibold text-lg transition-colors group-hover:bg-white group-hover:text-blue-600">
              {product.title}
            </div>
            <div className="p-4">
              <p className="text-gray-700 mb-2">
                <strong>Grade:</strong> {product.grade}
              </p>
              <p className="text-gray-700 mb-4">
                <strong>CAS No:</strong> {product.casNo}
              </p>
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded-md transition-colors hover:bg-blue-700 hover:text-white"
                onClick={() => handleInquiryClick(product)}
              >
                Inquiry
              </button>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-[10000]">
          <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg relative">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              ✕
            </button>

            {/* Modal Header */}
            <h2 className="text-xl font-bold text-center mb-4">Product Inquiry</h2>

            {/* Product Name */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium">
                Product Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={selectedProduct?.title || ""}
                disabled
                className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>

            {/* Form Fields */}
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label className="block text-gray-700 text-sm font-medium">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-blue-500"
                    placeholder="Your name here"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-700 text-sm font-medium">
                    Your Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-blue-500"
                    placeholder="Your email here"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Contact */}
                <div>
                  <label className="block text-gray-700 text-sm font-medium">
                    Your Contact <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-blue-500"
                    placeholder="e.g. (+91) 94288 88076"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-gray-700 text-sm font-medium">
                    Your Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-blue-500"
                    placeholder="Your subject here"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-700 text-sm font-medium">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-blue-500"
                  placeholder="Tell us a few words"
                  rows="3"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
