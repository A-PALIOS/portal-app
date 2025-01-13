import React from 'react';
// import { Grid } from 'primereact/grid';
import AppLink from './AppLink';

const PortalPage = () => {
  const goToApp = (app) => {
    // Replace with app navigation logic
    console.log(`Navigating to ${app}`);
  };


  const goToTimeOff = async () => {
    const email = 'media@artius.gr'; // Replace with the actual email
    const password = '123456';  // Replace with the actual password

    const formBody = new URLSearchParams();
    formBody.append('email', email);
    formBody.append('password', password);

    try {
      const response = await fetch('https://timeoff.cmtprooptiki.gr/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString(),
      });

      if (!response.ok) {
        throw new Error('Login failed. Please check your credentials.');
      }

      const data = await response.json();
      console.log('Login successful:', data);
      // Redirect or handle successful login logic
    } catch (error) {
      console.error('Error logging in:', error.message);
    }
  };


  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <h1>Welcome to the Portal</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>


      <AppLink
            appName="SharePoint"
            appDescription="Κεντρικό περιβάλλον Εργασίας"
            onClick={() => goToApp('https://portal.office.com')}
            link="https://portal.office.com"
            logo="/images/SharePoint.png"  // Add the logo URL here
        />


        <AppLink
          appName="Kimai"
          appDescription="Εργαλείο Καταχώρησης Ωρών Εργασίας"
          onClick={() => goToApp('https://management.cmtprooptiki.gr/')}
          link="https://management.cmtprooptiki.gr/"
          logo="/images/kimailogo.png"  // Add the logo URL here

        />

<AppLink
          appName="TimeOff"
          appDescription="Εργαλείο Καταχώρησης Αδειών"
          onClick={goToTimeOff}
          link="https://timeoff.cmtprooptiki.gr/"
          logo="/images/timeoff.png"
        />

        <AppLink
          appName="TimeOff2"
          appDescription="Εργαλείο Καταχώρησης Αδειών"
          onClick={() => goToApp('https://timeoff.cmtprooptiki.gr/')}
          link="https://timeoff.cmtprooptiki.gr/"
          logo="/images/timeoff.png"  // Add the logo URL here
        />

        <AppLink
            appName="Transcribe CMT"
            appDescription="Εργαλείο Απομαγνητοφωνήσεων"
            onClick={() => goToApp('https://transcription-app.cmtprooptiki.gr/')}
            link="https://transcription-app.cmtprooptiki.gr/"
            logo="/images/streamlitlog.png"  // Add the logo URL here
   
        />
        <AppLink
            appName="CashFlow"
            appDescription="Εργαλείο Παρακολούθησης Εσροών/Εκροών"
            onClick={() => goToApp('https://cashflow.cmtprooptiki.gr/')}
            link="https://cashflow.cmtprooptiki.gr/"
            logo="/images/cashflowlogo.png"  // Add the logo URL here
        />


        <AppLink
            appName="Health LimeSurvey"
            appDescription="Εργαλείο Δημιουργίας Ερωτηματολογίων σχετικών - Υγεία"
            onClick={() => goToApp('https://health-survey.gr/index.php/admin/authentication/sa/login')}
            link="https://health-survey.gr/index.php/admin/authentication/sa/login"
            logo="/images/healthsurv.png"  // Add the logo URL here
        />

        <AppLink
            appName="Social LimeSurvey"
            appDescription="Εργαλείο Δημιουργίας Ερωτηματολογίων σχετικών - Κοινωνκά"
            onClick={() => goToApp('https://social-survey.eu/index.php/admin/authentication/sa/login')}
            link="https://social-survey.eu/index.php/admin/authentication/sa/login"
            logo="/images/socialsurv.png"  // Add the logo URL here
        />

      </div>
    </div>
  );
};

export default PortalPage;
