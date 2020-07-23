import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import commoStyles from '../commonStyles'
import moment from 'moment'
import 'moment/locale/pt-br'



export default props => {

	const doneStyle = props.doneAt !== null ? {
		textDecorationLine: 'line-through'
	} : {}

	const date = props.doneAt !== null ? props.doneAt : props.estimateAt
	const formattedDate = moment(date).locale('pt-br').format('ddd, D [de] MMMM')

	return (
		<View style={styles.container}>
			<View style={styles.checkContainer}>
				{getCheckView(props.doneAt)}
			</View>
			<View>
				<Text style={[styles.desc, doneStyle]}>{props.desc}</Text>
				<Text style={styles.date}>{formattedDate + ""}</Text>
			</View>
		</View>
	)
}

function getCheckView(doneAt) {

	if (doneAt != null) {
		return (
			<View style={styles.done}>
				<Icon name='check' size={20} color={commoStyles.colors.secondary} />
			</View>
		)
	}
	else {
		return (
			<View style={styles.pending}></View>
		)
	}

}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		borderColor: '#aaa',
		borderBottomWidth: 1,
		alignItems: 'center',
		paddingVertical: 10
	},
	checkContainer: {
		width: '20%',
		alignItems: "center",
		justifyContent: 'center'
	},
	pending: {
		height: 25,
		width: 25,
		borderRadius: 13,
		borderWidth: 1,
		borderColor: '#555'
	},
	done: {
		height: 25,
		width: 25,
		borderRadius: 13,
		borderWidth: 1,
		backgroundColor: '#4b7031',
		alignItems: 'center',
		justifyContent: 'center'
	},
	desc: {
		fontFamily: commoStyles.fontFamily,
		color: commoStyles.colors.mainText,
		fontSize: 15,
	},
	date: {
		fontFamily: commoStyles.fontFamily,
		color: commoStyles.colors.subText,
		fontSize: 12
	}

});