import React, {  useState, useContext } from 'react';
import {View, Text, TouchableOpacity, Alert, Modal, Image, FlatList, SafeAreaView} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import styles from './stylescreatepost';
import MyIcon from '../Login/components/icon';
import Icon from 'react-native-vector-icons/FontAwesome';

function CreatePost() {
    // Bien cuc bo
    const [chevron, setChevron] = useState(true)
    const [libraryVisible, setLibraryVisible] = useState(false)
    const libraryModal = ['Thư viện', 'Camera']
    const DataImg = [
        {uri: 'https://noithatbinhminh.com.vn/wp-content/uploads/2022/08/anh-dep-23.jpg', id: 1},
        {uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXWh_lHjiUUHMgxgVsf__NeJk7RCOpoCxZqg&usqp=CAU', id: 2},
        {uri: 'https://bizweb.dktcdn.net/100/438/408/files/anh-dep-3d-yodyvn4.jpg?v=1683534900596', id: 3},
        {uri: 'https://1.bp.blogspot.com/-OIi6B-xmaZk/Xp_tniobUII/AAAAAAAAiSE/SdLhW4YeT_86dfVMwaTlcWn4p4_smdKvQCLcBGAsYHQ/s1600/Hinh-Nen-Cap-Doi%2B%25281%2529.jpg', id: 4},
        {uri: 'https://vtv1.mediacdn.vn/thumb_w/640/2018/11/29/photo-1-154348431990377584420.jpg', id: 5},
        {uri: 'https://khoahocphattrien.vn/Images/Uploaded/Share/2016/12/20/Nhung-buc-anh-dep-nhat-2016-chia-se-tren-Flickr_4.jpg', id: 6},
        {uri: 'https://images.kienthuc.net.vn/zoom/800/Uploaded/xuanphu/2020_03_05/mobilephotos_3_XISH.jpg', id: 7},
        {uri: 'https://reactnative.dev/img/tiny_logo.png', id: 8},
        {uri: 'https://reactnative.dev/img/tiny_logo.png', id: 9},
        {uri: 'https://reactnative.dev/img/tiny_logo.png', id: 10},
    
    ]

    // Hàm xử lý
    const hanlderBlack = () => {
        Alert.alert('Quay lại')
    }
    const hanlderSetting = () => {
        Alert.alert(`Setting`)
    }
    const hanlderText = () => {
        Alert.alert(`Văn bản`)
    }
    const hanlderMusic = () => {
        Alert.alert(`Music`)

    }
    const handleLibrary = () => {
        setChevron(!chevron)
        setLibraryVisible(!libraryVisible)
    }
    const handlerImg = () => {
        
        Alert.alert(`ImageID: `)
    }
    const requestCameraPermission = async () => {
        try {
          const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("Camera permission given");
            const result:any = await launchCamera({mediaType:'photo',cameraType:'front'})
            setImg(result.assets[0].uri);
          } else {
            console.log("Camera permission denied");
          }
        } catch (err) {
          console.warn(err);
        }
      };

    return (  
        <View style={styles.post}>
            <View style={styles.menu}>
                <MyIcon name="arrow-left" handler={hanlderBlack}/>
                <Text style={styles.postText}>Tạo tin</Text>
                <MyIcon name="gear" handler={hanlderSetting}/>
            </View>
            <View style={styles.menu_center}>
                <TouchableOpacity style={{...styles.menu_item, 
        backgroundColor: '#CD6090',}} onPress={hanlderText}>
                    <View style={styles.postIcon}>
                        <Icon name="font" color="red" size={23} />
                    </View>
                    <Text style={styles.postText}>Văn bản</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{...styles.menu_item, 
        backgroundColor: '#FF8C00',}} onPress={hanlderMusic}>
                    <View style={styles.postIcon}>
                        <Icon name="music" color="red" size={23} />
                    </View>
                    <Text style={styles.postText}>Âm nhạc</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.menu_bottom}>
                <View style={styles.menu}>
                    
                    <View >
                        <SelectDropdown
                            data={libraryModal}
                            onSelect={(selectedItem, index) => {
                                if (index=1) { return requestCameraPermission()} console.log(selectedItem, index)
                            }}
                            defaultValue={libraryModal[0]}
                            buttonStyle ={{...styles.menu_file,}}
                            buttonTextAfterSelection={(selectedItem, index) => {
                                return selectedItem
                            }}
                            rowTextForSelection={(item, index) => {
                                return item
                            }}
                        />
                    </View>
                    <TouchableOpacity style={{...styles.menu_file, flex: 1}}>
                        <View style={{justifyContent:'center', alignItems:'center'}}>
                            <Icon name="file" color="#fff" size={15} />
                        </View>
                        <Text style={{...styles.postText, fontWeight: 400, marginLeft:7}}>Chọn nhiều file </Text>
                    </TouchableOpacity>
                </View>
                
                <SafeAreaView style={styles.postImage}>
                    <FlatList
                        data={DataImg}
                        numColumns={3}
                        renderItem = {({item}) => {
                            return (
                                <TouchableOpacity style={{margin: 0, flex: 0.33}}
                                    onPress={handlerImg}
                                >
                                    <Image
                                        style={styles.img_icon}
                                        source={{uri: item.uri}}
                                    />
                                </TouchableOpacity>
                            )
                        }}
                        keyExtractor={item => item.id}
                    />

                </SafeAreaView>
            </View>
        </View>
    );
}

export default CreatePost;