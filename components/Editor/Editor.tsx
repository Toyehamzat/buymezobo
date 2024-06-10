'use client';
import '@blocknote/core/fonts/inter.css';
import { useCreateBlockNote } from '@blocknote/react';
import { BlockNoteView } from '@blocknote/mantine';
import '@blocknote/mantine/style.css';
import { Block, filterSuggestionItems, insertOrUpdateBlock } from '@blocknote/core';
import { SetStateAction, useState } from 'react';

interface EditorProps {
	readOnly?: boolean;
	onEditorChange?: (value: any) => void;
	initialValues?: any;
	previewMode?: boolean;
}

export default function Editor({ initialValues, onEditorChange, previewMode = false, readOnly = false }: EditorProps) {
	console.log(initialValues);
	const onChange = async () => {
		const html = await editor.blocksToHTMLLossy(editor.document);
		//@ts-ignore
		if (onEditorChange) {
			onEditorChange(editor.document);
		}
	};

	const editor = useCreateBlockNote({
		initialContent: initialValues,
	});

	if (previewMode && !initialValues) {
		return null;
	}

	return <BlockNoteView editable={!readOnly} editor={editor} onChange={onChange} theme="light" className="p-0" />;
}