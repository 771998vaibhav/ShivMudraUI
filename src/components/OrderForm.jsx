import React, { useEffect, useRef, useState } from 'react'
import { register } from '../services/registration'
import Swal from 'sweetalert2'

const OrderForm = () => {





    const [data, setData] = useState({




        name: '',
        mobileNo: '',
        address: '',
        size: '',
        city: '',
        pincode: '',
        photo: {
            fileName: '',
            file: '',
            extension: '',
            url: ''
        }


    })


    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setData(prevState => ({
                    ...prevState,
                    photo: {
                        ...prevState.photo,
                        fileName: file.name,
                        url: reader.result.split(',')[1],
                        extension: file.name.split('.').pop(),
                        file: reader.result,
                    }
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    useEffect(() => {
        console.log(data)
    }, [data])
    const [error, setError] = useState({
        errors: {},
        isError: false
    })


    //Handle change---for changes in input area

    const handleChange = (event, property) => {

        //All data will set dynamically

        setData({ ...data, [property]: event.target.value }
        )
    }

    const fileInputRef = useRef(null);

    const submitForm = (event) => {
        event.preventDefault();
        console.log(data);

        register(data).then((resp) => {
            console.log(resp.data)
            if (resp.data.status === 200) {
                Swal.fire(resp.data.message);
                setData({
                    name: '',
                    mobileNo: '',
                    address: '',
                    size: '',
                    city: '',
                    pincode: '',
                    photo: {
                        fileName: '',
                        file: '',
                        extension: '',
                        url: ''
                    }
                });
                if (fileInputRef.current) {
                    fileInputRef.current.value = ''; // Reset the file input
                }
            }
            console.log("success log");
        }).catch((error) => {
            console.log(error)
        })
    }
    return (

        <div className="site-wrapper-reveal pt-5 pb-5">

            <div className="container">
                <div className="activities-content text-center">
                    <h5 className="text-danger fw-bold mb-2">Shivmudra Group, Faizpur</h5>
                    <h4 className="activities-title">Online Shivmudra Group T-Shirt Booking</h4>
                </div>
                <form
                    className="row g-3 d-flex justify-content-center"
                    method="post"
                    onSubmit={submitForm}

                    encType="multipart/form-data"
                //   onSubmit={submitForm} // <-- Change enctype to encType
                >
                    <div className="col-md-7">
                        <label htmlFor="inputname" className="form-label fw-bold">Full Name</label>
                        <input type="text" className="form-control" id="inputname" name="name" value={data.name} required onChange={(e) => handleChange(e, 'name')} />
                    </div>
                    <div className="col-md-7">
                        <label htmlFor="inputphone" className="form-label fw-bold">Phone No.</label>
                        <input type="number" className="form-control" id="inputphone" name="mobileNo" value={data.mobileNo} required onChange={(e) => handleChange(e, 'mobileNo')} />
                    </div>
                    <div className="col-md-7">
                        <label htmlFor="inputcity" className="form-label fw-bold">City</label>
                        <input type="text" className="form-control" id="inputcity" name="city" value={data.city} required onChange={(e) => handleChange(e, 'city')} />
                    </div>
                    <div className="col-md-7">
                        <label htmlFor="inputpincode" className="form-label fw-bold">Pincode</label>
                        <input type="text" className="form-control" id="inputpincode" name="pincode" value={data.pincode} required onChange={(e) => handleChange(e, 'pincode')} />
                    </div>
                    <div className="col-md-7">
                        <label htmlFor="inputaddress" className="form-label fw-bold">Address</label>
                        <input type="text" className="form-control" id="inputaddress" name="address" value={data.address} required onChange={(e) => handleChange(e, 'address')} />
                    </div>
                    <div className="col-md-7">
                        <label htmlFor="inputSize" className="form-label fw-bold">T-Shirt Size</label>
                        <select id="inputSize" className="form-select" name="size" value={data.size} required onChange={(e) => handleChange(e, 'size')}>
                            <option value="" disabled>Size</option>
                            <option value="20">20</option>
                            <option value="22">22</option>
                            <option value="24">24</option>
                            <option value="26">26</option>
                            <option value="28">28</option>
                            <option value="30">30</option>
                            <option value="32">32</option>
                            <option value="34">34</option>
                            <option value="36">36</option>
                            <option value="38">38</option>
                            <option value="40">40</option>
                            <option value="42">42</option>
                            <option value="44">44</option>
                            <option value="46">46</option>
                            <option value="48">48</option>
                        </select>
                    </div>
                    <div className="col-md-7">
                        <div className="header-btn text-center">
                            <img src="src/images/QRCode.png" className="w-50" alt="" /><br />
                        </div>
                        <div className="header-btn text-center mt-3">
                            <p style={{ color: "red", fontWeight: 'bold' }}>Disclaimer*</p>
                            <p style={{ color: "red", fontWeight: 'bold' }}>If you are not able to scan QR code, please find UPI Id below QR Code And Make Payment</p>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <label htmlFor="inputImage" className="form-label fw-bold w-100">Upload Payment Screenshot</label>
                        <input type="file" className="form-control" id="inputImage" name="image" ref={fileInputRef} onChange={handleFileChange} />
                    </div>
                    <div className="header-btn text-center mt-3">
                        <button className="btn-circle btn-default btn fw-bold w-50 bg-success" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default OrderForm
