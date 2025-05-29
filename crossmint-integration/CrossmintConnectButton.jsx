import React from 'react';
import { CrossmintPayButton } from '@crossmint/client-sdk-react-ui';

const CrossmintConnectButton = () => {
  return (
    <div>
      <CrossmintPayButton
        clientId="a91439fe-b489-46a6-8b37-2b05db8337fftouch crossmint-integration/Home.jsx" // Replace with your Crossmint client ID
        environment="staging" // Use "production" for live environments
        mintConfig={{
          type: "erc-721",
          totalPrice: "0.1", // Price in native currency (e.g., ETH)
          // Add other minting parameters as needed
        }}
        className="crossmint-button"
        // Optional: Customize button text or styling
        buttonText="Connect & Mint with Crossmint"
      />
    </div>
  );
};

export default CrossmintConnectButton;