import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addActionCitoyenne } from '../actions';
import imgAction from '../img/action.jpg';

class BtnActionCitoyenne extends Component {

    render() {
        const cssActionCitoyenne = (this.props.priseConscience < this.props.coutActionCitoyenne || this.props.nbrLois < 1) ? 'disabled' : 'enabled';
        return (
            <div>
                <button className={`${cssActionCitoyenne}`} onClick={() => this.props.addActionCitoyenne(this.props.coutActionCitoyenne)}>
                    +1 Action Citoyenne <br />
                    <img src={imgAction} alt='' width='45' /><br />
                    Coût: {this.props.coutActionCitoyenne}
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
        nbrLois: state.nbrLois,
        coutActionCitoyenne: state.coutActionCitoyenne
    }
}

function mdtp(dispatch) {
    return bindActionCreators({ addActionCitoyenne }, dispatch)
}

export default connect(mstp, mdtp)(BtnActionCitoyenne);