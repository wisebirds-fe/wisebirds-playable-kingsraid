import React, { Component } from 'react';
import AppMain from './AppMain';
import CharacterCrow from './CharacterCrow';
//import CharacterAselica from './CharacterAselica';
import CharacterScarlet from './CharacterScarlet';
import Video from './Video';
import * as Helpers from './helpers';
import styles from './styles';

const ua = window.navigator.userAgent;
//const isIOS = ua.match(/iPhone\sOS\s([0-9]+)_([0-9]+)_?([0-9]+)?/i) || ua.match(/iPad;\sCPU\sOS\s([0-9]+)_([0-9]+)_?([0-9]+)?/i);
const isAOS = ua.match(/Android\s([0-9]+)\.([0-9]+)\.?([0-9]+)?/i);

class App extends Component {
  state = {
    isSelected: false,
    isFinish: false,
    isShowVideo: false,
    character: '',
  };

  onClick = (character) => () => this.setState({ isSelected: true, character });

  onClickPrev = () => this.setState({ isSelected: false, character: '' });

  onClickNext = () => {
    // 페이스북 플레이어블 앱 등록을 위해 CTA버튼 클릭시 FbPlayableAd.onCTAClick()를 반드시 호출해야 함.
    window.FbPlayableAd && window.FbPlayableAd.onCTAClick();

    setTimeout(() => {
      if (isAOS) {
        window.location.href = '//play.google.com/store/apps/details?id=com.vespainteractive.KingsRaid';
      } else {
        window.location.href = '//itunes.apple.com/kr/app/%ED%82%B9%EC%8A%A4%EB%A0%88%EC%9D%B4%EB%93%9C/id1097735195?mt=8';
      }
    }, 500);
  };

  onClickVideo = () => this.setState({ isShowVideo: true });

  onFinishVideo = () => this.setState({ isShowVideo: false });

  componentDidMount() {
    Helpers.freezeBody();
  }

  componentWillUnmount() {
    Helpers.unfreezeBody();
  }

  renderVideo = () => <Video character={this.state.character} onFinishVideo={this.onFinishVideo}/>;

  renderCharacter = () => {
    switch (this.state.character) {
      case 'crow':
        return (
          <CharacterCrow
            onClickPrev={this.onClickPrev}
            onClickNext={this.onClickNext}
            onClickVideo={this.onClickVideo}
          />
        );
      case 'aselica':
        return null;
        //(
        //  <CharacterAselica
        //    onClickPrev={this.onClickPrev}
        //    onClickNext={this.onClickNext}
        //    onClickVideo={this.onClickVideo}
        //  />
        //);
      case 'scarlet':
        return (
          <CharacterScarlet
            onClickPrev={this.onClickPrev}
            onClickNext={this.onClickNext}
            onClickVideo={this.onClickVideo}
          />
        );
      default:
        return <AppMain onClick={this.onClick}/>;
    }
  };

  render() {
    return (
      <div style={styles.app}>
        <span style={styles.logoVespa}>Vespa</span>
        {this.state.isShowVideo ? this.renderVideo() : this.renderCharacter()}
      </div>
    );
  }
}

export default App;
