import React from 'react';
// import { Grid } from 'primereact/grid';
import AppLink from './AppLink';
import axios from 'axios';
import { Card } from 'primereact/card';
import { Image } from 'primereact/image';
// import '../animate.scss';

const PortalPage = () => {
  const goToApp = (app) => {
    // Replace with app navigation logic
    console.log(`Navigating to ${app}`);
  };


  const goToTimeOff2 = async () => {
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

  const goToTimeOff = async () => {
    const email = 'media@artius.gr'; // Replace with the actual email
    const password = '123456';  // Replace with the actual password
 
    const formBody = new URLSearchParams();
    formBody.append('email', email);
    formBody.append('password', password);
 
    try {
      const response = await axios.post(
        'https://timeoff.cmtprooptiki.gr/login',
        formBody.toString(), // Data in x-www-form-urlencoded format
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );
 
      console.log('Login successful:', response.data);
      // Handle successful login logic, e.g., redirect or store token
    } catch (error) {
      console.error('Error logging in:', error.response ? error.response.data : error.message);
    }
  };

  const LoginButton = () => {
    const handleLogin = () => {
      // Credentials
      const email = "media@artius.gr";
      const password = "123456";
  
      // Open the login page (this will cause a page reload)
      window.location.href = 'https://timeoff.cmtprooptiki.gr/login';
  
      // Wait for the page to load and then fill out the form
      setTimeout(() => {
        const emailInput = document.querySelector('input[name="username"]'); // Adjust the selector as needed
        const passwordInput = document.querySelector('input[name="password"]'); // Adjust the selector as needed
        const loginForm = document.querySelector('form'); // Find the form to submit
        
        if (emailInput && passwordInput && loginForm) {
          emailInput.value = email; // Set email
          passwordInput.value = password; // Set password
  
          // Submit the form automatically
          loginForm.submit();
        } else {
          console.error('Form fields or form not found!');
        }
      }, 1000); // Wait a second to make sure the page loads before attempting to fill out the form
    };
  
    return <button onClick={handleLogin}>Login and Go to Timeoff</button>;
  };

  const loginToTimeoff = () => {
    const email = "media@artius.gr";
    const password = "123456";
    
    // Create a hidden form
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://timeoff.cmtprooptiki.gr/login'; // The login URL
  
    // Create the email input field
    const emailField = document.createElement('input');
    emailField.type = 'hidden';
    emailField.name = 'username';
    emailField.value = email;
    
    // Create the password input field
    const passwordField = document.createElement('input');
    passwordField.type = 'hidden';
    passwordField.name = 'password';
    passwordField.value = password;
  
    // Append the fields to the form
    form.appendChild(emailField);
    form.appendChild(passwordField);
  
    // Append the form to the body
    document.body.appendChild(form);
  
    // Submit the form
    form.submit();
  };

  const HoverCard = ({ imagePath, title, subtitle, loginfunc }) => {
    // const header = (
    //   <img alt="Card" src={imagePath} style={{ width: '250px' }} />
    // );
  
    return (
      <div className='card-wrapper'>
        <Card title={title} subTitle={subtitle} className="hover-card" onClick={loginfunc}>
          <img alt="Card" src={imagePath} className='card-image'></img>
        </Card>
      </div>
    );
  }
  

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <h1>Welcome to the Portal</h1>

      <div className="card-container">
        <HoverCard imagePath="/images/SharePoint.png" title="SharePoint" subtitle="Κεντρικό περιβάλλον Εργασίας" loginfunc={loginToTimeoff}/>
        <HoverCard imagePath="/images/kimailogo.png" title="Kimai" subtitle="Εργαλείο Καταχώρησης Ωρών Εργασίας" loginfunc={loginToTimeoff}/>
        <HoverCard imagePath="/images/timeoff.png" title="TimeOff" subtitle="Εργαλείο Καταχώρησης Αδειών" loginfunc={loginToTimeoff}/>
        <HoverCard imagePath="/images/streamlitlog.png" title="Transcribe CMT" subtitle="Εργαλείο Απομαγνητοφωνήσεων" loginfunc={loginToTimeoff}/>
        <HoverCard imagePath="/images/cashflowlogo.png" title="CashFlow" subtitle="Εργαλείο Παρακολούθησης Εσροών/Εκροών" loginfunc={loginToTimeoff}/>
        <HoverCard imagePath="/images/healthsurv.png" title="Health LimeSurvey" subtitle="Εργαλείο Παρακολούθησης Εσροών/Εκροών" loginfunc={loginToTimeoff}/>
        <HoverCard imagePath="/images/socialsurv.png" title="Social LimeSurvey" subtitle="Εργαλείο Δημιουργίας Ερωτηματολογίων σχετικών - Κοινωνκά" loginfunc={loginToTimeoff}/>

      </div>
      {/* <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>

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
          onClick={loginToTimeoff}
          link="https://timeoff.cmtprooptiki.gr/"
          logo="/images/timeoff.png"
        >
        </AppLink>
        

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

      </div> */}
    </div>
  );
};

export default PortalPage;
