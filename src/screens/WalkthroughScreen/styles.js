import { StyleSheet } from 'react-native';

const dynamicStyles = (appStyles, colorScheme) => {
  const dynamic = StyleSheet.create({
    title: {
      fontSize: 25,
      fontWeight: 'bold',
      textAlign: 'center',
      paddingBottom: 25,
      color: 'white',
    },
    text: {
      fontSize: 18,
      textAlign: 'center',
      color: 'white',
      paddingLeft: 10,
      paddingRight: 10,
    },
    image: {
      width: 150,
      height: 150,
      marginBottom: 60,
      resizeMode: 'stretch',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: appStyles?.colorSet?.[colorScheme]?.mainThemeForegroundColor || 'white',
      // Si las propiedades no son encontradas se deja default el blanco
    },
    button: {
      fontSize: 18,
      marginTop: 10,
      paddingBottom: 50
    },
  });

  return dynamic;
};

export default dynamicStyles;
