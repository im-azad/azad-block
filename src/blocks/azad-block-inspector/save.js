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

	return (
		<div { ...blockProps }>
			<RichText.Content value={ content } tagName="p" />

			<h2>Inspector Control Fields</h2>
			<ul>
				<li>Checkbox Field: { checkboxField }</li>
				<li>Radio Field: { radioField }</li>
				<li>Text Field: { textField }</li>
				<li>Toggle Field: { toggleField }</li>
				<li>Select Field: { selectField }</li>
			</ul>
		</div>
	);
};

