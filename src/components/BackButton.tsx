
import { View, Text, TouchableOpacity, TouchableNativeFeedback } from 'react-native';
import React from 'react';
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { themeColors } from '../themes/Themes';
import { useNavigation } from '@react-navigation/native';
import { IBackButton } from '../models/interfaces/IBackButton.model';

const BackButton = ({ style, classNames, ...props }: IBackButton): React.JSX.Element => {

    const navigation = useNavigation();

    const navigateBack = () => {
        navigation.goBack();
    }

    return (
        <View>
            <TouchableOpacity
                style={[style, { zIndex: 999, backgroundColor: themeColors.buitonColor }]}
                {...props}
                className={`p-2 px-3 bg-white border border-gray-200 rounded-full ${classNames || ''}`}
                onPress={navigateBack}
            >
                <Text className={`text-white`}>Back</Text>
            </TouchableOpacity>
        </View>



    )
}

export default BackButton