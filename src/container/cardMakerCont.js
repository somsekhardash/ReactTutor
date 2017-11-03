import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import cardMaker from "../component/CardMaker";
import * as actions from "../actions/wordAction";

const mapStateToProps = (state) => {
    return {
         state: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addWord: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, 
                    mapDispatchToProps) (cardMaker)