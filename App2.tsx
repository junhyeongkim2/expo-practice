import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Svg, Path } from "react-native-svg";
import {
  fontPercentage,
  heightPercentage,
  widthPercentage,
} from "./ResponsiveSize";

export default function App() {
  return (
    <ScrollView
      bounces={false}
      showsVerticalScrollIndicator={false}
      style={{ height: Dimensions.get("window").height }}
    >
      <View style={stylesheet._Sign_up}>
        <View
          style={[
            stylesheet.___deepmush,
            { display: "flex", flexDirection: "row", alignItems: "center" },
          ]}
        >
          <Text
            style={[
              {
                position: "relative",
                left: 0,
                top: 0,
                height: "auto",
                transform: [{ translateX: 0 }, { translateY: 0 }],
              },
            ]}
          >
            🍄deepmush
          </Text>
        </View>
        <View style={stylesheet._Frame_162}>
          <View style={stylesheet._Frame_163}></View>
        </View>
        <View style={stylesheet._Frame_164}>
          <View style={stylesheet._List___Divider_with_text}>
            <Svg style={stylesheet._line} fill={"rgba(0,0,0,0)"}>
              <Path
                fillRule={"none"}
                d={"M 0 0 L 153 0"}
                strokeLinejoin={"miter"}
                strokeWidth={0.5}
                stroke={"rgba(123, 135, 148, 1)"}
              />
            </Svg>
            <View
              style={[
                stylesheet._or,
                { display: "flex", flexDirection: "row", alignItems: "center" },
              ]}
            >
              <Text
                style={[
                  stylesheet._or,
                  {
                    position: "relative",
                    left: 0,
                    top: 0,
                    height: "auto",
                    transform: [{ translateX: 0 }, { translateY: 0 }],
                  },
                ]}
              >
                or
              </Text>
            </View>
            <Svg style={stylesheet._line_2} fill={"rgba(0,0,0,0)"}>
              <Path
                fillRule={"none"}
                d={"M 0 0 L 153 0"}
                strokeLinejoin={"miter"}
                strokeWidth={0.5}
                stroke={"rgba(123, 135, 148, 1)"}
              />
            </Svg>
          </View>
          <View style={stylesheet._Button___Social___Primary}>
            <View style={stylesheet._facebook_default}>
              <Svg style={stylesheet._Shape} fill={"rgba(0,0,0,0)"}>
                <Path
                  fillRule={"evenodd"}
                  d={
                    "M 11 0 L 8 0 C 5.238576173782349 4.440892098500626e-16 3 2.2385761737823486 3 5 L 3 8 L 0 8 L 0 12 L 3 12 L 3 20 L 7 20 L 7 12 L 10 12 L 11 8 L 7 8 L 7 5 C 7 4.447715222835541 7.447715222835541 4 8 4 L 11 4 L 11 0 Z"
                  }
                  strokeLinecap={"round"}
                  strokeLinejoin={"round"}
                  strokeWidth={2}
                  stroke={"rgba(123, 135, 148, 1)"}
                />
              </Svg>
              <Svg style={stylesheet._Size} fill={"rgba(0,0,0,0)"}>
                <Path
                  fillRule={"evenodd"}
                  d={"M 0 0 L 24 0 L 24 24 L 0 24 L 0 0 Z"}
                  strokeLinejoin={"miter"}
                />
              </Svg>
            </View>
            <View
              style={[
                stylesheet._Continue_with_facebook,
                { display: "flex", flexDirection: "row", alignItems: "center" },
              ]}
            >
              <Text
                style={[
                  stylesheet._Continue_with_facebook,
                  {
                    position: "relative",
                    left: 0,
                    top: 0,
                    height: "auto",
                    transform: [{ translateX: 0 }, { translateY: 0 }],
                  },
                ]}
              >
                Continue with facebook
              </Text>
            </View>
          </View>
          <View style={stylesheet._Button___Social___Primary_2}>
            <View style={stylesheet._twitter_default}>
              <Svg style={stylesheet._Shape_2} fill={"rgba(0,0,0,0)"}>
                <Path
                  fillRule={"evenodd"}
                  d={
                    "M 22 0.01026254240423441 C 21.04238498210907 0.6857399279251695 19.98210847377777 1.2023718357086182 18.860000610351562 1.5402625799179077 C 17.626360177993774 0.12180042266845703 15.6383695602417 -0.3756231367588043 13.882081031799316 0.2947159707546234 C 12.125792503356934 0.9650550782680511 10.974800266325474 2.660563588142395 11 4.540262699127197 L 11 5.540262699127197 C 7.430664777755737 5.632815092802048 4.052025318145752 3.9322330951690674 2 1.0102624893188477 C 2 1.0102624893188477 -2 10.010262489318848 7 14.010262489318848 C 4.940527677536011 15.408228754997253 2.487156867980957 16.109192796051502 0 16.010263442993164 C 9 21.010263442993164 20 16.010262489318848 20 4.510262489318848 C 19.999079111556057 4.231716126203537 19.972297575324774 3.953856974840164 19.920000076293945 3.680262565612793 C 20.940603256225586 2.673755645751953 21.66082739830017 1.4029753739014268 22 0.01026254240423441 Z"
                  }
                  strokeLinecap={"round"}
                  strokeLinejoin={"round"}
                  strokeWidth={2}
                  stroke={"rgba(123, 135, 148, 1)"}
                />
              </Svg>
              <Svg style={stylesheet._Size_2} fill={"rgba(0,0,0,0)"}>
                <Path
                  fillRule={"evenodd"}
                  d={"M 0 0 L 24 0 L 24 24 L 0 24 L 0 0 Z"}
                  strokeLinejoin={"miter"}
                />
              </Svg>
            </View>
            <View
              style={[
                stylesheet._continue_with_twitter,
                { display: "flex", flexDirection: "row", alignItems: "center" },
              ]}
            >
              <Text
                style={[
                  stylesheet._continue_with_twitter,
                  {
                    position: "relative",
                    left: 0,
                    top: 0,
                    height: "auto",
                    transform: [{ translateX: 0 }, { translateY: 0 }],
                  },
                ]}
              >
                continue with twitter
              </Text>
            </View>
          </View>
        </View>
        <Image
          style={stylesheet._image_1}
          source={{ uri: imageUrl_image_1 }}
        ></Image>
      </View>
    </ScrollView>
  );
}

