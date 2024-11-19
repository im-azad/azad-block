/**
 * Retrieves the translation of text.
 */

import {
	RichText,
	useBlockProps
} from '@wordpress/block-editor';

import "./editor.scss";


export default function Save({ attributes }) {
	const {
		content,
		checkboxField,
		radioField,
		textField,
		toggleField,
		selectField,
	} = attributes;
	const blockProps = useBlockProps.save();
	console.log("attributes", checkboxField,  toggleField);
	return (
		<div { ...blockProps }>
			<RichText.Content value={ content } tagName="p" />

			<h2>Inspector Control Fields</h2>
			<ul>
				<li>Checkbox Field: { checkboxField ? "checked" : "unchecked" }</li>
				<li>Radio Field: { radioField }</li>
				<li>Text Field: { textField }</li>
				<li>Toggle Field: { toggleField ? "true" : "false" }</li>
				<li>Select Field: { selectField }</li>
			</ul>
		</div>
	);
};

