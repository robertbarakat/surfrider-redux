import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addRecyclage } from '../actions';
import imgTri from '../img/centre_tri.jpg';

class BtnRecyclage extends Component {

    render() {
        const cssRecyclage = (this.props.priseConscience < this.props.coutRecyclage || this.props.nbrInitiatives < 1) ? 'disabled' : 'enabled';
        return (
            <div>
                <button className={`${cssRecyclage}`} onClick={() => this.props.addRecyclage(this.props.coutRecyclage)}>
                    +1 Centre de Recyclage <br />
                    <img src={imgTri} alt='' width='45' /><br />
                    Coût: {this.props.coutRecyclage}
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
        nbrInitiatives: state.nbrInitiatives,
        coutRecyclage: state.coutRecyclage
    }
}

function mdtp(dispatch) {
    return bindActionCreators({ addRecyclage }, dispatch)
}

export default connect(mstp, mdtp)(BtnRecyclage);