const stylesheet = StyleSheet.create({
  _Sign_up: {
    position: "relative",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    flex: 1,
    borderRadius: 0,
    overflow: "hidden",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    backgroundColor: "red",
  },
  ___deepmush: {
    position: "absolute",
    width: "100%",
    height: "4%",
    left: "35%",
    right: "auto",
    transform: [{ translateX: 0 }, { translateY: 100 }, { rotate: "0deg" }],
    textDecorationLine: "none",
    color: "rgb(1,1,1)",
    textAlign: "center",
    textAlignVertical: "top",
    letterSpacing: 0.1,
    backgroundColor: "green",
  },
  _Frame_162: {
    position: "absolute",
    width: widthPercentage(390),
    height: heightPercentage(72),
    borderRadius: 0,
    overflow: "hidden",
    left: 0,
    right: "auto",
    top: 0,
    bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    backgroundColor: "rgba(0,0,0,0)",
  },
  _Frame_163: {
    position: "absolute",
    width: widthPercentage(390),
    height: heightPercentage(396),
    borderRadius: 0,
    overflow: "hidden",
    left: 0,
    right: "auto",
    top: heightPercentage(72),
    bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    backgroundColor: "rgba(0,0,0,0)",
  },
  _Frame_164: {
    position: "absolute",
    width: widthPercentage(390),
    height: heightPercentage(360),
    borderRadius: 0,
    overflow: "hidden",
    left: 0,
    right: "auto",
    top: heightPercentage(484),
    bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    backgroundColor: "rgba(0,0,0,0)",
  },
  _List___Divider_with_text: {
    position: "absolute",
    width: widthPercentage(335),
    height: heightPercentage(24),
    borderRadius: 0,
    left: widthPercentage(28),
    right: "auto",
    top: heightPercentage(66),
    bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    backgroundColor: "rgba(255, 255, 255, 0)",
  },
  _line: {
    position: "absolute",
    color: "rgba(0,0,0,0)",
    width: widthPercentage(153),
    height: 0,
    borderRadius: 0,
    left: 0,
    right: "auto",
    top: heightPercentage(12),
    bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
  },
  _or: {
    position: "absolute",
    width: "auto",
    height: "auto",
    left: widthPercentage(161),
    right: "auto",
    top: heightPercentage(3),
    bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    textDecorationLine: "none",
    lineHeight: 113.99999856948853,
    fontSize: 14,
    color: "rgba(97, 110, 124, 1)",
    textAlign: "left",
    textAlignVertical: "top",
    letterSpacing: 0.20000000298023224,
  },
  _line_2: {
    position: "absolute",
    color: "rgba(0,0,0,0)",
    width: widthPercentage(153),
    height: 0,
    borderRadius: 0,
    left: widthPercentage(182),
    right: "auto",
    top: heightPercentage(12),
    bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
  },
  _Button___Social___Primary: {
    position: "absolute",
    width: widthPercentage(360),
    height: heightPercentage(52),
    borderRadius: fontPercentage(100),
    borderWidth: 0.5,
    borderStyle: "solid",
    borderColor: "rgba(50, 63, 75, 1)",
    left: widthPercentage(28),
    right: "auto",
    top: heightPercentage(106),
    bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    backgroundColor: "rgba(0,0,0,0)",
  },
  _facebook_default: {
    position: "absolute",
    width: widthPercentage(24),
    height: heightPercentage(24),
    borderRadius: 0,
    left: widthPercentage(24),
    right: "auto",
    top: heightPercentage(24),
    bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    backgroundColor: "rgba(255, 255, 255, 0)",
  },
  _Shape: {
    position: "absolute",
    color: "rgba(0,0,0,0)",
    width: "auto",
    height: heightPercentage(20),
    borderRadius: 0,
    left: widthPercentage(6),
    right: widthPercentage(7),
    transform: [{ translateX: 0 }, { translateY: 2 }, { rotate: "0deg" }],
  },
  _Size: {
    position: "absolute",
    color: "rgba(0,0,0,0)",
    width: "auto",
    height: heightPercentage(24),
    borderRadius: 0,
    left: 0,
    right: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
  },
  _Continue_with_facebook: {
    position: "absolute",
    width: widthPercentage(263),
    height: "auto",
    left: "50%",
    top: "50%",
    transform: [
      { translateX: -115.5 },
      { translateY: -7.5 },
      { rotate: "0deg" },
    ],
    textDecorationLine: "none",
    lineHeight: 100,
    fontSize: 15,
    color: "rgba(50, 63, 75, 1)",
    textAlign: "center",
    textAlignVertical: "top",
    letterSpacing: 1.25,
  },
  _Button___Social___Primary_2: {
    position: "absolute",
    width: widthPercentage(335),
    height: heightPercentage(52),
    borderRadius: fontPercentage(100),
    borderWidth: 0.5,
    borderStyle: "solid",
    borderColor: "rgba(50, 63, 75, 1)",
    left: widthPercentage(28),
    right: "auto",
    top: heightPercentage(178),
    bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    backgroundColor: "rgba(0,0,0,0)",
  },
  _twitter_default: {
    position: "absolute",
    width: widthPercentage(24),
    height: heightPercentage(24),
    borderRadius: 0,
    left: widthPercentage(24),
    right: "auto",
    top: heightPercentage(16),
    bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    backgroundColor: "rgba(255, 255, 255, 0)",
  },
  _Shape_2: {
    position: "absolute",
    color: "rgba(0,0,0,0)",
    width: "auto",
    height: heightPercentage(17.943889617919922),
    borderRadius: 0,
    left: widthPercentage(1),
    right: widthPercentage(1),
    transform: [
      { translateX: 0 },
      { translateY: 2.9897308349609375 },
      { rotate: "0deg" },
    ],
  },
  _Size_2: {
    position: "absolute",
    color: "rgba(0,0,0,0)",
    width: "auto",
    height: heightPercentage(24),
    borderRadius: 0,
    left: 0,
    right: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
  },
  _continue_with_twitter: {
    position: "absolute",
    width: widthPercentage(263),
    height: "auto",
    left: "50%",
    top: "50%",
    transform: [
      { translateX: -115.5 },
      { translateY: -7.5 },
      { rotate: "0deg" },
    ],
    textDecorationLine: "none",
    lineHeight: widthPercentage(100),
    fontSize: fontPercentage(15),
    color: "rgba(50, 63, 75, 1)",
    textAlign: "center",
    textAlignVertical: "top",
    letterSpacing: 1.25,
  },
  _image_1: {
    position: "absolute",
    width: widthPercentage(390),
    height: heightPercentage(303),
    borderRadius: 0,
    opacity: 1,
    left: 0,
    right: "auto",
    top: heightPercentage(177),
    bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    backgroundColor: "rgba(0,0,0,0)",
  },
});

