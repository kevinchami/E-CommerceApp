import { StyleSheet } from 'react-native';
import { COLORS } from '../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  titleTxt: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  orderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 16,

  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    marginLeft: 16,
  },
  orderTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  orderSupplier: {
    fontSize: 16,
    color: COLORS.secondaryText,
  },
  orderPrice: {
    fontSize: 16,
    color: COLORS.primary,
  },
  indicatorContainer: {
    position: 'absolute', // Position the indicators absolutely
    top: 35, // Adjust top positioning as needed
    right: 0, // Adjust right positioning as needed
    marginRight: 10, // Add right margin for spacing
    backgroundColor: 'green',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    
  },
  paidText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 13

  },
  indicatorContainerBlue: {
    position: 'absolute', // Position the indicators absolutely
    top: 65, // Adjust top positioning as needed
    right: 0, // Adjust right positioning as needed
    marginRight: 10, // Add right margin for spacing
    backgroundColor: 'blue',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    
  },
  blueText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 13
  },
  twoLineText: {
    fontSize: 12, // Adjust the font size as needed
    lineHeight: 14, // Adjust the line height as needed
    marginTop: 2, // Add top margin for spacing
    flexWrap: 'wrap', // Allow text to wrap to the next line
  },
  
 
  
});

export default styles;
