import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 5,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 45,
    borderWidth: 0.6,
    borderColor: '#0093AB',
  },
  textContainer: {
    width: 290
  },
  username: {
    color: 'white',
    marginLeft: 5,
    fontWeight: '700'
  }
});

export default styles;
