import path from 'path';
import React from 'react';
import WebView from 'react-electron-web-view';

import styles from './DAppExample.scss';

export default class DAppExample extends React.Component {
  render() {
    return (
      <div className={styles.dappExample}>
        <h1>DApp Example</h1>
        <WebView
          className={styles.webview}
          src="dapp.html"
          preload={this.getPreloadPath()}
          onConsoleMessage={this.handleConsoleMessage}
        />
      </div>
    );
  }

  handleConsoleMessage = (e) => {
    console.log('[DApp]', e.message); // eslint-disable-line no-console
  }

  getPreloadPath = () => {
    const publicPath = process.env.NODE_ENV === 'production' ? __dirname : process.env.PUBLIC_PATH;
    return `file:${path.join(publicPath, 'preloadRenderer.js')}`;
  }
}
