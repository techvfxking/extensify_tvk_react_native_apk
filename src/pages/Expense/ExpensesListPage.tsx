import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View, Image, FlatList, ListRenderItem, ColorValue } from 'react-native';
import ScreenWrapper from '../../components/ScreenWrapper';
import { expenseSpecificTheme, themeColors } from '../../themes/Themes';
import { ExpensesModel } from '../../models/classes/Expenses.model';
import returnRandomImages, { assetSerialImages } from '../../utilities/RandomImages';
import GlobalHeader from '../../components/GlobalHeader';
import NoDataFound from '../../components/NoDataFound';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NavigationProps, RouteNames } from '../../models/types/CustomTypes.model';
import { ReturnRouteNames } from '../../routes/Routes';
import BackButton from '../../components/BackButton';

const ExpensesListPage = (): React.JSX.Element => {
    const [recentTripsArr, setRecentTripsArr] = useState<ExpensesModel[]>([]);

    useEffect(() => {
        const trips: Array<ExpensesModel> = [
            { id: 1, title: 'West Bengal 1', category: 'food', amount: 1 },
            { id: 2, title: 'West Bengal 2', category: 'commute', amount: 2 },
            { id: 3, title: 'West Bengal 3', category: 'shopping', amount: 3 },
            { id: 4, title: 'West Bengal 4', category: 'entertainment', amount: 4 },
            { id: 5, title: 'West Bengal 5', category: 'other', amount: 5 },
        ];
        setRecentTripsArr(trips);
    }, []);

    const navigation = useNavigation<NavigationProps>();
    const route = useRoute();
    const {id, place, country} = route.params as any || {}

    const handleNavigation = (name: RouteNames) => {
        navigation.navigate(ReturnRouteNames(name))
    }

    const RecentTripItem = React.memo(({ item }: { item: ExpensesModel }) => (
        <View style={{ backgroundColor: expenseSpecificTheme[item.category] }} className="flex-row justify-between items-center p-3 px-3 mb-3 rounded-2xl">
            <View>
                <View>
                    <Text className={`${themeColors.headingColor} font-bold`}>{item.title}</Text>
                    <Text className={`${themeColors.headingColor} text-xs`}>{item.category}</Text>
                </View>
            </View>
            <View>
                <Text>${item.amount}</Text>
            </View>
        </View>
    ));

    const renderRecentTrip: ListRenderItem<ExpensesModel> = ({ item }) => <RecentTripItem item={item} />;

    return (
        <ScreenWrapper className="flex-1">

            <View className="px-4">
                <View className="flex justify-between h-full mx-4">

                    <View className="relative mt-5">
                        <View className="absolute top-0 left-0">
                            <BackButton />
                        </View>
                        <GlobalHeader headerName={place} children={undefined} textCenter={true} />
                        <GlobalHeader headerName={country} customTextStyle='text-xs' children={undefined} textCenter={true} />
                    </View>


                    <View className="flex justify-center items-center  rounded-xl mb-4">
                        <Image source={assetSerialImages[7]} className="w-80 h-80" />
                    </View>

                    <View className="flex-1 space-y-3">
                        <View className="flex-row justify-between items-center mb-4">
                            <Text className={`${themeColors.headingColor} font-bold text-xl`}>Expenses</Text>
                            <TouchableOpacity onPress={() => handleNavigation('AddExpenses')} className="p-2 px-3 bg-white border border-gray-200 rounded-full">
                                <Text className={themeColors.headingColor}>Add Expense</Text>
                            </TouchableOpacity>
                        </View>
                        <FlatList
                            data={recentTripsArr}
                            ListEmptyComponent={<NoDataFound message='You have not recorded any expenses yet...' />}
                            renderItem={renderRecentTrip}
                            keyExtractor={(item) => item.id.toString()}
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={{
                                paddingBottom: 20,
                                flexGrow: recentTripsArr.length === 0 ? 1 : 0,
                            }}
                            className="mx-1 mb-1"
                        />
                    </View>

                </View>

            </View>
        </ScreenWrapper>
    );
};

export default ExpensesListPage;
