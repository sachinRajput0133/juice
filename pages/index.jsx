import React from 'react';

import { ClaimsWalletMax } from '../components/ui/ClaimsWalletMax';
import { PageHelpButton } from '../components/ui/PageHelpButton';
import { ChatBubble } from '../components/chat/ChatBubble';

export default function HomePage() {
  return (
    <div className='bg-[#F7F9FF] dark:bg-gray-950 dark:border-gray-800'>
      <div className='container mx-auto px-4  '>
        {/* <h1 className='text-3xl font-bold mb-6'>Welcome to Juice Financial</h1> */}

        <div className='grid grid-cols-1 md:grid-cols-1 gap-8 '>
          <div>
            <ClaimsWalletMax />
          </div>
        </div>

        <div className='fixed bottom-6 right-6'>
          <ChatBubble />
        </div>
      </div>
    </div>
  );
}
