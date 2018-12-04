import React, { Component } from 'react';
import styles from './styles';

class AppMain extends Component {
  render() {
    return (
      <div>
        <span style={styles.appMainShadow}/>

        <div style={styles.wrapperLogoKingsRaid}>
          <h1 style={styles.logoKingsRaid}>King's Raid</h1>
        </div>
        <div style={styles.wrapperTitle}>
          <span style={styles.title}>캐릭터를 선택하세요!</span>
        </div>

        <div style={styles.wrapperMain}>
          <button type="button" style={styles.btnMainCrow} onClick={this.props.onClick('crow')}>크로우</button>
          {/*<button type="button" style={styles.btnMainAselica} onClick={this.props.onClick('aselica')}>아셀리카</button>*/}
          <button type="button" style={styles.btnMainScarlet} onClick={this.props.onClick('scarlet')}>스칼렛</button>
        </div>
      </div>
    );
  }
}

export default AppMain;
