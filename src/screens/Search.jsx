import { View, Text, TextInput, FlatList, TouchableOpacity, Image, Alert, SafeAreaView} from 'react-native'
import React, {useEffect,} from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

import BackBtn from '../components/BackBtn'
import styles from './Search.style.js'
import { COLORS } from '../constants';


const Search = () => {
  const [value, setValue] = React.useState('');
  const [searchResult, setSearchResult] = React.useState([]);
  const [data, setData] = React.useState([])
  const [dataSearch, setDataSearch] = React.useState([])

  const navigation = useNavigation()

  // Hàm xử lý
  const handlerBlack = () => {
    navigation.navigate('Home')
    setDataSearch([])
  }
  const handlerClear = () => {
    setValue('')
    setDataSearch([])
  }
  
  //Hàm tìm kiếm
  const searchData = ({data, value}) => {
    if (value === '') {return []}
    else {
      return data.filter(item => item.username.includes(value))
    }
  }
  // hàm render
  useEffect(() => {

    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(function (response) {
      setData(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

    setDataSearch(searchData({data, value}))
  },[value]);

  const Item = ({props}) => {
    const title = props.username? props.username : props.title
    const url = props.url? props.url : 'https://baoninhbinh.org.vn//DATA/ARTICLES/2021/5/17/cuoc-dua-lot-vao-top-100-anh-dep-di-san-van-hoa-va-thien-7edf3.jpg'

    const onPress = () => {
      // navigation.navigate('Profile')
      Alert.alert(`vào tài khoản profile ${props.username}`);
      setDataSearch([])
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
      <View style={styles.navigate}>
          <View style={styles.black}>
            <BackBtn onPress={handlerBlack}/>
          </View>
          <View style={styles.search}>
            <TextInput
              style={styles.input}
              onChangeText={setValue}
              value={value}
              placeholder='Search'
            />
            {!!value &&
            <TouchableOpacity style={styles.item_list} onPress={handlerClear}> 
                <AntDesign
                  name='close'
                  size={18}
                  color={COLORS.black} />
               
            </TouchableOpacity>
                }

          </View>          
      </View>

      <SafeAreaView style={styles.list}>
            <FlatList
                data = {dataSearch}
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