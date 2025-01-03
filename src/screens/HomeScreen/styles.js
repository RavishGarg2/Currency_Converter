import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    main : {
        flex : 1,
        backgroundColor : 'white',
    },
    heading : {
        fontWeight : '600',
        color : 'red',
        fontSize : 30,
        textAlign : 'center',
        marginTop : 50
    },
    flexRow : {
        marginTop : 30,
        flexDirection : 'row',
        justifyContent : 'space-around'
    }
});

export default styles;