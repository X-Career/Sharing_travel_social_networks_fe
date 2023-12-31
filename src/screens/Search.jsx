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
  ScrollView,
} from 'react-native'
import React, {useEffect,} from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import BackBtn from '../components/BackBtn'
import styles from './Search.style.js'
import { COLORS } from '../constants';
import { useDebounce } from '../Hooks';
import SearchHeader from '../components/search/SearchHeader';
import TopCarousel from '../components/search/TopCarousel';
import { PLACES, TOP_CAROUSEL } from '../components/search/CarouselData';
import SectionHeader from '../components/search/SectionHeader';
import TripList from '../components/search/TripList';


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
  const debounce = useDebounce(value, 300)
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
  },[debounce]);

  const Item = ({props}) => {
    const title = props.username? props.username : props.title
    const url = props.url? props.url : 'https://baoninhbinh.org.vn//DATA/ARTICLES/2021/5/17/cuoc-dua-lot-vao-top-100-anh-dep-di-san-van-hoa-va-thien-7edf3.jpg'

    const onPress = () => {
      // navigation.navigate('Profile')
      navigation.navigate('Home')
      setDataSearch([])
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
      <View>

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
                data = {dataSearch}
                renderItem={({item})=> <Item props={item}/>}
                keyExtractor={item => item.id}
                extraData={searchResult}
                // initialNumToRender={0}
            />
      </SafeAreaView>
      </View>
      <SearchHeader mainTitle='Find Your' secondTitle='Dream Trip'/>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TopCarousel list={TOP_CAROUSEL}/>
        <SectionHeader 
        title='Popular Trips'
        buttonTitle='See All'
        onPress={() => {}}
        />
        <TripList list={PLACES}/>
      </ScrollView>
    </View>
  )
}


export default Search