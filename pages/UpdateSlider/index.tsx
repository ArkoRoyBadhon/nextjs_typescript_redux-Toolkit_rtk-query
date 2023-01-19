import React, { useState } from 'react';
import { useSliderImggetQuery, useUpdateImageMutation } from '../../Components/Services/slideApi';
import Navbar from '../../Components/smallComponent/Navbar';
// import FormCompo from './FormCompo';

const index = () => {
    const [idValue, setIdValue] = useState("")
    const [linkValue, setLinkValue] = useState("")
    const [infoValue, setInfoValue] = useState("")

    const [updateImage] = useUpdateImageMutation()

    const { data, error, isLoading, isFetching, isSuccess } = useSliderImggetQuery()

    const varImgs: any = data
    // console.log("alldata",varImgs);
    // const kk = {varImg, idValue}


    const handleimgId = async (item: any) => {
        // alert(typeof item)
        console.log(linkValue);
        const id: any = item._id
        // const info: any = {
        //     id,

        // }
        // await updateImage(item.id)
        setIdValue(item.id)
        // console.log(idValue);
    }

    let AAA: any
    if (idValue && linkValue) {
        let primeId: any;
        if (parseInt(idValue) === 1) {
            primeId = "63c7cd392fbfc235f367b95e"
        }
        if (parseInt(idValue) === 2) {
            primeId = "63c7cd392fbfc235f367b95f"
        }
        if (parseInt(idValue) === 3) {
            primeId = "63c7cd392fbfc235f367b960"
        }
        AAA = {
            _id: primeId,
            idValue,
            linkValue
        }
        // setInfoValue(AAA)
        // console.log(info);

    }

    const handleUpdateForm = async (e: any) => {
        e.preventDefault();
        const form = e.target;
        const id = form.id.value;
        const link = form.link.value;
        const info: any = {
            id, link
        }
        if (AAA) {
            // setLinkValue(link)
            console.log(AAA);
            updateImage(AAA);
            // alert('done')
        } else {
            alert("please select a id")
        }
    }

    // let iitem: any;
    return (
        <div>
            <Navbar />
            {/* <h2>This is Slider update page</h2> */}
            <div className="max-w-screen-md mx-auto mt-10">
                <h2>Update the Slider Image according to its ID</h2>

                <div className="flex">
                    {
                        varImgs?.map((item: any) => <div key={item._id}>
                            <button onClick={() => handleimgId(item)} className='btn' >{item.id}</button>
                            <br />
                            {/* <FormCompo iitem={item._id}  /> */}
                        </div>)
                    }
                </div>
                <h4 className='my-5 text-xl font-bold'>Updating Form</h4>
                <form onSubmit={handleUpdateForm}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">ID</span>
                        </label>
                        <input onChange={(e: any) => setIdValue(e.target.value)} disabled type="text" placeholder="enter id for updating" className="input input-bordered w-full" value={idValue} name='id' />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Image Link</span>
                        </label>
                        <input onChange={(e: any) => setLinkValue(e.target.value)} type="text" placeholder="enter new image link" className="input input-bordered w-full" name='link' />
                    </div>

                    <div className="">
                        <input className='btn my-5' type="submit" value="update" />
                    </div>
                </form>

            </div>
        </div>
    );
};

export default index;