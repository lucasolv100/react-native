import React, { Component } from 'react'
import { View, Text, ImageBackground, StyleSheet, Dimensions, FlatList } from 'react-native'

import todayImage from '../../assets/imgs/today.jpg'
import commomStyles from '../commonStyles'

import moment from 'moment'
import 'moment/locale/pt-br'

import Task from '../components/Task'

export default class TaskList extends Component {

	state = {
		tasks: [
			{
				id: Math.random(),
				desc: 'Comprar Livro',
				estimateAt: new Date(),
				doneAt: new Date(),
			},
			{
				id: Math.random(),
				desc: 'Ler Livro',
				estimateAt: new Date(),
				doneAt: null,
			},
		]
	}

	render() {
		const today = moment().locale('pt-br').format('ddd, D [de] MMMM');
		return (
			<View style={styles.container}>
				<ImageBackground style={styles.bg} source={todayImage}>
					<View style={styles.titleBar}>
						<Text style={styles.title}>Hoje</Text>
						<Text style={styles.subtitle}>{today}</Text>
					</View>
				</ImageBackground>
				<View style={styles.taskList}>
					<FlatList
						data={this.state.tasks}
						keyExtractor={item => `${item.id}`}
						renderItem={({ item }) => <Task {...item} />} />
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	bg: {
		flex: 3
	},
	taskList: {
		flex: 7
	},
	titleBar: {
		flex: 1,
		justifyContent: 'flex-end',
	},
	title: {
		fontFamily: commomStyles.fontFamily,
		color: commomStyles.colors.secondary,
		fontSize: 50,
		marginLeft: 20,
		marginBottom: 20
	},
	subtitle: {
		fontFamily: commomStyles.fontFamily,
		color: commomStyles.colors.secondary,
		fontSize: 20,
		marginLeft: 20,
		marginBottom: 30
	}
})