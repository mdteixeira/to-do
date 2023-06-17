import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, onAdd }) => {
    return (
        <header className="header">
            <h1>Agenda de {title}</h1>
            <Button bgColor="springgreen" text="Add" onClick={onAdd} />
        </header>
    );
};

Header.defaultProps = {
    title: 'Compromissos',
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Header;
