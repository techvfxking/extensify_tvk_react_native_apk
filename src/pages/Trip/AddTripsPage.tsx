import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import ScreenWrapper from '../../components/ScreenWrapper';
import GlobalHeader from '../../components/GlobalHeader';
import BackButton from '../../components/BackButton';
import returnRandomImages, { assetSerialImages } from '../../utilities/RandomImages';
import { themeColors } from '../../themes/Themes';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps, RouteNames } from '../../models/types/CustomTypes.model';
import { ReturnRouteNames } from '../../routes/Routes';

const AddTripsPage = (): React.JSX.Element => {

  const [place, setPlace] = useState<string>('');
  const [country, setCountry] = useState<string>('');

  const navigation = useNavigation<NavigationProps>();

  const handleNavigation = (name: RouteNames) => {
    navigation.navigate(ReturnRouteNames(name))
  }

  const handleAddTrip = () => {
    if (place && country) {
      handleNavigation('Home');
    } else {

    }
  }

  return (
    <ScreenWrapper>
      <View className="flex justify-between h-full mx-4">
        <View>

          <View className="relative mt-5">
            <View className="absolute top-0 left-0">
              <BackButton />
            </View>
            <GlobalHeader headerName="Add Trip" children={undefined} textCenter={true} />
          </View>

          <View className="flex justify-center items-center my-3 mt-5">
            <Image source={assetSerialImages[4]} className="w-72 h-72" />
          </View>

          <View className="space-y-2 mx-2">
            <Text className={`${themeColors.headingColor} text-lg font-bold`}>Where On Earth?</Text>
            <TextInput value={place} onChangeText={value => setPlace(value)} className="p-4 bg-white rounded-xl mb-3" />
            <Text className={`${themeColors.headingColor} text-lg font-bold`}>Which Country?</Text>
            <TextInput value={country} onChangeText={value => setCountry(value)} className="p-4 bg-white rounded-xl mb-3" />
          </View>
        </View>

        <View>
          <TouchableOpacity
            style={{ backgroundColor: themeColors.buitonColor }}
            className="my-6 rounded-xl p-3 shadow-sm mx-2"
            onPress={handleAddTrip}
          >
            <Text className="text-center text-white text-lg font-bold">Add Trip</Text>
          </TouchableOpacity>
        </View>
      </View>


    </ScreenWrapper>
  )
}

export default AddTripsPage