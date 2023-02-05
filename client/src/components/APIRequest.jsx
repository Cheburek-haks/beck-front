import React from "react";
import axios from "axios";

const APIRequest = () => {
    const handleClickSendButton = async () => {
        const response = await axios({
            method: "GET",
            url: `http://localhost:8080/api/quality`,
            // data: { email: "islasdasd", password: "123" },
        });
        console.log(response);
    };
    return (
        <div className="d-flex justify-content-center">
            <div className="mt-4">
                <h1>Запрос на кнопку</h1>
                <button
                    onClick={handleClickSendButton}
                    className="btn btn-primary mt-3"
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default APIRequest;
