import * as Helpers from './helpers';

/*=== 테스트용 (raw image asset) ===*/
//import assetMain from './assets/asset-main.test.json';
////import assetAselica from './assets/asset-Aselica.test.json';
//import assetCrow from './assets/asset-Crow.test.json';
//import assetScarlet from './assets/asset-Scarlet.test.json';
/*=== 배포용 (imported binary image assets) ===*/
import assetMain from './assets/asset-main.json';
//import assetAselica from './assets/asset-Aselica.json';
import assetCrow from './assets/asset-Crow.json';
import assetScarlet from './assets/asset-Scarlet.json';

const styles = {
  // App.js
  app: {
    display: 'flex',
    width: '100vh',
    height: '100vh',
    minHeight: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'sans-serif',
    overflow: 'hidden',
    backgroundImage: Helpers.getAssetData(assetMain.bg),
    backgroundSize: 'cover',
    backgroundPosition: '50% 50%',
    backgroundRepeat: 'no-repeat',
    fontSize: 0,
  },
  appMainShadow: {
    display: 'flex',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .8)',
  },
  appCharShadow: {
    display: 'flex',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .6)',
  },
  logoVespa: {
    position: 'absolute',
    zIndex: 100,
    top: 14,
    left: 14,
    width: 64,
    height: 16,
    backgroundImage: Helpers.getAssetData(assetMain.logoVespa),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    fontSize: 0,
  },
  wrapperLogoKingsRaid: {
    position: 'fixed',
    left: '28vw',
    right: '28vw',
    top: '3vh',
  },
  logoKingsRaid: {
    position: 'absolute',
    zIndex: 100,
    top: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '100%',
    paddingBottom: '55.55%',
    backgroundImage: Helpers.getAssetData(assetMain.logoKingsRaid),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    fontSize: 0,
  },
  wrapperTitle: {
    position: 'fixed',
    left: 35,
    right: 35,
    top: '14vh',
  },
  title: {
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '100%',
    paddingBottom: '27.84%',
    backgroundImage: Helpers.getAssetData(assetMain.title),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    fontSize: 0,
  },
  wrapperMain: {
    position: 'fixed',
    left: '12vw',
    right: '12vw',
    top: '45vh',
    transform: 'translateY(-50%)',
    height: 0,
  },
  btnMainCrow: {
    position: 'absolute',
    top: '-16vh',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '100%',
    paddingBottom: '66.87%',
    backgroundImage: Helpers.getAssetData(assetMain.btnMainCrow),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'transparent',
    border: 0,
    fontSize: 0,
  },
  /*btnMainAselica: {
    position: 'absolute',
    top: '20vh',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '100%',
    paddingBottom: '62.88%',
    backgroundImage: Helpers.getAssetData(assetMain.btnMainAselica),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'transparent',
    border: 0,
    fontSize: 0,
  },*/
  btnMainScarlet: {
    position: 'absolute',
    top: '20vh',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '100%',
    paddingBottom: '66.87%',
    backgroundImage: Helpers.getAssetData(assetMain.btnMainScarlet),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'transparent',
    border: 0,
    fontSize: 0,
  },
  logoCharKingsRaid: {
    position: 'absolute',
    zIndex: 100,
    top: 12,
    right: 12,
    width: 81,
    height: 45,
    backgroundImage: Helpers.getAssetData(assetMain.logoKingsRaid),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    fontSize: 0,
  },
  wrapperBtnChar: {
    position: 'fixed',
    left: '4vw',
    right: '4vw',
    bottom: '2vh',
    height: 0,
  },
  btnCharPrev: {
    position: 'absolute',
    bottom: 0,
    left: '-1vw',
    width: '50%', //163,
    paddingBottom: '15.64%', //51,
    backgroundImage: Helpers.getAssetData(assetMain.btnCharPrev),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'transparent',
    border: 0,
    fontSize: 0,
  },
  btnCharNext: {
    position: 'absolute',
    bottom: 0,
    right: '-1vw',
    width: '50%', //163,
    paddingBottom: '15.64%', //51,
    backgroundImage: Helpers.getAssetData(assetMain.btnCharNext),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'transparent',
    border: 0,
    fontSize: 0,
  },
  btnVideo: {
    position: 'absolute',
    bottom: '22vh',
    right: 5,
    width: 72,
    height: 73,
    backgroundImage: Helpers.getAssetData(assetMain.btnVideo),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'transparent',
    border: 0,
    fontSize: 0,
  },
  videoWrapper: {
    position: 'fixed',
    zIndex: 10000,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,.9)',
  },
  video: {
    position: 'fixed',
    top: '50%',
    width: '100%',
    transform: 'translateY(-50%)',
  },
  videoSrcAselica: assetMain.videoAselica.data,
  videoSrcCrow: assetMain.videoCrow.data,
  videoSrcScarlet: assetMain.videoScarlet.data,

  // Crow
  imageCrow1: {
    position: 'absolute',
    top: '10vh',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: Helpers.getAssetData(assetCrow.image1),
    backgroundSize: 'cover',
    backgroundPosition: '50% 0',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'transparent',
    border: 0,
    fontSize: 0,
  },
  imageCrow2: {
    position: 'absolute',
    top: '10vh',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: Helpers.getAssetData(assetCrow.image2),
    backgroundSize: 'cover',
    backgroundPosition: '50% 0',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'transparent',
    border: 0,
    fontSize: 0,
  },
  imageCrow3: {
    position: 'absolute',
    top: '10vh',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: Helpers.getAssetData(assetCrow.image3),
    backgroundSize: 'cover',
    backgroundPosition: '50% 0',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'transparent',
    border: 0,
    fontSize: 0,
  },
  titleCrow1: {
    position: 'absolute',
    top: 24,
    left: '50%',
    transform: 'translateX(-50%)',
    width: 64,
    height: 72,
    backgroundImage: Helpers.getAssetData(assetCrow.title1),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'transparent',
    border: 0,
    fontSize: 0,
  },
  titleCrow2: {
    position: 'absolute',
    top: 24,
    left: '50%',
    transform: 'translateX(-50%)',
    width: 108,
    height: 69,
    backgroundImage: Helpers.getAssetData(assetCrow.title2),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'transparent',
    border: 0,
    fontSize: 0,
  },
  titleCrow3: {
    position: 'absolute',
    top: 24,
    left: '50%',
    transform: 'translateX(-50%)',
    width: 65,
    height: 69,
    backgroundImage: Helpers.getAssetData(assetCrow.title3),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'transparent',
    border: 0,
    fontSize: 0,
  },
  btnCharCrow1: {
    position: 'absolute',
    bottom: '10vh',
    left: 0,
    width: '33.33%',
    paddingBottom: '15.81%',
    backgroundImage: Helpers.getAssetData(assetCrow.btnCharType1),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'transparent',
    filter: 'grayscale(100%)',
    border: 0,
    fontSize: 0,
  },
  btnCharCrow2: {
    position: 'absolute',
    bottom: '10vh',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '33.33%',
    paddingBottom: '15.81%',
    backgroundImage: Helpers.getAssetData(assetCrow.btnCharType2),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'transparent',
    filter: 'grayscale(100%)',
    border: 0,
    fontSize: 0,
  },
  btnCharCrow3: {
    position: 'absolute',
    bottom: '10vh',
    right: 0,
    width: '33.33%',
    paddingBottom: '15.81%',
    backgroundImage: Helpers.getAssetData(assetCrow.btnCharType3),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'transparent',
    filter: 'grayscale(100%)',
    border: 0,
    fontSize: 0,
  },

  // Aselica
  /*imageAselica1: {
    position: 'absolute',
    top: '10vh',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: Helpers.getAssetData(assetAselica.image1),
    backgroundSize: 'cover',
    backgroundPosition: '50% 0',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'transparent',
    border: 0,
    fontSize: 0,
  },
  imageAselica2: {
    position: 'absolute',
    top: '10vh',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: Helpers.getAssetData(assetAselica.image2),
    backgroundSize: 'cover',
    backgroundPosition: '50% 0',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'transparent',
    border: 0,
    fontSize: 0,
  },
  imageAselica3: {
    position: 'absolute',
    top: '10vh',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: Helpers.getAssetData(assetAselica.image3),
    backgroundSize: 'cover',
    backgroundPosition: '50% 0',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'transparent',
    border: 0,
    fontSize: 0,
  },
  titleAselica1: {
    position: 'absolute',
    top: 24,
    left: '50%',
    transform: 'translateX(-50%)',
    width: 85,
    height: 72,
    backgroundImage: Helpers.getAssetData(assetAselica.title1),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'transparent',
    border: 0,
    fontSize: 0,
  },
  titleAselica2: {
    position: 'absolute',
    top: 24,
    left: '50%',
    transform: 'translateX(-50%)',
    width: 85,
    height: 70,
    backgroundImage: Helpers.getAssetData(assetAselica.title2),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'transparent',
    border: 0,
    fontSize: 0,
  },
  titleAselica3: {
    position: 'absolute',
    top: 24,
    left: '50%',
    transform: 'translateX(-50%)',
    width: 96,
    height: 70,
    backgroundImage: Helpers.getAssetData(assetAselica.title3),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'transparent',
    border: 0,
    fontSize: 0,
  },
  btnCharAselica1: {
    position: 'absolute',
    bottom: '10vh',
    left: 0,
    width: '32.46%', //112,
    paddingBottom: '25.50%', //88,
    backgroundImage: Helpers.getAssetData(assetAselica.btnCharType1),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'transparent',
    filter: 'grayscale(100%)',
    border: 0,
    fontSize: 0,
  },
  btnCharAselica2: {
    position: 'absolute',
    bottom: '10vh',
    left: '32.36%',
    //transform: 'translateX(-50%)',
    width: '32.46%', //112,
    paddingBottom: '25.50%', //88,
    backgroundImage: Helpers.getAssetData(assetAselica.btnCharType2),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'transparent',
    filter: 'grayscale(100%)',
    border: 0,
    fontSize: 0,
  },
  btnCharAselica3: {
    position: 'absolute',
    bottom: '10vh',
    right: 0,
    width: '35.07%', //121,
    paddingBottom: '25.50%', //88,
    backgroundImage: Helpers.getAssetData(assetAselica.btnCharType3),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'transparent',
    filter: 'grayscale(100%)',
    border: 0,
    fontSize: 0,
  },*/

  // Scarlet
  imageScarlet1: {
    position: 'absolute',
    top: '10vh',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: Helpers.getAssetData(assetScarlet.image1),
    backgroundSize: 'cover',
    backgroundPosition: '50% 0',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'transparent',
    border: 0,
    fontSize: 0,
  },
  imageScarlet2: {
    position: 'absolute',
    top: '10vh',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: Helpers.getAssetData(assetScarlet.image2),
    backgroundSize: 'cover',
    backgroundPosition: '50% 0',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'transparent',
    border: 0,
    fontSize: 0,
  },
  imageScarlet3: {
    position: 'absolute',
    top: '10vh',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: Helpers.getAssetData(assetScarlet.image3),
    backgroundSize: 'cover',
    backgroundPosition: '50% 0',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'transparent',
    border: 0,
    fontSize: 0,
  },
  titleScarlet1: {
    position: 'absolute',
    top: 24,
    left: '50%',
    transform: 'translateX(-50%)',
    width: 64,
    height: 72,
    backgroundImage: Helpers.getAssetData(assetScarlet.title1),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'transparent',
    border: 0,
    fontSize: 0,
  },
  titleScarlet2: {
    position: 'absolute',
    top: 24,
    left: '50%',
    transform: 'translateX(-50%)',
    width: 63,
    height: 68,
    backgroundImage: Helpers.getAssetData(assetScarlet.title2),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'transparent',
    border: 0,
    fontSize: 0,
  },
  titleScarlet3: {
    position: 'absolute',
    top: 24,
    left: '50%',
    transform: 'translateX(-50%)',
    width: 95,
    height: 69,
    backgroundImage: Helpers.getAssetData(assetScarlet.title3),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'transparent',
    border: 0,
    fontSize: 0,
  },
  btnCharScarlet1: {
    position: 'absolute',
    bottom: '10vh',
    left: 0,
    width: '33.33%',
    paddingBottom: '15.81%',
    backgroundImage: Helpers.getAssetData(assetScarlet.btnCharType1),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'transparent',
    filter: 'grayscale(100%)',
    border: 0,
    fontSize: 0,
  },
  btnCharScarlet2: {
    position: 'absolute',
    bottom: '10vh',
    left: '33.33%',
    //transform: 'translateX(-50%)',
    width: '33.33%',
    paddingBottom: '15.81%',
    backgroundImage: Helpers.getAssetData(assetScarlet.btnCharType2),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'transparent',
    filter: 'grayscale(100%)',
    border: 0,
    fontSize: 0,
  },
  btnCharScarlet3: {
    position: 'absolute',
    bottom: '10vh',
    right: 0,
    width: '33.33%',
    paddingBottom: '15.81%',
    backgroundImage: Helpers.getAssetData(assetScarlet.btnCharType3),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'transparent',
    filter: 'grayscale(100%)',
    border: 0,
    fontSize: 0,
  },
}

export default styles
