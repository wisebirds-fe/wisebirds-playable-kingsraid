import React, { Component } from 'react';
import styles from './styles';

class CharacterAselica extends Component {
  state = {
    type: 1,
  };

  onClickType = (type) => () => this.setState({ type });

  render() {
    return (
      <div>
        <span style={styles.appCharShadow}/>
        <h1 style={styles.logoCharKingsRaid}>King's Raid</h1>

        {this.state.type === 1 ?
          <div>
            <span style={styles.imageAselica1}>캐릭터 이미지</span>
            <span style={styles.titleAselica1}>아셀리카 기본 (5성)</span>
          </div>
          : null
        }
        {this.state.type === 2 ?
          <div>
            <span style={styles.imageAselica2}>캐릭터 이미지</span>
            <span style={styles.titleAselica2}>타천사 아셀리카</span>
          </div>
          : null
        }
        {this.state.type === 3 ?
          <div>
            <span style={styles.imageAselica3}>캐릭터 이미지</span>
            <span style={styles.titleAselica3}>성스러운 언약 아셀리카</span>
          </div>
          : null
        }

        <div style={styles.wrapperBtnChar}>
          <button
            type="button"
            style={{ ...styles.btnCharAselica1, filter: this.state.type === 1 ? null : 'grayscale(100%)' }}
            onClick={this.onClickType(1)}
          >
            아셀리카 기본 (5성) 선택하기
          </button>
          <button
            type="button"
            style={{ ...styles.btnCharAselica2, filter: this.state.type === 2 ? null : 'grayscale(100%)' }}
            onClick={this.onClickType(2)}
          >
            타천사 아셀리카 선택하기
          </button>
          <button
            type="button"
            style={{ ...styles.btnCharAselica3, filter: this.state.type === 3 ? null : 'grayscale(100%)' }}
            onClick={this.onClickType(3)}
          >
            성스러운 언약 아셀리카 선택하기
          </button>
          <button type="button" style={styles.btnCharPrev} onClick={this.props.onClickPrev}>캐릭터 선택</button>
          <button type="button" style={styles.btnCharNext} onClick={this.props.onClickNext}>플레이 하기</button>
          <button type="button" style={styles.btnVideo} onClick={this.props.onClickVideo}>동영상 재생</button>
        </div>
      </div>
    );
  }
}

export default CharacterAselica;
