import React from 'react';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout/Layout.react';
import Chirp from '../components/Chirp/Chirp.react';
import MessageBox from '../components/MessageBox/MessageBox.react';

/**
 * Find yourself with `ifconfig` => `en0` => `inet`
 */
const host = '10.233.15.121';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.ws = null;
    this.state = {
      chirps: props.chirps
    };
  }

  static async getInitialProps() {
    const chirps = await fetch(`http://${host}:3001/feed`)
      .then((res) => res.json());
    return {chirps};
  }


  componentDidMount() {
    this.ws = new WebSocket(`ws://${host}:3001/feed-socket`);

    this.ws.addEventListener('message', (e) => {
      this.setState((state) => {
        return {chirps: [JSON.parse(e.data), ...state.chirps]};
      })
    });
  }

  handleSend = ({name, message}) => {
    this.ws.send(JSON.stringify({name, message}));
  };

  render() {
    global.temp = this;
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
