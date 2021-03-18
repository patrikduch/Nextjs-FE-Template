import IStyledComponentProps from '@typescript/interfaces/shared/styled-components/IStyled-React-Component-Props';
import { useState } from 'react';
import styled from 'styled-components';
import LeftMenuBar from './LeftMenu-Bar';
import MainLayout from './Main-Layout';
import TopMenuBar from './TopMenu-Bar';

/**
 * @interface IProps Component`s props interface.
 */
interface IProps extends IStyledComponentProps { }

/**
 * @function MainLayout Encapsulation component that contains all necessary stylization for each admin page.
 * @param children  Nested content that can be passed into this encapsulation component.
 * @returns JSX designed content of administration.
 */
const MainContainer: React.FC<IProps> = ({ children, className }) => {
    const [drawerOpen, setDrawerOpen] = useState(true);

    const handleToggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (
        <div className={className}>
            <TopMenuBar />
            <LeftMenuBar drawerOpen={drawerOpen} handleToggleDrawer={handleToggleDrawer} />
            <MainLayout open={drawerOpen}>{children}</MainLayout>
        </div>
    );
};

export default styled(MainContainer)`
    display: flex;
`;