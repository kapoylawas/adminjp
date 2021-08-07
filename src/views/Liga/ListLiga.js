import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, CardBody, CardHeader, CardTitle, Col, Row, Table, Button, Spinner } from 'reactstrap'
import { getListLiga } from 'actions/LigaAction'

class ListLiga extends Component {

    componentDidMount() {
        this.props.dispatch(getListLiga());
    }
     
    render() {
        const {getListLigaError, getListLigaLoading, getListLigaResult} = this.props
        return (
            <div className="content">
                <Row>
                    <Col md="12">
                        <Card>
                            <CardHeader>
                                <CardTitle tag="h4">Master Liga</CardTitle>
                            </CardHeader>
                            <CardBody>
                                <Table>
                                    <thead className="text-primary">
                                        <tr>
                                            <th>Logo</th>
                                            <th>Nama Liga</th>
                                            <th>Aksi</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {getListLigaResult ? (
                                            Object.keys(getListLigaResult).map((key) => (
                                            //data tampil
                                            <tr key={key}>
                                                <td>
                                                    <img 
                                                    src={getListLigaResult[key].image} width="100" 
                                                    alt={getListLigaResult[key].namaLiga}
                                                    />
                                                </td>
                                                <td>{getListLigaResult[key].namaLiga}</td>
                                                <td>
                                                    <Button color="warning">
                                                       <i className="nc-icon nc-ruler-pencil"></i> Edit
                                                    </Button>

                                                    <Button color="danger" className="ml-2">
                                                       <i className="nc-icon nc-basket"></i> Hapus
                                                    </Button>
                                                </td>
                                            </tr>
                                            ))
                                        ) : getListLigaLoading ? (
                                            //spinner loading
                                            <tr>
                                                <td colSpan="3" align="center">
                                                    <Spinner color="primary" />
                                                </td>
                                            </tr>
                                        ) : getListLigaError ? (
                                            //error tampil
                                            <tr>
                                                <td colSpan="3" align="center">
                                                    {getListLigaError}
                                                </td>
                                            </tr>
                                        ) : (
                                            <tr>
                                                <td colSpan="3" align="center">Data Kosong</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </Table>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    getListLigaLoading: state.LigaReducer.getListLigaLoading,
    getListLigaResult: state.LigaReducer.getListLigaResult,
    getListLigaError: state.LigaReducer.getListLigaError,
})

export default connect(mapStateToProps, null)(ListLiga)
