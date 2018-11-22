import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addInitiative } from '../actions';
import imgNettoyage from '../img/nettoyage.jpg';

class BtnInitiative extends Component {

    render() {
        const cssInitiative = (this.props.priseConscience < this.props.coutInitiative || this.props.nbrBenevoles < 1) ? 'disabled' : 'enabled';
        return (
            <div>
                <button className={`${cssInitiative}`} onClick={() => this.props.addInitiative(this.props.coutInitiative)}>
                    +1 Initiative océane <br />
                    <img src={imgNettoyage} alt='' width='45' /><br />
                    Coût: {this.props.coutInitiative}
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
        nbrBenevoles: state.nbrBenevoles,
        coutInitiative: state.coutInitiative
    }
}

function mdtp(dispatch) {
    return bindActionCreators({ addInitiative }, dispatch)
}

export default connect(mstp, mdtp)(BtnInitiative);