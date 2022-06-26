import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  logo: {
    width: 100,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'white',
    resizeMode: 'cover',
  },
  headerTitle: {
    color: '#18978F',
    fontSize: 18,
    fontStyle: 'italic',
    fontWeight: 'bold',
    position: 'absolute',
    left: 19,
    bottom: 5,
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  icon: {
    marginHorizontal: 10,
  },
  unreadBadge: {
    backgroundColor: '#0093AB',
    position: 'absolute',
    left: 20,
    bottom: 18,
    width: 25,
    height: 18,
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
  },
  unreadBadgeText: {
    color: '#ffffff',
    fontWeight: '600',
  },
});

export default styles;
