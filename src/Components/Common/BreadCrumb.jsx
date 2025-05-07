import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import { withTranslation } from 'react-i18next';
import { IoHomeSharp } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa";

const BreadCrumb = ({ title, pageTitle, subtitle, t }) => {
    const navigate = useNavigate();
    return (
        <React.Fragment>
            <Row>
                <Col xs={12}>
                    <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                        <h4 className="mb-sm-0">{t(title)}</h4>

                        <div className="page-title-right">
                            <ol className="breadcrumb m-0">
                                <li className="breadcrumb-item">
                                    <Link to="/dashboard">
                                        <IoHomeSharp /> {t(pageTitle)}
                                    </Link>
                                </li>

                                {subtitle && (
                                    <>
                                        <li className="active" 
                                        onClick={() => {
                                            navigate(-1);
                                            setFile(null);
                                        }}
                                        style={{ cursor: "pointer" }}>

                                            <FaAngleRight />
                                            {t(subtitle)}
                                        </li>
                                        <li className="">
                                            <FaAngleRight />
                                            {t(title)}
                                        </li>
                                    </>
                                )}

                                {!subtitle && (
                                    <li className="active"  
                                      style={{ cursor: "pointer" }}>
                                        <FaAngleRight />
                                        {t(title)}
                                    </li>
                                )}
                            </ol>
                        </div>

                    </div>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default withTranslation()(BreadCrumb);
