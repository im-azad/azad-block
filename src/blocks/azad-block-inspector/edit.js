/**
 * Retrieves the translation of text.
 *
 */
import { __ } from "@wordpress/i18n";

import {
	CheckboxControl,
	RadioControl,
	TextControl,
	ToggleControl,
	SelectControl,
	PanelBody,
} from '@wordpress/components';
import {
	RichText,
	InspectorControls,
	useBlockProps,
} from '@wordpress/block-editor';


import "./editor.scss";


export default function Edit({ attributes, setAttributes }) {
	const {
		content,
		checkboxField,
		radioField,
		textField,
		toggleField,
		selectField,
	} = attributes;
	const blockProps = useBlockProps();
	function onChangeContent( newContent ) {
		setAttributes( { content: newContent } );
	}

	function onChangeCheckboxField( newValue ) {
		setAttributes( { checkboxField: newValue } );
	}

	function onChangeRadioField( newValue ) {
		setAttributes( { radioField: newValue } );
	}

	function onChangeTextField( newValue ) {
		setAttributes( { textField: newValue } );
	}

	function onChangeToggleField( newValue ) {
		setAttributes( { toggleField: newValue } );
	}

	function onChangeSelectField( newValue ) {
		setAttributes( { selectField: newValue } );
	}

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Settings' ) }>
					<CheckboxControl
						__nextHasNoMarginBottom
						heading="Checkbox Field"
						label="Tick Me"
						help="Additional help text"
						checked={ checkboxField }
						onChange={ onChangeCheckboxField }
					/>

					<RadioControl
						label="Radio Field"
						selected={ radioField }
						options={ [
							{ label: 'Yes', value: 'yes' },
							{ label: 'No', value: 'no' },
						] }
						onChange={ onChangeRadioField }
					/>

					<TextControl
						__nextHasNoMarginBottom
						label="Text Field"
						help="Additional help text"
						value={ textField }
						onChange={ onChangeTextField }
					/>

					<ToggleControl
						__nextHasNoMarginBottom
						label="Toggle Field"
						checked={ toggleField }
						onChange={ onChangeToggleField }
					/>

					<SelectControl
						__nextHasNoMarginBottom
						label="Select Control"
						value={ selectField }
						options={ [
							{ value: 'a', label: 'Option A' },
							{ value: 'b', label: 'Option B' },
							{ value: 'c', label: 'Option C' },
						] }
						onChange={ onChangeSelectField }
					/>
				</PanelBody>
			</InspectorControls>

			<RichText
				{ ...blockProps }
				key="editable"
				tagName="p"
				onChange={ onChangeContent }
				value={ content }
			/>
		</>
	);
}
