import React from 'react';
import AppBar from 'material-ui/AppBar';
import { green700 } from 'material-ui/styles/colors';

const styles = {
  appBar: {
    backgroundColor: green700
  },
  title: {
    lineHeight: '55px',
    height: '55px',
    fontFamily: '\'Montserrat\', sans-serif'
  },
  thin: {
    fontWeight: 'light'
  }
};

const Title = () => (
  <h1>JRK <span style={styles.thin}>Full Stack Software Engineer</span></h1>
);

const Header = () => (
  <AppBar
    title={<Title />}
    style={styles.appBar}
    titleStyle={styles.title}
    showMenuIconButton={false} />
);

export default Header;
