import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BottomNavigation from '../component/BottomNavigation';

const Page1 = () => {
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: '#FFFFFF',
          padding: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginVertical: 10,
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
            marginVertical: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                padding: 10,
                borderWidth: 2,
                borderRadius: 5,
                borderColor: '#EEF3F5',
                width: '49%',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignContent: 'center',
                  // justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon
                  name="clock-time-eight"
                  size={30}
                  style={{
                    backgroundColor: '#FEF1E1',
                    padding: 3,
                    borderRadius: 5,
                  }}
                  color={'#F0B04C'}
                />
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 30,
                  }}>
                  08
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 23,
                  fontWeight: '600',
                  color: '#C9CCD1',
                }}>
                Pending Tasks
              </Text>
            </View>
            <View
              style={{
                padding: 10,
                borderWidth: 2,
                borderRadius: 5,
                borderColor: '#EEF3F5',
                width: '49%',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <Icon
                  name="folder-open"
                  size={30}
                  style={{
                    backgroundColor: '#F2FFE8',
                    padding: 3,
                    borderRadius: 5,
                  }}
                  color={'#75C932'}
                />
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 30,
                  }}>
                  26
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 23,
                  fontWeight: '600',
                  color: '#C9CCD1',
                }}>
                Active Project
              </Text>
            </View>
          </View>
          <View
            style={{
              height: 10,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                padding: 10,
                borderWidth: 2,
                borderRadius: 5,
                borderColor: '#EEF3F5',
                width: '49%',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignContent: 'center',
                  // justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon
                  name="clipboard-text-outline"
                  size={30}
                  style={{
                    backgroundColor: '#FEF1E1',
                    padding: 3,
                    borderRadius: 5,
                  }}
                  color={'#F0B04C'}
                />
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 30,
                  }}>
                  89
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 23,
                  fontWeight: '600',
                  color: '#C9CCD1',
                }}>
                Total Tasks
              </Text>
            </View>
            <View
              style={{
                padding: 10,
                borderWidth: 2,
                borderRadius: 5,
                borderColor: '#EEF3F5',
                width: '49%',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <Icon
                  name="account-multiple-outline"
                  size={30}
                  style={{
                    backgroundColor: '#F2FFE8',
                    padding: 3,
                    borderRadius: 5,
                  }}
                  color={'#75C932'}
                />
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 30,
                  }}>
                  12
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 23,
                  fontWeight: '600',
                  color: '#C9CCD1',
                }}>
                Teams
              </Text>
            </View>
          </View>
        </View>

        <View>
          <View
            style={{
              flexDirection: 'row',
              borderWidth: 2,
              borderColor: '#EEF3F5',
              marginVertical: 5,
              borderRadius: 5,
              alignItems: 'center',
              padding: 10,
            }}>
            <Text
              style={{
                fontSize: 20,
              }}>
              <Icon name="circle" color={'#61D0FF'} size={20} />
            </Text>

            <View
              style={{
                flex: 1,
                paddingHorizontal: 10,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '700',
                }}>
                Purposed
              </Text>
            </View>

            <Text
              style={{
                fontSize: 20,
                color: '#C9CCD1',
              }}>
              4 tasks
            </Text>
            <Icon name="chevron-right" size={30} color="#C9CCD1" />
          </View>

          <View
            style={{
              flexDirection: 'row',
              borderWidth: 2,
              borderColor: '#EEF3F5',
              marginVertical: 5,
              borderRadius: 5,
              alignItems: 'center',
              padding: 10,
            }}>
            <Text
              style={{
                fontSize: 20,
              }}>
              <Icon name="circle" color={'#E5AC31'} size={20} />
            </Text>

            <View
              style={{
                flex: 1,
                paddingHorizontal: 10,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '700',
                }}>
                In Progress
              </Text>
            </View>

            <Text
              style={{
                fontSize: 20,
                color: '#C9CCD1',
              }}>
              15 tasks
            </Text>
            <Icon name="chevron-right" size={30} color="#C9CCD1" />
          </View>

          <View
            style={{
              flexDirection: 'row',
              borderWidth: 2,
              borderColor: '#EEF3F5',
              borderRadius: 5,
              alignItems: 'center',
              padding: 10,
              marginVertical: 5,
            }}>
            <Text
              style={{
                fontSize: 20,
              }}>
              <Icon name="circle" color={'#F65DA8'} size={20} />
            </Text>

            <View
              style={{
                flex: 1,
                paddingHorizontal: 10,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '700',
                }}>
                Review
              </Text>
            </View>

            <Text
              style={{
                fontSize: 20,
                color: '#C9CCD1',
              }}>
              12 tasks
            </Text>
            <Icon name="chevron-right" size={30} color="#C9CCD1" />
          </View>

          <View
            style={{
              flexDirection: 'row',
              borderWidth: 2,
              borderColor: '#EEF3F5',
              borderRadius: 5,
              alignItems: 'center',
              padding: 10,
              marginVertical: 5,
            }}>
            <Text
              style={{
                fontSize: 20,
              }}>
              <Icon name="circle" color={'#67C62E'} size={20} />
            </Text>

            <View
              style={{
                flex: 1,
                paddingHorizontal: 10,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '700',
                }}>
                Completed
              </Text>
            </View>

            <Text
              style={{
                fontSize: 20,
                color: '#C9CCD1',
              }}>
              9 tasks
            </Text>
            <Icon name="chevron-right" size={30} color="#C9CCD1" />
          </View>
        </View>
      </View>

      <BottomNavigation page="Page1" />
    </>
  );
};

export default Page1;
