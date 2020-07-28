import React from 'react'
import { View, Text, StyleSheet, Modal, TouchableWithoutFeedback, TouchableOpacity, TextInput, Platform } from 'react-native'
import commonStyles from '../commonStyles'
import DateTimePicker from '@react-native-community/datetimepicker'
import moment from 'moment'
import 'moment/locale/pt-br'


const initialState = { desc: '', date: new Date(), showDate: false }

export default class AddTask extends React.Component {

	state = { ...initialState }

	save = () => {
		const newTask = {
			...this.state
		}

		this.props.onSave && this.props.onSave(newTask)
		this.setState({ ...initialState });
	}


	getDatePicker = () => {
		let datePicker = <DateTimePicker
			value={this.state.date}
			onChange={(_, date) => this.setState({ date, showDate: false })}
			mode='date' />

		const dateSTR = moment(this.state.date).format('ddd, D [de] MMMM [de] YYYY')

		if (Platform.OS === 'android') {
			datePicker = (
				<View>
					<TouchableOpacity onPress={() => this.setState({ showDate: true })}>
						<Text style={styles.date}>
							{dateSTR}
						</Text>
					</TouchableOpacity>
					{this.state.showDate && datePicker}
				</View>
			)
		}

		return datePicker
	}

	render() {
		return (
			<Modal transparent={true} visible={this.props.isVisible} onRequestClose={this.props.onCancel} animationType='slide'>
				<TouchableWithoutFeedback onPress={this.props.onCancel}>
					<View style={styles.background}></View>
				</TouchableWithoutFeedback>
				<View style={styles.container}>
					<Text style={styles.header}>Nova Tarefa</Text>
					<TextInput style={styles.input} placeholder='Informe a Descrição...' value={this.state.desc} onChangeText={desc => this.setState({ desc })} />
					{this.getDatePicker()}
					<View style={styles.buttons}>
						<TouchableOpacity onPress={this.props.onCancel}>
							<Text style={styles.button}>Cancelar</Text>
						</TouchableOpacity>
						<TouchableOpacity onPress={this.save}>
							<Text style={styles.button}>Salvar</Text>
						</TouchableOpacity>
					</View>
				</View>
				<TouchableWithoutFeedback onPress={this.props.onCancel}>
					<View style={styles.background}></View>
				</TouchableWithoutFeedback>
			</Modal>
		)
	}
}

const styles = StyleSheet.create({
	background: {
		backgroundColor: 'rgba(0, 0, 0, 0.7)',
		flex: 1
	},
	container: {
		backgroundColor: '#fff'
	},
	header: {
		fontFamily: commonStyles.fontFamily,
		backgroundColor: commonStyles.colors.today,
		color: commonStyles.colors.secondary,
		textAlign: "center",
		padding: 15,
		fontSize: 18
	},
	input: {
		fontFamily: commonStyles.fontFamily,
		height: 40,
		marginTop: 10,
		marginLeft: 20,
		width: '90%',
		backgroundColor: '#fff',
		borderWidth: 1,
		borderColor: '#e3e3e3',
		borderRadius: 6
	},
	buttons: {
		flexDirection: 'row',
		justifyContent: 'flex-end'
	},
	button: {
		margin: 20,
		marginRight: 30,
		color: commonStyles.colors.today
	},
	date: {
		fontFamily: commonStyles.fontFamily,
		fontSize: 15,
		marginLeft: 20,
		marginTop: 15
	}
})