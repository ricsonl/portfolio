import React from 'react';

const RefsContext = React.createContext({
  homeRef: React.createRef(),
  aboutRef: React.createRef(),
  projectsRef: React.createRef(),
  contactRef: React.createRef(),
});

export default RefsContext;