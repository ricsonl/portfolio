import React from 'react';

const RefsContext = React.createContext({
  homeRef: React.createRef(),
  resumeRef: React.createRef(),
  projectsRef: React.createRef(),
  contactRef: React.createRef(),
});

export default RefsContext;