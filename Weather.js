import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {LinearGradient} from 'expo';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from "prop-types";

const weatherCases = {
    Rain: {
        colors: ['#00C6FB', "#005BEA"  ],
        title: "Hella raining",
        subtitle: "Look outside",
        icon: 'weather-rainy'
    },
    Clear:{
        colors: ['#FEF253', "#FF7300"  ],
        title: "Sunny AF",
        subtitle: "Gonna be hella hot tho",
        icon: 'weather-sunny'
    },
    Thunderstorm:{
        colors: ['#00ECBC', "#007ADF"  ],
        title: "Thunderstorm",
        subtitle: "Actually tho",
        icon: 'weather-lightning'
    },
    Clouds:{
        colors: ['#D7D2CC', "#304352"  ],
        title: "Clouds",
        subtitle: "Like cloud9 bro",
        icon: 'weather-cloudy'
    },
    Snow:{
        colors: ['#7DE2FC', "#B9B6E5"  ],
        title: "Cold af",
        subtitle: "Hi mr.snowman",
        icon: 'weather-snowy'
    },
    Drizzle:{
        colors: ['#89F7FE', "#66A6FF"  ],
        title: "Drizzle",
        subtitle: "It's like rain, but not",
        icon: 'weather-hail'
    },
    Haze:{
        colors: ['#89F7FE', "#66A6FF"  ],
        title: "Haze",
        subtitle: "IDK bro",
        icon: 'weather-windy'
    },
    Mist:{
        colors: ['#D7D2CC', "#304352"  ],
        title: "Mist!",
        subtitle: "Wtf is this silent hill?",
        icon: 'weather-fog'
    },
}

function Weather({ weatherName, temp }){
    return(
        <LinearGradient 
            colors={weatherCases[weatherName].colors} 
            style={styles.container}
        >
            <View style={styles.upper}>
                <MaterialCommunityIcons 
                color='white' 
                size={144} 
                name={weatherCases[weatherName].icon}
                />
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
                <Text style={styles.subtitle}>
                    {weatherCases[weatherName].subtitle}
                </Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp:  PropTypes.number.isRequired,
    weatherName: PropTypes.string.isRequired
};


export default Weather;

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    upper:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    temp:{
        fontSize: 38,
        backgroundColor: 'transparent',
        color: 'white',
        marginTop: 10
    },
    lower:{
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingLeft: 25
    },
    title:{
        fontSize: 38,
        backgroundColor: 'transparent',
        color: 'white',
        marginBottom: 10,
        fontWeight: '300'
        
    },
    subtitle:{
        fontSize: 24,
        backgroundColor: 'transparent',
        color: 'white',
        marginBottom: 24
    }
});
