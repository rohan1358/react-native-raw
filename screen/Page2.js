import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BottomNavigation from '../component/BottomNavigation';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {getData, storeData} from '../storedata';

const Page2 = () => {
  const navigation = useNavigation();

  const [data, setData] = useState([]);

  useEffect(() => {}, []);

  const getDatas = async () => {
    const data = await getData();
    if (data) {
      setData(data);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      getDatas();
    }, []),
  );

  const removeData = id => {
    // proses menghapus
    let rm = data.filter(data => data.id !== id);
    //  menyimpan sisa data
    storeData(rm);

    // render ulang data
    getDatas();
    //  storeData()
  };

  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: '#FFFFFF',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginVertical: 10,
            marginHorizontal: 10,
          }}>
          <View>
            <Text
              style={{
                fontSize: 30,
                fontWeight: 'bold',
              }}>
              Tasker
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Icon
              name="magnify"
              color={'#5C6774'}
              size={30}
              style={{
                marginHorizontal: 5,
              }}
            />
            <View>
              <Icon
                name="bell-outline"
                color={'#5C6774'}
                size={30}
                style={{
                  marginHorizontal: 5,
                }}
              />
              <View
                style={{
                  position: 'absolute',
                  right: 5,
                  backgroundColor: '#00ADEF',
                  paddingHorizontal: 3,
                  borderRadius: 10,
                  borderColor: 'white',
                  borderWidth: 1,
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontWeight: '600',
                    fontSize: 10,
                  }}>
                  2
                </Text>
              </View>
            </View>

            <Image
              style={{
                width: 40,
                height: 40,
                borderRadius: 50,
                marginHorizontal: 5,
              }}
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Outdoors-man-portrait_%28cropped%29.jpg/1200px-Outdoors-man-portrait_%28cropped%29.jpg',
              }}
            />
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#F5FAFF',
            paddingVertical: 10,
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
          }}>
          <ScrollView horizontal={true}>
            <TouchableOpacity
              activeOpacity={0.5}
              style={{
                borderRadius: 10,
                backgroundColor: '#3D80FF',
                padding: 10,
                flexDirection: 'row',
                marginHorizontal: 10,
              }}>
              <Icon
                name="list-status"
                size={25}
                style={{
                  marginRight: 10,
                }}
                color={'white'}
              />
              <Text
                style={{
                  color: 'white',
                  fontSize: 20,
                  fontWeight: '700',
                }}>
                To Do
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.5}
              style={{
                borderRadius: 10,
                backgroundColor: 'white',
                padding: 10,
                flexDirection: 'row',
                marginHorizontal: 10,
              }}>
              <Icon
                name="clipboard-arrow-up"
                size={25}
                style={{
                  marginRight: 10,
                }}
                color={'#3D80FF'}
              />
              <Text
                style={{
                  color: 'black',
                  fontSize: 20,
                  fontWeight: '700',
                }}>
                In Progress
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.5}
              style={{
                borderRadius: 10,
                backgroundColor: 'white',
                padding: 10,
                flexDirection: 'row',
                marginHorizontal: 10,
              }}>
              <Icon
                name="check-circle"
                size={25}
                style={{
                  marginRight: 10,
                }}
                color={'#3D80FF'}
              />
              <Text
                style={{
                  color: 'black',
                  fontSize: 20,
                  fontWeight: '700',
                }}>
                Completed
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <View
          style={{
            padding: 10,
            flex: 1,
          }}>
          <ScrollView
            style={{
              marginVertical: 10,
              flex: 1,
            }}>
            {data.length > 0 ? (
              data.map((data, index) => {
                return (
                  <View
                    style={{
                      position: 'relative',
                    }}
                    key={index}>
                    <TouchableOpacity
                      activeOpacity={0.5}
                      key={index}
                      onPress={() => navigation.navigate('Page3', data)}
                      style={{
                        flexDirection: 'row',
                        backgroundColor: '#F7FAFF',
                        // padding: 10,
                        paddingVertical: 20,
                        paddingHorizontal: 20,
                        borderRadius: 20,
                        marginVertical: 5,
                      }}>
                      <View>
                        <View
                          style={{
                            borderWidth: 4,
                            borderColor: 'lightblue',
                            height: 30,
                            width: 30,
                            borderRadius: 20,
                          }}></View>
                      </View>
                      <View
                        style={{
                          marginHorizontal: 15,
                        }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                          }}>
                          <View>
                            <Text
                              style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                                color: 'black',
                              }}>
                              {data.title}
                            </Text>
                          </View>
                          <View
                            style={{
                              backgroundColor: '#E4B1D1',
                              padding: 10,
                              borderRadius: 10,
                            }}>
                            <Text>Medium</Text>
                          </View>
                        </View>
                        <View>
                          <Text
                            style={{
                              fontSize: 15,
                            }}>
                            At Prospy we are looking to revolutionize
                            patientaerwer
                          </Text>
                        </View>
                        <View
                          style={{
                            flexDirection: 'row',
                            marginVertical: 10,
                          }}>
                          <View
                            style={{
                              flexDirection: 'row',
                            }}>
                            <Icon name="timer" color={'#3D80FF'} size={20} />
                            <Text>08:00 AM - 05:30 PM</Text>
                          </View>
                          <View
                            style={{
                              flexDirection: 'row',
                            }}>
                            <Icon
                              name="calendar-month-outline"
                              color={'#3D80FF'}
                              size={20}
                            />
                            <Text>Thus 30 Dec</Text>
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={() => removeData(data.id)}
                      style={{
                        position: 'absolute',
                        bottom: 10,
                        right: 10,
                        backgroundColor: 'lightblue',
                        borderRadius: 20,
                        padding: 5,
                      }}>
                      <Icon size={35} name="trash-can-outline" color={'red'} />
                    </TouchableOpacity>
                  </View>
                );
              })
            ) : (
              <></>
            )}
          </ScrollView>
        </View>

        <TouchableOpacity
          activeOpacity={0.5}
          style={{
            backgroundColor: '#3D80FF',
            position: 'absolute',
            bottom: 0,
            alignSelf: 'center',
            padding: 10,
            borderRadius: 50,
            marginBottom: 20,
          }}
          onPress={() => {
            navigation.navigate('Page3');
          }}>
          <Icon name="plus" color={'white'} size={30} />
        </TouchableOpacity>
      </View>
      <BottomNavigation page={'Page2'} />
    </>
  );
};

export default Page2;
