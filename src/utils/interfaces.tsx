import React from 'react';

export interface IProject {
	_id?: string;
	coverImg?: string;
	desc?: string;
	github?: string;
	lastUpdated?: Date;
	live?: string;
	stacks?: [];
	screenshots?: [];
	title?: string;
	content?: string;
}

export interface IProjectCardProps {
	[key: string]: IProject;
}

export interface ICardCoverImgProps extends IProject {
	isOpen: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IDefaultProps {
	children?: React.ReactNode;
	className?: string;
}

export interface ILinkBtn
	extends IDefaultProps,
		React.HTMLProps<HTMLButtonElement> {}

export interface IContentModalProps extends ICardCoverImgProps, IProject {
	lastUpdated: Date;
}

export interface ILastUpdated extends React.HTMLProps<HTMLParagraphElement> {
	lastUpdated: Date;
}
