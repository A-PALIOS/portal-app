import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

const AppLink = ({ appName, appDescription, link, logo }) => {
  return (
    <Card title={appName} style={{ width: '300px', margin: '20px',textAlign:'center' }}>
        <div style={{ textAlign: 'center' }}>
        {/* Display the app logo */}
        <img src={logo} alt={`${appName} logo`} style={{ maxWidth: '100%', height: 'auto', marginBottom: '10px' }} />
      </div>
      <p>{appDescription}</p>
      <Button 
      label="Go to App" 
      icon="pi pi-arrow-right" 
      onClick={() => window.open(link, '_blank')} 
 />
    </Card>
  );
};

export default AppLink;
