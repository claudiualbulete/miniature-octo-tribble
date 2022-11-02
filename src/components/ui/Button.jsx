const skins = {
    dark: 'border bg-black text-white py-2 px-4 hover:animate-pulse rounded-md',
    primary: 'bg-blue-500 text-white py-2 px-4 hover:animate-pulse',
    outline: 'border py-2 px-4 hover:animate-pulse',
}

export const Button = ({ children, title, element, skin, ...props }) => {
    const Element = element || 'button';
    const classNames = skins[skin] || skins['dark'];

    return (
        <Element {...props} className={classNames} title={title}>
            {children}
        </Element>
    );
}
