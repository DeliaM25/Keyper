

import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>

    
      <View style={styles.header}>
        <Text style={styles.logo}>Keyper.</Text>

        <View style={styles.headerIcons}>
          <Text style={styles.icon}>♡</Text>
          <Text style={styles.icon}>♙</Text>
        </View>
      </View>
      {/*Title*/}
      <View style={styles.welcome}>
        <Text style={styles.welcomeTitle}>
          Find a place to call home.
        </Text>
        <Text style={styles.welcomeSubtitle}>
          Discover properties across Europe, all in one place.
        </Text>
        <View style={styles.searchContainer}>
             <TextInput
    style={styles.searchInput}
    placeholder="Search city, area or property..."
    placeholderTextColor="#999999"/>
  <Text style={styles.searchIcon}>⌕</Text>
  </View>
  
{/* ADD PROPERTY */}
<Pressable style={styles.addPropertyButton}>
  <Text style={styles.addPropertyIcon}>+</Text>
  <Text style={styles.addPropertyText}>Add Property</Text>
</Pressable>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingTop: 60,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  logo: {
    fontSize: 30,
    fontWeight: 'bold',
  },

  headerIcons: {
    flexDirection: 'row',
    gap: 20,
  },

  icon: {
    fontSize: 28,
  },

  welcome: {
    marginTop: 40,
    alignItems: 'flex-start',
  },

  welcomeTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#222222',
  },

  welcomeSubtitle: {
    fontSize: 15,
    color: '#060000',
    marginTop: 10,
    lineHeight: 22,
  },
  
searchContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: 'rgb(229, 165, 197)',
  borderRadius: 14,
  height: 54,
  paddingHorizontal: 16,
  marginTop: 30,
},

searchInput: {
  flex: 1,
  fontSize: 15,
  color: '#090000',
},

searchIcon: {
  fontSize: 25,
  color: '#1a0101',
},

addPropertyButton: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgb(229, 165, 197)',
  height: 55,
  borderRadius: 14,
  marginTop: 20,
},

addPropertyIcon: {
  color: '#060000',
  fontSize: 24,
  marginRight: 10,
},

addPropertyText: {
  color: '#989696',
  fontSize: 16,
  fontWeight: '600',
},


});
