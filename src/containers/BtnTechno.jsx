import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTechnologie } from '../actions';
import imgTechno from '../img/techno.jpg';

class BtnTechno extends Component {

    render() {
        const cssTechno = (this.props.priseConscience < this.props.coutTechnologie || this.props.nbrActionsCitoyennes < 1) ? 'disabled' : 'enabled';
        return (
            <div>
                <button className={`${cssTechno}`} onClick={() => this.props.addTechnologie(this.props.coutTechnologie)}>
                    +1 Avancée Technologique <br />
                    <img src={imgTechno} alt='' width='45' /><br />
                    Coût: {this.props.coutTechnologie}
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
        nbrActionsCitoyennes: state.nbrActionsCitoyennes,
        coutTechnologie: state.coutTechnologie
    }
}

function mdtp(dispatch) {
    return bindActionCreators({ addTechnologie }, dispatch)
}

export default connect(mstp, mdtp)(BtnTechno);