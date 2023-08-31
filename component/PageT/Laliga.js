import React from "react"
import { View, Text, StyleSheet } from "react-native"
import Appp from "../LiegList";
import Header from "../Header";

const Laliga = props => {
    return (


        <View>
            <Header />

            <Text style={styles.baseText}>
                Die Primera División (deutsch Erste Division; Sponsorenname LaLiga Santander) ist die höchste spanische Fußballliga.
                Sie existiert seit der Saison 1929 und wird von der Liga Nacional de Fútbol Profesional (LFP) (bekannt als LaLiga[1],
                rechtlich Liga Nacional de Fútbol Profesional[2]) betrieben. Von 2008 bis 2016 trug die Liga den Sponsorennamen Liga BBVA.
                2016 wurde LaLiga Santander als neuer Namenssponsor der spanischen Fußballliga bestätigt, womit BBVA durch eine andere Bank
                ersetzt wurde.

                Nach der derzeitigen UEFA-Fünfjahreswertung haben Vereine aus dem spanischen Liga-Fußball in den letzten fünf Jahren die besten
                Ergebnisse in den europäischen Wettbewerben erzielt.
            </Text>


        </View>
    )
}
const styles = StyleSheet.create({
    baseText: {
        fontWeight: 'bold',
        fontSize: 13,
        marginTop: 120,
        marginLeft: 15,
        marginRight: 15,
        padding: 5
    },

});
export default Laliga;