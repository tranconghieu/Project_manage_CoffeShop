import AsyncStorage from '@react-native-community/async-storage';

const getToken = async () =>{
    try{
        const value = await AsyncStorage.getItem('@token');
        if(value != null){
            return value;
        }
        else{
            return '';
        }
    }
    catch(error){
        return ''
    }
}
export default getToken;