import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

const BottomNavigation = ({page = 'Page2'}) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
        backgroundColor: 'white',
        borderTopColor: '#CBCED5',
        borderTopWidth: 2,
      }}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Page2')}
        style={{
          alignItems: 'center',
        }}>
        <Icon
          name="format-list-bulleted"
          size={45}
          color={page === 'Page2' ? 'black' : '#CBCED5'}
        />
        <Text
          style={{
            fontSize: 16,
            fontWeight: '500',
            color: page === 'Page2' ? 'black' : '#CBCED5',
          }}>
          Tasks
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Page1')}
        style={{
          alignItems: 'center',
        }}>
        <Icon
          name="clipboard-play"
          size={45}
          color={page === 'Page1' ? 'black' : '#CBCED5'}
        />
        <Text
          style={{
            fontSize: 16,
            fontWeight: '500',
            color: page === 'Page1' ? 'black' : '#CBCED5',
          }}>
          Projects
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          alignItems: 'center',
        }}>
        <Icon name="forum" size={45} color={'#CBCED5'} />
        <Text
          style={{
            fontSize: 16,
            fontWeight: '500',
            color: '#CBCED5',
          }}>
          Chats
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          alignItems: 'center',
        }}>
        <Icon name="account-multiple" size={45} color={'#CBCED5'} />
        <Text
          style={{
            fontSize: 16,
            fontWeight: '500',
            color: '#CBCED5',
          }}>
          Team
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          alignItems: 'center',
        }}>
        <Icon name="account" size={45} color={'#CBCED5'} />
        <Text
          style={{
            fontSize: 16,
            fontWeight: '500',
            color: '#CBCED5',
          }}>
          Account
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomNavigation;
