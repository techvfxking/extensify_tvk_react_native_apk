import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View, Image, FlatList, ListRenderItem } from 'react-native';
import ScreenWrapper from '../../components/ScreenWrapper';
import bannerPng from '../../assets/images/banner.png';
import { themeColors } from '../../themes/Themes';
import { RecentTripsModel } from '../../models/classes/RecentTrips.model';
import returnRandomImages from '../../utilities/RandomImages';
import GlobalHeader from '../../components/GlobalHeader';
import NoDataFound from '../../components/NoDataFound';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps, RouteNames } from '../../models/types/CustomTypes.model';
import { ReturnRouteNames } from '../../routes/Routes';

const HomePage = (): React.JSX.Element => {
    const [recentTripsArr, setRecentTripsArr] = useState<RecentTripsModel[]>([]);

    useEffect(() => {
        const trips: Array<RecentTripsModel> = [
            { id: 1, place: 'West Bengal 1', country: 'India 1' },
            { id: 2, place: 'West Bengal 2', country: 'India 2' },
            { id: 3, place: 'West Bengal 3', country: 'India 3' },
            { id: 4, place: 'West Bengal 4', country: 'India 4' },
        ];
        setRecentTripsArr(trips);
    }, []);

    const navigation = useNavigation<NavigationProps>();

    const handleNavigation = (name: RouteNames, item: any = undefined) => {
        navigation.navigate(ReturnRouteNames(name),{...item})
    }

    const RecentTripItem = React.memo(({ item }: { item: RecentTripsModel }) => (
        <TouchableOpacity onPress={() => handleNavigation('ExpensesList',{...item})} className="bg-white p-3 rounded-2xl mb-3 shadow-sm">
            <View>
                <Image source={returnRandomImages()} className="w-36 h-36 mb-2" />
                <Text className={`${themeColors.headingColor} font-bold`}>{item.place}</Text>
                <Text className={`${themeColors.headingColor} text-xs`}>{item.country}</Text>
            </View>
        </TouchableOpacity>
    ));

    const renderRecentTrip: ListRenderItem<RecentTripsModel> = ({ item }) => <RecentTripItem item={item} />;

    return (
        <ScreenWrapper className="flex-1">

            <View className="flex-row justify-between items-center p-4">
                <GlobalHeader headerName="Extensify" children={undefined} />
                <TouchableOpacity className="p-2 px-3 bg-white border border-gray-200 rounded-full">
                    <Text className={themeColors.headingColor}>Logout</Text>
                </TouchableOpacity>
            </View>

            <View className="flex justify-center items-center bg-blue-200 rounded-xl mx-4 mb-4">
                <Image source={bannerPng} className="w-60 h-60" />
            </View>

            <View className="flex-1 px-4 space-y-3">
                <View className="flex-row justify-between items-center mb-4">
                    <Text className={`${themeColors.headingColor} font-bold text-xl`}>Recent Trips</Text>
                    <TouchableOpacity onPress={() => handleNavigation('AddTrips')} className="p-2 px-3 bg-white border border-gray-200 rounded-full">
                        <Text className={themeColors.headingColor}>Add Trip</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={recentTripsArr}
                    ListEmptyComponent={<NoDataFound message='You have not recorded any trips yet...' />}
                    renderItem={renderRecentTrip}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    columnWrapperStyle={{ justifyContent: 'space-evenly' }}
                    contentContainerStyle={{
                        paddingBottom: 20,
                        flexGrow: recentTripsArr.length === 0 ? 1 : 0,
                    }}
                    className="mx-1 mb-1"
                />
            </View>

        </ScreenWrapper>
    );
};

export default HomePage;
