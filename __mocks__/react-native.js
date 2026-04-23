const React = require('react');
const createContext = React.createContext;
const useContext = React.useContext;
module.exports = {
  createContext,
  useContext,
  StyleSheet: { create: (s) => s },
  View: (props) => React.createElement('View', props),
  Text: (props) => React.createElement('Text', props),
};
