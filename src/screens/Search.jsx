import { View, 
  Text, 
  TextInput, 
  FlatList, 
  TouchableOpacity, 
  Image, 
  SafeAreaView, 
  TouchableWithoutFeedback, 
  KeyboardAvoidingView, 
  Keyboard,
  Platform,
} from 'react-native'
import React, {useEffect,} from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

import styles from './Search.style.js'
import { COLORS } from '../constants';
import { useDebounce } from '../Hooks';
import { API_URL } from '../services/auth_service.jsx';



const Search = () => {

  const [value, setValue] = React.useState('');
  const [searchResult, setSearchResult] = React.useState([]);
  const [data, setData] = React.useState([])

  const navigation = useNavigation()

  // Hàm xử lý
  const handlerBlack = () => {
    navigation.navigate('Home')
    setData([])
  }
  const handlerClear = () => {
    setValue('')
    setData([])
  }
  
 
  const debounce = useDebounce(value, 200)
  // hàm render
  useEffect(() => {
    if (value === "") {return setData([])}
    else {
    axios.get(`${API_URL}newsfeed/search?username=${value}`)
    .then(function (response) {
      setData(response.data.users);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  },[debounce]);

  const Item = ({props}) => {
    const title = props.username? props.username : props.title
    const url = props.url? props.url : 'https://baoninhbinh.org.vn//DATA/ARTICLES/2021/5/17/cuoc-dua-lot-vao-top-100-anh-dep-di-san-van-hoa-va-thien-7edf3.jpg'

    const onPress = () => {
      // navigation.navigate('Profile')
      navigation.navigate('Home')
      setData([])
      setValue('')
    }
    return (
      <TouchableOpacity 
        style={styles.item} 
        onPress={onPress}
        key={props.id}
      >
          <View style={styles.item_list}>
              <Image 
                style={styles.img}
                source={{uri: url}}
              />
              <Text style={{fontSize: 18, color: 'black'}}>
                {title}
              </Text>
          </View>
          <View style={styles.item_list}>
            <AntDesign
                name='arrowright'
                size={30}
                color={COLORS.black} />
          </View>
      </TouchableOpacity>
    )
  }
  return (
    <View style={{flex:1, color: '#000000'}}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.navigate}>
              <View style={styles.black}>
                <TouchableOpacity onPress={handlerBlack}>
                      <AntDesign
                          name='back'
                          size={32}
                          color={COLORS.white} />
                </TouchableOpacity>
              </View>
              <View style={styles.search}>
                <TextInput
                  style={styles.input}
                  onChangeText={setValue}
                  value={value}
                  placeholder='Search'
                />
                <View style={styles.clear}>
                  {!!value &&
                  <TouchableOpacity style={styles.item_icon} onPress={handlerClear}> 
                      <AntDesign
                        name='close'
                        size={20}
                        color={COLORS.black} />                
                  </TouchableOpacity>
                      }
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>          
      </KeyboardAvoidingView>

      <SafeAreaView style={styles.list}>
            <FlatList
                data = {data}
                renderItem={({item})=> <Item props={item}/>}
                keyExtractor={item => item.id}
                extraData={searchResult}
                // initialNumToRender={0}
            />
      </SafeAreaView>
    </View>
  )
}

export default Search