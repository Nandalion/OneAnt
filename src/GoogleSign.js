import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

const GoogleSign = () => {

    const [userInfo, setUserInfo] = useState(null)

    console.log(userInfo, 'userbjhfdhjasdhfa')

    useEffect(() => {
        GoogleSignin.configure({ webClientId: '557588441440-1m2rggesqslvpoel4571r423ca27knsc.apps.googleuserco' });
        // GoogleSignin.configure()
    }, [])


    const signIn = async () => {
        console.log(signIn, 'signin vela seiyuth')
        try {
            const response = await GoogleSignin.hasPlayServices();
            console.log('has google play service', response)
            const usrInfo = await GoogleSignin.signIn();
            console.log('username', userInfo)
            setUserInfo(usrInfo);
        } catch (error) {
            console.log("error", error);
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
            } else {
                // some other error happened
            }
        }
    };

    const signOut = async () => {
        try {
            await GoogleSignin.signOut();

            setUserInfo({ user: null }); // Remember to remove the user from your app's state as well
        } catch (error) {
            console.error(error);
        }
        console.log(signOut, 'signout vela seiuthu')
    };

    return (
        <View style={{ flex: 1 }}>
            {userInfo != null && <Text>{userInfo}</Text>}
            {console.log(userInfo?.name)}
            {/* {userInfo!==null && <Text>{userInfo.user.email}</Text>} */}
            {/* {userInfo!==null &&
            <Image 
                source={{uri:userInfo.user.photo}}
                style={{width:100,height:100}}/>
                } */}
            {/* {userInfo !== null?(
             <TouchableOpacity onPress={()=>{signIn}}>
             <Text>GoogleSign</Text>
       
            </TouchableOpacity>
        ):(
            <TouchableOpacity onPress={()=>signOut}>
            <Text>Googleout</Text>
      
           </TouchableOpacity>
        )}
     */}


            <TouchableOpacity onPress={signIn}>
                <Text>GoogleSigntogo</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={signOut}>
                <Text>GoogleSignout</Text>
            </TouchableOpacity>
        </View>
    )
}

export default GoogleSign