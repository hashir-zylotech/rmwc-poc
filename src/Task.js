import React, { Component } from 'react';
import { Grid, GridCell } from '@rmwc/grid';
import { TextField } from '@rmwc/textfield';
import { Select } from '@rmwc/select';
import { Typography } from '@rmwc/typography';

class Tasks extends Component {
	state = {
		text: '',
		color: '',
	};
	handleChange = val => evt => {
		this.setState({ ...this.state, [val]: evt.target.value });
	};

	render() {
		const { text, color } = this.state;
		return (
			<Grid>
				<GridCell span={12}>
					<Typography tag="h1" use="headline4">
						A simple POC of RMWC
					</Typography>
				</GridCell>

				<GridCell span={12}>
					<TextField
						outlined
						label="Write Something here..."
						value={text}
						onChange={this.handleChange('text')}
					/>
					<p style={{ color: color }}>{text ? 'You are typing ' + text : ''}</p>
				</GridCell>
				<GridCell span={12}>
					<style>
						{`.mdc-select--focused: {
                            backgroundColor: red
                        }`}
					</style>
					<Select
						className="mdc-select--focused"
						outlined
						label="Select color"
						options={['Red', 'Green', 'Black']}
						style={{ width: '15em' }}
						onChange={this.handleChange('color')}
					/>
					<p style={{ color: color }}>{color ? 'You selected ' + color + ' color' : ''}</p>
				</GridCell>
			</Grid>
		);
	}
}

export default Tasks;
