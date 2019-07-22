import { connect } from 'react-redux';

import Home from './home';

const mapStateToProps = (state) => {
    return {
        user: state.user
    }    
}

export default connect(mapStateToProps)(Home);