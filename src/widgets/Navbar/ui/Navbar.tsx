import {classNames} from "shared/lib/classNames";
import cls from './Navbar.module.scss'
import {Modal} from "shared/ui/Modal/Modal";
import {useTranslation} from "react-i18next";
import Button, {ButtonTheme} from "shared/ui/Button/Button";
import {useCallback, useState} from "react";

interface NavbarProps {
    className?: string;
}

const Navbar = ({className}: NavbarProps) => {
   const {t} = useTranslation();
   const [isAuthModal, setIsAuthModal] = useState<boolean>(false);

   const onToggleModal = useCallback(() => {
     setIsAuthModal((prev) => !prev);
   }, [])

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button theme={ButtonTheme.CLEAR_INVERTED}
                    className={cls.links}
            onClick={onToggleModal}>
                {t('Войти')}
       </Button>
            <Modal
                isOpen={isAuthModal}
                onClose={onToggleModal}>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
            </Modal>
        </div>
    );
};


export default Navbar;
