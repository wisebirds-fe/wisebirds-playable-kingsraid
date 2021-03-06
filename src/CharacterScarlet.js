import React, { Component } from 'react';
import styles from './styles';

class CharacterScarlet extends Component {
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
            <span style={styles.imageScarlet1}>캐릭터 이미지</span>
            <span style={styles.titleScarlet1}>스칼렛 기본 (5성)</span>
          </div>
          : null
        }
        {this.state.type === 2 ?
          <div>
            <span style={styles.imageScarlet2}>캐릭터 이미지</span>
            <span style={styles.titleScarlet2}>얼음공주 스칼렛</span>
          </div>
          : null
        }
        {this.state.type === 3 ?
          <div>
            <span style={styles.imageScarlet3}>캐릭터 이미지</span>
            <span style={styles.titleScarlet3}>백은의 행진곡 스칼렛</span>
          </div>
          : null
        }

        <div style={styles.wrapperBtnChar}>
          <button
            type="button"
            style={{ ...styles.btnCharScarlet1, filter: this.state.type === 1 ? null : 'grayscale(100%)' }}
            onClick={this.onClickType(1)}
          >
            스칼렛 기본 (5성) 선택하기
          </button>
          <button
            type="button"
            style={{ ...styles.btnCharScarlet2, filter: this.state.type === 2 ? null : 'grayscale(100%)' }}
            onClick={this.onClickType(2)}
          >
            얼음공주 스칼렛 선택하기
          </button>
          <button
            type="button"
            style={{ ...styles.btnCharScarlet3, filter: this.state.type === 3 ? null : 'grayscale(100%)' }}
            onClick={this.onClickType(3)}
          >
            백은의 행진곡 스칼렛 선택하기
          </button>
          <button type="button" style={styles.btnCharPrev} onClick={this.props.onClickPrev}>캐릭터 선택</button>
          <button type="button" style={styles.btnCharNext} onClick={this.props.onClickNext}>플레이 하기</button>
          <button type="button" style={styles.btnVideo} onClick={this.props.onClickVideo}>동영상 재생</button>
        </div>
      </div>
    );
  }
}

export default CharacterScarlet;
