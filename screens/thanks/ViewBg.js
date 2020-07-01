import React from 'react';
import { StyleSheet, View, Image} from 'react-native';


export default function ViewBg(props) {
    return (
      <View style={props.style} style={styles.container}>
          <Image source={props.source}
            style={styles.image}
          />
          <View
            style={styles.inner}
          >
              {props.children}
          </View>
      </View>
    );
  }


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width:"100%",
    },
    image:{
        position:"absolute",
        width:"100%",
        height: "100%",
        zIndex: 1,
        left:0,
        top:0,
    },
    inner:{
        position:"absolute",
        width:"100%",
        height: "100%",
        zIndex: 2,
        left:0,
        top:0,
    }
  });