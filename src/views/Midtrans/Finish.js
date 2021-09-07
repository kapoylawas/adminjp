import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Button,
  Spinner,
} from "reactstrap";
import Logo from "../../assets/img/logoUtama.svg";
import { updatePesanan } from "actions/PesananAction";

class Finish extends Component {
  constructor(props) {
    super(props);

    this.state = {
      order_id: "",
      transaction_status: "",
    };
  }

  componentDidMount() {
    // ?order_id=ORDER-101-1630842866&status_code=201&transaction_status=pending
    let search = window.location.search;
    let params = new URLSearchParams(search);

    const order_id = params.get("order_id");
    const transaction_status = params.get("transaction_status");

    if (order_id) {
      this.setState({
        order_id: order_id,
        transaction_status: transaction_status,
      });

      // masuk ke update status history
      this.props.dispatch(updatePesanan(order_id, transaction_status));
    }
  }

  toHistory = () => {
    window.ReactNativeWebview.postMessage('Selesai');
  }

  render() {
    const { order_id, transaction_status } = this.state;
    const { updateStatusLoading } = this.props;
    return (
      <Row className="justify-content-center mt-5">
        {updateStatusLoading ? (
          <Spinner color="primary" />
        ) : (
          <Col md="4" className="mt-5">
            <img src={Logo} className="rounded mx-auto d-block" alt="logo" />
            <Card>
              <CardHeader tag="h4" align="center">
                Selamat Transaksi Anda Selesai
              </CardHeader>
              <CardBody className="text-center">
                <p>
                  {transaction_status === "pending" &&
                    "Untuk Selanjutnya Harap Selesaikan Pembayarannya Jika Belum Bayar, dan silahkan update status pembayaran di Halaman History"}
                </p>
                <p>ORDER ID : {order_id}</p>
                <p>
                  STATUS TRANSAKSI :{" "}
                  {transaction_status === "settlement" ||
                  transaction_status === "capture"
                    ? "lunas"
                    : transaction_status}
                </p>

                <Button color="primary" type="submit" onClick={() => this.toHistory()}>
                  Lanjutkan
                </Button>
              </CardBody>
            </Card>
          </Col>
        )}
      </Row>
    );
  }
}

const mapStateToProps = (state) => ({
  updateStatusLoading: state.PesananReducer.updateStatusLoading,
});

export default connect(mapStateToProps, null)(Finish);
