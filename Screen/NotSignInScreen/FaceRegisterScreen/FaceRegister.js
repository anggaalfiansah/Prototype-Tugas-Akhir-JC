/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import WebView from 'react-native-webview';

const FaceRegister = ({route, navigation}) => {
  const data = route.params;
  const [faceDescriptors, setfaceDescriptors] = useState();
  const [key, setkey] = useState(1);
  const [isWebViewUrlChanged, setisWebViewUrlChanged] = useState(false);
  const onMessage = e => {
    const face = e.nativeEvent.data;
    console.log(face);
    if (face === 'Verifikasi Berhasil') {
      const dataRegister = {
        ...data,
        faceDescriptors,
      };
      console.log(dataRegister);
      navigation.navigate('Home', dataRegister);
    } else {
      const faceParse = JSON.parse(face);
      console.log(faceParse.descriptors);
      faceParse.descriptors.map(item => {
        const descriptors = [];
        const faces = Object.values(item);
        descriptors.push(faces);
        setfaceDescriptors(descriptors);
      });
    }
  };
  // eslint-disable-next-line no-unused-vars
  const resetWebViewToInitialUrl = () => {
    if (isWebViewUrlChanged) {
      setkey(key + 1);
      setisWebViewUrlChanged(false);
    }
  };
  const setWebViewUrlChanged = webviewState => {
    if (webviewState.url !== 'https://face-recoginition-web.herokuapp.com/') {
      setisWebViewUrlChanged(true);
    }
  };
  const runFirst = `document.getElementById("nama-wajah").value = "${data.Nama}"`;
  return (
    <WebView
      mediaPlaybackRequiresUserAction={false}
      javaScriptEnabledAndroid={true}
      onMessage={onMessage}
      source={{uri: 'https://face-recoginition-web.herokuapp.com/'}}
      injectedJavaScript={runFirst}
      key={key}
      onNavigationStateChange={setWebViewUrlChanged}
    />
  );
};
export default FaceRegister;
