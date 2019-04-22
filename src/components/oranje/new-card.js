import { h, Component } from 'preact';
import getBrandStyle from '../../helpers/brand-styles-provider'

export default class NewCard extends Component {
	render({ brand }) {
		return (
			<div id="DIV_1" style={getBrandStyle(brand)}>
				<div id="DIV_2">
					<div id="DIV_3">
						<div id="DIV_4">
							<label for="ember945" id="LABEL_5">
								Card number
							</label>
							<input name="cardnumber" type="tel" maxlength="24" id="INPUT_6" />
						</div>
					</div>
				</div>
				<div id="DIV_7">
					<div id="DIV_8">
						
						<label for="ember949" id="LABEL_9">
							CVC
						</label>
						<input name="cvc-field" type="tel" maxlength="3" id="INPUT_10" />
						<label for="ember949" id="LABEL_11">
							<i id="I_12"></i>
						</label>
					</div><span id="SPAN_13"></span>
				</div>
				<div id="DIV_14">
					<div id="DIV_15">
						
						<label for="ember963" id="LABEL_16">
							Card holder
						</label>
						<input name="cardownername" type="text" id="INPUT_17" />
					</div>
				</div>
				<div id="DIV_18">
					<div id="DIV_19">
						<div id="DIV_20">
							<label for="ember851" id="LABEL_21">
								Month
							</label>
							<select name="exp-month" id="SELECT_22">
								<option value="1" id="OPTION_23">
									01
								</option> 
								<option value="2" id="OPTION_24">
									02
								</option> 
								<option value="3" id="OPTION_25">
									03
								</option> 
								<option value="4" id="OPTION_26">
									04
								</option> 
								<option value="5" id="OPTION_27">
									05
								</option> 
								<option value="6" id="OPTION_28">
									06
								</option> 
								<option value="7" id="OPTION_29">
									07
								</option> 
								<option value="8" id="OPTION_30">
									08
								</option> 
								<option value="9" id="OPTION_31">
									09
								</option> 
								<option value="10" id="OPTION_32">
									10
								</option> 
								<option value="11" id="OPTION_33">
									11
								</option> 
								<option value="12" id="OPTION_34">
									12
								</option>
							</select>
						<i id="I_35"></i>
						</div>
						<div id="DIV_36">
							
							<label for="ember878" id="LABEL_37">
								Year
							</label>
							<select name="exp-year" id="SELECT_38">
								<option value="2019" id="OPTION_39">
									2019
								</option> 
								<option value="2020" id="OPTION_40">
									2020
								</option> 
								<option value="2021" id="OPTION_41">
									2021
								</option> 
								<option value="2022" id="OPTION_42">
									2022
								</option> 
								<option value="2023" id="OPTION_43">
									2023
								</option> 
								<option value="2024" id="OPTION_44">
									2024
								</option> 
								<option value="2025" id="OPTION_45">
									2025
								</option> 
								<option value="2026" id="OPTION_46">
									2026
								</option> 
								<option value="2027" id="OPTION_47">
									2027
								</option> 
								<option value="2028" id="OPTION_48">
									2028
								</option> 
								<option value="2029" id="OPTION_49">
									2029
								</option>
							</select>
							<i id="I_50"></i>
						</div>
					</div>
				</div>
			</div>
		);
	}
}