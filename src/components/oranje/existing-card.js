import { h, Component } from 'preact';
import getBrandStyle from '../../helpers/brand-styles-provider'

export default class ExistingCard extends Component {
	state = {
		cvc: ""
	}

	updateCvc = (event) => {
		console.log('event received');
		this.setState({ cvc: "1" });
	}

	componentDidMount() {
		console.log('mounted');
		addEventListener('doabarrelrow', this.updateCvc);
	}

	render({ brand }) {
		return (
			<div id="DIV_1" style={getBrandStyle(brand)}>
				<div id="DIV_2">
					<div id="DIV_3">
						<label for="ember974" id="LABEL_4">
							CVC
						</label>
						<input name="cvc-field" type="tel" maxlength="3" id="INPUT_5" value={this.state.cvc}/>
						<label for="ember974" id="LABEL_6">
							<i id="I_7"></i>
						</label>
					</div><span id="SPAN_8"></span>
				</div>
				<div id="DIV_9">
					<div id="DIV_10">
						<div id="DIV_11">
							
							<label for="ember851" id="LABEL_12">
								Month
							</label>
							<select name="exp-month" id="SELECT_13">
								<option value="1" id="OPTION_14">
									01
								</option> 
								<option value="2" id="OPTION_15">
									02
								</option> 
								<option value="3" id="OPTION_16">
									03
								</option> 
								<option value="4" id="OPTION_17">
									04
								</option> 
								<option value="5" id="OPTION_18">
									05
								</option> 
								<option value="6" id="OPTION_19">
									06
								</option> 
								<option value="7" id="OPTION_20">
									07
								</option> 
								<option value="8" id="OPTION_21">
									08
								</option> 
								<option value="9" id="OPTION_22">
									09
								</option> 
								<option value="10" id="OPTION_23">
									10
								</option> 
								<option value="11" id="OPTION_24">
									11
								</option> 
								<option value="12" id="OPTION_25">
									12
								</option><i id="I_26"></i>
							</select>
						</div>
						<div id="DIV_27">
							<label for="ember878" id="LABEL_28">
								Year
							</label>
							<select name="exp-year" id="SELECT_29">
								<option value="2019" id="OPTION_30">
									2019
								</option> 
								<option value="2020" id="OPTION_31">
									2020
								</option> 
								<option value="2021" id="OPTION_32">
									2021
								</option> 
								<option value="2022" id="OPTION_33">
									2022
								</option> 
								<option value="2023" id="OPTION_34">
									2023
								</option> 
								<option value="2024" id="OPTION_35">
									2024
								</option> 
								<option value="2025" id="OPTION_36">
									2025
								</option> 
								<option value="2026" id="OPTION_37">
									2026
								</option> 
								<option value="2027" id="OPTION_38">
									2027
								</option> 
								<option value="2028" id="OPTION_39">
									2028
								</option> 
								<option value="2029" id="OPTION_40">
									2029
								</option><i id="I_41"></i>
							</select>
						</div>
					</div>
				</div>
			</div>
		);
	}
}