"use client"

import { useState, useEffect } from "react";
import { doLogin } from "@/services/Web3Service";

export default function Header() {

    const [wallet, setWallet] = useState("");

    useEffect(() => {
        setWallet(localStorage.getItem("wallet") || "");
    }, [])

    function btnLoginClick() {
        doLogin()
            .then(wallet => setWallet(wallet))
            .catch(err => {
                console.error(err);
                alert(err.message);
            })
    }

    return (
        <header className="p-3 text-bg-dark w-100 bg-success">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-between ps-5 pe-5 ms-3 me-3">
                    <a href="/" className="justify-content-start" style={{ textDecoration: "none" }}>
                        <h3 className="fw-bold text-light">Vaquinha Virtual Crypto (BNB)</h3>
                    </a>
                    <div className="text-end col-5">
                        {
                            wallet
                                ? <a href="/create" className="btn btn-warning">
                                    Criar Vaquinha
                                </a>
                                : <button type="button" className="btn btn-outline-light me-2" onClick={btnLoginClick}>
                                    <img src="/metamask.svg" width="24" className="me-3" />
                                    Entrar
                                </button>
                        }
                    </div>
                </div>
            </div>
        </header>
    )
}