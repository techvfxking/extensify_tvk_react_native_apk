import { View, Text, Image } from 'react-native'
import React from 'react';
import empty from '../assets/images/empty.png'
import { INoDataFound } from '../models/interfaces/INoDataFound.model';

const NoDataFound = ({message}:INoDataFound): React.JSX.Element => {
    return (
        <View className="flex justify-center items-center my-5 space-y-5">
            <Image className='w-36 h-36 shadow' source={empty} />
            <Text className="font-bold text-gray-400">{message || "No Data Found"}</Text>
        </View>
    )
}

export default NoDataFound