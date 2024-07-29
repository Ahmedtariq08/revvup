import { NavElement } from "@/constants/navigation";

interface NavMenuProps {
    navElements: NavElement[];
    showIcons: boolean;
    className: string;
}

export const NavMenu: React.FC<NavMenuProps> = ({ navElements, className }) => {
    const renderNavItem = (nav: NavElement, index: number) => {
        const IconComponent = nav.icon;
        return (
            <li key={`${nav.route}-${index}`}>
                {!nav.nestedElements ? (
                    <a href={nav.route}>
                        {IconComponent && (
                            <span>
                                <IconComponent />
                            </span>
                        )}
                        {nav.label}
                    </a>
                ) : (
                    <details>
                        <summary>
                            {IconComponent && (
                                <span>
                                    <IconComponent />
                                </span>
                            )}
                            {nav.label}
                        </summary>
                        <ul className="p-2">
                            {nav.nestedElements.map((el, idx) => renderNavItem(el, idx))}
                        </ul>
                    </details>
                )}
            </li>
        );
    };

    return (
        <ul className={className}>
            {navElements.map((nav, index) => renderNavItem(nav, index))}
        </ul>
    );
};
