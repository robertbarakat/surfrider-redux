import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import imgReputation from '../img/reputation.jpg';
import imgAction from '../img/action.jpg';
import imgBenevole from '../img/benevole.jpg';
import imgLoi from '../img/loi.jpg';
import imgNettoyage from '../img/nettoyage.jpg';
import imgTri from '../img/centre_tri.jpg';
import './Game.css';

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            time: 0,
            déchets: 0,
            déchetseconde: 206000,
            ramasseseconde: 0,
            réputation: 0,
            réputationseconde: 0,
            nbrBenevoles: 0,
            coutBenevole: 20,
            coeffBenevole: 1.1,
            nbrNettoyage: 0,
            coutNettoyage: 100,
            coeffNettoyage: 1.1,
            nbrDéchetterie: 0,
            coutDéchetterie: 1000,
            coeffDéchetterie: 1.15,
            nbrLoi: 0,
            coutLoi: 3000,
            coeffLoi: 1.15,
            nbrAction: 0,
            coutAction: 10000,
            coeffAction: 1.25
        }
        this.increaseReputation = this.increaseReputation.bind(this);
        this.addBenevole = this.addBenevole.bind(this);
        this.addNettoyage = this.addNettoyage.bind(this);
        this.addDéchetterie = this.addDéchetterie.bind(this);
        this.addLoi = this.addLoi.bind(this);
        this.addAction = this.addAction.bind(this);
    }

    componentDidMount() {
        setInterval(
            () => this.setState({
                time: this.state.time + 1,
                déchets: this.state.déchets + this.state.déchetseconde - this.state.ramasseseconde,
                réputation: this.state.réputation + this.state.réputationseconde
            })
            , 1000);
    }

    increaseReputation() {
        this.setState({
            réputation: this.state.réputation + 1,
        })
    }

    addBenevole() {
        this.setState({
            réputation: this.state.réputation - this.state.coutBenevole,
            réputationseconde: this.state.réputationseconde + 1,
            ramasseseconde: this.state.ramasseseconde + 5,
            coutBenevole: Math.ceil(this.state.coutBenevole * this.state.coeffBenevole),
            nbrBenevoles: this.state.nbrBenevoles + 1
        });
    }

    addNettoyage() {
        this.setState({
            réputation: this.state.réputation - this.state.coutNettoyage,
            réputationseconde: this.state.réputationseconde + 3,
            ramasseseconde: this.state.ramasseseconde + 25,
            coutNettoyage: Math.ceil(this.state.coutNettoyage * this.state.coeffNettoyage),
            nbrNettoyage: this.state.nbrNettoyage + 1
        });
    }

    addDéchetterie() {
        this.setState({
            réputation: this.state.réputation - this.state.coutDéchetterie,
            réputationseconde: this.state.réputationseconde + 5,
            déchetseconde: this.state.déchetseconde - 1000,
            coutDéchetterie: Math.ceil(this.state.coutDéchetterie * this.state.coeffDéchetterie),
            nbrDéchetterie: this.state.nbrDéchetterie + 1
        });
    }

    addLoi() {
        this.setState({
            réputation: this.state.réputation - this.state.coutLoi,
            réputationseconde: this.state.réputationseconde + 10,
            déchetseconde: this.state.déchetseconde - 3000,
            coutLoi: Math.ceil(this.state.coutLoi * this.state.coeffLoi),
            nbrLoi: this.state.nbrLoi + 1
        });
    }

    addAction() {
        this.setState({
            réputation: this.state.réputation - this.state.coutAction,
            réputationseconde: this.state.réputationseconde + 25,
            déchetseconde: this.state.déchetseconde - 10000,
            coutAction: Math.ceil(this.state.coutAction * this.state.coeffAction),
            nbrAction: this.state.nbrAction + 1
        });
    }

    render() {
        const benevole = (this.state.réputation < this.state.coutBenevole) ? "disabled" : "enabled";

        const nettoyage = (this.state.réputation < this.state.coutNettoyage || this.state.nbrBenevoles < 1) ? "disabled" : "enabled";

        const déchetterie = (this.state.réputation < this.state.coutDéchetterie || this.state.nbrNettoyage < 1) ? "disabled" : "enabled";

        const loi = (this.state.réputation < this.state.coutLoi || this.state.nbrDéchetterie < 1) ? "disabled" : "enabled";

        const actionCitoyenne = (this.state.réputation < this.state.coutAction || this.state.nbrLoi < 1) ? "disabled" : "enabled";

        return (

            <Container className='mygame'>
                <Row>
                    <Col>
                        <h3><strong>Déchets dans les océans : {this.state.déchets}</strong></h3>
                    </Col>
                    <Col>
                        <h3><strong>Déchets rejetés / seconde : {this.state.déchetseconde}</strong></h3>
                    </Col>
                </Row>

                <Row className='justify-content-center game'>
                    <Col lg='3' md='3' sm='12'>
                        <h4 className="mt-2"><strong>Statistiques</strong></h4>
                        <p>Déchets ramassés / seconde : {this.state.ramasseseconde}</p>
                        <p>Prise de conscience : {this.state.réputation}</p>
                        <p>Conscience gagnée / seconde : {this.state.réputationseconde} </p>
                        <br />
                        <p>Nombre de bénévoles: {this.state.nbrBenevoles}</p>
                        <p>Nombre d'initiatives citoyennes: {this.state.nbrNettoyage}</p>
                        <p>Nombre de centres de recyclage: {this.state.nbrDéchetterie}</p>
                        <p>Nombre de lois approuvées: {this.state.nbrLoi}</p>
                        <p>Nombre d'actions citoyennes: {this.state.nbrAction}</p>
                    </Col>

                    <Col lg='6' md='6' sm='12' className='game-canvas'>
                        <div className="action mt-4 ml-5 mr-5">
                            <p><strong>1 prise de conscience</strong></p>
                            <img src={imgReputation} alt='' onClick={this.increaseReputation} className='img-fluid rounded-circle' width='65' />
                        </div>
                    </Col>

                    <Col lg='3' md='3' sm='12'>
                        <Row>
                            <Col>
                                <h4 className="mt-2"><strong>Store</strong></h4>
                            </Col>
                        </Row>
                        <Container fluid>
                            <Row>
                                <Col className="action">
                                    <p>1 bénévole <br /> Coût {this.state.coutBenevole}</p>
                                    <img src={imgBenevole} onClick={this.addBenevole} className={`img-fluid rounded-circle ${benevole}`} alt='' width='65' />
                                </Col>
                                <Col className="action">
                                    <p>1 initiative citoyenne <br /> Coût {this.state.coutNettoyage}</p>
                                    <img src={imgNettoyage} onClick={this.addNettoyage} className={`img-fluid rounded-circle ${nettoyage}`} alt='' width='65' />
                                </Col>
                            </Row>
                            <Row>
                                <Col className="action">
                                    <p>1 Centre de Recyclage <br /> Coût {this.state.coutDéchetterie}</p>
                                    <img src={imgTri} onClick={this.addDéchetterie} className={`img-fluid rounded-circle ${déchetterie}`} alt='' width='65' />
                                </Col>
                                <Col className="action">
                                    <p>Approuver 1 loi<br /> Coût {this.state.coutLoi}</p>
                                    <img src={imgLoi} onClick={this.addLoi} className={`img-fluid rounded-circle ${loi}`} alt='' width='65' />
                                </Col>
                            </Row>

                            <Row>
                                <Col className="action">
                                    <p>Lancez 1 action citoyenne <br /> Coût {this.state.coutAction} </p>
                                    <img src={imgAction} onClick={this.addAction} className={`img-fluid rounded-circle ${actionCitoyenne}`} alt='' width='65' />
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>


            </Container>
        );
    }
}


export default Counter;