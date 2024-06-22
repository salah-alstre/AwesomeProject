import { StyleSheet, View, Button, Image, TouchableOpacity, Text } from 'react-native';
import React, { useEffect, useState } from "react";
import TheDropDown from '../compnent/TheDropDown';
import Popover from 'react-native-popover-view';
import DropDownHours  from '../compnent/DropDownHours ';
import DropPayment from '../compnent/DropPayment';
import { Details } from '../res/api/api'; // Import your API function

const DetailsScreen = (props) => {
   
    const item = props.route.params.Details;
    console.log(props.route.params.Details.name);

    const [details, setDetails] = useState(null);

    // Function to fetch details from the server
    const fetchDetailsFromServer = async () => {
        try {
            // Call your API function to fetch details
            const detailsResponse = await Details(item.id); // Assuming Details function accepts an ID
            console.log("Details from server:", detailsResponse);
            setDetails(detailsResponse); // Update details state with the response
        } catch (error) {
            console.error("Error fetching details:", error);
            // Handle error, show error message, etc.
        }
    };

    const onSbmitOrder = () =>{



      props.navigation.navigate('Done')
    }

    // Call fetchDetailsFromServer when the component mounts
    useEffect(() => {
        fetchDetailsFromServer();
    }, []);

    return (
        <View style={styles.Screen}>
            <Image source={{ uri: item.coverPhoto }} style={styles.coverPhoto} />
            <TheDropDown />
            <DropDownHours />
            <DropPayment />
            <View style={styles.log2}>
                <Button title="Done" onPress={onSbmitOrder} />
            </View>
            <View style={styles.icon}>
                {/* Your Popover components */}
                <Popover
                    from={(
                        <TouchableOpacity>
                            <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNqIU43tJGMAY7wm_igrq_d3tcPDHHl2o9Qw&usqp=CAU" }} style={styles.pop} />
                        </TouchableOpacity>
                    )}>
                    <Text> Shop owner number {'\n'}        055-243-1000  </Text>
                </Popover>

                <Popover
                    from={(
                        <TouchableOpacity>
                            <Image source={{ uri: "https://pbs.twimg.com/profile_images/1611472516920520705/gWLeDDCJ_400x400.jpg" }} style={styles.pop2} />
                        </TouchableOpacity>
                    )}>
                    <Text>      Shop location {'\n'}        tira.North.32   </Text>
                </Popover>


                <Popover
                    from={(
                        <TouchableOpacity>
                            <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQrrkvfjTGsT-s6OdaByQ-QzeoVvCTqKc8Hq9de0bLmw&s" }} style={styles.pop2} />
                        </TouchableOpacity>
                    )}>
                    <Text>          instagram {'\n'}    Code_Zone_college   </Text>
                </Popover>

                <Popover
                    from={(
                        <TouchableOpacity>
                            <Image source={{ uri: "https://cdn.iconscout.com/icon/premium/png-256-thumb/facebook-2752192-2285009.png?f=webp" }} style={styles.pop2} />
                        </TouchableOpacity>
                    )}>
                    <Text>      facebook  {'\n'}    Code_Zone   </Text>
                </Popover>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    Screen: {
        flex: 1,
        backgroundColor: "#4545",
        justifyContent: 'center',
        alignItems: 'center',

    },
    buttonst: {
        width: '80%',
        backgroundColor: '#F3D309',
        borderRadius: 25,

    },
    dayst: {
        width: '80%',
        backgroundColor: '#01FAB3',
        margin: 30,
        borderRadius: 25,
    },
    openst: {
        width: '80%',
        backgroundColor: "#1BD8D2",


    },
    log2: {
        margin: 30
    },
    coverPhoto: {
        width: '85%',
        height: 100,
        resizeMode: 'cover',
        margin: 30,
        borderRadius: 20,
    },
    pop: {
        width: 60,
        height: 60,
        borderRadius: 30,
        margin: 10,
        marginBottom: 20,
        borderRadius: 30,
        backgroundColor: "black",
        resizeMode: 'cover',

    },
    pop2: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginBottom: 20,
        margin: 10,
        borderRadius: 30,
        backgroundColor: "black",
        resizeMode: 'cover',
    },
    icon: {
        flexDirection: "row",
    },
});

export default DetailsScreen;
