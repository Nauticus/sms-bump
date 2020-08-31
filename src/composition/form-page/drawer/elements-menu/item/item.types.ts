interface ItemProps {
    onClick: ((event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void) | undefined;
    icon: JSX.Element;
    popUp?: JSX.Element;
    isActive: boolean;
}

export default ItemProps;
