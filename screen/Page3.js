import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation, useRoute} from '@react-navigation/native';
import {getData, storeData} from '../storedata';

const Page3 = () => {
  const [task, setTask] = useState('');
  const navigation = useNavigation();
  const route = useRoute();

  const isUpdate = route.params;

  function makeid(length) {
    let result = '';
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }

  useEffect(() => {
    if (route.params) {
      setTask(route.params.title);
    }
  }, []);

  const handleSubmit = async () => {
    // kondisi jika field task diisi maka akan di lanjutkan ke proses created atau updated
    if (task && task !== '') {
      // di sini kondisi jika route params membawa id makan fungsi handleUpdate yang akan di jalankan
      // tetapi jika tidak ada parameter maka fungsi handleCreate yang akan dijalankan
      if (route.params && route.params.id) {
        handleUpdate();
      } else {
        handleCreate();
      }
    }
  };

  const handleCreate = async () => {
    const data = await getData();
    if (data) {
      await storeData([...data, {id: makeid(10), title: task}]);
    } else {
      await storeData([{id: makeid(10), title: task}]);
    }
    navigation.goBack();
  };

  const handleUpdate = async () => {
    let data = await getData();

    let objectIndex = data.findIndex(obj => obj.id === route.params.id);
    //Update object's name property.
    data[objectIndex].title = task;
    await storeData(data);
    navigation.goBack();
  };

  return (
    <>
      <View
        style={{
          backgroundColor: '#F5FAFF',
          borderBottomRightRadius: 30,
          borderBottomLeftRadius: 30,
          paddingTop: 10,
          paddingBottom: 20,
        }}>
        <View
          style={{
            backgroundColor: 'white',
            width: 'auto',
            alignSelf: 'flex-start',
            padding: 5,
            borderRadius: 10,
            marginLeft: 10,
          }}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon name="arrow-left" size={40} style={{}} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              color: 'black',
              fontWeight: '700',
            }}>
            {isUpdate ? 'Update' : 'New'} Task
          </Text>
        </View>
        <TextInput
          value={task}
          onChangeText={e => setTask(e)}
          style={{
            borderRadius: 10,
            backgroundColor: 'white',
            marginHorizontal: 20,
            paddingHorizontal: 20,
            fontSize: 20,
          }}
          placeholder="project name"
        />
      </View>

      <TouchableOpacity
        activeOpacity={0.5}
        style={{
          backgroundColor: '#3D80FF',
          padding: 20,
          marginHorizontal: 20,
          borderRadius: 20,
          position: 'absolute',
          bottom: 20,
          alignSelf: 'center',
        }}
        onPress={() => handleSubmit()}>
        <Text
          style={{
            color: 'white',
            fontWeight: '700',
            fontSize: 20,
            textAlign: 'center',
          }}>
          {isUpdate ? 'Update' : 'Create New'} Project
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default Page3;