const imageUrl_image_1 =
  "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/fe45c1fbd6a959d2d502bf5e016fd5c7";

import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Svg, Path } from "react-native-svg";

import { useFonts } from "@expo-google-fonts/dev";

export default function App() {
  let [fontsLoaded] = useFonts({});

  return (
    <ScrollView
      bounces={false}
      showsVerticalScrollIndicator={false}
      style={{ height: Dimensions.get("window").height }}
    >
      <View style={stylesheet._List___Divider_with_text}>
        <Svg style={stylesheet._line} fill={"rgba(0,0,0,0)"}>
          <Path
            fillRule={"none"}
            d={"M 0 0 L 153 0"}
            strokeLinejoin={"miter"}
            strokeWidth={0.5}
            stroke={"rgba(123, 135, 148, 1)"}
          />
        </Svg>
        <View
          style={[
            stylesheet._or,
            { display: "flex", flexDirection: "row", alignItems: "center" },
          ]}
        >
          <Text
            style={[
              stylesheet._or,
              {
                position: "relative",
                left: 0,
                top: 0,
                height: "auto",
                transform: [{ translateX: 0 }, { translateY: 0 }],
              },
            ]}
          >
            or
          </Text>
        </View>
        <Svg style={stylesheet._line_2} fill={"rgba(0,0,0,0)"}>
          <Path
            fillRule={"none"}
            d={"M 0 0 L 153 0"}
            strokeLinejoin={"miter"}
            strokeWidth={0.5}
            stroke={"rgba(123, 135, 148, 1)"}
          />
        </Svg>
      </View>
    </ScrollView>
  );
}

const stylesheet = StyleSheet.create({
  _List___Divider_with_text: {
    position: "relative",
    width: Dimensions.get("window").width,
    height: 24,
    borderRadius: 0,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    backgroundColor: "rgba(255, 255, 255, 0)",
  },
  _line: {
    position: "absolute",
    color: "rgba(0,0,0,0)",
    width: 153,
    height: 0,
    borderRadius: 0,
    left: 0,
    right: "auto",
    top: 12,
    bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
  },
  _or: {
    position: "absolute",
    width: "auto",
    height: "auto",
    left: 161,
    right: "auto",
    top: 3,
    bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    fontFamily: "Mulish",
    fontWeight: 400,
    textDecorationLine: "none",
    lineHeight: 113.99999856948853,
    fontSize: 14,
    color: "rgba(97, 110, 124, 1)",
    textAlign: "left",
    textAlignVertical: "top",
    letterSpacing: 0.20000000298023224,
  },
  _line_2: {
    position: "absolute",
    color: "rgba(0,0,0,0)",
    width: 153,
    height: 0,
    borderRadius: 0,
    left: 182,
    right: "auto",
    top: 12,
    bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
  },
});
