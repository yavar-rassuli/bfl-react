import React from "react"
import { View, Text, StyleSheet } from "react-native"
import Appp from "../LiegList";
import Header from "../Header";

const Premier = props => {
    return (


        <View>
            <Header />

            <Text style={styles.baseText}>
                Die Premier League (außerhalb Englands auch English Premier League oder EPL) ist die höchste Spielklasse im englischen Fußball und
                befindet
                sich damit auf der obersten Ebene des englischen Ligasystems. Derzeit nehmen 20 Vereine an einer Spielrunde, die zwischen August und
                Mai
                des Folgejahres ausgetragen wird, teil. Über eine Auf- und Abstiegsregelung mit dem darunter angesiedelten Football-League-Verband
                findet
                jährlich nach Ende der Saison ein Austausch von drei Klubs statt.

                Die am 20. Februar 1992 als „FA Premier League“ gegründete Spielklasse nahm am 15. August desselben Jahres offiziell ihren Spielbetrieb auf.
                Die Vereine der damaligen Eliteliga First Division profitierten damit erheblich von deutlich erhöhten Fernseheinnahmen und spalteten sich
                von der Football League ab, die selbst damit die seit 1888 bestehende Vorherrschaft als Plattform für den englischen und walisischen
                Spitzenfußball verlor. Die Premier League hat sich seitdem zu der Sportliga mit der weltweit höchsten Zuschaueranzahl entwickelt.[1]
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
export default Premier;