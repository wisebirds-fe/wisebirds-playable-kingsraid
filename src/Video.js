import React, { Component } from 'react';
import styles from './styles';

class Video extends Component {
  refVideo = null;

  componentDidMount() {
    this.refVideo.volume = 1;
    this.refVideo.addEventListener('ended', this.onFinishVideo);
    this.refVideo.play()
  }

  componentWillUnmount() {
    this.refVideo.volume = 0;
    this.refVideo.removeEventListener('ended', this.onFinishVideo);
  }

  getRef = (ref) => this.refVideo = ref;

  characterVideoSource() {
    switch (this.props.character) {
      case 'aselica':
        return styles.videoSrcAselica;
      case 'crow':
        return styles.videoSrcCrow;
      case 'scarlet':
        return styles.videoSrcScarlet;
      default:
        return null;
    }
  }

  onFinishVideo = () => setTimeout(this.props.onFinishVideo, 1000);

  render() {
    return (
      <div style={styles.videoWrapper}>
        <video ref={this.getRef} style={styles.video}>
          <source type="video/mp4" src={this.characterVideoSource()}/>
        </video>
      </div>
    );
  }
}

export default Video;
