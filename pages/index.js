import React from 'react';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout/Layout.react';
import Chirp from '../components/Chirp/Chirp.react';
import MessageBox from '../components/MessageBox/MessageBox.react';

/**
 * If you want to be able to connect from other devices, find yourself
 * with `ifconfig` => `en0` => `inet` and use that IP address as the host
 */
const host = 'localhost';

/**
 * @todo:
 * 1. Fetch initial list of chirps
 * 2. Set up WebSocket connection with the server
 * 3. Send user-created chirp via socket connection to the server
 * 4. Listen for new chirps on the server, and update the chrips list as they come in
 */

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.ws = null;
    this.state = {
      chirps: props?.chirps || []
    };
  }

  handleSend = ({name, message}) => {

  };

  render() {
    return (
      <Layout
        sidebar={(
          <MessageBox
            onSend={this.handleSend}
          />
        )}
      >
        {this.state.chirps.map(({name, message}, i) => (
          <Chirp
            key={i}
            name={name}
            message={message}
          />
        ))}
      </Layout>
    );
  }
}
