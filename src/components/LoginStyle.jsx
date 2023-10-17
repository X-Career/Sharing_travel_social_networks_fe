import { StyleSheet } from "react-native";

export const root ={mainColor: "#0C83B0",  }
const styles = StyleSheet.create({
    login: {flex:1,margin: 0, padding: 0, },

    loginTop: {flex:1, 
        justifyContent: 'center', 
        alignItems: 'center',
        paddingTop:20,  
        backgroundColor: root.mainColor,
    },
    loginBottom: {flex: 2, 
        justifyContent: 'center', },

    layout1: {
        
    },
    loginContainer: {flex:4, 
        justifyContent: "center", 
        alignItems: 'center', 
        backgroundColor: 'green'},
    welcomeEnd: {flex:1, 
        justifyContent: "space-evenly", 
        alignItems: 'center',},
    loginEnd: { 
        flex:1,
        flexDirection:'row',
        justifyContent: "center", 
        alignItems: "center",
        paddingVertical: 10
        },

    textTilte:{color: 'white', 
        fontSize:20, 
        fontWeight: 'bold', 
        textTransform: 'uppercase', 
        textShadowOffset: {width: 2, height: 2}, 
        textShadowColor: "#C0C0C0"},
    text: {fontSize: 15, 
        color: "#333",
        lineHeight: 30},
    text_up: {fontSize:20, 
        fontWeight: 'bold',
        color: root.mainColor,
        lineHeight: 30,
        paddingLeft:5},

    
    btn_primary: {backgroundColor: root.mainColor,},
    text_primary: {color: '#fff',},

    loginEndText: {flex:1, 
        justifyContent: 'center'},
    loginLogo: {flex: 1, 
        flexDirection: "row", 
        justifyContent: "space-between", 
        alignItems: "center", },

    from:{flex:8, 
        justifyContent:"center",
        alignItems:"center",
        // backgroundColor: "#333"
    },
    
    input: { 
        flexDirection: "row", 
        alignItems: "center", 
        width:"80%",
        marginVertical: 20,
        paddingVertical:5,
        borderBottomWidth: 1,
        borderStyle: "solid",
        borderBottomColor: root.mainColor,
    },
    icon: { width:28, 
        height: 28, 
        borderRadius: 12, 
        backgroundColor: root.mainColor, 
        justifyContent: "center", 
        alignItems: "center",},
    logo: { marginHorizontal: 15},
    textinput: {
        flex:1,
        paddingLeft: 10,
        fontSize: 20,
        lineHeight:30,
    },
    forgot: {
        width: "80%",
        alignItems: "flex-end"
    },
    
})

export default styles;