"use client";
// components/TabsComponent.js
import React, { useState } from 'react';

import Image from 'next/image';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  return (
    <div>
      <div className="flex justify-center">
        <button
          className={`px-4 py-2 border ${
            activeTab === 'tab1' ? 'border-black bg-black text-white rounded-l-full' : 'border-gray-300 rounded-l-full'
          }`}
          onClick={() => setActiveTab('tab1')}
        >
          2 BR
        </button>
        <button
          className={`px-4 py-2 border ${
            activeTab === 'tab2' ? 'border-black bg-black text-white' : 'border-gray-300'
          }`}
          onClick={() => setActiveTab('tab2')}
        >
          3 BR
        </button>
        <button
          className={`px-4 py-2 border ${
            activeTab === 'tab3' ? 'border-black bg-black text-white rounded-r-full' : 'border-gray-300 rounded-r-full'
          }`}
          onClick={() => setActiveTab('tab3')}
        >
          4 BR
        </button>
      </div>
      <div className="mt-4">
        {activeTab === 'tab1' && <div>
        <div className=' overflow-hidden'>
          <img
            src="/2BR.webp"
            alt="Armani Beach Residences"
          />
        </div>
          </div>}
        {activeTab === 'tab2' && <div>
        <div className=' overflow-hidden'>
          <img
            src="/3BR.webp"
            alt="Armani Beach Residences"
          />
        </div>
          </div>}
        {activeTab === 'tab3' && <div>
        <div className=' overflow-hidden'>
          <img
            src="/4BR.webp"
            alt="Armani Beach Residences"
          />
        </div>
          </div>}
      </div>
    </div>
  );
};

export default Tabs;
