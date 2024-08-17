export interface IContextMenu {
	name: number;
	onOpen?: () => void;
	onClose?: () => void;
	condition?: any;
	menu: IContextComponent[];
}

export interface IContextComponent {
	id: number;
	icon?: string;
	text?: string;
	condition?: any;
	onClick?: () => void;
}
