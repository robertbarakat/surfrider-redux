import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addBenevole } from '../actions';
import imgBenevole from '../img/benevole.jpg';

class BtnBenevole extends Component {

    render() {
        const cssBenevole = (this.props.priseConscience < this.props.coutBenevole) ? 'disabled' : 'enabled';
        return (
            <div>
                <button className={`${cssBenevole}`} onClick={() => this.props.addBenevole(this.props.coutBenevole)}>
                    +1 activiste bénévole <br />
                    <img src={imgBenevole} alt='' width='45' /><br />
                    Coût: {this.props.coutBenevole}
                </button>
            </div>
        );
    }
}

function mstp(state) {
    // pour utiliser une fonction modifiant dechetsJetes je dois importer dechetsJetes 
    return {
        dechetsRamasses: state.dechetsRamasses,
        priseConscience: state.priseConscience,
        ptsConscienceSec: state.ptsConscienceSec,
        coutBenevole: state.coutBenevole
    }
}

function mdtp(dispatch) {
    return bindActionCreators({ addBenevole }, dispatch)
}

export default connect(mstp, mdtp)(BtnBenevole);