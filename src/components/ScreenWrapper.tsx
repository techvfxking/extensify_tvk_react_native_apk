import { Platform, StatusBar, View } from 'react-native'
import React from 'react'
import { ReactCompBasicProp } from '../models/types/CustomTypes.model'

const ScreenWrapper = ({ children }: ReactCompBasicProp) => {

    const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight : Platform.OS === "ios" ? 30 : 0;

    return (
        <View style={{paddingTop: statusBarHeight}}>
            {
                children
            }
        </View>
    )
}

export default ScreenWrapper