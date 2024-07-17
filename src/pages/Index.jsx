import React from 'react';

const Index = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Autonomous Sailboat</h1>
      <div className="w-full max-w-2xl mx-auto">
        <img
          src="/images/autonomous-sailboat.png"
          alt="Autonomous Sailboat"
          className="rounded-md w-full h-auto"
        />
      </div>
      <p className="mt-4 text-center text-gray-600">
        An autonomous sailboat navigating the open seas.
      </p>
    </div>
  );
};

export default Index;