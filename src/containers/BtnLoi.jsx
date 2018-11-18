import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addLoi } from '../actions';
import imgLoi from '../img/loi.jpg';

class BtnLoi extends Component {

    render() {
        const cssLoi = (this.props.priseConscience < this.props.coutLoi || this.props.nbrRecyclages < 1) ? 'disabled' : 'enabled';
        return (
            <div>
                <button className={`${cssLoi}`} onClick={() => this.props.addLoi(this.props.coutLoi)}>
                    +1 Action législative <br />
                    <img src={imgLoi} alt='' width='45' /><br />
                    Coût: {this.props.coutLoi}
                </button>
            </div>
        );
    }
}

function mstp(state) {
    // pour utiliser une fonction modifiant dechetsJetes je dois importer dechetsJetes 
    return {
        dechetsJetes: state.dechetsJetes,
        priseConscience: state.priseConscience,
        ptsConscienceSec: state.ptsConscienceSec,
        nbrRecyclages: state.nbrRecyclages,
        coutLoi: state.coutLoi
    }
}

function mdtp(dispatch) {
    return bindActionCreators({ addLoi }, dispatch)
}

export default connect(mstp, mdtp)(BtnLoi);