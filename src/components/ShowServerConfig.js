import PropTypes from 'prop-types';

export function ShowServerConfig(){

    return(
        <div>

        </div>
    )
}

ShowServerConfig.propTypes = {
    config : PropTypes.shape({
        minConnections: PropTypes.number.isRequired,
        maxConnections: PropTypes.number.isRequired,
        restartAlways: PropTypes.bool.isRequired,
    }),
    environment :PropTypes.oneOf(['dev','play','live']).isRequired,

    SSL: (props, propName,componentName) => {
        if(props.environment === "live"){
            return PropTypes.any.isRequired;
        }
    }
}