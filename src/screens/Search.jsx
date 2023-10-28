import { View, Text, TextInput, FlatList, TouchableOpacity, Image, Alert, SafeAreaView} from 'react-native'
import React, {useEffect,} from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import axios from 'axios';
import BackBtn from '../components/BackBtn'
import styles from './Search.style.js'
import { COLORS } from '../constants';


const Search = () => {
  const [text, onChangeText] = React.useState('');
  const [searchResult, setSearchResult] = React.useState([]);
  const [data, setData] = React.useState([])
  const [dataSearch, setDataSearch] = React.useState([])

  // Hàm xử lý
  const handlerBlack = () => {
    // Alert.alert(`Vê trang Home`)
    console.log(`Ve trang Home`);
  }
  const handlerDelete = () => {
    onChangeText('')
  }
  
  // hàm render
  useEffect(() => {
    // setTimeout(() => {
    //   searchResult([1,1,1,1])
    // }, 0)

    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(function (response) {
      setData(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

    setDataSearch([...data.slice(0, 9)])
  },[]);

  const Item = ({props}) => {
    const title = props.username? props.username : props.title
    const url = props.url? props.url : 'https://baoninhbinh.org.vn//DATA/ARTICLES/2021/5/17/cuoc-dua-lot-vao-top-100-anh-dep-di-san-van-hoa-va-thien-7edf3.jpg'

    const onPress = () => {
      // Alert.alert(`vào tài khoản ${props.id}`)
      console.log(`vào tài khoản ${props.id}`);
    }
    return (
      <TouchableOpacity style={styles.item} onPress={onPress}>
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
              onChangeText={onChangeText}
              value={text}
              placeholder='Search'
            />
            {text !== null &&
            <TouchableOpacity style={styles.item_list} onPress={handlerDelete}> 
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
            />
      </SafeAreaView>
    </View>
  )
}

export default Search