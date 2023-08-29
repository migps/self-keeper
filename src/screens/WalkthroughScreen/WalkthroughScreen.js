import React from "react";
import { View, Image, Text, Button, useColorScheme } from "react-native";
import PropTypes from "prop-types";
import AppIntroSlider from "react-native-app-intro-slider";
import { useNavigation } from "@react-navigation/native";
import dynamicStyles from "./styles";

const WalkthroughScreen = (props) => {
  const appConfig = props.route.params.appConfig;
  const appStyles = props.route.params.appStyles;
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const styles = dynamicStyles(appStyles, colorScheme);

  const slides = appConfig.onboardingConfig.walkthroughScreens.map(
    (screenSpec, index) => {
      return {
        key: `${index}`,
        text: screenSpec.description,
        title: screenSpec.title,
        image: screenSpec.icon,
      };
    }
  );

  const _renderItem = ({ item, dimensions }) => (
    <View style={[styles.container, dimensions]}>
      <Image
        style={styles.image}
        source={item.image}
        size={100}
        color="white"
      />
      <View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>

    </View>


  );

  const _renderDoneButton = () => {
    return (
      <Button
        title="Continuar"
        onPress={() => navigation.navigate("Filtros")} // Navigate to FilterScreen
      />
    );
  };

  return (
    <AppIntroSlider
      data={slides}
      slides={slides}
      renderItem={_renderItem}
      renderDoneButton={_renderDoneButton} // Use the custom Done button
    />
  );
};

WalkthroughScreen.propTypes = {
  appStyles: PropTypes.object,
  appConfig: PropTypes.object,
};

export default WalkthroughScreen;
