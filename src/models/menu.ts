export interface IMenuItem {
    id?: number
    icon?: string;
    title: string;
    url?: string;
    onClick?: () => void;
}


export interface IMenuProps {
    icon?:string
    items: IMenuItem[];
    isOpen?: boolean;
}

