import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import AppNavBar from './modules/views/AppNavBar';
import React from 'react';
import AppFooter from './modules/views/AppFooter';
import AppLocations from './modules/views/AppLocations';
import AppHome from './modules/views/AppHome';
import AppInfo from './modules/views/AppInfo';




function Index() {
  return (     
    <React.Fragment>
    <AppNavBar/>
    <AppHome/>
    <AppLocations/>
    <AppInfo/>
    <AppFooter /> 
    </React.Fragment>

  );
}

export default withRoot(Index);


  