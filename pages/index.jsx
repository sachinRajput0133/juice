import React from 'react';

import { ClaimsWalletMax } from '../components/ui/ClaimsWalletMax';
import { PageHelpButton } from '../components/ui/PageHelpButton';
import { ChatBubble } from '../components/chat/ChatBubble';

export default function HomePage() {
  return (
    <div className='bg-gray-50'>
      <div className='container mx-auto px-4  '>
        {/* <h1 className='text-3xl font-bold mb-6'>Welcome to Juice Financial</h1> */}

        <div className='grid grid-cols-1 md:grid-cols-1 gap-8 mb-12'>
          <div>
            <ClaimsWalletMax />
          </div>

          {/* <div className='bg-gray-50 p-6 rounded-lg shadow-sm'>
            <h2 className='text-2xl font-semibold mb-4'>Get Started Today</h2>
            <p className='text-gray-700 mb-4'>
              Join thousands of satisfied customers who have transformed their financial operations
              with our cutting-edge solutions.
            </p>
            <div className='mt-6'>
              <PageHelpButton />
            </div>
          </div> */}
        </div>

        <div className='fixed bottom-6 right-6'>
          <ChatBubble />
        </div>
      </div>
    </div>
  );
}
