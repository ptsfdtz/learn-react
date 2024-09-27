import React from 'react';
import PropTypes from 'prop-types';

class Son extends React.Component {
    state = {
        sonMes: 'Hello'
    }
    render() {
        return <div>
            {this.props.mes}
            <button onClick={() => {
                this.props.changeMes(this.state.sonMes);
            }}>Change</button>
        </div>
    }
}

Son.propsType = {
    mes: PropTypes.string
}

Son.defaultProps = {
    mes: 'default message',
}
export default Son;