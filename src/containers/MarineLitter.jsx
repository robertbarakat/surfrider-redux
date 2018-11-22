import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { modify, pointsConscience } from '../actions';
import { Container, Row, Col } from 'reactstrap';
import BtnConscience from './BtnConscience';
import BtnBenevole from './BtnBenevole';
import BtnInitiative from './BtnInitiative';
import BtnRecyclage from './BtnRecyclage';
import BtnLoi from './BtnLoi';
import './MarineLitter.css';
import BtnActionCitoyenne from './BtnActionCitoyenne';
import BtnTechno from './BtnTechno';

class MarineLitter extends Component {

  componentDidMount() {
    setInterval(() => this.props.modify(this.props.dechetsJetes - this.props.dechetsRamasses), 1000);

    setInterval(() => this.props.pointsConscience(this.props.ptsConscienceSec), 1000)
  }

  render() {
    return (
      <Container className='mygame'>
        <Row>
          <Col>
            <h3><strong>Déchets dans les océans : {this.props.dechetsOcean}</strong></h3>
          </Col>
          <Col>
            <h3><strong>Déchets rejetés / seconde : {this.props.dechetsJetes}</strong></h3>
          </Col>
        </Row>
        <Row className='justify-content-center game'>
          <Col lg='3' md='3' sm='12' className="bg-white-left">
            <h4 className="mt-2"><strong>Statistiques</strong></h4>
            <p>Déchets ramassés/seconde : {this.props.dechetsRamasses}</p>
            <p>Prise de conscience : {this.props.priseConscience}</p>
            <p>Conscience gagnée/seconde : {this.props.ptsConscienceSec} </p>
            <br />
            <p>Nbre de bénévoles: {this.props.nbrBenevoles}</p>
            <p>Nbre d'initiatives océanes: {this.props.nbrInitiatives} </p>
            <p>Nbre de centres de recyclage: {this.props.nbrRecyclages} </p>
            <p>Nbre de lois approuvées: {this.props.nbrLois}</p>
            <p>Nbre d'actions citoyennes: {this.props.nbrActionsCitoyennes}</p>
            <p>Nbre de technologies: {this.props.nbrTechnologies}</p>
          </Col>

          <Col lg='6' md='6' sm='12' className='game-canvas'>
            <BtnConscience />
          </Col>

          <Col lg='3' md='3' sm='12' className="border-sinistra">
            <Row className="bg-white-right mb-2">
              <Col>
                <h4 className="mt-2"><strong>Store</strong></h4>
              </Col>
            </Row>
            <Row className='mb-2'>
              <Col>
                <BtnBenevole />
              </Col>
              <Col>
                <BtnInitiative />
              </Col>
            </Row>
            <Row className='mb-2'>
              <Col>
                <BtnRecyclage />
              </Col>
              <Col>
                <BtnLoi />
              </Col>
            </Row>
            <Row>
              <Col>
                <BtnActionCitoyenne />
              </Col>
              <Col>
                <BtnTechno />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

function mstp(state) {
  return {
    dechetsOcean: state.dechetsOcean,
    dechetsJetes: state.dechetsJetes,
    dechetsRamasses: state.dechetsRamasses,
    priseConscience: state.priseConscience,
    ptsConscienceSec: state.ptsConscienceSec,
    nbrBenevoles: state.nbrBenevoles,
    nbrInitiatives: state.nbrInitiatives,
    nbrRecyclages: state.nbrRecyclages,
    nbrLois: state.nbrLois,
    nbrActionsCitoyennes: state.nbrActionsCitoyennes,
    nbrTechnologies: state.nbrTechnologies
  }
}

function mdtp(dispatch) {
  return bindActionCreators({ modify, pointsConscience }, dispatch)
}

export default connect(mstp, mdtp)(MarineLitter);