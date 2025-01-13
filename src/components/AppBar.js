import React from 'react';
import { Menubar } from 'primereact/menubar';

const AppBar = () => {
  const items = [
    { label: 'Home', icon: 'pi pi-home', command: () => window.location.href = '/' },
    { label: 'About', icon: 'pi pi-info-circle', command: () => window.location.href = '/about' },
  ];

  return (
    <div>
      <Menubar model={items} />
    </div>
  );
};

export default AppBar;
