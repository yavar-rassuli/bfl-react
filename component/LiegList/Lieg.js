import React from "react"
import { Button, TouchableOpacity } from "react-native";
import { Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StyledButton from "../StyledButton";



export default [

  {
    name: "BUNDESLIGA",
    tagline: "2020-2021",
    //taglineCTA={"Touchless Delivery"}
    image: require("../../assets/images/bS2.jpg"),
    button:
      <StyledButton
        content={"BundesLiga Tabelle"}
        onPress={() => Linking.openURL('https://www.google.com/search?q=bundesliga+tabelle+20%2F21&rlz=1C1PDZP_deCH921CH921&oq=bundesliga+table&aqs=chrome.4.69i57j0i10i433j0i10l8.10510j1j4&sourceid=chrome&ie=UTF-8#sie=lg;/g/11j34fws37;2;/m/037169;st;fp;1;;')} />

  },
  {
    name: "LALIGA",
    tagline: "2020-2021",
    //taglineCTA={"Touchless Delivery"}
    image: require("../../assets/images/LFP.jpg"),
    button:
      <StyledButton
        content={"Laliga Tabelle"}
        onPress={() => Linking.openURL('https://www.google.com/search?q=la+liga+tabelle&rlz=1C1PDZP_deCH921CH921&sxsrf=ALeKk01g0i5uXfWmQXwECdC2l7oxFyPK-w%3A1622635339510&ei=S3O3YPu7Hs2C9u8P0syQ-AE&oq=Lali+Tabelle&gs_lcp=Cgdnd3Mtd2l6EAEYADIICAAQBxAKEB4yBAgAEA0yCAgAEAcQChAeMggIABAHEAoQHjIICAAQBxAKEB4yCAgAEAcQChAeMggIABAHEAoQHjIICAAQBxAKEB4yCAgAEAcQChAeMggIABAHEAoQHjoHCCMQsAMQJzoHCAAQRxCwAzoGCAAQBxAeUNsgWJ8sYLA8aAFwAXgAgAFSiAHyApIBATWYAQCgAQGqAQdnd3Mtd2l6yAEJwAEB&sclient=gws-wiz#sie=lg;/g/11j0y2m458;2;/m/09gqx;st;fp;1;;')} />





  },
  {
    name: "PREMIER LEAGUE",
    tagline: "2020-2021",
    //taglineCTA={"Touchless Delivery"}
    image: require("../../assets/images/pL2.jpg"),
    button:
      <StyledButton
        content={"Premier leauge Tabelle"}
        onPress={() => Linking.openURL('https://www.google.com/search?q=Premier+leauge+Tabelle&rlz=1C1PDZP_deCH921CH921&sxsrf=ALeKk01g0i5uXfWmQXwECdC2l7oxFyPK-w%3A1622635339510&ei=S3O3YPu7Hs2C9u8P0syQ-AE&oq=Premier+leauge+Tabelle&gs_lcp=Cgdnd3Mtd2l6EAMyBwgAEEcQsAMyBwgAEEcQsAMyBwgAEEcQsAMyBwgAEEcQsAMyBwgAEEcQsAMyBwgAEEcQsAMyBwgAEEcQsAMyBwgAEEcQsANQAFgAYMo3aAFwAXgAgAFAiAFAkgEBMZgBAKoBB2d3cy13aXrIAQjAAQE&sclient=gws-wiz&ved=0ahUKEwi7jYvY8_jwAhVNgf0HHVImBB8Q4dUDCA4&uact=5#sie=lg;/g/11j4y8fvpd;2;/m/02_tc;st;fp;1;;')} />

  }
];
