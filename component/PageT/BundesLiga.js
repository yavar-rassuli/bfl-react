import React from "react"
import { View, Text, StyleSheet } from "react-native"
import Header from "../Header";

const Bundesliga = props => {
    return (


        <View>
            <Header />



            <Text style={styles.baseText}>
                Die Fußball-Bundesliga (zur Abgrenzung von der 2. Fußball-Bundesliga bisweilen auch als 1. Fußball-Bundesliga bezeichnet) ist
                die höchste Spielklasse im deutschen Fußball der Männer. In der Bundesliga werden im Ligasystem, bei dem jeder Verein in Hin- und
                Rückspielen gegen jeden anderen Verein antritt, der deutsche Fußballmeister, die Teilnehmer der Europapokalwettbewerbe sowie
                die Absteiger ausgespielt: Die nach dem letzten Spieltag auf Tabellenplatz 1 stehende Mannschaft ist deutscher Fußballmeister;
                die letzten beiden Mannschaften steigen in die 2. Bundesliga ab, die seit 1974 die zweithöchste Spielklasse unterhalb
                der Bundesliga bildet. Die drittletzte Mannschaft bestreitet Relegationsspiele gegen den Zweitliga-Dritten.

                Die Bundesliga wurde nach dem Beschluss des Deutschen Fußball-Bundes (DFB) am 28. Juli 1962 in Dortmund zur Saison 1963/64
                eingeführt; zuvor wurde der deutsche Fußballmeister vom DFB in einer Endrunde mit Endspiel ermittelt.

                Rekordmeister der Bundesliga und der deutschen Meisterschaft ist der amtierende Meister FC Bayern München mit 30 (Bundesliga)
                bzw. 31 Titeln (gesamt).

                Die Spielzeit der abgelaufenen Saison 2020/21 startete am 18. September 2020 mit dem 8:0-Auftaktsieg (höchster Auftaktsieg in
                der Bundesliga überhaupt) des FC Bayern München über den FC Schalke 04, in der Münchner Allianz-Arena.[1] Die Saison wurde
                wegen der COVID-19-Pandemie in Deutschland verspätet begonnen.
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

export default Bundesliga;