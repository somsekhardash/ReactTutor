import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import card from "../component/card";
import * as actions from "../actions/wordAction";

const mapStateToProps = (state) => {
    return {
         state: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        //addWord: bindActionCreators(actions, dispatch)
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, 
                    mapDispatchToProps) (card)