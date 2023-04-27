import { useEffect } from 'react';
import { View, Text, ScrollView, Image, FlatList, Pressable } from 'react-native';
import { useSelector } from 'react-redux';
import { ToastAndroid } from 'react-native';


function Games() {
    const games = useSelector((state: any) => state.games);


    useEffect(() => {
        console.log("SSS", games)
    }, [])

    const handlePress = (title:Text) => {
        ToastAndroid.show(`You clicked on ${title}`, ToastAndroid.SHORT);
      };


    return (
        <View style={{ flex: 1, height: '100%', marginTop: 30 }}>

            <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}>Games List </Text>
            <FlatList
                data={Object.values(games)}
                keyExtractor={(game: any) => game.id.toString()}
                renderItem={({ item }: { item: any }) => (
                    <Pressable onPress={() => handlePress(item.title)}>

                        <View style={{ margin: 10, padding: 10, borderWidth: 0.3, borderRadius: 5 }}>
                            <Text>{item.title}</Text>
                            <Text>Publisher: {item.publisher}</Text>
                            <Text>Genre: {item.genre}</Text>
                            <Text>Status: {item.status}</Text>
                            <View style={{ alignSelf: "center", marginVertical: 10 }}>
                                {item.steamUrl === "" ? (
                                    <Text style={{ justifyContent: 'center', color: "red", textAlign: "center", marginVertical: 20, alignItems: "center" }}>No pic available</Text>
                                ) : (
                                    <Image source={{
                                        uri: `https://steamcdn-a.akamaihd.net/steam/apps/${item.steamUrl.split('/').pop()}/library_600x900_2x.jpg`,
                                    }} style={{ width: 200, height: 200 }} />
                                )}

                            </View>
                        </View>
                    </Pressable>
                )}
            />
        </View>
    );
}

export default Games;
