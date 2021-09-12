import { StyleSheet } from 'react-native'

export default StyleSheet.create({

    global: {
        margin: 0,
        padding: 0,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        // box-sizing: border-box,
    },
    body: {
        resizeMode: 'cover',
        position: 'relative',
    },
    image:{
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    }
});