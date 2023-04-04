import PropTypes from 'prop-types';

export function ShowServerConfig(){

    return(
        <div>

        </div>
    )
}

ShowServerConfig.propTypes = {
    config : PropTypes.shape({
        minConnections: PropTypes.number,
        maxConnections: PropTypes.number,
        restartAlways: PropTypes.bool,
    }),
    environment :PropTypes.oneOf(['dev','play','live']),

    SSL: PropTypes.any.isRequired,
}