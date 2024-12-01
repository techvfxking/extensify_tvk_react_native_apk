import { View, Text } from 'react-native'
import React from 'react'
import { IGlobalHeader } from '../models/interfaces/IGlobalHeader.model'
import { themeColors } from '../themes/Themes'

const GlobalHeader = ({ children, style, headerName, ...props }: IGlobalHeader): React.JSX.Element => {
    return (
        <View style={[style]} {...props}>
            <Text style={[style]} {...props}
                className={`${themeColors.headingColor} font-bold text-3xl shadow-sm`}>
                {headerName}
            </Text>
            {children ?? children}
        </View>
    )
}

export default GlobalHeader