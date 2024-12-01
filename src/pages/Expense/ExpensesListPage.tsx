import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View, Image, FlatList, ListRenderItem } from 'react-native';
import ScreenWrapper from '../../components/ScreenWrapper';
import { themeColors } from '../../themes/Themes';
import { RecentTripsModel } from '../../models/classes/RecentTrips.model';
import returnRandomImages, { assetSerialImages } from '../../utilities/RandomImages';
import GlobalHeader from '../../components/GlobalHeader';
import NoDataFound from '../../components/NoDataFound';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps, RouteNames } from '../../models/types/CustomTypes.model';
import { ReturnRouteNames } from '../../routes/Routes';
import BackButton from '../../components/BackButton';

const ExpensesListPage = (): React.JSX.Element => {
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

    const handleNavigation = (name: RouteNames) => {
        navigation.navigate(ReturnRouteNames(name))
    }

    const RecentTripItem = React.memo(({ item }: { item: RecentTripsModel }) => (
        <TouchableOpacity onPress={() => handleNavigation('AddExpenses')} className="bg-white p-3 rounded-2xl mb-3 shadow-sm">
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

            <View className="flex justify-between h-full mx-4">
                <View>
                    <View className="relative mt-5">
                        <View className="absolute top-0 left-0">
                            <BackButton />
                        </View>
                        <GlobalHeader headerName="Expenses" children={undefined} textCenter={true} />
                    </View>
                </View>


                <View className="flex justify-center items-center  rounded-xl mx-4 mb-4">
                    <Image source={assetSerialImages[7]} className="w-80 h-80" />
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

            </View>

        </ScreenWrapper>
    );
};

export default ExpensesListPage;
