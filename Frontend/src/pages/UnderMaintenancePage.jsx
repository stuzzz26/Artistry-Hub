import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UnderMaintenancePage = () => {
    const [showPayment, setShowPayment] = useState(false);
    const [paymentComplete, setPaymentComplete] = useState(false);

    const handleCashOnDelivery = () => {
        setShowPayment(false);
        setPaymentComplete(true);
    };

    return (
        <div
            className="under-maintenance-page min-h-screen bg-cover bg-center flex flex-col justify-center items-center p-6 fixed inset-0 z-50"
            style={{
                backgroundImage: 'url("https://img.pikbest.com/ai/illus_our/20230426/f97c679e2399889df47384b62a61106e.jpg!w700wp")',
                backdropFilter: 'blur(10px)', // Apply blur to the background
            }}
        >
            <div className="relative z-10 bg-white bg-opacity-80 p-8 rounded-lg shadow-lg max-w-md mx-auto text-center">
                {!paymentComplete ? (
                    <>
                        <h2 className="text-3xl font-semibold text-black mb-4">
                            Visit Again
                        </h2>
                        <p className="text-lg text-black mb-6">
                            Please share your valuable feedback with us.
                        </p>
                        <div className="text-center">
                            <span className="text-black">Thank you for choosing our arts.</span>
                        </div>

                        <div className="mt-6 space-y-4">
                            <button
                                onClick={() => setShowPayment(true)}
                                className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200 w-full"
                            >
                                Pay Cash on Delivery
                            </button>
                            {showPayment && (
                                <div className="mt-6 bg-white p-6 rounded-lg shadow-lg text-center">
                                    <h3 className="text-xl font-semibold text-black mb-4">
                                        Confirm Payment
                                    </h3>
                                    <p className="text-black mb-4">
                                        You have chosen to pay with Cash on Delivery. Confirm to proceed.
                                    </p>
                                    <button
                                        onClick={handleCashOnDelivery}
                                        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                                    >
                                        Confirm and Pay
                                    </button>
                                </div>
                            )}
                        </div>

                        <div className="mt-6">
                            <Link
                                to="/home"
                                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 w-full"
                            >
                                Return to Home
                            </Link>
                        </div>
                    </>
                ) : (
                    <div className="text-center">
                        <h2 className="text-3xl font-semibold text-black mb-4">
                            Your Order is on Its Way!
                        </h2>
                        <p className="text-lg text-black mb-6">
                            Thank you for your purchase. Your order will be delivered soon.
                        </p>
                        <Link
                            to="/home"
                            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                        >
                            Return to Home
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UnderMaintenancePage;
